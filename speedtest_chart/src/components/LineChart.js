import React from "react";
import { Line, CategoryScale } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { Chart } from "react-chartjs-2";
import speed_data from "../results.json";
import "./LineChart.css";

const data = {
  labels: speed_data.time.map(function (currentElement) {
    let d = new Date(0);
    d.setUTCSeconds(currentElement);

    return d.toLocaleString();
  }),

  datasets: [
    {
      label: "Download",
      data: speed_data.download,
      borderColor: "rgba(255, 0, 0, 1)",
      backgroundColor: "rgba(255, 0, 0, 0.1)",
      fill: true,
    },
    {
      label: "Upload",
      data: speed_data.upload,
      borderColor: "rgba(0, 0, 255, 1)",
      backgroundColor: "rgba(0, 0, 255, 0.25)",
      fill: true,
    },
    {
      label: "Ping",
      data: speed_data.ping,
      borderColor: "rgba(75, 0, 130, 1)",
      backgroundColor: "rgba(75, 0, 130, 0.50)",
      fill: true,
    },
  ],
};

const BarChart = () => {
  console.log(speed_data);
  return (
    <div className="chartBox">
      <Line data={data} />;
    </div>
  );
};

export default BarChart;
