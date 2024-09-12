"use client";

import { useRouter } from "next/navigation";

import { useContext } from "react";
import FormContext from "../../components/FormContext";

export default function PersonalInfo() {
  const router = useRouter();
  const { formData, handleInputChange, nextStep } = useContext(FormContext);

  const nextPage = () => {
    router.push("/account-info");
    nextStep();
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

      <label>Date of Birth</label>
      <input
        type="date"
        name="dob"
        value={formData.dob}
        onChange={handleInputChange}
        required
      />
      <label htmlFor="city">City</label>
      <select
        name="city"
        value={formData.city}
        onChange={handleInputChange}
        required
      >
        <option value="">Select a city</option>
        <option value="Delhi">Delhi</option>
        <option value="Bangalore">Bangalore</option>
        <option value="Noida">Noida</option>
        <option value="Hyderabad">Hyderabad</option>
      </select>
      <button type="button" onClick={nextPage}>
        Next
      </button>
    </form>
  );
}
