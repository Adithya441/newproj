import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

const APIChart = () => {
  const [data, setData] = useState({
    "xName": "Meter Communicated",
    "yName": "Meter Not Communicated",
    "xData": [
        "COMMUNICATED",
        "NEVER COMMUNICATED",
        "NOT COMMUNICATED",
        "TOTAL"
    ],
    "xAxisData": null,
    "ydata1": [
        52,
        44,
        165,
        261
    ],
    "ydata2": null,
    "yData": null,
    "axisData": null
});

  // Calculate total
  const total = data.ydata1.slice(0, 3).reduce((acc, curr) => acc + curr, 0);

  const series = data.ydata1.slice(0, 3);
  const labels = data.xData.slice(0, 3);

  const options = {
    chart: {
      type: 'donut',
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
      text: 'Meter Communication Status',
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

  return (
    <div style={{height: '400px', width: '400px'}}>
      <ReactApexChart
        options={options}
        series={series}
        type="donut"
        width="100%"
        height={350}
      />
    </div>
  );
};

export default APIChart;
