import React, { Fragment } from "react";
import { Col,  Row } from "react-bootstrap";

// Chart
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Bar, Bubble, Doughnut, Line, Pie, Radar } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const ChartJsPage = () => {
  const LinechartOption = {
    labels: [
      "August",
      "September",
      "October",
      "November",
      "December",
      "January",
      "February",
    ],
    datasets: [
      {
        label: "Line Chart",
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        borderColor: "rgba(8, 155, 171, 1)",
        tension: 0.1,
      },
    ],
    options: {
      legend: {
        display: false,
      },
    },
  };

  const AreaChartOption = {
    labels: ["January", "February", "March", "April", "May"],
    datasets: [
      {
        label: "Area Chart",
        data: [10, 20, 15, 30, 25],
        borderColor: "rgba(8, 155, 171, 1)",
        backgroundColor: "rgba(8, 155, 171, 0.2)",
        tension: 0.5,
        fill: {
          target: "origin",
          above: "rgba(8, 155, 171, 0.2)", // Area will be red above the origin
          below: "rgba(8, 155, 171, 0.2)", // And blue below the origin
        },
      },
    ],
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  };
  const BarChartOption = {
    labels: ['August', 'September', 'October', 'November', 'December', 'January', 'February'],
            datasets: [{
                label: 'Bar Chart',
                data: [65, 59, 80, 81, 56, 55, 40],
                fill: false,
                backgroundColor: 'rgba(8, 155, 171, 1)',
                borderColor: 'rgba(8, 155, 171, 1)',
                tension: 0.1
            }]
  }

  const DoughnutChartOption ={
    labels: ['January', 'February', 'March', 'April', 'May'],
    datasets: [
        {
            label: 'Donut Chart',
            data: [10, 20, 15, 30, 25],
            height:100,
            width:100,
            backgroundColor: [
                'rgba(8, 155, 171, 1)',
                'rgba(252, 159, 91, 1)',
                'rgba(242, 99, 97, 1)',
                'rgba(87, 222, 83, 1)',
                'rgba(97, 226, 252, 1)',
            ],
            hoverOffset: 4
        }
    ]
  }

  const BubbleChartOption = {
    datasets: [
      {
          label: 'Product One',
          data: [
              { x: 20, y: 29, r: 10 },
              { x: 21, y: 25, r: 10 },
              { x: 22, y: 24, r: 10 },
              { x: 24, y: 28, r: 10 },
              { x: 25, y: 21, r: 10 },
              { x: 26, y: 26, r: 10 },
              { x: 27, y: 25, r: 10 },
              { x: 28, y: 22, r: 10 },
              { x: 29, y: 23, r: 10 },
              { x: 30, y: 20, r: 10 },
          ],
          backgroundColor: 'rgba(242, 99, 97, 1)'
      },
      {
          label: 'Product Two',
          data: [
              { x: 20, y: 22, r: 10 },
              { x: 22, y: 26, r: 10 },
              { x: 23, y: 24, r: 10 },
              { x: 24, y: 22, r: 10 },
              { x: 25, y: 23, r: 10 },
              { x: 26, y: 24, r: 10 },
              { x: 27, y: 28, r: 10 },
              { x: 28, y: 20, r: 10 },
              { x: 29, y: 27, r: 10 },
              { x: 30, y: 29, r: 10 },
          ],
          backgroundColor: 'rgba(8, 155, 171, 1)'
      },
      {
          label: 'Product Three',
          data: [
              { x: 20, y: 26, r: 10 },
              { x: 22, y: 28, r: 10 },
              { x: 23, y: 22, r: 10 },
              { x: 24, y: 25, r: 10 },
              { x: 25, y: 25, r: 10 },
              { x: 26, y: 20, r: 10 },
              { x: 27, y: 30, r: 10 },
              { x: 28, y: 28, r: 10 },
              { x: 29, y: 25, r: 10 },
              { x: 30, y: 22, r: 10 },
          ],
          backgroundColor: 'rgba(97, 226, 252, 1)'
      }
  ]
  }

  const ScatterChartOption ={
    datasets: [
      {
          label: 'Product 1',
          data: [
              { x: 10, y: 0.0 },
              { x: 12, y: 0.1 },
              { x: 13, y: 0.2 },
              { x: 14, y: 0.2 },
              { x: 15, y: 0.5 },
              { x: 16, y: 0.4 },
              { x: 17, y: 0.5 },
              { x: 18, y: 0.3 },
              { x: 19, y: 0.1 },
              { x: 20, y: 0.5 },
              { x: 21, y: 0.4 },
              { x: 22, y: 0.2 }
          ],
          backgroundColor: 'rgba(242, 99, 97, 1)'
      },
      {
          label: 'Product 2',
          data: [
              { x: 10, y: 0.5 },
              { x: 12, y: 0.4 },
              { x: 13, y: 0.3 },
              { x: 14, y: 0.2 },
              { x: 15, y: 0.1 },
              { x: 16, y: 0.2 },
              { x: 17, y: 0.1 },
              { x: 18, y: 0.2 },
              { x: 19, y: 0.3 },
              { x: 20, y: 0.4 },
              { x: 21, y: 0.5 },
              { x: 22, y: 0.0 }
          ],
          backgroundColor: 'rgba(8, 155, 171, 1)'
      },
      {
          label: 'Product 3',
          data: [
              { x: 10, y: 0.25 },
              { x: 12, y: 0.3 },
              { x: 13, y: 0.3 },
              { x: 14, y: 0.4 },
              { x: 15, y: 0.3 },
              { x: 16, y: 0.1 },
              { x: 17, y: 0.5 },
              { x: 18, y: 0.2 },
              { x: 19, y: 0.3 },
              { x: 20, y: 0.4 },
              { x: 21, y: 0.5 },
              { x: 22, y: 0.0 }
          ],
          backgroundColor: 'rgba(97, 226, 252, 1)'
      }
  ],
  }
  const PieChartOption ={
    labels: ['January', 'February', 'March', 'April', 'May'],
    datasets: [
        {
            label: 'Donut Chart',
            data: [10, 20, 15, 30, 25],
            backgroundColor: [
                'rgba(8, 155, 171, 1)',
                'rgba(252, 159, 91, 1)',
                'rgba(242, 99, 97, 1)',
                'rgba(87, 222, 83, 1)',
                'rgba(97, 226, 252, 1)',
            ],
            hoverOffset: 4
        }
    ]
  }

  const RadarChartOption ={
    labels: [
      'Eating',
      'Drinking',
      'Sleeping',
      'Designing',
      'Coding',
      'Cycling',
      'Running'
  ],
  datasets: [{
      label: 'Day 1',
      data: [65, 59, 90, 81, 56, 55, 40],
      fill: true,
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgb(255, 99, 132)',
      pointBackgroundColor: 'rgb(255, 99, 132)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgb(255, 99, 132)'
  }, {
      label: 'Day 2',
      data: [28, 48, 40, 19, 96, 27, 100],
      fill: true,
      backgroundColor: 'rgba(54, 162, 235, 0.2)',
      borderColor: 'rgb(54, 162, 235)',
      pointBackgroundColor: 'rgb(54, 162, 235)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgb(54, 162, 235)'
  }],
  options: {
    elements: {
        line: {
            borderWidth: 3
        }
    }
}
  }
  return (
    <Fragment>
        <Row>
          <Col sm="12" lg="6">
            <div className="iq-card">
              <div className="iq-card-header d-flex justify-content-between">
                <div className="iq-header-title">
                  <h4 className="card-title">Line Chart</h4>
                </div>
              </div>
              <div className="iq-card-body">
                <Line data={LinechartOption} />
              </div>
            </div>
            <div className="iq-card">
              <div className="iq-card-header d-flex justify-content-between">
                <div className="iq-header-title">
                  <h4 className="card-title">Area Chart</h4>
                </div>
              </div>
              <div className="iq-card-body">
                <Line data={AreaChartOption} />
              </div>
            </div>
            
          </Col>
          <Col sm='12' lg='6'>
          <div className="iq-card">
              <div className="iq-card-header d-flex justify-content-between">
                <div className="iq-header-title">
                  <h4 className="card-title">Bar Chart</h4>
                </div>
              </div>
              <div className="iq-card-body">
                <Bar data={BarChartOption} />
              </div>
            </div>
            <div className="iq-card">
              <div className="iq-card-header d-flex justify-content-between">
                <div className="iq-header-title">
                  <h4 className="card-title text-ce">Donut Chart</h4>
                </div>
              </div>
              <div className="iq-card-body" style={{height:"430px",width:'430px'}}>
                <Doughnut data={DoughnutChartOption}  />
              </div>
            </div>
          </Col>
          <Col sm='12' lg='6'>
          <div className="iq-card">
              <div className="iq-card-header d-flex justify-content-between">
                <div className="iq-header-title">
                  <h4 className="card-title">Bubble Chart</h4>
                </div>
              </div>
              <div className="iq-card-body">
                <Bubble data={BubbleChartOption} />
              </div>
            </div>
            <div className="iq-card" >
              <div className="iq-card-header d-flex justify-content-between">
                <div className="iq-header-title">
                  <h4 className="card-title">Pie Charts</h4>
                </div>
              </div>
              <div className="iq-card-body" style={{height:410,width:410}}>
                <Pie data={PieChartOption} />
              </div>
            </div>
          </Col>
          <Col sm='12' lg='6'>
            <div className="iq-card" >
              <div className="iq-card-header d-flex justify-content-between">
                <div className="iq-header-title">
                  <h4 className="card-title">Scatter Charts</h4>
                </div>
              </div>
              <div className="iq-card-body">
                <Bubble data={ScatterChartOption} />
              </div>
            </div>
            <div className="iq-card" >
              <div className="iq-card-header d-flex justify-content-between">
                <div className="iq-header-title">
                  <h4 className="card-title">Radar Charts</h4>
                </div>
              </div>
              <div className="iq-card-body" style={{height:410,width:410}}>
                <Radar data={RadarChartOption} />
              </div>
            </div>
          </Col>
        </Row>
    </Fragment>
  );
};

export default ChartJsPage;
