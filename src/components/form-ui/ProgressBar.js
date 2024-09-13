import { useContext } from "react";
import FormContext from "../../providers/FormContext";

export default function ProgressBar({}) {
  // Progress keeps track of incremental/decremental change in the form
  const { progress } = useContext(FormContext);

  return (
    <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
      <div
        className={`bg-green-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full`}
        style={{ width: `${progress}%` }}
      >
        {Math.ceil(progress)}%
      </div>
    </div>
  );
}
