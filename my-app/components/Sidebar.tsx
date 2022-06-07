import Image from "next/image";
import React from "react";
import { logo, q1 } from "../assets";

const Sidebar = () => {
  return (
    <aside className="w-64 h-screen" aria-label="Sidebar">
      <div className="bg-white overflow-y-auto p-9 h-full shadow-2xl rounded-r-2xl dark:bg-gray-800">
        <a
          href="https://flowbite.com"
          className="flex items-center pl-2.5 mb-5"
        >
          <Image src={logo} width="120" alt="moduit Logo" />
        </a>
        <ul className="space-y-2 mt-16">
          <li>
            <a
              href="#"
              className="flex gap-4 items-center md:text-sm text-xs font-normal text-gray-900 rounded-lg dark:text-white"
            >
              <Image src={q1} className="h-6 mr-3 sm:h-7" alt="moduit icon" />
              <span className="text-gray-400 hover:text-black">Question 1</span>
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
