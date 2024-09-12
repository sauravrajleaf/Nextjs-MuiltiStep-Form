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
    <div style={{ color: "red", margin: "20px" }}>
      <ul>
        {Object.entries(errors).map(([field, error]) => (
          <li key={field}>{error}</li>
        ))}
      </ul>
    </div>
  );
}
