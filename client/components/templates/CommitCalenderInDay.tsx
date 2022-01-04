import { totalCommitsInDay } from "../../hooks/calcCommits";
import { CONTRIBUTIONDAYS } from "../../common/Types";
import CommitCalendarCard from "../atoms/CommitCalendarCard";

type PROPS = {
  contributionCalendarWeeks: [CONTRIBUTIONDAYS];
  currentMonth: string;
};

const CommitCalenderInDay: React.FC<PROPS> = ({
  contributionCalendarWeeks,
  currentMonth,
}) => {
  //各月のコミット数を取得
  const { monthCommitsInYear, commmitDate } = totalCommitsInDay({
    contributionCalendarWeeks,
  });
  console.log(commmitDate);

  return (
    <div className="flex justify-center items-center">
      <div className="w-screen p-8">
        <div className="grid grid-cols-7 gap-2">
          {commmitDate[Number(currentMonth) - 1].map((date) => (
            <CommitCalendarCard key={date}>{date}</CommitCalendarCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CommitCalenderInDay;
