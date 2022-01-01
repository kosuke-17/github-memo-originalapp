import LineGraph from "../components/templates/LineGraph";
import GraphCard from "../components/atoms/GraphCard";
import TabCard from "../components/atoms/TabCard";
import { CategoryScale } from "chart.js";
import Chart from "chart.js/auto";
Chart.register(CategoryScale);
import { COMMITCOUNT_QUERY } from "../common/Query";
import { DAY, WEEK, CONTRIBUTIONCALENDARWEEKS } from "../common/Types";
import { getClient } from "../hooks/getClient";

const LineGraphPage: React.FC<CONTRIBUTIONCALENDARWEEKS> = ({
  contributionCalendarWeeks,
}) => {
  return (
    <>
      <TabCard />
      <GraphCard>
        <LineGraph contributionCalendarWeeks={contributionCalendarWeeks} />
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
