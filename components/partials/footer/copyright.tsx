import React from "react";

export const Copyright = () => {
  return (
    <div className="flex justify-center -mt-4 py-2 text-heading dark:text-slate-200">
      <span>©{new Date().getFullYear()} Muhammad Rifaldi Judri</span>
    </div>
  );
};
