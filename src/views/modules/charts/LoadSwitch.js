import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import { Modal, Button } from 'react-bootstrap';

const LoadSwitchStatus = () => {
  const [data, setData] = useState({
    "xName": "Meter Communicated",
    "yName": "Meter Not Communicated",
    "xData": [
        "CONNECTED",
        "DISCONNECTED",
        "TOTAL"
    ],
    "xAxisData": null,
    "ydata1": [
        241,
        20,
        261
    ],
    "ydata2": null,
    "yData": null,
    "axisData": null
});

  const [showModal, setShowModal] = useState(false);
  const [selectedData, setSelectedData] = useState(null);

  // Calculate total
  const total = data.ydata1.slice(0, 2).reduce((acc, curr) => acc + curr, 0);

  const series = data.ydata1.slice(0, 2);
  const labels = data.xData.slice(0, 2);

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
        }
      }
    },
    labels: labels,
    colors: ['#4bc0c0', '#ff6384', '#ffce56'],
    plotOptions: {
      pie: {
        donut: {
          labels: {
            show: true,
            total: {
              show: true,
              label: 'Total',
              formatter: () => total.toString()
            }
          }
        }
      }
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
        }
      }
    },
    legend: {
      position: 'bottom'
    },
    title: {
      text: 'Load Switch Status',
      align: 'center'
    },
    responsive: [{
      breakpoint: 480,
      options: {
        chart: {
          width: 300
        },
        legend: {
          position: 'bottom'
        }
      }
    }]
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

export default LoadSwitchStatus;
