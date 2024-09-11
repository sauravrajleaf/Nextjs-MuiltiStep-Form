"use client";

import { createContext, useState } from "react";

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

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]:
        e.target.type === "checkbox" ? e.target.checked : e.target.value,
    });
  };

  return (
    <FormContext.Provider
      value={{ formData, setFormData, step, setStep, handleInputChange }}
    >
      {children}
    </FormContext.Provider>
  );
}

export default FormContext;
