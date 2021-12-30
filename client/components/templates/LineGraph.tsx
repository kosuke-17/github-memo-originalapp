import React from "react";
import { Line } from "react-chartjs-2";
import { MONTH_LABEL } from "../../common/MONTH_LABEL";
import { CONTRIBUTIONDAY, CONTRIBUTIONCALENDARWEEKS } from "../../common/Types";

const LineGraph: React.FC<CONTRIBUTIONCALENDARWEEKS> = ({
  contributionCalendarWeeks,
}) => {
  let monthCommitsInYear = new Array<number[]>();
  let totalCommitsInMonth = new Array<number>();

  // 各月ごとにコミット数を分けている
  for (const contributionCalendarWeek of contributionCalendarWeeks) {
    monthCommitsInYear.push(new Array<number>());

    contributionCalendarWeek.map((day: CONTRIBUTIONDAY) => {
      // 1月から10月までの日にちごとのコミット数をプッシュ
      for (let i = 0; i <= 9; i++) {
        if (day.date.includes(`2021-0${i + 1}`)) {
          monthCommitsInYear[i].push(day.contributionCount);
        }
      }
      // 11月と12月の日にちごとのコミット数をプッシュ
      for (let i = 10; i < 12; i++) {
        if (day.date.includes(`2021-${i + 1}`)) {
          monthCommitsInYear[i].push(day.contributionCount);
        }
      }
    });
  }

  // 各月ごとのコミット総数を算出している
  for (let i = 0; i < 12; i++) {
    let sum = monthCommitsInYear[i].reduce(function (
      previousValue: number,
      currentValue: number
    ) {
      return previousValue + currentValue;
    },
    0);
    totalCommitsInMonth.push(sum);
  }

  // ライングラフ用のデータを用意
  const data = {
    labels: MONTH_LABEL,
    datasets: [
      {
        label: "Commit",
        fill: false,
        data: totalCommitsInMonth,
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
