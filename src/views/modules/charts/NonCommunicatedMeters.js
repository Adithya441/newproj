import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import { Modal, Button } from 'react-bootstrap';

const NonCommunicatedMeters = () => {
  const [data, setData] = useState({
    xName: "Month-Year",
    yName: "Total Meters",
    xData: ["1D-3D", "3D-1W", "1W-2W", "2W-1M", ">1M"],
    yData: [
      {
        name: "Not Communicated",
        data: [6.0, 4.0, 3.0, 5.0, 150.0]
      }
    ],
  });

  const [showModal, setShowModal] = useState(false);
  const [selectedData, setSelectedData] = useState(null);

  const total = data.yData[0].data.reduce((acc, curr) => acc + curr, 0);
  const series = data.yData;
  const labels = data.xData;

  const options = {
    chart: {
      type: 'bar',
      events: {
        dataPointSelection: (event, chartContext, config) => {
          const selectedLabel = labels[config.dataPointIndex];
          const selectedValue = series[0].data[config.dataPointIndex];
          const percentage = ((selectedValue / total) * 100).toFixed(2);
          setSelectedData({ label: selectedLabel, value: selectedValue, percentage });
          setShowModal(true);
        }
      }
    },
    xaxis: {
      categories: labels,
    },
    colors: ['#4bc0c0'],
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '50%',
      }
    },
    dataLabels: {
      enabled: true,
      formatter: (val) => `${((val / total) * 100).toFixed(2)}%`
    },
    tooltip: {
      y: {
        formatter: (val) => `${val} (${((val / total) * 100).toFixed(2)}%)`
      }
    },
    title: {
      text: 'Non Communicated Meters',
      align: 'center'
    },
    legend: {
      position: 'bottom'
    },
  };

  const handleClose = () => setShowModal(false);

  return (
    <div className="container mx-auto p-4">
      <div className="w-full max-w-md mx-auto mb-8">
        <ReactApexChart
          options={options}
          series={series}
          type="bar"
          width="100%"
          height={350}
        />
      </div>

      <Modal show={showModal} onHide={handleClose} centered size="xl" style={{height:"550px", marginLeft:'120px'}}>
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

export default NonCommunicatedMeters;
