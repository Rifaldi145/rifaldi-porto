import React, { FC, Fragment } from "react";
import SectionContainer from "../shared/section-container";

const educations = [
  // {
  //   year: "2005 - 2011",
  //   name: "SDN Bojong Rangkas 04",
  // },
  // {
  //   year: "2011 - 2014",
  //   name: "SMPN 1 Ciampea",
  // },
  {
    year: "2014 - 2017",
    name: "SMK ADI SANGGORO",
    jurusan: "Rekayasa Perangkat Lunak",
  },
  {
    year: "2017 - 2020",
    name: "Universitas Bina Sarana Informatika (D3)",
    jurusan: "Sistem Informasi",
  },
  {
    year: "2023 - 2024",
    name: "Universitas Bina Sarana Informatika (S1)",
    jurusan: "Sistem Informasi",
  },
];

const Education: FC = () => {
  return (
    <SectionContainer id="education-section" title="EDUCATION" subtitle="">
      <div className="mt-16 lg:mt-0 space-y-10 lg:space-y-0">
        <div className="block lg:hidden text-center space-y-4">
          <h3 className="text-4xl font-extrabold text-heading dark:text-slate-300"></h3>
          <p className="text-slate-600 dark:text-slate-400"></p>
        </div>
        <ul className="timeline timeline-snap-icon timeline-vertical text-2xl">
          {educations.map((education, index) => (
            <Fragment key={education.year}>
              {index % 2 == 0 ? (
                <li>
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
                    <div className="text-lg lg:text-base font-semibold text-heading dark:text-slate-200">
                      {education.name}
                    </div>
                    <div className="text-lg lg:text-base font-semibold text-heading dark:text-slate-200">
                      {education.jurusan}
                    </div>
                  </div>
                  <hr className="bg-primary" />
                </li>
              ) : (
                <li>
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
                    <div className="text-lg lg:text-base font-semibold text-heading dark:text-slate-200">
                      {education.name}
                    </div>
                    <div className="text-lg lg:text-base font-semibold text-heading dark:text-slate-200">
                      {education.jurusan}
                    </div>
                  </div>
                  <hr className="bg-primary" />
                </li>
              )}
            </Fragment>
          ))}
        </ul>
      </div>
    </SectionContainer>
  );
};

export default Education;
