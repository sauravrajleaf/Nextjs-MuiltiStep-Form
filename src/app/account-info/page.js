"use client";

import { useRouter } from "next/navigation";

import { useContext, useEffect } from "react";
import FormContext from "../../components/FormContext";

import { accountsInfoSchema } from "../../schemas/UserSchema";

import {
  navigateToNextPage,
  navigateToPrevPage,
  getFromLocal,
} from "../utils/FormUtils";

export default function AccountInfo() {
  const router = useRouter();
  const { formData, handleInputChange, setFormData, validateForm } =
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
    console.log(res);
  }, []);

  const prevPage = () => {
    navigateToPrevPage(router);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form using Yup
    const isValid = await validateForm(accountsInfoSchema);

    if (isValid) {
      // If valid, proceed to the next page
      navigateToNextPage(router, "/preferences-info");
    } else {
      console.log("Form is invalid, showing errors.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Account Details</h2>
      <label>Username</label>
      <input
        type="text"
        name="username"
        value={formData.username}
        onChange={handleInputChange}
        required
      />
      <label>Email</label>
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleInputChange}
        required
      />
      <label>Password</label>
      <input
        type="password"
        name="password"
        value={formData.password}
        onChange={handleInputChange}
        required
      />
      <button type="submit">Next</button>
      <button type="button" onClick={prevPage}>
        Previous
      </button>
    </form>
  );
}
