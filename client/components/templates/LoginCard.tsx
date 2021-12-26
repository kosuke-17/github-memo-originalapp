import Card from "../atoms/Card";
import EmailInput from "../atoms/EmailInput";
import LoginButton from "../atoms/LoginButton";
import { GithubOutlined } from "@ant-design/icons";
import React from "react";
import PasswordInput from "../atoms/PasswordInput";
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
          GitHubアカウントをお持ちでない方は<a href="#">こちら</a>
        </div>
      </Card>
    </React.Fragment>
  );
};

export default LoginCard;
