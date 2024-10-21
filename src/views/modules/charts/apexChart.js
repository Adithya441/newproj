import React, { Fragment } from "react";
import { Col,  Row } from "react-bootstrap";

// Chart
import Chart from "react-apexcharts";

const ApexChartPage = () => {
  const chart1 = {
    options: {
      chart: {
        type: "line",
        height: 350,
      },
      colors: ["#089bab"],

      dataLabels: {
        style: {
          fontSize: "12px",
        },
      },

      stroke: {
        show: true,
        width: 3,
        curve: "straight",
      },
      tooltip: {
        shared: true,
        intersect: false,
      },
      grid: {
        row: {
          colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
          opacity: 0.5,
        },
      },
      xaxis: {
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
        ],
      },
    },
    series: [
      {
        name: "Desktops",
        data: [10, 41, 35, 51, 49, 62, 69, 91, 148],
      },
    ],
  };
  const chart2 = {
    options: {
      chart: {
        height: 350,
        type: "bar",
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "55%",
          endingShape: "rounded",
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        show: true,
        width: 2,
        colors: ["transparent"],
      },
      colors: ["#089bab", "#FC9F5B", "#e64141"],
      xaxis: {
        categories: ["Feb", "Mar", "Apr", "May", "Jun", "Jul"],
      },
      yaxis: {
        title: {
          text: "$ (thousands)",
        },
      },
      fill: {
        opacity: 1,
      },
      tooltip: {
        y: {
          formatter: function (val) {
            return "$ " + val + " thousands";
          },
        },
      },
    },
    series: [
      {
        name: "Net Profit",
        data: [44, 55, 57, 56, 61, 58],
      },
      {
        name: "Revenue",
        data: [76, 85, 101, 98, 87, 105],
      },
      {
        name: "Free Cash Flow",
        data: [35, 41, 36, 26, 45, 48],
      },
    ],
  };

  const chart3 = {
    options: {
      chart: {
        height: 350,
        type: "line",
        stacked: false,
      },
      stroke: {
        width: [0, 2, 5],
        curve: "smooth",
      },
      plotOptions: {
        bar: {
          columnWidth: "50%",
        },
      },
      colors: ["#089bab", "#e64141", "#FC9F5B"],
      fill: {
        opacity: [0.85, 0.25, 1],
        gradient: {
          inverseColors: false,
          shade: "light",
          type: "vertical",
          opacityFrom: 0.85,
          opacityTo: 0.55,
          stops: [0, 100, 100, 100],
        },
      },
      labels: [
        "01/01/2003",
        "02/01/2003",
        "03/01/2003",
        "04/01/2003",
        "05/01/2003",
        "06/01/2003",
        "07/01/2003",
        "08/01/2003",
        "09/01/2003",
        "10/01/2003",
        "11/01/2003",
      ],
      markers: {
        size: 0,
      },
      xaxis: {
        type: "datetime",
      },
      yaxis: {
        min: 0,
      },
      tooltip: {
        shared: true,
        intersect: false,
        y: {
          formatter: function (y) {
            if (typeof y !== "undefined") {
              return y.toFixed(0) + " views";
            }
            return y;
          },
        },
      },
      legend: {
        labels: {
          useSeriesColors: true,
        },
        markers: {
          customHTML: [
            function () {
              return "";
            },
            function () {
              return "";
            },
            function () {
              return "";
            },
          ],
        },
      },
    },
    series: [
      {
        name: "Facebook",
        type: "column",
        data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30],
      },
      {
        name: "Vine",
        type: "area",
        data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43],
      },
      {
        name: "Dribbble",
        type: "line",
        data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39],
      },
    ],
  };

  const chart4 = {
    options: {
      chart: {
        height: 350,
        type: "bubble",
      },
      dataLabels: {
        enabled: false,
      },
      fill: {
        type: "gradient",
      },
      colors: ["#089bab", "#FC9F5B", "#e64141"],
      title: {
        text: "3D Bubble Chart",
      },
      xaxis: {
        tickAmount: 12,
        type: "datetime",

        labels: {
          rotate: 0,
        },
      },
      yaxis: {
        max: 40,
      },
      theme: {
        palette: "palette2",
      },
    },
    series: [
      {
        name: "Product1",
        // data: generateData(new Date('11 Feb 2017 GMT').getTime(), 20, {
        //     min: 10,
        //     max: 40
        // })
      },
      {
        name: "Product2",
        // data: generateData(new Date('11 Feb 2017 GMT').getTime(), 20, {
        //     min: 10,
        //     max: 40
        // })
      },
      {
        name: "Product3",
        // data: generateData(new Date('11 Feb 2017 GMT').getTime(), 20, {
        //     min: 10,
        //     max: 40
        // })
      },
    ],
  };
  const chart5 = {
    options: {
      chart: {
        width: 380,
        type: "pie",
      },
      labels: ["Team A", "Team B", "Team C", "Team D", "Team E"],
      colors: ["#089bab", "#FC9F5B", "#f26361", "#57de53", "#61e2fc"],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: "bottom",
            },
          },
        },
      ],
    },
    series: [44, 55, 13, 43, 22],
  };

  const chart6 = {
    options: {
      chart: {
        height: 350,
        type: "area",
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
      },
      colors: ["#089bab", "#FC9F5B"],
      xaxis: {
        type: "datetime",
        categories: [
          "2018-09-19T00:00:00",
          "2018-09-19T01:30:00",
          "2018-09-19T02:30:00",
          "2018-09-19T03:30:00",
          "2018-09-19T04:30:00",
          "2018-09-19T05:30:00",
          "2018-09-19T06:30:00",
        ],
      },
      tooltip: {
        x: {
          format: "dd/MM/yy HH:mm",
        },
      },
    },
    series: [
      {
        name: "series1",
        data: [31, 40, 28, 51, 42, 109, 100],
      },
      {
        name: "series2",
        data: [11, 32, 45, 32, 34, 52, 41],
      },
    ],
  };

  const chart7 = {
    options: {
      chart: {
        height: 350,
        type: "bar",
      },
      colors: ["#089bab"],
      plotOptions: {
        bar: {
          horizontal: true,
        },
      },
      dataLabels: {
        enabled: false,
      },
      xaxis: {
        categories: [
          "Netherlands",
          "Italy",
          "France",
          "Japan",
          "United States",
          "China",
          "Germany",
        ],
      },
    },
    series: [
      {
        data: [470, 540, 580, 690, 1100, 1200, 1380],
      },
    ],
  };

  const chart8 = {
    options: {},
    series: [],
  };

  const chart9 = {
    options: {
      chart: {
        height: 350,
        type: "scatter",
        zoom: {
          enabled: true,
          type: "xy",
        },
      },
      colors: ["#089bab", "#e64141", "#FC9F5B"],
      xaxis: {
        tickAmount: 5,
        labels: {
          formatter: function (val) {
            return parseFloat(val).toFixed(1);
          },
        },
      },
      yaxis: {
        tickAmount: 5,
      },
    },
    series: [
      {
        name: "SAMPLE A",
        data: [
          [16.4, 5.4],
          [21.7, 2],
          [10.9, 0],
          [10.9, 8.2],
          [16.4, 0],
          [16.4, 1.8],
          [13.6, 0.3],
          [13.6, 0],
          [29.9, 0],
          [27.1, 2.3],
          [16.4, 0],
          [13.6, 3.7],
          [10.9, 5.2],
          [16.4, 6.5],
          [10.9, 0],
          [24.5, 7.1],
          [10.9, 0],
          [8.1, 4.7],
        ],
      },
      {
        name: "SAMPLE B",
        data: [
          [36.4, 13.4],
          [1.7, 11],
          [1.9, 9],
          [1.9, 13.2],
          [1.4, 7],
          [6.4, 8.8],
          [3.6, 4.3],
          [1.6, 10],
          [9.9, 2],
          [7.1, 15],
          [1.4, 0],
          [3.6, 13.7],
          [1.9, 15.2],
          [6.4, 16.5],
          [0.9, 10],
          [4.5, 17.1],
          [10.9, 10],
          [0.1, 14.7],
        ],
      },
      {
        name: "SAMPLE C",
        data: [
          [21.7, 3],
          [23.6, 3.5],
          [28, 4],
          [27.1, 0.3],
          [16.4, 4],
          [13.6, 0],
          [19, 5],
          [22.4, 3],
          [24.5, 3],
          [32.6, 3],
          [27.1, 4],
          [29.6, 6],
          [31.6, 8],
          [21.6, 5],
          [20.9, 4],
          [22.4, 0],
          [32.6, 10.3],
          [29.7, 20.8],
        ],
      },
    ],
  };

  const chart10 = {
    options: {
      chart: {
        height: 290,
        type: "radialBar",
      },
      plotOptions: {
        radialBar: {
          dataLabels: {
            name: {
              fontSize: "22px",
            },
            value: {
              fontSize: "16px",
            },
            total: {
              show: true,
              label: "Total",
              formatter: function (w) {
                // By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
                return 249;
              },
            },
          },
        },
      },
      labels: ["Apples", "Oranges", "Bananas", "Berries"],
      colors: ["#089bab", "#FC9F5B", "#75DDDD", "#ffb57e"],
    },
    series: [44, 55, 67, 83],
  };

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
                <Chart
                  options={chart1.options}
                  series={chart1.series}
                  type="line"
                  height="350"
                />
              </div>
            </div>
            <div className="iq-card">
              <div className="iq-card-header d-flex justify-content-between">
                <div className="iq-header-title">
                  <h4 className="card-title">Column Chart</h4>
                </div>
              </div>
              <div className="iq-card-body">
                <Chart
                  options={chart2.options}
                  series={chart2.series}
                  type="bar"
                  height="350"
                />
              </div>
            </div>
            <div className="iq-card">
              <div className="iq-card-header d-flex justify-content-between">
                <div className="iq-header-title">
                  <h4 className="card-title">Mixes Chart</h4>
                </div>
              </div>
              <div className="iq-card-body">
                <Chart
                  options={chart3.options}
                  series={chart3.series}
                  type="bar"
                  height="350"
                />
              </div>
            </div>
            <div className="iq-card">
              <div className="iq-card-header d-flex justify-content-between">
                <div className="iq-header-title">
                  <h4 className="card-title">Bubble Charts</h4>
                </div>
              </div>
              <div className="iq-card-body">
                <Chart
                  options={chart4.options}
                  series={chart4.series}
                  type="bar"
                  height="350"
                />
              </div>
            </div>
            <div className="iq-card">
              <div className="iq-card-header d-flex justify-content-between">
                <div className="iq-header-title">
                  <h4 className="card-title">Pie Charts</h4>
                </div>
              </div>
              <div className="iq-card-body">
                <Chart
                  options={chart5.options}
                  series={chart5.series}
                  type="pie"
                  height="350"
                />
              </div>
            </div>
          </Col>
          <Col sm="12" lg="6">
            <div className="iq-card">
              <div className="iq-card-header d-flex justify-content-between">
                <div className="iq-header-title">
                  <h4 className="card-title">Line Area Chart</h4>
                </div>
              </div>
              <div className="iq-card-body">
                <Chart
                  options={chart6.options}
                  series={chart6.series}
                  type="area"
                  height="350"
                />
              </div>
            </div>
            <div className="iq-card">
              <div className="iq-card-header d-flex justify-content-between">
                <div className="iq-header-title">
                  <h4 className="card-title">Bar Chart</h4>
                </div>
              </div>
              <div className="iq-card-body">
                <Chart
                  options={chart7.options}
                  series={chart7.series}
                  type="bar"
                  height="350"
                />
              </div>
            </div>
            <div className="iq-card">
              <div className="iq-card-header d-flex justify-content-between">
                <div className="iq-header-title">
                  <h4 className="card-title">Candlestick Charts</h4>
                </div>
              </div>
              <div className="iq-card-body">
                <Chart
                  options={chart8.options}
                  series={chart8.series}
                  type="bar"
                  height="350"
                />
              </div>
            </div>
            <div className="iq-card">
              <div className="iq-card-header d-flex justify-content-between">
                <div className="iq-header-title">
                  <h4 className="card-title">Scatter Charts</h4>
                </div>
              </div>
              <div className="iq-card-body">
                <Chart
                  options={chart9.options}
                  series={chart9.series}
                  type="scatter"
                  height="350"
                />
              </div>
            </div>
            <div className="iq-card">
              <div className="iq-card-header d-flex justify-content-between">
                <div className="iq-header-title">
                  <h4 className="card-title">Radial Bar Charts</h4>
                </div>
              </div>
              <div className="iq-card-body">
                <Chart
                  options={chart10.options}
                  series={chart10.series}
                  type="radialBar"
                  height="350"
                />
              </div>
            </div>
          </Col>
        </Row>
    </Fragment>
  );
};

export default ApexChartPage;
