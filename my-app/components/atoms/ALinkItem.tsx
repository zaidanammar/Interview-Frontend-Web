import Image from "next/image";
import Link from "next/link";
import React from "react";

type Menu = {
  link: string;
  icon: string;
  title: string;
};

type Props = {
  pathname: string;
  menu: Menu;
};

const ALinkItem = ({ menu, pathname }: Props) => {
  return (
    <Link href={menu.link}>
      <a className="flex gap-4 items-center md:text-sm text-xs font-normal text-textPrimary rounded-lg dark:text-white">
        <Image
          src={menu.icon}
          alt="moduit icon"
          loading="lazy"
          layout="fixed"
        />
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
    </Link>
  );
};

export default ALinkItem;
