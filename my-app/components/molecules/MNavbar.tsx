import Image from "next/image";
import React from "react";
import { BsList } from "react-icons/bs";
import { logo } from "../../assets";
import useSidebar from "../../hooks/useSidebar";

const MNavbar = () => {
  const { setOpenSidebar, openSidebar } = useSidebar();

  const handleOpenSidebar = () => {
    setOpenSidebar(!openSidebar);
  };

  return (
    <nav className="bg-white fixed top-0 left-0 w-full px-5 py-2 sm:hidden flex justify-between items-center">
      <a className="flex items-center md:pr-9 pr-7">
        <Image
          src={logo}
          layout="fixed"
          width="80"
          alt="moduit Logo"
          loading="lazy"
        />
      </a>
      <a className="cursor-pointer">
        <BsList onClick={handleOpenSidebar} size={24} />
      </a>
    </nav>
  );
};

export default MNavbar;
