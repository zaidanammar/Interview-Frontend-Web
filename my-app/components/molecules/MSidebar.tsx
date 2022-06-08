import Image from "next/image";
import { useRouter } from "next/router";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { logo, q1, q2 } from "../../assets";
import ALinkItem from "../atoms/ALinkItem";
import useSidebar from "../../hooks/useSidebar";

const menus = [
  { title: "Question 1", link: "/question-one", icon: q1 },
  { title: "Question 2", link: "/question-two", icon: q2 },
];

const MSidebar = () => {
  const { pathname } = useRouter();
  const { openSidebar, setOpenSidebar } = useSidebar();

  const handleOpenSidebar = () => {
    setOpenSidebar(!openSidebar);
  };

  return (
    <aside
      className={
        "sm:w-64 w-full h-full fixed sm:block z-20 " +
        (openSidebar ? "sm:block transform duration-500 ease-in-out" : " sm:translate-x-0 -translate-x-[700px] transform duration-500 ease-in-out")
      }
      aria-label="Sidebar"
    >
      <div className="bg-white overflow-y-auto h-full md:p-9 md:pr-0 p-7 pr-0 shadow-2xl rounded-r-2xl dark:bg-gray-800">
        <nav className="flex justify-between items-start md:pr-0 pr-7">
          <a className="flex items-center">
            <Image
              src={logo}
              layout="fixed"
              width="120"
              alt="moduit Logo"
              loading="lazy"
            />
          </a>
          <a className="sm:hidden cursor-pointer">
            <AiOutlineCloseCircle size={24} onClick={handleOpenSidebar} />
          </a>
        </nav>
        <ul className="space-y-2 mt-16">
          {menus.map((menu, idx) => (
            <li
              key={idx}
              className={
                "my-5 " +
                (pathname.indexOf(menu.link) !== -1 &&
                  "border-r-[3px] border-r-blue-600")
              }
            >
              <ALinkItem menu={menu} pathname={pathname} handleOpenSidebar={handleOpenSidebar} />
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default MSidebar;
