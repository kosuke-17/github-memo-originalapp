import {
  PushpinOutlined,
  LineChartOutlined,
  TeamOutlined,
  LoginOutlined,
  LogoutOutlined,
} from "@ant-design/icons";

// ヘッダーのナビゲーションデータ
export const NAVITEMS = [
  {
    text: "pins",
    icon: <PushpinOutlined />,
    link: "/pinnedItems-page",
  },
  {
    text: "graph",
    icon: <LineChartOutlined />,
    link: "/linegraph-page",
  },
  {
    text: "about",
    icon: <TeamOutlined />,
    link: "/",
  },
  { text: "ログイン", icon: <LoginOutlined />, link: "/login-page" },

  { text: "ログアウト", icon: <LogoutOutlined />, link: "/logout-page" },
];
