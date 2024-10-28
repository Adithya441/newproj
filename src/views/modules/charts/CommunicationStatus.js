import React, { useState, useEffect } from 'react';
import ReactApexChart from 'react-apexcharts';
import { Modal, Button } from 'react-bootstrap';

const CommunicationStatus = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedData, setSelectedData] = useState(null);
  const [loading, setLoading] = useState(true); // Add loading state

  const tokenUrl = '/api/server3/UHES-0.0.1/oauth/token';
  const baseUrl = '/api/server3/UHES-0.0.1/WS/getcommunicationstatus?officeid=3459274e-f20f-4df8-a960-b10c5c228d3e';

  const fetchData = async () => {
    try {
      // Step 1: Authenticate and get the access token
      const tokenResponse = await fetch(tokenUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          grant_type: 'password',
          username: 'Admin',
          password: 'Admin@123',
          client_id: 'fooClientId',
          client_secret: 'secret',
        }),
      });

      if (!tokenResponse.ok) {
        throw new Error('Failed to authenticate');
      }

      const tokenData = await tokenResponse.json();
      const accessToken = tokenData.access_token;

      // Step 2: Use the access token to fetch data
      const dataResponse = await fetch(baseUrl, {
        headers: {
          'Authorization': `Bearer ${accessToken}`,
        },
      });

      if (!dataResponse.ok) {
        throw new Error('Failed to fetch data');
      }

      const responseData = await dataResponse.json();
      console.log(responseData);
      // Calculate total directly from responseData
      const total = responseData.ydata1.slice(0, 3).reduce((acc, curr) => acc + curr, 0);
      const series = responseData.ydata1.slice(0, 3);
      const labels = responseData.xData.slice(0, 3);

      // Set loading to false once data is fetched
      setLoading(false);

      // Return values to be used for chart rendering
      return { total, series, labels };
    } catch (err) {
      console.error(err.message); // Handle error as needed
      setLoading(false);
    }
  };

  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const data = await fetchData();
      if (data) {
        setChartData(data); // Set the chart data for rendering
      }
    };
    
    getData();
  }, []);

  // Render loading state
  if (loading) {
    return <p>Loading...</p>;
  }

  if (!chartData) {
    return <p>No data available.</p>;
  }

  const { total, series, labels } = chartData;

  const options = {
    chart: {
      type: 'donut',
      events: {
        dataPointSelection: (event, chartContext, config) => {
          const selectedLabel = labels[config.dataPointIndex];
          const selectedValue = series[config.dataPointIndex];
          const percentage = ((selectedValue / total) * 100).toFixed(2);
          setSelectedData({ label: selectedLabel, value: selectedValue, percentage });
          setShowModal(true);
        },
      },
    },
    labels: labels,
    colors: ['#68B984', '#DE6E56', '#619ED6'],
    plotOptions: {
      pie: {
        donut: {
          labels: {
            show: true,
            total: {
              show: true,
              label: 'Total',
              formatter: () => total.toString(),
            },
          },
        },
      },
    },
    dataLabels: {
      enabled: true,
      formatter: function (val, opts) {
        const value = opts.w.globals.seriesTotals[opts.seriesIndex];
        return ((value / total) * 100).toFixed(2) + '%';
      },
    },
    tooltip: {
      y: {
        formatter: function (val) {
          const percentage = ((val / total) * 100).toFixed(2);
          return `${val} (${percentage}%)`;
        },
      },
    },
    legend: {
      position: 'bottom',
    },
    title: {
      text: 'Meter Communication Status',
      align: 'center',
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 300,
          },
          legend: {
            position: 'bottom',
          },
        },
      },
    ],
  };

  const handleClose = () => setShowModal(false);

  return (
    <div className="container mx-auto p-4">
      <div className="w-full max-w-md mx-auto mb-8">
        <ReactApexChart
          options={options}
          series={series}
          type="donut"
          width="100%"
          height={350}
        />
      </div>

      <Modal show={showModal} onHide={handleClose} centered size="xl" style={{ height: "550px", marginLeft: '120px' }} className='mdl'>
        <Modal.Header closeButton>
          <Modal.Title>{selectedData?.label}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Count: {selectedData?.value}</p>
          <p>Percentage: {selectedData?.percentage}%</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default CommunicationStatus;
