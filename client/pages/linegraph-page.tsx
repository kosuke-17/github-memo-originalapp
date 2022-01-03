import LineGraphInMonth from "../components/templates/LineGraphInMonth";
import GraphCard from "../components/atoms/GraphCard";
import TabCard from "../components/atoms/GraphTabCard";
import { CategoryScale } from "chart.js";
import Chart from "chart.js/auto";
Chart.register(CategoryScale);
import { COMMITCOUNT_QUERY } from "../common/Query";
import { DAY, WEEK, CONTRIBUTIONCALENDARWEEKS } from "../common/Types";
import { getClient } from "../hooks/getClient";
import { Select } from "antd";
import { useState } from "react";
import LineGraphInDays from "../components/templates/LineGraphInDays";

const { Option } = Select;

const LineGraphPage: React.FC<CONTRIBUTIONCALENDARWEEKS> = ({
  contributionCalendarWeeks,
}) => {
  // 年、月グラフ用のフラグ
  const [graphCmponent, setGraphCmponent] = useState<string>("year");
  // 各月グラフ用のフラグ
  const [currentMonth, setCurrentMonth] = useState<string>("12");
  // 年か月のグラフを切り替えるためのflag変更処理
  const chngeGraph = (YearOrMonth: string) => {
    setGraphCmponent(YearOrMonth);
  };
  // 各月のグラフを切り替えるためのflag変更処理
  const chngeMonth = (selectedMonth: string) => {
    setCurrentMonth(selectedMonth);
  };

  return (
    <>
      <TabCard />
      <GraphCard>
        <Select
          placeholder="年"
          defaultValue={graphCmponent}
          style={{
            width: 120,
            paddingLeft: 20,
            marginTop: 20,
          }}
          onChange={chngeGraph}
        >
          <Option value="year">年</Option>
          <Option value="month">月</Option>
        </Select>
        {graphCmponent === "year" ? (
          <LineGraphInMonth
            contributionCalendarWeeks={contributionCalendarWeeks}
          />
        ) : (
          <span>
            <Select
              placeholder="年"
              defaultValue={currentMonth}
              style={{
                width: 120,
                paddingLeft: 20,
                marginTop: 20,
              }}
              onChange={chngeMonth}
            >
              <Option value="1">1月</Option>
              <Option value="2">2月</Option>
              <Option value="3">3月</Option>
              <Option value="4">4月</Option>
              <Option value="5">5月</Option>
              <Option value="6">6月</Option>
              <Option value="7">7月</Option>
              <Option value="8">8月</Option>
              <Option value="9">9月</Option>
              <Option value="10">10月</Option>
              <Option value="11">11月</Option>
              <Option value="12">12月</Option>
            </Select>
            <LineGraphInDays
              contributionCalendarWeeks={contributionCalendarWeeks}
              currentMonth={currentMonth}
            />
          </span>
        )}
      </GraphCard>
    </>
  );
};

export default LineGraphPage;

// コミットデータを取得してpropsとして渡している(コミットデータ：コミット数、コミット日付)
export const getStaticProps = async () => {
  const client = getClient();
  const { data } = await client.query({
    query: COMMITCOUNT_QUERY,
    variables: { user: "kosuke-17" },
  });

  const { user } = data;
  const contributionCalendarWeeks: WEEK =
    user.contributionsCollection.contributionCalendar.weeks.map(
      (week: WEEK) => {
        // 日にちごとのコミット数を週単位で配列に格納
        const weekcommitsData = week.contributionDays.map((day: DAY) => {
          return day;
        });
        return weekcommitsData;
      }
    );
  return {
    props: { contributionCalendarWeeks },
  };
};
