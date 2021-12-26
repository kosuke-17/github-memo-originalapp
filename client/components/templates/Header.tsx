import {
  LineChartOutlined,
  TeamOutlined,
  LoginOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import Image from "next/image";
import Link from "next/link";
import NavItem from "../atoms/navItem";

const navItems = [
  { text: "ログイン", icon: <LoginOutlined />, link: "/login-page" },

  { text: "ログアウト", icon: <LogoutOutlined />, link: "/login-page" },
  {
    text: "company",
    icon: <TeamOutlined />,
    link: "/about-page",
  },
  {
    text: "about",
    icon: <LineChartOutlined />,
    link: "/about-page",
  },
];

const Header: React.FC = () => {
  return (
    <div className="flex justify-between">
      <div className="pt-3 pl-4  w-1/4">
        <Link href="/">
          <Image src="/logo.png" alt="ホーム画像" width={100} height={30} />
        </Link>
      </div>
      <div className="flex justify-end pt-3 pr-11">
        {navItems.map((navItem, index) => {
          return (
            <div className="px-2" key={index}>
              <NavItem {...navItem} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Header;
