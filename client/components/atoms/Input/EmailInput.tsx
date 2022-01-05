import { Input } from "antd";
import { MailOutlined } from "@ant-design/icons";
import React from "react";

type EmailInput_PROPS = {
  setEmail: Function;
};

const EmailInput: React.FC<EmailInput_PROPS> = ({ setEmail }) => {
  return (
    <Input
      onChange={(e) => setEmail(e.target.value)}
      placeholder="メールアドレス"
      prefix={<MailOutlined />}
    />
  );
};

export default EmailInput;
