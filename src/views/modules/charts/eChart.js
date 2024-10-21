import React, { Fragment } from "react";
import { Col,  Row } from "react-bootstrap";
import ReactECharts from "echarts-for-react";
import * as echarts from "echarts";

const EChartPage = () => {
  const data = [
    [
      [28604, 77, 17096869, "Australia", 1990],
      [31163, 77.4, 27662440, "Canada", 1990],
      [1516, 68, 1154605773, "China", 1990],
      [13670, 74.7, 10582082, "Cuba", 1990],
      [28599, 75, 4986705, "Finland", 1990],
      [29476, 77.1, 56943299, "France", 1990],
      [31476, 75.4, 78958237, "Germany", 1990],
      [28666, 78.1, 254830, "Iceland", 1990],
      [1777, 57.7, 870601776, "India", 1990],
      [29550, 79.1, 122249285, "Japan", 1990],
      [2076, 67.9, 20194354, "North Korea", 1990],
      [12087, 72, 42972254, "South Korea", 1990],
      [24021, 75.4, 3397534, "New Zealand", 1990],
      [43296, 76.8, 4240375, "Norway", 1990],
      [10088, 70.8, 38195258, "Poland", 1990],
      [19349, 69.6, 147568552, "Russia", 1990],
      [10670, 67.3, 53994605, "Turkey", 1990],
      [26424, 75.7, 57110117, "United Kingdom", 1990],
      [37062, 75.4, 252847810, "United States", 1990],
    ],
    [
      [44056, 81.8, 23968973, "Australia", 2015],
      [43294, 81.7, 35939927, "Canada", 2015],
      [13334, 76.9, 1376048943, "China", 2015],
      [21291, 78.5, 11389562, "Cuba", 2015],
      [38923, 80.8, 5503457, "Finland", 2015],
      [37599, 81.9, 64395345, "France", 2015],
      [44053, 81.1, 80688545, "Germany", 2015],
      [42182, 82.8, 329425, "Iceland", 2015],
      [5903, 66.8, 1311050527, "India", 2015],
      [36162, 83.5, 126573481, "Japan", 2015],
      [1390, 71.4, 25155317, "North Korea", 2015],
      [34644, 80.7, 50293439, "South Korea", 2015],
      [34186, 80.6, 4528526, "New Zealand", 2015],
      [64304, 81.6, 5210967, "Norway", 2015],
      [24787, 77.3, 38611794, "Poland", 2015],
      [23038, 73.13, 143456918, "Russia", 2015],
      [19360, 76.5, 78665830, "Turkey", 2015],
      [38225, 81.4, 64715810, "United Kingdom", 2015],
      [53354, 79.1, 321773631, "United States", 2015],
    ],
  ];

  const chart1 = {
    xAxis: {
      type: "category",
      data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        data: [150, 230, 224, 218, 135, 147, 260],
        type: "line",
        itemStyle: {
          color: "rgba(8, 155, 171, 1)",
        },
      },
    ],
  };
  const chart2 = {
    xAxis: {
      type: "category",
      data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        data: [120, 200, 150, 80, 70, 110, 130],
        type: "bar",
        itemStyle: {
          color: "rgba(8, 155, 171, 1)",
        },
      },
    ],
  };
  const chart3 = {
    tooltip: {
      trigger: "item",
    },
    legend: {
      orient: "vertical",
      left: "left",
    },
    series: [
      {
        name: "Access From",
        type: "pie",
        radius: "50%",
        data: [
          { value: 1048, name: "January" },
          { value: 735, name: "February" },
          { value: 580, name: "March" },
          { value: 484, name: "April" },
          { value: 300, name: "May" },
        ],
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: "rgba(0, 0, 0, 0.5)",
          },
        },
      },
    ],
  };
  const chart4 = {
    legend: {
      left: "25%",
      bottom: "3%",
      data: ["Product 1", "Product 2", "Product 3"],
    },
    grid: {
      left: "8%",
      top: "10%",
    },
    xAxis: {
      splitLine: {
        lineStyle: {
          type: "dashed",
        },
      },
    },
    yAxis: {
      splitLine: {
        lineStyle: {
          type: "dashed",
        },
      },
      scale: true,
    },
    series: [
      {
        name: "1990",
        data: data[0],
        type: "scatter",
        symbolSize: function (data) {
          return Math.sqrt(data[2]) / 5e2;
        },
        emphasis: {
          focus: "series",
          label: {
            show: true,
            formatter: function (param) {
              return param.data[3];
            },
            position: "top",
          },
        },
        itemStyle: {
          shadowBlur: 10,
          shadowColor: "rgba(120, 36, 50, 0.5)",
          shadowOffsetY: 5,
          color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [
            {
              offset: 0,
              color: "rgb(251, 118, 123)",
            },
            {
              offset: 1,
              color: "rgb(204, 46, 72)",
            },
          ]),
        },
      },
      {
        name: "2015",
        data: data[1],
        type: "scatter",
        symbolSize: function (data) {
          return Math.sqrt(data[2]) / 5e2;
        },
        emphasis: {
          focus: "series",
          label: {
            show: true,
            formatter: function (param) {
              return param.data[3];
            },
            position: "top",
          },
        },
        itemStyle: {
          shadowBlur: 10,
          shadowColor: "rgba(25, 100, 150, 0.5)",
          shadowOffsetY: 5,
          color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [
            {
              offset: 0,
              color: "rgb(129, 227, 238)",
            },
            {
              offset: 1,
              color: "rgb(25, 183, 207)",
            },
          ]),
        },
      },
    ],
  };
  const chart5 = {
    xAxis: {
      type: "category",
      boundaryGap: false,
      data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: "line",
        areaStyle: {},
        itemStyle: {
          color: "rgba(8, 155, 171, 1)",
        },
      },
    ],
  };
  const chart6 = {
    tooltip: {
      trigger: "item",
    },
    legend: {
      top: "5%",
      left: "center",
    },
    series: [
      {
        name: "Access From",
        type: "pie",
        radius: ["40%", "70%"],
        avoidLabelOverlap: false,
        label: {
          show: false,
          position: "center",
        },
        emphasis: {
          label: {
            show: true,
            fontSize: 40,
            fontWeight: "bold",
          },
        },
        labelLine: {
          show: false,
        },
        data: [
          { value: 1048, name: "January" },
          { value: 735, name: "February" },
          { value: 580, name: "March" },
          { value: 484, name: "April" },
          { value: 300, name: "May" },
        ],
      },
    ],
  };

  const chart7 = {
    legend: {
      data: ["Day 1", "Day 2"],
    },
    radar: {
      indicator: [
        { name: "Eating", max: 6500 },
        { name: "Exercising", max: 16000 },
        { name: "Running", max: 30000 },
        { name: "Cycling", max: 38000 },
        { name: "Sleeping", max: 52000 },
        { name: "Drinking", max: 25000 },
      ],
    },
    series: [
      {
        name: "Budget vs spending",
        type: "radar",
        data: [
          {
            value: [4200, 3000, 20000, 35000, 50000, 18000],
            name: "Day 1",
          },
          {
            value: [5000, 14000, 28000, 26000, 42000, 21000],
            name: "Day 2",
          },
        ],
      },
    ],
  };

  const chart8 = {
    xAxis: {},
    yAxis: {},
    series: [
      {
        symbolSize: 20,
        data: [
          [10.0, 8.04],
          [8.07, 6.95],
          [13.0, 7.58],
          [9.05, 8.81],
          [11.0, 8.33],
          [14.0, 7.66],
          [13.4, 6.81],
          [10.0, 6.33],
          [14.0, 8.96],
          [12.5, 6.82],
          [9.15, 7.2],
          [11.5, 7.2],
          [3.03, 4.23],
          [12.2, 7.83],
          [2.02, 4.47],
          [1.05, 3.33],
          [4.05, 4.96],
          [6.03, 7.24],
          [12.0, 6.26],
          [12.0, 8.84],
          [7.08, 5.82],
          [5.02, 5.68],
        ],
        type: "scatter",
        itemStyle: {
          color: "rgba(8, 155, 171, 1)",
        },
      },
    ],
  };

  return (
    <Fragment>
        <Row>
          <Col sm="12" lg="6">
            <div className="iq-card">
              <div className="iq-card-header d-flex justify-content-between">
                <div className="iq-header-title">
                  <h4 className="card-title">Basic line Chart</h4>
                </div>
              </div>
              <div className="iq-card-body">
                <ReactECharts
                  option={chart1}
                  style={{ width: "100%", height: "400px" }}
                ></ReactECharts>
              </div>
            </div>
            <div className="iq-card">
              <div className="iq-card-header d-flex justify-content-between">
                <div className="iq-header-title">
                  <h4 className="card-title">Bar Chart</h4>
                </div>
              </div>
              <div className="iq-card-body">
                <ReactECharts
                  option={chart2}
                  style={{ width: "100%", height: "400px" }}
                ></ReactECharts>
              </div>
            </div>
            <div className="iq-card">
              <div className="iq-card-header d-flex justify-content-between">
                <div className="iq-header-title">
                  <h4 className="card-title">Pie Chart</h4>
                </div>
              </div>
              <div className="iq-card-body">
                <ReactECharts
                  option={chart3}
                  style={{ width: "100%", height: "400px" }}
                ></ReactECharts>
              </div>
            </div>
            <div className="iq-card">
              <div className="iq-card-header d-flex justify-content-between">
                <div className="iq-header-title">
                  <h4 className="card-title">Bubble Chart</h4>
                </div>
              </div>
              <div className="iq-card-body">
                <ReactECharts
                  option={chart4}
                  style={{ width: "100%", height: "400px" }}
                ></ReactECharts>
              </div>
            </div>
          </Col>
          <Col sm="12" lg="6">
            <div class="iq-card">
              <div class="iq-card-header d-flex justify-content-between">
                <div class="iq-header-title">
                  <h4 class="card-title">Area Chart</h4>
                </div>
              </div>
              <div class="iq-card-body">
                <ReactECharts
                  option={chart5}
                  style={{ width: "100%", height: "400px" }}
                ></ReactECharts>
              </div>
            </div>
            <div class="iq-card">
              <div class="iq-card-header d-flex justify-content-between">
                <div class="iq-header-title">
                  <h4 class="card-title">Doughnut Chart</h4>
                </div>
              </div>
              <div class="iq-card-body">
                <ReactECharts
                  option={chart6}
                  style={{ width: "100%", height: "400px" }}
                ></ReactECharts>
              </div>
            </div>
            <div class="iq-card">
              <div class="iq-card-header d-flex justify-content-between">
                <div class="iq-header-title">
                  <h4 class="card-title">Radar Chart</h4>
                </div>
              </div>
              <div class="iq-card-body">
                <ReactECharts
                  option={chart7}
                  style={{ width: "100%", height: "400px" }}
                ></ReactECharts>
              </div>
            </div>
            <div class="iq-card">
              <div class="iq-card-header d-flex justify-content-between">
                <div class="iq-header-title">
                  <h4 class="card-title">Scatter Chart</h4>
                </div>
              </div>
              <div class="iq-card-body">
                <ReactECharts
                  option={chart8}
                  style={{ width: "100%", height: "400px" }}
                ></ReactECharts>
              </div>
            </div>
          </Col>
        </Row>
    </Fragment>
  );
};

export default EChartPage;
