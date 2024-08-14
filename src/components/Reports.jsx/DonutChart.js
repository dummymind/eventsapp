import Chart from "react-apexcharts";
import React, { useState, useEffect } from "react";
import "./DonutChart.css";
import axios from "axios";

const DonutChart = () => {
  const [eventType, setEventType] = useState([]);
  const [eSeries, setESeries] = useState([]);
  const chartData = {
    options: {
      labels: eventType,

      dataLabels: {
        enabled: false,

        // offsetX: 50000000000000,
        // offsetY: 50000000000000,
      },
      plotOptions: {
        pie: {
          donut: {
            size: "70%",
          },
          //   dataLabels: {
          //     offset: -30,
          //   },
        },
      },

      fill: {
        colors: [
          "#05E907",
          "#1DD7D4",
          "#E9050D",
          "#CADBF8",
          "#CADBF8",
          "#E9050D",
          "#CADBF8",
          "#CADBF8",
          "#CADBF8",
          "#CADBF8",
          "#CADBF8",
        ],
      },
      colors: [
        "#05E907",
        "#1DD7D4",
        "#E9050D",
        "#CADBF8",
        "#CADBF8",
        "#E9050D",
        "#CADBF8",
        "#CADBF8",
        "#CADBF8",
        "#CADBF8",
        "#CADBF8",
      ],

      legend: {
        show: true,
      },
    },
  };

  useEffect(() => {
    // const fetchReportsData = async () => {
    //   try {
    //     const response = await axios.get(
    //       `https://touchmarsapi2024.azurewebsites.net/api/EventDetails/EventType`
    //     );
    //     // console.log(response.data, "response.data");
    //     // setEventType(response.data);
    //   } catch (error) {
    //     console.error("Error fetching reports data:", error);
    //   }
    // }; // no need for this graph
    const fetchSeriesData = async () => {
      try {
        const response = await axios.get(
          ` https://touchmarsapi2024.azurewebsites.net/api/EventDetails`
        );

        const groupedObjects = response.data.reduce((result, obj) => {
          [(result[obj.eventType] = result[obj.eventType] || []).push(obj)];

          return result;
        }, {});

        let objLength = [];
        let objName = [];
        Object.keys(groupedObjects).forEach((ele) => {
          objLength.push(groupedObjects[ele].length);
          objName.push(ele);
        });

        setESeries(objLength);
        setEventType(objName);
      } catch (error) {
        console.error("Error fetching reports data:", error);
      }
    };

    // fetchReportsData();
    fetchSeriesData();
  }, []);

  return (
    <Chart
      options={chartData.options}
      series={eSeries}
      type="donut"
      width={500}
      height={320}
    />
  );
};

export default DonutChart;
