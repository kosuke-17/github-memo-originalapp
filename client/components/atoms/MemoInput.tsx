import { Input } from "antd";
import { FormOutlined } from "@ant-design/icons";
import React from "react";

const MemoInput: React.FC = () => {
  return <Input placeholder="メモ" prefix={<FormOutlined />} />;
};

export default MemoInput;
