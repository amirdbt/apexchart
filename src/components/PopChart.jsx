import React, { useState } from "react";
import Chart from "react-apexcharts";

const PopChart = () => {
  const [options, setOptions] = useState({
    chart: {
      background: "#8e8e8e",
      foreColor: "#d1d9ff",
    },
    xaxis: {
      categories: [
        "Kano",
        "Lagos",
        "FCT",
        "Katsina",
        "Kaduna",
        "Imo",
        "Anambra",
        "Ogun",
        "Osun",
        "Ondo",
      ],
    },
    plotOptions: {
      bar: {
        horizontal: false,
      },
    },
    fill: {
      colors: ["#5f5fc4"],
    },
    dataLabels: {
      enabled: false,
    },
    title: {
      text: "Largest States By Population",
      align: "center",
      margin: 20,
      offsetY: 20,
      style: {
        fontSize: "25px",
      },
    },
  });
  const [series] = useState([
    {
      name: "Population",
      data: [
        1004550,
        3000000,
        5400000,
        3230000,
        5000000,
        7654000,
        8900000,
        6544000,
        6888555,
        3909543,
      ],
    },
  ]);
  const onclick = () => {
    setOptions({
      ...options,
      plotOptions: {
        ...options.plotOptions,
        bar: {
          ...options.plotOptions.bar,
          horizontal: !options.plotOptions.bar.horizontal,
        },
      },
    });
  };
  return (
    <div>
      <Chart
        options={options}
        series={series}
        type="bar"
        height="450"
        width="100%"
      />
      <button onClick={onclick}>Change Mode</button>
    </div>
  );
};

export default PopChart;
