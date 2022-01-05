import Router from "next/router";
import React, { useState } from "react";
import LoginCard from "../components/templates/LoginCard";

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const loginClick = () => {
    alert(`email:${email},password:${password}でログインしました`);
    Router.push("/linegraph-page");
  };
  return (
    <div>
      <LoginCard
        loginClick={loginClick}
        setEmail={setEmail}
        setPassword={setPassword}
      />
    </div>
  );
};

export default LoginPage;
