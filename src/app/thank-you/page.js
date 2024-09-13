"use client";

import { useRouter } from "next/navigation";
import { useEffect, useContext } from "react";

import FormContext from "../../providers/FormContext";

export default function ThankYou() {
  const router = useRouter();
  const { setFormData, setStep, setErrors, setProgress } =
    useContext(FormContext);

  //Clear the state and the local storage

  useEffect(() => {
    //Clear the local storage values
    localStorage.clear();

    // Reset the state values
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      dob: "",
      city: "",
      username: "",
      password: "",
      preferences: "",
      emailNotifications: false,
      smsNotifications: false,
      pushNotifications: false,
      tnc: true,
    });

    setStep(1); // Reset step to the first step
    setErrors({}); // Clear any validation errors
    setProgress(0); // Reset the progress to 0

    const timer = setTimeout(() => {
      router.push("/personal-info");
    }, 5000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div>
      <h2>Thank You!</h2>
      <p>Your form has been submitted. You will be redirected shortly...</p>
    </div>
  );
}
