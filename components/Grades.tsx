"use client";

import React from "react";
import { BackgroundGradient } from "../components/ui/Background-gradient";

export function Grades() {
  return (
    <div className="flex flex-col sm:flex-row sm:space-x-6 space-y-6 sm:space-y-0 bg-black p-6 justify-center items-center">
      <BackgroundGradient className="flex-grow rounded-[22px] w-full sm:w-auto min-h-[500px] p-6 sm:p-12 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 dark:bg-zinc-900">
        <p className="text-2xl sm:text-3xl text-white mt-6 mb-4 dark:text-neutral-200 font-bold">
          KL University, Computer Science and Engineering
        </p>
        <p className="text-3xl sm:text-4xl text-neutral-100 dark:text-neutral-400 mb-4">
          <b className="text-lime-300">CGPA: 9.49/10</b>
        </p>

        <h2 className="text-lg text-yellow-400 font-bold mb-3 opacity-80">Relevant Coursework:</h2>
        <ul className="list-disc list-inside text-md text-neutral-100 dark:text-neutral-400 opacity-80">
          <li>Object-Oriented Programming</li>
          <li>Data Structures</li>
          <li>Algorithms</li>
          <li className="whitespace-nowrap">Database Management Systems</li>
          <li>Operating Systems</li>
        </ul>
      </BackgroundGradient>

      <BackgroundGradient className="flex-grow rounded-[22px] w-full sm:w-auto min-h-[500px] p-6 sm:p-12 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 dark:bg-zinc-900">
        <p className="text-2xl sm:text-3xl text-white mt-6 mb-4 dark:text-neutral-200 font-bold">
          Narayana College, 12th
        </p>
        <p className="text-3xl sm:text-4xl text-neutral-100 dark:text-neutral-400 mb-4">
          <b className="text-lime-300 whitespace-nowrap">Percentage: 96.6%</b>
        </p>

        <h2 className="text-lg text-yellow-400 font-bold mb-3 opacity-80 whitespace-nowrap">Relevant Coursework:</h2>
        <ul className="list-disc list-inside text-md text-neutral-100 dark:text-neutral-400 opacity-80">
          <li>Physics</li>
          <li>Chemistry</li>
          <li>Mathematics</li>
        </ul>
      </BackgroundGradient>

      <BackgroundGradient className="flex-grow rounded-[22px] w-full sm:w-auto min-h-[500px] p-6 sm:p-12 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 dark:bg-zinc-900">
        <p className="text-2xl sm:text-3xl text-white mt-6 mb-4 dark:text-neutral-200 font-bold">
          Narayana School, 10th
        </p>
        <p className="text-3xl sm:text-4xl text-neutral-100 dark:text-neutral-400 mb-4">
          <b className="text-lime-300 whitespace-nowrap" >GPA: 10/10</b>
        </p>

        <h2 className="text-lg text-yellow-400 font-bold mb-3 opacity-80">Relevant Coursework:</h2>
        <ul className="list-disc list-inside text-md text-neutral-100 dark:text-neutral-400 opacity-80">
          <li>Physics</li>
          <li>Chemistry</li>
          <li>Mathematics</li>
          <li>General Languages</li>
        </ul>
      </BackgroundGradient>
    </div>
  );
}
