import { COMMITCOUNT_QUERY } from "../../common/Query";
import { DAY, WEEK } from "../../common/Types";
import { getClient } from "../getClient";

const commitsDataFromGithub = async () => {
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

  return contributionCalendarWeeks;
};

export default commitsDataFromGithub;
