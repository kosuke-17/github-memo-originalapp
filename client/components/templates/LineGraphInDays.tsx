import React from "react";
import { Line } from "react-chartjs-2";
import { totalCommitsInDay } from "../../hooks/calcCommits";
import { CONTRIBUTIONCALENDARWEEKS } from "../../common/Types";

const LineGraphInDays: React.FC<CONTRIBUTIONCALENDARWEEKS> = ({
  contributionCalendarWeeks,
}) => {
  //各月のコミット数を取得
  const { monthCommitsInYear, commmitDate } = totalCommitsInDay({
    contributionCalendarWeeks,
  });

  // ライングラフ用のデータを用意
  const data = {
    labels: commmitDate[11],
    datasets: [
      {
        label: "Commit数",
        fill: false,
        data: monthCommitsInYear[11],
        borderColor: "rgba(75,192,192,1)",
        pointBorderWidth: 5,
      },
    ],
  };

  return (
    <div className="w-screen p-8">
      <div className="flex justify-center">
        <Line data={data} />
      </div>
    </div>
  );
};

export default LineGraphInDays;
