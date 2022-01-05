import { Button, Card } from "antd";
import Router from "next/router";
import ModalScreen from "../components/atoms/ModalScreen";

// ログアウトページ
const LogoutPage = () => {
  const logoutYes = () => {
    Router.push("/login-page");
  };
  const logoutNo = () => {
    alert("グラフページに戻ります");
    Router.push("/linegraph-page");
  };

  return (
    <>
      <span className="z-50">
        <Card title="本当にログアウトしますか?">
          <Button onClick={logoutYes}>はい</Button>
          <Button onClick={logoutNo}>いいえ</Button>
        </Card>
      </span>
      <ModalScreen />
    </>
  );
};

export default LogoutPage;
