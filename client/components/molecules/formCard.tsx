import { Card } from "antd";
import React from "react";

type PROPS = {
  children: React.ReactNode;
  title: string;
};

const FormCard: React.FC<PROPS> = ({ children, title }) => {
  return (
    <Card title={title} bordered={false} style={{ width: 300 }}>
      {children}
    </Card>
  );
};

export default FormCard;
