"use client";

import { useRouter } from "next/navigation";

import { useContext, useEffect } from "react";
import FormContext from "../../components/FormContext";

import {
  navigateToNextPage,
  navigateToPrevPage,
  getFromLocal,
} from "../utils/FormUtils";

export default function AccountInfo() {
  const router = useRouter();
  const { formData, handleInputChange, setFormData } = useContext(FormContext);

  const keys = ["username", "email"];

  useEffect(() => {
    const res = getFromLocal(keys);
    setFormData({
      ...formData,
      ...res,
    });
    console.log(res);
  }, []);

  const nextPage = () => {
    // saveInLocal(formData, keys);
    navigateToNextPage(router, "/preferences-info");
    // router.push("/preferences-info");
  };
  const prevPage = () => {
    navigateToPrevPage(router);
  };

  return (
    <form>
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
      <button type="button" onClick={nextPage}>
        Next
      </button>
      <button type="button" onClick={prevPage}>
        Previous
      </button>
    </form>
  );
}
