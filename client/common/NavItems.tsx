import {
  LineChartOutlined,
  TeamOutlined,
  LoginOutlined,
  LogoutOutlined,
} from "@ant-design/icons";

// ヘッダーのナビゲーションデータ
export const NAVITEMS = [
  {
    text: "graph",
    icon: <LineChartOutlined />,
    link: "/",
  },
  {
    text: "about",
    icon: <TeamOutlined />,
    link: "/",
  },
  { text: "ログイン", icon: <LoginOutlined />, link: "/login-page" },

  { text: "ログアウト", icon: <LogoutOutlined />, link: "/login-page" },
];
