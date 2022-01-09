import React from "react";
import { Line, CategoryScale } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { Chart } from "react-chartjs-2";
import speedResults from "../results.json";

import "./LineChart.css";

const LineChart = ({ viewDate }) => {
  let dateId = speedResults["datesRecorded"][viewDate];

  const data = {
    labels: speedResults[dateId].times.map(function (currentElement) {
      console.log(currentElement);
      let d = new Date(0);
      d.setUTCSeconds(currentElement);

      return d.toLocaleString().split(", ")[1];
    }),

    datasets: [
      {
        label: "Download",
        data: speedResults[dateId].download,
        borderColor: "rgba(255, 0, 0, 1)",
        backgroundColor: "rgba(255, 0, 0, 0.1)",
        fill: true,
      },
      {
        label: "Upload",
        data: speedResults[dateId].upload,
        borderColor: "rgba(0, 0, 255, 1)",
        backgroundColor: "rgba(0, 0, 255, 0.25)",
        fill: true,
      },
      {
        label: "Ping",
        data: speedResults[dateId].ping,
        borderColor: "rgba(75, 0, 130, 1)",
        backgroundColor: "rgba(75, 0, 130, 0.50)",
        fill: true,
      },
    ],
  };

  return (
    <div className="chartBox">
      <Line data={data} />
    </div>
  );
};

export default LineChart;
