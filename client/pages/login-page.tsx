import { useState } from "react";
import LoginCard from "../components/templates/LoginCard";

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const loginClick = () => {
    console.log("ログインクリック");
  };
  return (
    <div>
      <LoginCard loginClick={loginClick} />
    </div>
  );
};

export default LoginPage;
