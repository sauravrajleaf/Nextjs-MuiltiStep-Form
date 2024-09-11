"use client";

import { useRouter } from "next/navigation";
import { useContext } from "react";
import FormContext from "../../components/FormContext";

export default function PersonalInfo() {
  const router = useRouter();
  const { formData, handleInputChange } = useContext(FormContext);

  const nextStep = () => {
    router.push("/account-details");
  };

  return (
    <form>
      <h2>Personal Information</h2>
      <label>First Name</label>
      <input
        type="text"
        name="firstName"
        value={formData.firstName}
        onChange={handleInputChange}
        required
      />
      <label>Last Name</label>
      <input
        type="text"
        name="lastName"
        value={formData.lastName}
        onChange={handleInputChange}
        required
      />
      <button type="button" onClick={nextStep}>
        Next
      </button>
    </form>
  );
}
