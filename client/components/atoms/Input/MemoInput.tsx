import { Input } from "antd";
import React from "react";
import { MemoInput_PROPS } from "../../../common/Types";

const MemoInput: React.FC<MemoInput_PROPS> = ({ setMemo }) => {
  return (
    <Input.TextArea
      onChange={(e) => setMemo(e.target.value)}
      placeholder="メモ"
    />
  );
};

export default MemoInput;
