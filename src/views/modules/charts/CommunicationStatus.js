import React, { useState, useEffect, useCallback } from 'react';
import ReactApexChart from 'react-apexcharts';
import { Modal, Button } from 'react-bootstrap';
import Apicall from './GetCommunication';

export default function CommunicationStatus({ officeid = '' }) {
  console.log('CommunicationStatus rendered with officeid:', officeid);
  const [showModal, setShowModal] = useState(false);
  const [selectedData, setSelectedData] = useState(null);
  const [selectlabel, setSelectLabel] = useState(null);
  const [loading, setLoading] = useState(true);
  const [chartData, setChartData] = useState(null);

  const tokenUrl = '/api/server3/UHES-0.0.1/oauth/token';
  const baseUrl = `/api/server3/UHES-0.0.1/WS/getcommunicationstatus?officeid=${officeid}`;

  const fetchData = useCallback(async () => {
    try {
      console.log('Fetching data for officeid:', officeid);
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

      const dataResponse = await fetch(`/api/server3/UHES-0.0.1/WS/getcommunicationstatus?officeid=${officeid}`, {
        headers: {
          'Authorization': `Bearer ${accessToken}`,
        },
      });

      if (!dataResponse.ok) {
        throw new Error('Failed to fetch data');
      }

      const responseData = await dataResponse.json();
      const total = responseData.ydata1.slice(0, 3).reduce((acc, curr) => acc + curr, 0);
      const series = responseData.ydata1.slice(0, 3);
      const labels = responseData.xData.slice(0, 3);

      console.log('Fetched data:', responseData);
      setChartData({ total, series, labels });
      setLoading(false);
    } catch (err) {
      console.error('Error fetching data:', err.message);
      setLoading(false);
      setChartData(null);
    }
  }, [officeid]);

  useEffect(() => {
    console.log('useEffect triggered with officeid:', officeid);
    if (officeid) {
      setLoading(true);
      fetchData();
    }
  }, [officeid, fetchData]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!chartData || !chartData.series || !chartData.labels) {
    return <h4 style={{ marginTop: '160px', marginLeft: '100px' }}>No data available.</h4>;
  }

  const { total, series, labels } = chartData;

  const options = {
    chart: {
      type: 'donut',
      toolbar: {
        show: true,
        tools: {
          download: true,
          export: {
            csv: { filename: 'Communication Status' },
            svg: { filename: 'Communication Status' },
            png: { filename: 'Communication Status' }
          },
        },
      },
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
      <div className="w-full max-w-md mx-auto mb-8" style={{ width: "25vw" }}>
        <ReactApexChart
          key={officeid + '-' + JSON.stringify(chartData)}
          options={options}
          series={chartData ? chartData.series : []}
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
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h5 id="contained-modal-title-vcenter">{selectlabel}</h5>
            <button onClick={handleClose} style={{ background: 'none', border: 'none', fontSize: '1.5rem' }}>
              &times;
            </button>
          </div>
          <div style={{ maxHeight: '70vh', width: '970px', overflowY: 'auto' }}>
            <Apicall selectedLabel={selectlabel} office={officeid} />
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
}