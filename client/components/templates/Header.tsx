import Image from "next/image";
import Link from "next/link";
import NavItem from "../atoms/navItem";
import { NAVITEMS } from "../../common/NavItems";

const Header: React.FC = () => {
  return (
    <div className="flex justify-between bg-gray-300 ">
      {/* サイトロゴ */}
      <div className="pt-3 pl-4 w-1/4">
        <Link href="/">
          <a>
            <Image src="/logo.png" alt="ホーム画像" width={100} height={30} />
          </a>
        </Link>
      </div>
      {/* ヘッダーナビゲーション */}
      <div className="flex justify-end pt-3 pr-11">
        {NAVITEMS.map((navItem, index) => {
          return (
            <div className="px-2 text-black" key={index}>
              <NavItem {...navItem} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Header;
