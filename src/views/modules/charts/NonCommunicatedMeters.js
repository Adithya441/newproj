import React, { useState, useEffect } from 'react';
import ReactApexChart from 'react-apexcharts';
import { Modal, Button } from 'react-bootstrap';

const NonCommunicatedMeters = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedData, setSelectedData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [chartData, setChartData] = useState(null);

  const tokenUrl = '/api/server3/UHES-0.0.1/oauth/token';
  const baseUrl = '/api/server3/UHES-0.0.1/WS/getmeterCommunicationStatus?officeid=3459274e-f20f-4df8-a960-b10c5c228d3e';

  const fetchData = async () => {
    try {
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

      if (!tokenResponse.ok) throw new Error('Failed to authenticate');

      const { access_token: accessToken } = await tokenResponse.json();
      const dataResponse = await fetch(baseUrl, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      if (!dataResponse.ok) throw new Error('Failed to fetch data');

      const responseData = await dataResponse.json();
      
      // Directly set xData and yData for chart rendering
      const labels = responseData.xData;
      const series = responseData.yData;

      setChartData({ labels, series });
      setLoading(false);
    } catch (err) {
      console.error(err.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (!chartData) return <p>No data available.</p>;

  const { labels, series } = chartData;

  const options = {
    chart: {
      type: 'bar',
      events: {
        dataPointSelection: (event, chartContext, config) => {
          const selectedLabel = labels[config.dataPointIndex];
          const selectedValue = series[0].data[config.dataPointIndex];
          setSelectedData({ label: selectedLabel, value: selectedValue });
          setShowModal(true);
        },
      },
    },
    xaxis: {
      categories: labels,
    },
    colors: ['#619ED6'],
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '50%',
      },
    },
    dataLabels: {
      enabled: true,
      formatter: (val) => `${val}`,
    },
    tooltip: {
      y: {
        formatter: (val) => `${val} Meters`,
      },
    },
    title: {
      text: 'Not Communicated Meters',
      align: 'center',
    },
    legend: {
      position: 'bottom',
    },
  };

  const handleClose = () => setShowModal(false);

  return (
    <div className="container mx-auto p-4">
      <div className="w-full max-w-md mx-auto mb-8" style={{width:"25vw"}}>
        <ReactApexChart
          options={options}
          series={series}
          type="bar"
          width="100%"
          height={350}
        />
      </div>

      <Modal show={showModal} onHide={handleClose} centered size="xl" style={{ height: "550px", marginLeft: '65px' }}>
        <Modal.Header closeButton>
          <Modal.Title>{selectedData?.label}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Count: {selectedData?.value}</p>
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

export default NonCommunicatedMeters;
