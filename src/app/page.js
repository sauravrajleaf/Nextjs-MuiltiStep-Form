"use client";
import { useState } from "react";
import PersonalInfo from "../components/PersonalInfo";
import AccountDetails from "../components/AccountDetails";
import Preferences from "../components/Preferences";
import ProgressBar from "../components/ProgressBar";

export default function HomePage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    fistName: "",
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

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const handleInputChange = (e) => {
    // console.log(e.target.type);
    setFormData({
      ...formData,
      [e.target.name]:
        e.target.type === "checkbox" ? e.target.checked : e.target.value,
    });
  };

  return (
    <div>
      <ProgressBar step={step} />
      {step === 1 && (
        <PersonalInfo
          nextStep={nextStep}
          handleInputChange={handleInputChange}
          formData={formData}
        />
      )}
      {step === 2 && (
        <AccountDetails
          prevStep={prevStep}
          nextStep={nextStep}
          handleInputChange={handleInputChange}
          formData={formData}
        />
      )}
      {step === 3 && (
        <Preferences
          prevStep={prevStep}
          handleInputChange={handleInputChange}
          formData={formData}
        />
      )}
    </div>
  );
}
