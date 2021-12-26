import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import NavItem from "../atoms/navItem";
import { NAVITEMS } from "../../common/NavItems";
import HumbergerMenu from "../atoms/HumbergerMenu";
import ModalScreen from "../atoms/ModalScreen";
import Card from "../atoms/Card";
import CloseButton from "../atoms/CloseButton";

const Header: React.FC = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const chngeModal = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <div className="flex justify-between bg-gray-300  ">
      {/* サイトロゴ */}
      <div className="pt-3 pl-4 w-1/4">
        <Link href="/">
          <a>
            <Image src="/logo.png" alt="ホーム画像" width={100} height={30} />
          </a>
        </Link>
      </div>
      {/* ヘッダーナビゲーション(width768px以上) */}
      <div className="flex justify-end items-center pt-3">
        <div className="flex  invisible md:visible">
          {NAVITEMS.map((navItem, index) => {
            return (
              <div className="px-2 text-black" key={index}>
                <NavItem {...navItem} />
              </div>
            );
          })}
        </div>
        {/* ハンバーガーメニュー(width768px以下) */}
        {/* trueならナビゲーションモーダルを表示させる */}
        {openMenu ? (
          <React.Fragment>
            <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50">
              <Card>
                <div>
                  {NAVITEMS.map((navItem, index) => {
                    return (
                      <div className="py-2 text-black" key={index}>
                        <CloseButton chngeModal={chngeModal}>
                          <NavItem {...navItem} />
                          <hr />
                        </CloseButton>
                      </div>
                    );
                  })}
                  <CloseButton chngeModal={chngeModal}>
                    <span className="p-1 border-2 hover:text-gray-300 hover:border-gray-400">
                      戻る
                    </span>
                  </CloseButton>
                </div>
              </Card>
            </div>
            {/* 背景が薄黒くなる */}
            <ModalScreen />
          </React.Fragment>
        ) : (
          <div className="pb-2 pr-8 md:invisible">
            <button onClick={() => chngeModal()}>
              <HumbergerMenu />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
