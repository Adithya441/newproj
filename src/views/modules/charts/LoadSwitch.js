import React, { useState, useEffect } from 'react';
import ReactApexChart from 'react-apexcharts';
import { Modal, Button } from 'react-bootstrap';
import GetLoadSwitch from './GetLoadSwitch';
import './LoadSwitch.css'

const LoadSwitchStatus = ({officeid}) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedData, setSelectedData] = useState(null);
  const [loading, setLoading] = useState(true); // Add loading state
  const [selectlabel,setSelectLabel] = useState(null);

  const tokenUrl = '/api/server3/UHES-0.0.1/oauth/token';
  const baseUrl = `/api/server3/UHES-0.0.1/WS/getPowerConnectDisconnectStatus?applyMaskingFlag=N&officeid=${officeid}`;

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
  
      console.log("Token: ", tokenData);
  
      // Step 2: Use the access token to fetch data
      const dataResponse = await fetch(baseUrl, {
        headers: {
          'Authorization': `Bearer ${accessToken}`,
        },
      });
  
      if (!dataResponse.ok) {
        throw new Error('Failed to fetch data');
      }
  
      // Check if the response body is empty
      const responseBody = await dataResponse.text(); // Read the raw response body
      if (!responseBody) {
        throw new Error('Response body is empty');
      }
  
      // Parse the response as JSON
      const responseData = JSON.parse(responseBody);
  
      console.log("Response Data: ", responseData);
  
      // Check if required fields exist and are valid
      if (!responseData.ydata1 || !responseData.xData) {
        setLoading(false);
        return <p style={{margin:'20px 20px'}}>No Data Available</p>
      }
  
      // Calculate total directly from responseData
      const total = responseData.ydata1.slice(0, 2).reduce((acc, curr) => acc + curr, 0);
      const series = responseData.ydata1.slice(0, 2);
      const labels = responseData.xData.slice(0, 2);
  
      setLoading(false); // Set loading to false once data is fetched
  
      return { total, series, labels }; // Return values to be used for chart rendering
    } catch (err) {
      console.error("Error fetching data: ", err.message); // Log error details
      setLoading(false);
      return null; // Ensure chartData is not set if an error occurs
    }
  };
  

  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    setLoading(true);
    const getData = async () => {
      const data = await fetchData();
      if (data) {
        setChartData(data); // Set the chart data for rendering
      }
    };
    
    getData();
  }, [officeid]);

  // Render loading state
  if (loading) {
    return <p>Loading...</p>;
  }

  if (!chartData) {
    return <h5 style={{margin:'110px 120px'}}>No data available.</h5>;
  }

  const { total, series, labels } = chartData;

  const options = {
    chart: {
      type: 'donut',
      toolbar: {
        show: true, // Show the toolbar
        tools: {
            download: true, 
            export: {
              csv: {
                  filename: `Load Switch`,
              },
              svg: {
                  filename: `Load Switch`
              },
              png: {
                  filename: `Load Switch`
              }
          },
        },
      },
      events: {
        dataPointSelection: (event, chartContext, config) => {
          const selectedLabel = labels[config.dataPointIndex];
          const selectedValue = series[config.dataPointIndex];
          const percentage = ((selectedValue / total) * 100).toFixed(2);
          setSelectedData({ label: selectedLabel, value: selectedValue, percentage });
          setShowModal(true);
          setSelectLabel(selectedLabel);
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
    responsive: [
      {
        breakpoint: 480,
        options: {
          legend: {
            position: 'bottom',
          },
        },
      },
    ],
  };

  const handleClose = () => setShowModal(false);

  return (
    <div className='blck5'>
      <h5 className='chart-name'>Load Switch Status</h5>
      <div className='charts5'>
        <ReactApexChart
          options={options}
          series={series}
          type="donut"
          width="100%"
          height="100%"
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
            <GetLoadSwitch selectedLabel={selectlabel} office = {officeid}/>
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

export default LoadSwitchStatus;

