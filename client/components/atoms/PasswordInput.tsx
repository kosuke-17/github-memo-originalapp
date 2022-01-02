import { Input } from "antd";
import { LockOutlined } from "@ant-design/icons";
import React from "react";

const PasswordInput: React.FC = () => {
  return <Input.Password placeholder="パスワード" prefix={<LockOutlined />} />;
};

export default PasswordInput;
