import LineGraph from "../components/templates/LineGraph";
import { CategoryScale } from "chart.js";
import Chart from "chart.js/auto";
import GraphCard from "../components/atoms/GraphCard";
Chart.register(CategoryScale);
import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { COMMITCOUNT_QUERY } from "../common/Query";
import { DAY, WEEK, CONTRIBUTIONCALENDARWEEKS } from "../common/Types";

const LineGraphPage: React.FC<CONTRIBUTIONCALENDARWEEKS> = ({
  contributionCalendarWeeks,
}) => {
  return (
    <GraphCard>
      <LineGraph contributionCalendarWeeks={contributionCalendarWeeks} />
    </GraphCard>
  );
};

export default LineGraphPage;

// コミットデータを取得してpropsとして渡している(コミットデータ：コミット数、コミット日付)
export const getStaticProps = async () => {
  const httpLink = createHttpLink({ uri: process.env.GRAPHQL_ENDPOINT });
  const authLink = setContext((_, { headers }) => {
    return {
      headers: {
        ...headers,
        authorization: `Bearer ${process.env.GITHUB_ACCESS_TOKEN}`,
      },
    };
  });
  const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  });
  const LOGINUSERNAME = "kosuke-17";
  const { data } = await client.query({
    query: COMMITCOUNT_QUERY,
    variables: { user: LOGINUSERNAME },
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
