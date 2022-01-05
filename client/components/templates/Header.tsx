import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import NavItem from "../atoms/NavItem";
import { NAVITEMS } from "../../common/NAVITEMS";
import HumbergerMenu from "../atoms/HumbergerMenu";
import ModalScreen from "../atoms/ModalScreen";
import Card from "../atoms/Card/Card";
import ChangeModalBtn from "../atoms/Button/ChangeModalBtn";

const Header: React.FC = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const changeModal = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <div className="flex justify-between bg-gray-300 ">
      {/* サイトロゴ */}
      <div className="pt-5 pl-4 w-1/4">
        <Link href="/">
          <a className="text-3xl text-black hover:border-gray-400">
            ラクラクGitHub
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
                        <ChangeModalBtn changeModal={changeModal}>
                          <NavItem {...navItem} />
                          <hr />
                        </ChangeModalBtn>
                      </div>
                    );
                  })}
                  <ChangeModalBtn changeModal={changeModal}>
                    <span className="p-1 border-2 hover:text-gray-300 hover:border-gray-400">
                      戻る
                    </span>
                  </ChangeModalBtn>
                </div>
              </Card>
            </div>
            {/* 背景が薄黒くなる */}
            <ModalScreen />
          </React.Fragment>
        ) : (
          <div className="pb-2 pr-8 md:invisible">
            <ChangeModalBtn changeModal={changeModal}>
              <HumbergerMenu />
            </ChangeModalBtn>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
