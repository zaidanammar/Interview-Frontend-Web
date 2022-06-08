import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { logo, q1, q2 } from "../assets";

const menus = [
  { title: "Question 1", link: "question-one", icon: q1 },
  { title: "Question 2", link: "question-two", icon: q2 },
];

const Sidebar = () => {
  const { pathname } = useRouter();
  return (
    <aside className="w-64 h-screen fixed" aria-label="Sidebar">
      <div className="bg-white overflow-y-auto h-full md:p-9 md:pr-0 p-7 pr-0 shadow-2xl rounded-r-2xl dark:bg-gray-800">
        <a className="flex items-center md:pr-9 pr-7">
          <Image
            src={logo}
            layout="fixed"
            width="120"
            alt="moduit Logo"
            loading="lazy"
          />
        </a>
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
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
