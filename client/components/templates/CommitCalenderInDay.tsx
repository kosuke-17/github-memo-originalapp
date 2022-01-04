import { commitDataBySelectedMonth } from "../../hooks/calcCommits";
import { CommitCalenderInDay_PROPS, CONTRIBUTIONDAY } from "../../common/Types";
import CommitCalendarCard from "../atoms/CommitCalendarCard";
import React, { useState } from "react";
import ModalButton from "../atoms/ModalButton";
import ModalScreen from "../atoms/ModalScreen";
import { Card } from "antd";
import MemoInput from "../atoms/MemoInput";

const CommitCalenderInDay: React.FC<CommitCalenderInDay_PROPS> = ({
  contributionCalendarWeeks,
  currentMonth,
}) => {
  const [openCommitDetail, setOpenCommitDetail] = useState(true);
  // const [selectedDay, setSelectedDay] = useState({});

  const chngeModal = () => {
    setOpenCommitDetail(!openCommitDetail);
  };
  // const selectCommitDay = ({ commitData }: CONTRIBUTIONDAY) => {
  //   setSelectedDay(commitData);
  // };

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
              <ModalButton chngeModal={chngeModal}>
                <CommitCalendarCard dayColor={day.color}>
                  {day.date}日
                  <hr />
                  <div>C:{day.contributionCount}</div>
                </CommitCalendarCard>
              </ModalButton>
            </div>
          ))}
        </div>
        {openCommitDetail && (
          <React.Fragment>
            <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50">
              <Card>
                <MemoInput />
                <ModalButton chngeModal={chngeModal}>戻る</ModalButton>
              </Card>
            </div>
            <ModalScreen />
          </React.Fragment>
        )}
      </div>
    </div>
  );
};

export default CommitCalenderInDay;
