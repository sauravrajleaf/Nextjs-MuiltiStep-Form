"use client";

import { useRouter } from "next/navigation";
import { useContext } from "react";
import FormContext from "../../components/FormContext";

export default function AccountInfo() {
  const router = useRouter();
  const { formData, handleInputChange, step } = useContext(FormContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    router.push("/thank-you");
  };

  return (
    <form>
      <h2>Preferences</h2>
      <label>Choose Preferences</label>

      <select
        name="preferences"
        value={formData.preferences}
        onChange={handleInputChange}
      >
        <option value="">Select a Preference</option>
        <option value="newsletter">Newsletter</option>
        <option value="updates">Product Updates</option>
        <option value="offers">Special Offers</option>
      </select>

      <label>How would you like to receive notifications?</label>
      <br />
      <br />
      <input
        type="checkbox"
        name="emailNotifications"
        checked={formData.emailNotifications}
        onChange={handleInputChange}
      />
      <label>Email</label>
      <input
        type="checkbox"
        name="smsNotifications"
        checked={formData.smsNotifications}
        onChange={handleInputChange}
      />
      <label>SMS</label>
      <input
        type="checkbox"
        name="pushNotifications"
        checked={formData.pushNotifications}
        onChange={handleInputChange}
      />
      <label>Push Notifications</label>

      <input
        type="checkbox"
        name="tnc"
        readOnly={true}
        defaultChecked={true}
        disabled
      />
      <label htmlFor="tnc" className="tnc">
        I have read the terms and conditions
      </label>

      <button type="submit" onClick={handleSubmit}>
        Submit
      </button>
      {/* <button type="button" onClick={prevStep}>
        Previous
      </button> */}
    </form>
  );
}
