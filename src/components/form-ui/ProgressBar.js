"use client";

import { useContext } from "react";
import FormContext from "../../providers/FormContext";

export default function ProgressBar({}) {
  const { step } = useContext(FormContext);
  return (
    <div>
      <div>Step {step} of 3</div>
      <progress value={step} max="3"></progress>
    </div>
  );
}
