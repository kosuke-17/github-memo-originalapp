import { Input } from "antd";
import { LockOutlined } from "@ant-design/icons";
import React from "react";

type PasswordInput_PROPS = {
  setPassword: Function;
};

const PasswordInput: React.FC<PasswordInput_PROPS> = ({ setPassword }) => {
  return (
    <Input.Password
      onChange={(e) => setPassword(e.target.value)}
      placeholder="パスワード"
      prefix={<LockOutlined />}
    />
  );
};

export default PasswordInput;
