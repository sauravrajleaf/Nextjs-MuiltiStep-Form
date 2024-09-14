import * as Yup from "yup";
// Define the Yup validation schema
export const personalInfoSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "First name must be at least 3 characters long.")
    .max(9, "First name max 10 characters long.")
    .matches(/^[a-zA-Z]+$/, "First name should only contain letters."),
  lastName: Yup.string()
    .min(2, "Last name must be at least 3 characters long.")
    .max(9, "Last name max 10 characters long.")
    .matches(/^[a-zA-Z]+$/, "Last name should only contain letters."),

  dob: Yup.string(),

  city: Yup.string(),
});

export const accountsInfoSchema = Yup.object().shape({
  email: Yup.string()
    .email("Email must be a valid email address.")
    .min(9, "email must be at least 10 characters long.")
    .max(19, "email max 20 characters long.")
    .matches(
      /^[\w.-]+@[\w.-]+\.[a-zA-Z]{2,}$/,
      "Please use a valid email address"
    ),

  username: Yup.string()
    .min(2, "Username must be at least 3 characters long.")
    .max(9, "Username max 10 characters long.")
    .matches(
      /^[a-zA-Z0-9]+$/,
      "Username can only contain letters and numbers."
    ),
  password: Yup.string()
    .min(7, "Password must be at least 8 characters long.")
    .max(19, "Password must be less than 20 characters."),
  // .matches(/[a-z]/, "Password must contain at least one lowercase letter.")
  // .matches(/[A-Z]/, "Password must contain at least one uppercase letter."),
  // .matches(/[0-9]/, "Password must contain at least one number.")
  // .matches(
  //   /[!@#$%^&*(),.?":{}|<>]/,
  //   "Password must contain at least one special character."
  // ),
});

export const preferencesInfoSchema = Yup.object().shape({
  // Adding preferences to the Yup schema
  preferences: Yup.string(),

  emailNotifications: Yup.boolean(),
  smsNotifications: Yup.boolean(),
  pushNotifications: Yup.boolean(),
  tnc: Yup.boolean(),
});
