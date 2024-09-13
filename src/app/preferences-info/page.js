"use client";

import { useRouter } from "next/navigation";
import { useContext, useEffect } from "react";

import FormContext from "../../providers/FormContext";

import FormLayout from "../../components/form-ui/FormLayout";

import {
  navigateToNextPage,
  navigateToPrevPage,
  getFromLocal,
} from "../utils/FormUtils";

export default function AccountInfo() {
  const router = useRouter();
  const { formData, handleInputChange, setFormData } = useContext(FormContext);

  const keys = [
    "preferences",
    "emailNotifications",
    "smsNotifications",
    "pushNotifications",
  ];

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

  const handleSubmit = (e) => {
    e.preventDefault();

    //Clear the local storage values
    localStorage.clear();

    //Redirect
    navigateToNextPage(router, "/thank-you");
  };

  const prevPage = () => {
    navigateToPrevPage(router, "/account-info");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="w-full max-w-md p-8 bg-white shadow-md rounded-md">
        <FormLayout />
        <h2 className="text-xl font-bold text-gray-700 mb-4">Preferences</h2>
        <form className="space-y-4">
          <label className="block text-gray-600">Choose Preferences</label>

          <select
            name="preferences"
            value={formData.preferences}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded"
          >
            <option value="">Select a Preference</option>
            <option value="newsletter">Newsletter</option>
            <option value="updates">Product Updates</option>
            <option value="offers">Special Offers</option>
          </select>
          <label className="block text-gray-600">
            How would you like to receive notifications?
          </label>
          <div className="flex items-center">
            <input
              type="checkbox"
              name="emailNotifications"
              checked={formData.emailNotifications}
              onChange={handleInputChange}
              className="h-5 w-5   border-gray-300 rounded"
            />
            <label className="ml-2 text-gray-600">Email</label>
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              name="smsNotifications"
              checked={formData.smsNotifications}
              onChange={handleInputChange}
              className="h-5 w-5   border-gray-300 rounded"
            />
            <label className="ml-2 text-gray-600">SMS</label>
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              name="pushNotifications"
              checked={formData.pushNotifications}
              onChange={handleInputChange}
              className="h-5 w-5   border-gray-300 rounded"
            />
            <label className="ml-2 text-gray-600">Push Notifications</label>
          </div>

          <div className="flex items-center">
            <input
              type="checkbox"
              name="tnc"
              readOnly={true}
              defaultChecked={true}
              disabled
              className="h-5 w-5  border-gray-300 rounded"
            />
            <label className="italic ml-2 text-gray-600">
              I have read the terms and conditions
            </label>
          </div>

          <button
            type="submit"
            onClick={handleSubmit}
            className="w-full bg-green-500 text-white p-2 rounded hover:bg-green-600"
          >
            Submit
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
