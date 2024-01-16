import Link from "next/link";
import { FC } from "react";
import { FaEnvelope, FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const SocialIcons: FC = () => {
  const sendMail = () => {
    if (typeof window !== "undefined") {
      (window as any).location = "mailto:muhamadrifaldi145@gmail.com";
    }
  };

  return (
    <div className="flex gap-2 text-gray-500 dark:text-slate-400 text-2xl">
      <a
        href="https://github.com/Rifaldi145"
        target="_blank"
        className="hover:text-gray-900 dark:hover:text-slate-50"
      >
        <FaGithub />
      </a>

      <a
        href="https://www.linkedin.com/in/muhammad-rifaldi-judri-549631166/"
        target="_blank"
        className="hover:text-blue-900 dark:hover:text-slate-50"
      >
        <FaLinkedin />
      </a>

      <button
        onClick={sendMail}
        className="hover:text-red-500 dark:hover:text-slate-50"
      >
        <FaEnvelope />
      </button>
    </div>
  );
};

export default SocialIcons;
