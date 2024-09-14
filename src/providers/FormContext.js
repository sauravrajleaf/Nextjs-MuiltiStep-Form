"use client";

import { createContext, useState, useEffect } from "react";
import { usePathname } from "next/navigation";

import { saveInLocal, getSchema } from "../utils/FormUtils";

const FormContext = createContext();

export function FormProvider({ children }) {
  const [step, setStep] = useState(1); // Tracks step changes of form
  const [errors, setErrors] = useState({}); // Tracks errors of form
  const [progress, setProgress] = useState(0); // Tracks progress percentage
  const [isValid, setFormValid] = useState(false); // Tracks overall form validity

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

  // Keeping track of the route change
  useEffect(() => {
    if (pathname === "/personal-info") {
      setStep(1);
    } else if (pathname === "/account-info") {
      setStep(2);
    } else if (pathname === "/preferences-info") {
      setStep(3);
    }
  }, [pathname]);

  const handleInputChange = async (e) => {
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

    // Validate the active input field only
    const res = await validateForm(getSchema(pathname), e.target.name);

    //save form state in local
    saveInLocal("isValid", res);
  };

  // Custom validation logic using Yup
  const validateForm = async (schema, field) => {
    try {
      // Validate only the specific active field
      await schema.validateAt(field, formData);

      // Clear errors for the specific field
      setErrors({});
      setFormValid(true);
      return true;
    } catch (err) {
      const newErrors = err.message;

      setFormValid(false);
      setErrors({ newErrors }); // Set the errors in state
      return false;
    }

    //set the state of the form in local storage
  };

  // Incremental increase of the progress bar and moving to the next step
  const handleNext = () => {
    setStep((prevStep) => prevStep + 1);
    setProgress((prevProgress) => prevProgress + (1 / 3) * 100); // Increment progress based on steps
  };

  // Incremental decrease of the progress bar and moving to the previous step
  const handlePrev = () => {
    setStep((prevStep) => prevStep - 1);
    setProgress((prevProgress) => prevProgress - (1 / 3) * 100); // Decrease progress based on steps
  };

  return (
    <FormContext.Provider
      value={{
        formData,
        setFormData,
        step,
        setStep,
        setErrors,
        handleInputChange,
        errors,
        validateForm,
        progress,
        setProgress,
        handleNext,
        handlePrev,
        isValid,
        setFormValid,
      }}
    >
      {children}
    </FormContext.Provider>
  );
}
export default FormContext;
