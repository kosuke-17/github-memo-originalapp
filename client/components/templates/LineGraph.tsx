import React from "react";
import { Line } from "react-chartjs-2";
import { totalCommitsInMonth } from "../../common/hooks/calcCommitsInMonth";
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
  // const options = {
  //   responsive: true,
  //   plugins: {
  //     legend: {
  //       position: "top" as const,
  //     },
  //   },
  //   scales: {
  //     y: {
  //       type: "linear" as const,
  //       display: true,
  //       scaleLabel: {
  //         display: true,
  //         labelString: "実数(kg)",
  //       },
  //       position: "left" as const,
  //     },
  //   },
  // };

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
