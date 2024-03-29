import Link from "next/link";
import { FC, useState } from "react";
import { FaAlignJustify } from "react-icons/fa";
import menus from "./menu.json";
import SocialIcons from "./social-icons";
import useScrollTop from "@/hooks/use-scroll-top";

const MobileMenu: FC = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const toggle = () => setDrawerOpen(!isDrawerOpen);
  const { handleScrollTop } = useScrollTop();
  return (
    <div className="block md:hidden">
      <div className="drawer">
        <input
          id="my-drawer"
          type="checkbox"
          className="drawer-toggle"
          checked={isDrawerOpen}
          onChange={toggle}
        />
        <div className="drawer-content">
          <label
            htmlFor="my-drawer"
            className="drawer-button text-2xl text-slate-400 hover:text-slate-600 cursor-pointer"
          >
            <FaAlignJustify />
          </label>
        </div>
        {/* <div className="drawer-side">
            <label
               htmlFor="my-drawer"
               aria-label="close sidebar"
               className="drawer-overlay"
            ></label>
            <div className="menu p-4 w-80 min-h-full bg-base-200 space-y-6">
               <h3 className="text-3xl font-semibold">SIDEBAR</h3>
               <ul className="-ml-4">
               <li
                  onClick={() => {
                     handleScrollTop();
                     toggle();
                  }}
               >
                  <Link
                     href="#"
                     scroll={false}
                     className="hover:rounded-l-none rounded-l-none text-lg"
                  >
                     Home
                  </Link>
               </li>
               {menus.map((menu) => (
                  <li key={menu.link}>
                     <Link
                     href={menu.link}
                     scroll={false}
                     className="hover:rounded-l-none rounded-l-none text-lg"
                     onClick={toggle}
                     >
                     {menu.label}
                     </Link>
                  </li>
               ))}
               </ul>
               <div className="block md:hidden">
               <SocialIcons />
               </div>
            </div>
        </div> */}
      </div>
    </div>
  );
};

export default MobileMenu;
