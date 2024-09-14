"use client";

import { useRouter } from "next/navigation";

import { useContext, useEffect, useState } from "react";
import FormContext from "../../providers/FormContext";
import { accountsInfoSchema } from "../../schemas/UserSchema";
import FormLayout from "../../components/form-ui/FormLayout";
import ErrorSummary from "@/components/error-ui/ErrorSummary";

import { Icon } from "react-icons-kit";
import { eye } from "react-icons-kit/feather/eye";
import { eyeOff } from "react-icons-kit/feather/eyeOff";

import {
  navigateToNextPage,
  navigateToPrevPage,
  getFromLocal,
} from "../utils/FormUtils";

export default function AccountInfo() {
  const router = useRouter();
  const {
    formData,
    handleInputChange,
    setFormData,
    isValid,
    handleNext,
    handlePrev,
    errors,
    setFormValid,
  } = useContext(FormContext);

  const keys = ["username", "email"];

  useEffect(() => {
    //Fetching from the local
    const res = getFromLocal(keys);
    //Updating the state values to re-render
    // Setting up form values if exits in local storage
    if (Object.keys(res).length > 0) {
      setFormData({
        ...formData,
        ...res,
      });
    }

    // Retrieve and set isValid state if it exists
    const storedIsValid = getFromLocal(["isValid"]);
    setFormValid(storedIsValid);
  }, []);

  const [showPassword, setShowPassword] = useState(false); //Tracks the password eye toggle button

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const prevPage = () => {
    handlePrev();
    navigateToPrevPage(router, "/personal-info");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isValid) {
      //Increment progress
      handleNext();
      // If valid, proceed to the next page
      navigateToNextPage(router, "/preferences-info");
    } else {
      alert(errors.newErrors);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="w-full max-w-md p-8 bg-white shadow-md rounded-md">
        <FormLayout />
        <ErrorSummary />
        <h2 className="text-xl font-bold text-gray-700 mb-4">
          Account Details
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-600 mb-2">Username</label>

            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div>
            <label className="block text-gray-600 mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div className="relative">
            <label className="block text-gray-600 mb-2">Password</label>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded pr-10" // Make sure there's padding-right for the icon
              required
            />

            {/* Eye Icon */}
            <span
              onClick={handleTogglePassword}
              className="absolute inset-y-12 right-2 flex items-center cursor-pointer"
            >
              <Icon
                icon={showPassword ? eyeOff : eye}
                className="h-5 w-5 text-gray-500"
              />
            </span>
          </div>

          <button
            type="submit"
            className="w-full bg-green-500 text-white p-2 rounded hover:bg-green-600"
          >
            Next
          </button>
          <button
            type="button"
            onClick={prevPage}
            className="w-full bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600"
          >
            Previous
          </button>
        </form>
      </div>
    </div>
  );
}
