import React from "react";
import { Line } from "react-chartjs-2";
import { totalCommitsInYear } from "../../hooks/calcCommits";
import { MONTHES_LABEL } from "../../common/MONTHES_LABEL";
import { CONTRIBUTIONCALENDARWEEKS } from "../../common/Types";

const LineGraphInYear: React.FC<CONTRIBUTIONCALENDARWEEKS> = ({
  contributionCalendarWeeks,
}) => {
  //各月のコミット数を取得
  const commitsDataInYear: number[] = totalCommitsInYear({
    contributionCalendarWeeks,
  });

  // ライングラフ用のデータを用意
  const data = {
    labels: MONTHES_LABEL,
    datasets: [
      {
        label: "Commit数",
        fill: false,
        data: commitsDataInYear,
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

export default LineGraphInYear;
