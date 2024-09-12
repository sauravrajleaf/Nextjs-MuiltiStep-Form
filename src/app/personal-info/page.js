"use client";

import { useRouter } from "next/navigation";
import { useContext, useEffect } from "react";
import FormContext from "../../providers/FormContext";

import FormLayout from "../../components/form-ui/FormLayout";
import ErrorSummary from "@/components/error-ui/ErrorSummary";

import { navigateToNextPage, getFromLocal } from "../utils/FormUtils";
import { personalInfoSchema } from "../../schemas/UserSchema";

export default function PersonalInfo() {
  const router = useRouter();
  const { formData, handleInputChange, setFormData, errors, validateForm } =
    useContext(FormContext);

  const keys = ["firstName", "lastName", "city", "dob"];

  useEffect(() => {
    const res = getFromLocal(keys);

    setFormData({
      ...formData,
      ...res,
    });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form using Yup
    const isValid = await validateForm(personalInfoSchema);

    if (isValid) {
      // If valid, proceed to the next page
      navigateToNextPage(router, "/account-info");
    } else {
      console.log("Form is invalid, showing errors.");
    }
  };

  return (
    <FormLayout>
      <ErrorSummary />
      <form onSubmit={handleSubmit}>
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

        <button type="submit">Next</button>
      </form>
    </FormLayout>
  );
}
