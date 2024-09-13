"use client";

import { createContext, useState, useEffect } from "react";
import { usePathname } from "next/navigation";

import { saveInLocal, getSchema } from "../app/utils/FormUtils";

const FormContext = createContext();

export function FormProvider({ children }) {
  const [step, setStep] = useState(1);
  const [errors, setErrors] = useState({});
  const [isValid, setFormValid] = useState(false);
  const [formTouched, setFormTouched] = useState(false); // Add this state
  const [activeInput, setActiveInput] = useState("");

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

    // // Reset formTouched when the route changes
    // setFormTouched(false);
    console.log("here");
    if (formTouched & activeInput) {
      // Only run validation if form has been touched
      console.log("here");
      (async () => {
        const res = await validateForm(getSchema(pathname), activeInput);
        console.log(res);
        setFormValid(res);
      })();
    }
  }, [pathname, formData, formTouched]);

  const handleInputChange = async (e) => {
    // console.log(pathname);
    setFormTouched(true); // Mark the form as touched when user interacts
    setActiveInput(e.target.name);
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
      // console.log(formData);
      await schema.validate(formData, { abortEarly: false }); // AbortEarly:false will return all errors

      //No errors
      setErrors({});
      return true;
    } catch (err) {
      const newErrors = {};
      err.inner.forEach((error) => {
        newErrors[error.path] = error.message;
      });
      console.log(newErrors);
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
        isValid,
      }}
    >
      {children}
    </FormContext.Provider>
  );
}

export default FormContext;
