"use client";

import { createContext, useState, useEffect } from "react";
import { usePathname } from "next/navigation";

const FormContext = createContext();

export function FormProvider({ children }) {
  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState({
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

  const pathname = usePathname();

  useEffect(() => {
    if (pathname === "/personal-info") {
      setStep(1);
    } else if (pathname === "/account-info") {
      setStep(2);
    } else if (pathname === "/preferences-info") {
      setStep(3);
    }
  }, [pathname]);

  const handleInputChange = (e) => {
    console.log(e.target.checked);
    setFormData({
      ...formData,
      [e.target.name]:
        e.target.type === "checkbox" ? e.target.checked : e.target.value,
    });
  };

  return (
    <FormContext.Provider
      value={{
        formData,
        setFormData,
        step,
        setStep,
        handleInputChange,
      }}
    >
      {children}
    </FormContext.Provider>
  );
}

export default FormContext;
