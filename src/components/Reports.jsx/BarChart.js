import Chart from "react-apexcharts";
import React, { useState, useEffect } from "react";
import "./DonutChart.css";
import axios from "axios";

const BarChart = () => {
  //   const [eventType, setEventType] = useState([]);
  const [eSeries, setESeries] = useState([]);
  const [xAxies, setXAxies] = useState([]);
  var options = {
    chart: {
      type: "bar",
      height: 350,
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "30%",
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
    xaxis: {
      labels: {
        rotate: -45,
        rotateAlways: true,
        trim: true,
      },
      categories: xAxies,
    },
    yaxis: {
      title: {
        text: "",
      },
    },
    fill: {
      colors: ["#00008B"],
      opacity: 1,
    },

    tooltip: {
      enabled: false,
    },
  };

  useEffect(() => {
    const fetchSeriesData = async () => {
      try {
        const response = await axios.get(
          ` https://touchmarsapi2024.azurewebsites.net/api/EventDetails`
        );

        const groupedObjects = response.data.reduce((result, obj) => {
          [(result[obj.requestedBy] = result[obj.requestedBy] || []).push(obj)];

          return result;
        }, {});

        let objLength = [];
        let objName = [];
        Object.keys(groupedObjects).forEach((ele) => {
          objLength.push(groupedObjects[ele].length);
          objName.push(ele);
        });
        // console.log("groupedObjects", groupedObjects, objLength, objName);
        setESeries([
          {
            name: "",
            data: objLength,
          },
        ]);

        setXAxies(objName);
        // setEventType(objName);
      } catch (error) {
        console.error("Error fetching reports data:", error);
      }
    };

    // fetchReportsData();
    fetchSeriesData();
  }, []);

  return <Chart options={options} series={eSeries} type="bar" />;
};

export default BarChart;
