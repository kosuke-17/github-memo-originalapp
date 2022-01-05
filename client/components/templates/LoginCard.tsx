import Card from "../atoms/Card/Card";
import EmailInput from "../atoms/Input/EmailInput";
import LoginButton from "../atoms/Button/LoginButton";
import { GithubOutlined } from "@ant-design/icons";
import React from "react";
import PasswordInput from "../atoms/Input/PasswordInput";
interface PROPS {
  loginClick: Function;
}
const LoginCard: React.FC<PROPS> = ({ loginClick }) => {
  return (
    <React.Fragment>
      <Card>
        <div>
          <p className="font-bold text-4xl bg-gray-400 p-4 rounded-md">
            <GithubOutlined className="text-7xl" />
            GitHub ログイン
          </p>
          <p className="">
            *GitHubアカウントに登録いているパスワードとメールアドレスを入力してください
          </p>
          <div className="flex justify-center">
            <form action="#" className="w-1/2">
              <EmailInput />
              <PasswordInput />
              <LoginButton name="ログイン" loginClick={loginClick} />
            </form>
          </div>
          GitHubアカウントをお持ちでない方は
          <a href="#" className="hover:text-gray-400">
            こちら
          </a>
        </div>
      </Card>
    </React.Fragment>
  );
};

export default LoginCard;
