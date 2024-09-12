"use client";

import { useRouter } from "next/navigation";

import { useContext } from "react";
import FormContext from "../../components/FormContext";

export default function AccountInfo() {
  const router = useRouter();
  const { formData, handleInputChange, nextStep, prevStep } =
    useContext(FormContext);

  const nextPage = () => {
    router.push("/preferences-info");
    nextStep();
  };
  const prevPage = () => {
    router.back();
    prevStep();
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
