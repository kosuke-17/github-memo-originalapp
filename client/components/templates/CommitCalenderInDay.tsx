import { commitDataBySelectedMonth } from "../../hooks/calcCommits";
import { CommitCalenderInDay_PROPS } from "../../common/Types";
import CommitCalendarCard from "../atoms/CommitCalendarCard";

const CommitCalenderInDay: React.FC<CommitCalenderInDay_PROPS> = ({
  contributionCalendarWeeks,
  currentMonth,
}) => {
  //各月のコミット数を取得
  const commitDatasByMonth = commitDataBySelectedMonth({
    contributionCalendarWeeks,
    currentMonth,
  });

  return (
    <div className="flex justify-center items-center">
      <div className="w-screen p-6">
        <div className="grid grid-cols-3 lg:grid-cols-7 gap-3">
          {commitDatasByMonth.map((day) => (
            <div key={day.date}>
              <CommitCalendarCard dayColor={day.color}>
                {day.date}日
                <hr />
                <div>C:{day.contributionCount}</div>
              </CommitCalendarCard>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CommitCalenderInDay;
