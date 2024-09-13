"use client";

import { useContext } from "react";
import FormContext from "../../providers/FormContext";

export default function ProgressBar({}) {
  const { step } = useContext(FormContext);
  return (
    <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
      <div
        className={`bg-green-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full`}
        style={{ width: `${(step / 3) * 100}%` }}
      >
        {Math.ceil((step / 3) * 100)}%
      </div>
    </div>
  );
}
