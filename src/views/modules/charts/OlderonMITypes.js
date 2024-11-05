import React, { useEffect, useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import { Modal } from 'react-bootstrap';
import GetOlderonMITypes from './GetOlderonMITypes';

const OlderonMITypes = () => {
  const [chartData, setChartData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [selectedData, setSelectedData] = useState(null);
  const [categorys, setCategory] = useState(null);
  const [selectlabel, setSelectlabel] = useState(null);

  const colorPalette = [
    'rgb(57, 125, 200)',  // Color 1
    'rgb(148, 140, 28)',  // Color 2
    'rgb(48, 71, 88)',    // Color 3
    'rgb(57, 125, 200)',  // Color 4 (same as Color 1 for repeating)
    'rgb(148, 140, 28)'   // Color 5 (same as Color 2 for repeating)
  ];

  const tokenUrl = '/api/server3/UHES-0.0.1/oauth/token';
  const baseUrl = '/api/server3/UHES-0.0.1/WS/gettingOlderBasedOnMI?applyMaskingFlag=N&officeid=3459274e-f20f-4df8-a960-b10c5c228d3e';

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

      const labels = responseData.xData; // Communication types like BCITSRF, GPRS, etc.
      const ranges = responseData.yData.map(item => item.name); // Ranges like "1D-3D", "3D-1W", etc.
      const rangeData = responseData.yData.map(item => item.data);

      // Calculate percentage data for each range and communication type
      const percentageData = labels.map((_, index) => {
        const total = rangeData.reduce((acc, range) => acc + range[index], 0);
        return rangeData.map(range => (total ? ((range[index] / total) * 100).toFixed(2) : 0));
      });

      // Prepare series data for ApexCharts
      const series = ranges.map((rangeName, i) => ({
        name: rangeName,
        data: percentageData.map(data => parseFloat(data[i])),
      }));

      setChartData({
        options: {
          chart: {
            type: 'bar',
            stacked: true,
            stackType: '100%',
            toolbar: {
              show: true, // Show the toolbar
              tools: {
                  download: true,
              },
              export: {
                  csv: {
                      filename: `Getting Older Based on MI Types`,
                  },
                  svg: {
                      filename: `Getting Older Based on MI Types`
                  },
                  png: {
                      filename: `Getting Older Based on MI Types`
                  }
              },
          },
  
            events: {
              dataPointSelection: (event, chartContext, config) => {
                const { dataPointIndex, seriesIndex } = config;
                const category = labels[dataPointIndex];
                const value = series[seriesIndex].data[dataPointIndex];
                const label = series[seriesIndex].name;
                setCategory(category);
                setSelectlabel(label);
                setSelectedData({ category, value, label });
                setShowModal(true);
              }
            }
          },
          plotOptions: {
            bar: {
              horizontal: true,
            }
          },
          xaxis: {
            categories: labels,
          },
          yaxis: {
            max: 100
          },
          colors: colorPalette,
          tooltip: {
            y: {
              formatter: (val) => `${val.toFixed(2)}%`
            }
          },
          legend: {
            position: 'top'
          }
        },
        series: series
      });
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

  const handleClose = () => setShowModal(false);

  return (
    <div>
      <h5>Getting Older Based on MI Types</h5>
      <div style={{ width: '35vw', height: '40vh' }}>
        <ReactApexChart
          options={chartData.options}
          series={chartData.series}
          type="bar"
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
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h5 id="contained-modal-title-vcenter">{selectlabel}</h5>
            <button onClick={handleClose} style={{ background: 'none', border: 'none', fontSize: '1.5rem' }}>
              &times;
            </button>
          </div>

          <div style={{ maxHeight: '70vh', width: '970px', overflowY: 'auto' }}>
            <GetOlderonMITypes selectedLabel={selectlabel} selectedCategory={categorys} />
          </div>

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

export default OlderonMITypes;