import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

type Menu = {
  link: string;
  icon: string;
  title: string;
};

type Props = {
  pathname: string;
  menu: Menu;
  handleOpenSidebar: () => void;
};

const ALinkItem = ({ menu, pathname, handleOpenSidebar }: Props) => {
  const router = useRouter();

  const pushLink = () => {
    router.push(menu.link);
    handleOpenSidebar();
  };
  return (
    <a
      onClick={pushLink}
      className="flex gap-4 items-center md:text-sm text-xs font-normal text-textPrimary rounded-lg cursor-pointer"
    >
      <Image src={menu.icon} alt="moduit icon" loading="lazy" layout="fixed" />
      <span
        className={
          "text-center whitespace-nowrap " +
          (pathname.indexOf(menu.link) !== -1
            ? "text-textPrimary"
            : "text-textSecondary hover:text-textPrimary")
        }
      >
        {menu.title}
      </span>
    </a>
  );
};

export default ALinkItem;
