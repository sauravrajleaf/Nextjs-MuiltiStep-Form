"use client";

import { useEffect, useState, useContext } from "react";

import FormContext from "../../providers/FormContext";

export default function ErrorSummary() {
  const [visible, setVisible] = useState(true);
  const { errors } = useContext(FormContext);

  useEffect(() => {
    if (Object.keys(errors).length > 0) {
      setVisible(true);
      const timer = setTimeout(() => {
        setVisible(false);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [errors]);

  //Do not render if there are no errors in state
  if (!visible || Object.keys(errors).length === 0) {
    return null; // Do not render if there are no errors or if the component is not visible
  }

  return (
    <div className=" bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg shadow-lg">
      <ul className="list-disc pl-5">
        {Object.entries(errors).map(([field, error]) => (
          <li key={field} className="text-sm font-semibold">
            {error}
          </li>
        ))}
      </ul>
    </div>
  );
}
