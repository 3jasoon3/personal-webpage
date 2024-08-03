import React from "react";
import "@/styles/globals.scss";

const Timeline: React.FC = () => {
  return (
    <ol
      className="relative border-s border-gray-200 dark:border-gray-700"
      style={{ maxWidth: "60%" }}
    >
      <li className="mb-10 ms-4">
        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
        <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
          April 2024
        </time>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          Advanced Engineering School Trainee
        </h3>
        <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
          Participated in the development of the Agnia AI Agent and the Graphit
          educational platform, contributing to innovative AI solutions and
          enhancing learning experiences through advanced engineering practices.
        </p>
      </li>
      <li className="mb-10 ms-4">
        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
        <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
          August 2023
        </time>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          Innopolis University BSc enrollment
        </h3>
        <p className="text-base font-normal text-gray-500 dark:text-gray-400">
          Enrolled in the BSc program in Data Science and Artificial
          Intelligence (DSAI) at Innopolis University, gaining a strong
          foundation in data analysis, machine learning, and AI technologies.
        </p>
      </li>
    </ol>
  );
};

export default Timeline;
