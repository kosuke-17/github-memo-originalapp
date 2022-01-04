import { CONTRIBUTIONCALENDARWEEKS, CONTRIBUTIONDAY } from "../common/Types";
import moment from "moment";

export const totalCommitsInYear = ({
  contributionCalendarWeeks,
}: CONTRIBUTIONCALENDARWEEKS): number[] => {
  let monthCommitsInYear = new Array<number[]>();
  let totalCommitsInMonth = new Array<number>();

  // 各月ごとにコミット数を分けている
  for (const contributionCalendarWeek of contributionCalendarWeeks) {
    // 12月分の配列が存在しなければ追加する
    if (monthCommitsInYear.length < 12) {
      monthCommitsInYear.push(new Array<number>());
    }

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

  // 各月のコミット数を返す
  return totalCommitsInMonth;
};

// 各月のコミット数を算出
export const totalCommitsInDay = ({
  contributionCalendarWeeks,
}: CONTRIBUTIONCALENDARWEEKS) => {
  let monthCommitsInYear = new Array<number[]>();
  let commmitDate = new Array<string[]>();

  // 各月ごとにコミット数を分けている
  for (const contributionCalendarWeek of contributionCalendarWeeks) {
    // 12月分の配列が存在しなければ追加する
    if (monthCommitsInYear.length < 12) {
      monthCommitsInYear.push(new Array<number>());
      commmitDate.push(new Array<string>());
    }

    contributionCalendarWeek.map((day: CONTRIBUTIONDAY) => {
      // 1月から10月までの日にちごとのコミット数をプッシュ
      for (let i = 0; i <= 8; i++) {
        if (day.date.includes(`2021-0${i + 1}`)) {
          monthCommitsInYear[i].push(day.contributionCount);
          commmitDate[i].push(moment(day.date).format("D"));
        }
      }
      // 11月と12月の日にちごとのコミット数をプッシュ
      for (let i = 9; i <= 11; i++) {
        if (day.date.includes(`2021-${i + 1}`)) {
          monthCommitsInYear[i].push(day.contributionCount);
          commmitDate[i].push(moment(day.date).format("D"));
        }
      }
    });
  }
  // 各月のコミット数を返す
  return { monthCommitsInYear, commmitDate };
};
