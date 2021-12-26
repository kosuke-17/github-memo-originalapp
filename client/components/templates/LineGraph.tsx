import React from "react";
import { Line } from "react-chartjs-2";

const data = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
    {
      label: "Commit",
      fill: false,
      data: [3, 10, 21, 31, 34, 40, 48],
      borderColor: "rgba(75,192,192,1)",
      pointBorderWidth: 5,
    },
  ],
};

const LineGraph = () => {
  return (
    <div className="w-screen p-10">
      <h2>Commit数</h2>
      <div className="flex justify-center">
        <Line data={data} />
      </div>
    </div>
  );
};

export default LineGraph;
