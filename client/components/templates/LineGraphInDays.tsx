import React from "react";
import { Line } from "react-chartjs-2";
import { totalCommitsInDay } from "../../hooks/calcCommits";
import { CONTRIBUTIONDAYS } from "../../common/Types";

type PROPS = {
  contributionCalendarWeeks: [CONTRIBUTIONDAYS];
  currentMonth: string;
};

const LineGraphInDays: React.FC<PROPS> = ({
  contributionCalendarWeeks,
  currentMonth,
}) => {
  //各月のコミット数を取得
  const { monthCommitsInYear, commmitDate } = totalCommitsInDay({
    contributionCalendarWeeks,
  });

  // ライングラフ用のデータを用意
  const data = {
    labels: commmitDate[Number(currentMonth) - 1],
    datasets: [
      {
        label: "Commit数",
        fill: false,
        data: monthCommitsInYear[Number(currentMonth) - 1],
        borderColor: "rgba(75,192,192,1)",
        radius: 0,
      },
    ],
  };
  const options = {
    scales: {
      y: {
        min: 0,
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

export default LineGraphInDays;
