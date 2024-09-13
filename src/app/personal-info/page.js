"use client";

import { useRouter } from "next/navigation";
import { useContext, useEffect } from "react";
import FormContext from "../../providers/FormContext";

import FormLayout from "../../components/form-ui/FormLayout";
import ErrorSummary from "@/components/error-ui/ErrorSummary";
import { personalInfoSchema } from "../../schemas/UserSchema";
import { navigateToNextPage, getFromLocal } from "../utils/FormUtils";

export default function PersonalInfo() {
  const router = useRouter();
  const {
    formData,
    handleInputChange,
    setFormData,
    isValid,
    handleNext,
    errors,
    setErrors,
    setFormValid,
  } = useContext(FormContext);

  const keys = ["firstName", "lastName", "city", "dob"];

  useEffect(() => {
    const res = getFromLocal(keys);

    // Check if any valid values were fetched before setting the form data
    if (Object.keys(res).length > 0) {
      setFormData((prevFormData) => ({
        ...prevFormData,
        ...res,
      }));
    }

    // Retrieve and set isValid state separately if it exists
    const storedIsValid = localStorage.getItem("isValid");
    if (storedIsValid !== null) {
      setFormValid(storedIsValid === "true"); // Convert string to boolean
    }
  }, []);

  //on page refresh the state of
  //lets save the last state of form in local state
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isValid) {
      //Increment progress
      handleNext();
      // If valid, proceed to the next page
      navigateToNextPage(router, "/account-info");
    } else {
      console.log("Form is invalid, showing errors.");
      console.log(errors.newErrors);
      alert(errors.newErrors);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="w-full max-w-md p-8 bg-white shadow-md rounded-md">
        <FormLayout />
        <ErrorSummary />
        <h2 className="text-xl font-bold text-gray-700 mb-4">
          Personal Information
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-600 mb-2">First Name</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div>
            <label className="block text-gray-600 mb-2">Last Name</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div>
            <label className="block text-gray-600 mb-2">Date of Birth</label>
            <input
              type="date"
              name="dob"
              value={formData.dob}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded"
              max={
                new Date(new Date().setFullYear(new Date().getFullYear() - 16))
                  .toISOString()
                  .split("T")[0]
              }
              required
            />
          </div>

          <div>
            <label htmlFor="city" className="block text-gray-600 mb-2">
              City
            </label>
            <select
              name="city"
              value={formData.city}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded"
              required
            >
              <option value="" disabled hidden>
                Select a city
              </option>
              <option value="Delhi">Delhi</option>
              <option value="Bangalore">Bangalore</option>
              <option value="Noida">Noida</option>
              <option value="Hyderabad">Hyderabad</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-green-500 text-white p-2 rounded hover:bg-green-600"
          >
            Next
          </button>
        </form>
      </div>
    </div>
  );
}
