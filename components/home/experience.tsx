import React, { FC, Fragment } from "react";
import { motion } from "framer-motion";
import SectionContainer from "../shared/section-container";

const educations = [
  {
    year: "Nov 2017 - Des 2017",
    name: "Yuka Indonesia Media",
    possition: "Web Programmer",
  },
  {
    year: "Des 2017 - Apr 2018",
    name: "Angkasa Prima Indonesia",
    possition: "Junior Programmer",
  },
  {
    year: "Apr 2018 - Jun 2019",
    name: "Dgeo.ID",
    possition: "Junior Programmer",
  },
  {
    year: "Jul 2019 - Nov 2019",
    name: "YAYASAN TIRTA AMARTA PARIPURNA",
    possition: "Web Programmer",
  },
  {
    year: "Des 2019 - Jan 2021",
    name: "PT TIMA AMANAH PRIMA WISATA",
    possition: "IT Support dan Programmer",
  },
  {
    year: "Apr 2021 - Saat Ini",
    name: "Kementerian Perencanaan Pembangunan Nasional Republik Indonesia/Bappenas",
    possition: "Full Stack Engineer",
  },
  // {
  //   year: "Feb 2022 - Saat Ini",
  //   name: "PT INAMART SUKSES JAYA",
  //   possition: "Software Enginering",
  // },
];

const Experience: FC = () => {
  return (
    <SectionContainer id="experience-section" title="EXPERIENCE" subtitle="">
      <div className="mt-16 lg:mt-0 space-y-10 lg:space-y-0">
        <div className="block lg:hidden text-center space-y-4">
          <h3 className="text-4xl font-extrabold text-heading dark:text-slate-300"></h3>
          <p className="text-slate-600 dark:text-slate-400"></p>
        </div>
        <ul className="timeline timeline-snap-icon timeline-vertical text-2xl">
          {educations.map((education, index) => (
            <Fragment key={education.year}>
              {index % 2 == 0 ? (
                <motion.li
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 1, ease: "easeInOut" }}
                  whileHover={{ scale: 1.5 }}
                >
                  <div className="timeline-middle">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-5 h-5 text-primary"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div className="timeline-start md:text-end mb-10 ">
                    <time className="text-xl font-bold text-slate-500">
                      {education.year}
                    </time>
                    <div className="text-lg lg:text-base font-bold text-heading dark:text-slate-200">
                      {education.name}
                    </div>
                    <div className="text-lg lg:text-base font-semibold text-heading dark:text-slate-200">
                      {education.possition}
                    </div>
                  </div>
                  <hr className="bg-primary" />
                </motion.li>
              ) : (
                <motion.li
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 1, ease: "easeInOut" }}
                  whileHover={{ scale: 1.5 }}
                >
                  <hr className="bg-primary" />
                  <div className="timeline-middle">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-5 h-5 text-primary"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div className="timeline-end mb-10">
                    <time className="text-xl font-bold text-slate-500">
                      {education.year}
                    </time>
                    <div className="text-lg lg:text-base font-bold text-heading dark:text-slate-200">
                      {education.name}
                    </div>
                    <div className="text-lg lg:text-base font-semibold text-heading dark:text-slate-200">
                      {education.possition}
                    </div>
                  </div>
                  <hr className="bg-primary" />
                </motion.li>
              )}
            </Fragment>
          ))}
        </ul>
      </div>
    </SectionContainer>
  );
};

export default Experience;
