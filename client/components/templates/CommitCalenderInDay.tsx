import { commitDataBySelectedMonth } from "../../hooks/calcCommits";
import { CommitCalenderInDay_PROPS, CONTRIBUTIONDAY } from "../../common/Types";
import CommitCalendarCard from "../atoms/Card/CommitCalendarCard";
import React, { useState } from "react";
import ModalScreen from "../atoms/ModalScreen";
import { Button, Form, Input, Rate } from "antd";
import MemoInput from "../atoms/Input/MemoInput";
import FormCard from "../molecules/formCard";
import OpenModalBtn from "../atoms/Button/OpenModalBtn";
import CloseModalBtn from "../atoms/Button/CloseModalBtn";

const CommitCalenderInDay: React.FC<CommitCalenderInDay_PROPS> = ({
  contributionCalendarWeeks,
  currentMonth,
}) => {
  //詳細画面表示用のフラグ
  const [openCommitDetail, setOpenCommitDetail] = useState(false);
  const [commitDate, setCommitDate] = useState<string>("");
  const [memo, setMemo] = useState<string>("");
  const [commitContributonCount, setCommitContributonCount] =
    useState<number>(0);
  const [selectedRate, setSelectedRate] = useState<number>(0);

  // 選択した曜日のコミット数と日付をステートに追加
  const addCommitData = (day: CONTRIBUTIONDAY) => {
    if (Number(day.date) < 10) {
      setCommitDate(currentMonth + "-0" + day.date);
    } else {
      setCommitDate(currentMonth + "-" + day.date);
    }
    setCommitContributonCount(day.contributionCount);
  };

  // 詳細モーダルの表示
  const openModal = (day: CONTRIBUTIONDAY) => {
    setOpenCommitDetail(!openCommitDetail);
    // ステートにコミットデータ追加
    addCommitData(day);
  };
  // 詳細モーダルの非表示
  const closeModal = () => {
    setOpenCommitDetail(!openCommitDetail);
    // ステートを初期化
    setCommitDate("");
    setCommitContributonCount(0);
    setSelectedRate(0);
    setMemo("");
  };

  //各月のコミット数を取得
  const commitDatasByMonth = commitDataBySelectedMonth({
    contributionCalendarWeeks,
    currentMonth,
  });
  // console.log(selectedRate);
  const submitCommitdata = () => {
    console.log(commitDate, commitContributonCount, selectedRate, memo);
  };

  return (
    <div className="flex justify-center items-center">
      <div className="w-screen p-6">
        <div className="grid grid-cols-3 lg:grid-cols-7 gap-3">
          {commitDatasByMonth.map((day) => (
            <div key={day.date}>
              <OpenModalBtn openModal={openModal} day={day}>
                <CommitCalendarCard dayColor={day.color}>
                  {day.date}日
                  <hr />
                  <div>C:{day.contributionCount}</div>
                </CommitCalendarCard>
              </OpenModalBtn>
            </div>
          ))}
        </div>
        {/* 詳細モーダルの内容 */}
        {openCommitDetail && (
          <React.Fragment>
            <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50">
              <FormCard title={`${commitDate}のコミット評価`}>
                コミット数:{commitContributonCount}
                <Form
                  name="validate_other"
                  initialValues={{
                    rate: selectedRate,
                  }}
                >
                  <Form.Item name="rate" label="自己評価">
                    <Rate
                      onChange={(selectedStar) => setSelectedRate(selectedStar)}
                    />
                  </Form.Item>
                  <MemoInput setMemo={setMemo} />

                  <div className="mt-2 ">
                    <Button
                      type="primary"
                      htmlType="button"
                      onClick={submitCommitdata}
                    >
                      保存
                    </Button>
                    <CloseModalBtn closeModal={closeModal}>戻る</CloseModalBtn>
                  </div>
                </Form>
              </FormCard>
            </div>
            <ModalScreen />
          </React.Fragment>
        )}
      </div>
    </div>
  );
};

export default CommitCalenderInDay;
