import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Modal, Button } from 'react-bootstrap';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const OlderonMITypes = () => {
  const [chartData, setChartData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [selectedData, setSelectedData] = useState(null);

  const tokenUrl = '/api/server3/UHES-0.0.1/oauth/token';
  const baseUrl = '/api/server3/UHES-0.0.1/WS/getmeterCommunicationStatusBasedOnMI?officeid=3459274e-f20f-4df8-a960-b10c5c228d3e';

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

      const labels = responseData.xData;
      const communicatedData = responseData.yData[0].data;
      const notCommunicatedData = responseData.yData[1].data;

      const percentageData = labels.map((_, index) => {
        const total = communicatedData[index] + notCommunicatedData[index];
        const commPercent = total ? ((communicatedData[index] / total) * 100).toFixed(2) : 0;
        const notCommPercent = total ? ((notCommunicatedData[index] / total) * 100).toFixed(2) : 0;
        return {
          communicated: parseFloat(commPercent),
          notCommunicated: parseFloat(notCommPercent),
        };
      });

      setChartData({
        labels,
        datasets: [
          {
            label: 'Meter Communicated',
            data: percentageData.map(d => d.communicated),
            backgroundColor: 'rgb(35, 240, 12)', // Green color
          },
          {
            label: 'Meter Not Communicated',
            data: percentageData.map(d => d.notCommunicated),
            backgroundColor: 'rgb(28, 148, 142)', // Teal color
          },
        ],
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

  const handleBarClick = (event, elements) => {
    if (!elements.length) return;
    const { index, datasetIndex } = elements[0];
    const category = chartData.labels[index];
    const value = chartData.datasets[datasetIndex].data[index];
    const label = chartData.datasets[datasetIndex].label;

    setSelectedData({ category, value, label });
    setShowModal(true);
  };

  if (loading) return <p>Loading...</p>;
  if (!chartData) return <p>No data available.</p>;

  const options = {
    indexAxis: 'y', // Horizontal bars
    onClick: handleBarClick,
    plugins: {
      tooltip: {
        callbacks: {
          label: (context) => `${context.dataset.label}: ${context.raw}%`, // Display percentage
        },
      },
    },
    responsive: true,
    scales: {
      x: {
        beginAtZero: true,
        max: 100, // Max percentage
        stacked: true,
      },
      y: {
        stacked: true,
        title: {
          display: true,
        },
      },
    },
  };

  const handleClose = () => setShowModal(false);

  return (
    <div>
      <h5>Meter Communication Status Based on MI Types</h5>
      <div style={{ width: '35vw', height: '40vh' }}>
        <Bar data={chartData} options={options} />
      </div>

      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedData && (
            <div>
              <p><strong>Category:</strong> {selectedData.category}</p>
              <p><strong>Status:</strong> {selectedData.label}</p>
              <p><strong>Percentage:</strong> {selectedData.value}%</p>
            </div>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Close</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default OlderonMITypes;