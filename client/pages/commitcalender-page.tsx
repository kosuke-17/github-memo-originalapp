import GraphCard from "../components/atoms/GraphCard";
import TabCard from "../components/atoms/GraphTabCard";
import { CONTRIBUTIONCALENDARWEEKS } from "../common/Types";
import commitsDataFromGithub from "../hooks/api/commitsDataFromGithub";
import CommitCalenderInDay from "../components/templates/CommitCalenderInDay";
import { useState } from "react";
import { Select } from "antd";
const { Option } = Select;

const LineGraphPage: React.FC<CONTRIBUTIONCALENDARWEEKS> = ({
  contributionCalendarWeeks,
}) => {
  // 各月コミットカウント用のフラグ
  const [currentMonth, setCurrentMonth] = useState<string>("12");
  const chngeMonth = (selectedMonth: string) => {
    setCurrentMonth(selectedMonth);
  };
  return (
    <>
      <TabCard />
      <GraphCard>
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
        <span className="pl-4 text-sm lg:text-lg">C: Commit数</span>

        <CommitCalenderInDay
          contributionCalendarWeeks={contributionCalendarWeeks}
          currentMonth={currentMonth}
        />
      </GraphCard>
    </>
  );
};

export default LineGraphPage;

// コミットデータを取得してpropsとして渡している(コミットデータ：コミット数、コミット日付)
export const getStaticProps = async () => {
  const contributionCalendarWeeks = await commitsDataFromGithub();
  return {
    props: { contributionCalendarWeeks },
  };
};
