import { Input } from "antd";
import { MailOutlined } from "@ant-design/icons";
import React from "react";

const EmailInput: React.FC = () => {
  return <Input placeholder="メールアドレス" prefix={<MailOutlined />} />;
};

export default EmailInput;
