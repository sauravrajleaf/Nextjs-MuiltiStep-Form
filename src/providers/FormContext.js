"use client";

import { createContext, useState, useEffect } from "react";
import { usePathname } from "next/navigation";

import { saveInLocal } from "../app/utils/FormUtils";

const FormContext = createContext();

export function FormProvider({ children }) {
  const [step, setStep] = useState(1);
  const [errors, setErrors] = useState({});

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
    setFormData({
      ...formData,
      [e.target.name]:
        e.target.type === "checkbox" ? e.target.checked : e.target.value,
    });

    if (e.target.name !== "password") {
      saveInLocal(
        e.target.name,
        e.target.type === "checkbox" ? e.target.checked : e.target.value
      );
    }
  };

  // Custom validation logic using Yup
  const validateForm = async (schema) => {
    try {
      await schema.validate(formData, { abortEarly: false }); // AbortEarly:false will return all errors

      //No errors
      setErrors({});
      return true;
    } catch (err) {
      const newErrors = {};
      err.inner.forEach((error) => {
        newErrors[error.path] = error.message;
      });
      // console.log(newErrors);
      setErrors(newErrors); // Set the errors in state
      return false;
    }
  };

  return (
    <FormContext.Provider
      value={{
        formData,
        setFormData,
        step,
        setStep,
        handleInputChange,
        errors,
        validateForm,
      }}
    >
      {children}
    </FormContext.Provider>
  );
}

export default FormContext;
