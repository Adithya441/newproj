import React, { useState, useEffect } from 'react';
import ReactApexChart from 'react-apexcharts';
import { Modal, Button } from 'react-bootstrap';
import Apicall from './GetCommunication';

const CommunicationStatus = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedData, setSelectedData] = useState(null);
  const [selectlabel,setSelectLabel] = useState(null);
  const [loading, setLoading] = useState(true); 
  const length = 10;

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
          setSelectLabel(selectedLabel);
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
      <div className="w-full max-w-md mx-auto mb-8" style={{width:"20vw"}}>
        <ReactApexChart
          options={options}
          series={series}
          type="donut"
          width="100%"
          height={350}
        />
      </div>

      {showModal && (
        <div
          style={{
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            zIndex: 1050,
            backgroundColor: '#fff',
            width: '1000px',
            borderRadius: '5px',
            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.3)',
            padding: '1em',
            marginLeft: '125px',
          }}
        >
          {/* Modal Header */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h5 id="contained-modal-title-vcenter">{selectlabel}</h5>
            <button onClick={handleClose} style={{ background: 'none', border: 'none', fontSize: '1.5rem' }}>
              &times;
            </button>
          </div>

          {/* Modal Body */}
          <div style={{ maxHeight: '70vh',width:'970px', overflowY: 'auto' }}>
            <Apicall selectedLabel={selectlabel} />
          </div>

          {/* Modal Footer */}
          <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '1em' }}>
            <button onClick={handleClose} style={{ padding: '0.5em 1em', cursor: 'pointer' }}>
              Close
            </button>
          </div>
        </div>
        )}
    </div>
  );
};

export default CommunicationStatus;
