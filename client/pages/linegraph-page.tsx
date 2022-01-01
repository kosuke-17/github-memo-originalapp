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
  const [graphCmponent, setGraphCmponent] = useState<string>("year");
  const chngeGraph = (YearOrMonth: string) => {
    setGraphCmponent(YearOrMonth);
  };

  return (
    <>
      <TabCard />
      <GraphCard>
        <Select
          placeholder="月"
          defaultValue={graphCmponent}
          style={{
            width: 120,
            paddingLeft: 20,
            marginTop: 20,
          }}
          onChange={chngeGraph}
        >
          <Option value="year">月</Option>
          <Option value="month">年</Option>
        </Select>
        {graphCmponent === "year" ? (
          <div className="flex justify-center items-center ">
            <LineGraphInMonth
              contributionCalendarWeeks={contributionCalendarWeeks}
            />
          </div>
        ) : (
          <div className="flex justify-center items-center ">
            <LineGraphInDays
              contributionCalendarWeeks={contributionCalendarWeeks}
            />
          </div>
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
