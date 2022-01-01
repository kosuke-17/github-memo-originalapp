import React from "react";
import { Line } from "react-chartjs-2";
import { totalCommitsInMonth } from "../../hooks/calcCommits";
import { MONTH_LABEL } from "../../common/MONTH_LABEL";
import { CONTRIBUTIONCALENDARWEEKS } from "../../common/Types";

const LineGraph: React.FC<CONTRIBUTIONCALENDARWEEKS> = ({
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
        label: "Commit",
        fill: false,
        data: commitsDataInMonth,
        borderColor: "rgba(75,192,192,1)",
        pointBorderWidth: 5,
      },
    ],
  };

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
