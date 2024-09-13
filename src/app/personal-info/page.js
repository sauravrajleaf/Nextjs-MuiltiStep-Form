"use client";

import { useRouter } from "next/navigation";
import { useContext, useEffect } from "react";
import FormContext from "../../providers/FormContext";

import FormLayout from "../../components/form-ui/FormLayout";
import ErrorSummary from "@/components/error-ui/ErrorSummary";

import { navigateToNextPage, getFromLocal } from "../utils/FormUtils";

export default function PersonalInfo() {
  const router = useRouter();
  const { formData, handleInputChange, setFormData, isValid } =
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

    // console.log(isValid);
    if (isValid) {
      // If valid, proceed to the next page
      navigateToNextPage(router, "/account-info");
    } else {
      console.log("Form is invalid, showing errors.");
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
            <label className="block text-gray-600">First Name</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>

          <label className="block text-gray-600">Last Name</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />

          <label className="block text-gray-600">Date of Birth</label>
          <input
            type="date"
            name="dob"
            value={formData.dob}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded"
            max={
              new Date(new Date().setFullYear(new Date().getFullYear() - 15))
                .toISOString()
                .split("T")[0]
            }
            required
          />

          <label htmlFor="city" className="block text-gray-600">
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
