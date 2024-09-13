"use client";

import { useRouter } from "next/navigation";

import { useContext, useEffect } from "react";
import FormContext from "../../providers/FormContext";

import FormLayout from "../../components/form-ui/FormLayout";
import ErrorSummary from "@/components/error-ui/ErrorSummary";

import {
  navigateToNextPage,
  navigateToPrevPage,
  getFromLocal,
} from "../utils/FormUtils";

export default function AccountInfo() {
  const router = useRouter();
  const { formData, handleInputChange, setFormData, isValid } =
    useContext(FormContext);

  const keys = ["username", "email"];

  useEffect(() => {
    //Fetching from the local
    const res = getFromLocal(keys);
    //Updating the state values to re-render
    setFormData({
      ...formData,
      ...res,
    });
    // console.log(res);
  }, []);

  const prevPage = () => {
    navigateToPrevPage(router, "/personal-info");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isValid) {
      // If valid, proceed to the next page
      navigateToNextPage(router, "/preferences-info");
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
          Account Details
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <label className="block text-gray-600">Username</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
          <label className="block text-gray-600">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
          <label className="block text-gray-600">Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
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
