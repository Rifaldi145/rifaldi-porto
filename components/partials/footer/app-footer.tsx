import { FC } from "react";
import SocialIcons from "../header/social-icons";
import { Copyright } from "./copyright";

const AppFooter: FC = () => {
  return (
    <div className="main-padding mt-28 ">
      <div className="hidden md:flex justify-between items-center">
        {/* left */}
        <h1 className="font-mono text-xl font-bold tracking-wide bg-gradient-to-r from-[#00b6ff] to-[#ff0000] text-transparent bg-clip-text">
          Rifaldi Judri
        </h1>
        {/* right */}
        <div className="flex gap-10">
          <div className="flex gap-10 text-gray-700 dark:text-slate-200">
            <a href="https://wa.me/6281272053905" target="_blank">
              +6281272053905
            </a>
            <a href="">muhamadrifaldi145@gmail.com</a>
          </div>
          <SocialIcons />
        </div>
      </div>
      <div className="divider"></div>
      {/* Copyright */}
      <Copyright />
    </div>
  );
};

export default AppFooter;
