import React from "react";
import { Line } from "react-chartjs-2";
import { totalCommitsInMonth } from "../hooks/calcCommits";
import { MONTH_LABEL } from "../common/MONTH_LABEL";
import { CONTRIBUTIONCALENDARWEEKS } from "../common/Types";

const LineGraphInMonth: React.FC<CONTRIBUTIONCALENDARWEEKS> = ({
  contributionCalendarWeeks,
}) => {
  //各月のコミット数を取得
  const commitsDataInMonth: number[] = totalCommitsInMonth({
    contributionCalendarWeeks,
  });

  // ライングラフ用のデータを用意
  const data = {
    labels: MONTH_LABEL,
    datasets: [
      {
        label: "Commit数",
        fill: false,
        data: commitsDataInMonth,
        borderColor: "rgba(75,192,192,1)",
        pointBorderWidth: 5,
      },
    ],
  };
  const options = {
    scales: {
      x: {
        display: true,
        title: {
          display: true,
          text: "2021年",
          size: 20,
        },
      },
    },
  };

  return (
    <div className="flex justify-center items-center ">
      <div className="w-screen p-8">
        <div className="flex justify-center">
          <Line options={options} data={data} />
        </div>
      </div>
    </div>
  );
};

export default LineGraphInMonth;
