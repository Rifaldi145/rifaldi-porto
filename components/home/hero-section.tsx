import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FC, useRef } from "react";
import TypewriterComponent from "typewriter-effect";

const HeroSection: FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0.45, 0.81], [1, 0]);
  useMotionValueEvent(scrollYProgress, "change", (lts) => {
    console.log(lts);
  });
  const sendMail = () => {
    if (typeof window !== "undefined") {
      (window as any).location = "mailto:muhamadrifaldi145@gmail.com";
    }
  };
  return (
    <motion.section
      ref={ref}
      style={{ scale: opacity }}
      className="main-padding my-20 grid grid-cols-1 md:grid-cols-2 w-full"
    >
      {/* left text*/}
      <div className="space-y-4 w-full flex flex-col gap-2 justify-center text-center md:text-start text-5xl font-bold text-heading">
        <h2 className="font-semibold text-slate-800 dark:text-slate-100 text-5xl xl:text-7xl">
          Hello <span className="text-3xl xl:text-5xl">👋,</span>
        </h2>
        <h3 className="text-slate-700 dark:text-slate-400 text-5xl xl:text-7xl">
          My name is
        </h3>
        <div className="mockup-code text-base w-min sm:w-[60%] xl:w-[70%] self-center md:self-start">
          <pre
            className="flex font-mono sm:text-xl md:text-sm xl:text-xl"
            data-prefix="$"
          >
            <code className="text-[#DE616D]">
              <TypewriterComponent
                onInit={(typewriter) => {
                  typewriter
                    .typeString("Hello World")
                    .deleteAll()
                    .typeString("printf('Muhammad Rifaldi Judri')")
                    .start();
                }}
              />
            </code>
          </pre>
        </div>

        <div className="flex justify-center md:justify-start gap-2">
          <button
            className="btn btn-md btn-info dark:text-slate-50 rounded-md shadow-md tracking-wide" // Updated className to btn-sm for smaller button
            onClick={sendMail}
          >
            Kirim Email
          </button>

          <button
            className="btn btn-md btn-warning dark:text-slate-50 rounded-md shadow-md tracking-wide" // Updated className to btn-sm for smaller button
          >
            <Link
              href="#"
              target="_blank"
              className="btn btn-m btn-secondary dark:text-slate-50 rounded-md shadow-md tracking-wide text-sm" // Added text-sm for smaller text
            >
              Liha CV Saya
            </Link>
          </button>
        </div>
      </div>
      {/* Image */}
      <div className="place-self-end mt-10">
        <div className="sm:w-[300px] md:w-full sm:h-[300px] md:h-full rounded-xl relative">
          <div className="absolute top-0 left-0 bg-gray-300 w-[102%] h-[102%] -z-10 rounded-xl rotate-[4deg]"></div>
          <div className="absolute top-0 left-0 bg-gray-200 w-[102%] h-[102%] -z-30 rounded-xl rotate-[10deg]"></div>
          <Image
            src="/images/rifaldi2.jpeg"
            width={439}
            height={439}
            alt="Rifaldi Judri"
            className="rounded-xl shadow-md"
          />
        </div>
      </div>
    </motion.section>
  );
};

export default HeroSection;
