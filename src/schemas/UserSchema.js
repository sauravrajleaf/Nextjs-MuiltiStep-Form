import * as Yup from "yup";

// Define the Yup validation schema
export const personalInfoSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "First name must be at least 2 characters long.")
    .max(11, "First name must be 1-10 characters long.")
    .matches(/^[a-zA-Z]+$/, "First name should only contain letters."),
  lastName: Yup.string()
    .min(2, "Last name must be at least 2 characters long.")
    .max(11, "Last name must be 1-10 characters long.")
    .matches(/^[a-zA-Z]+$/, "Last name should only contain letters."),

  dob: Yup.date()
    .required("Date of birth is required")
    .max(
      new Date(new Date().setFullYear(new Date().getFullYear() - 15)),
      "You must be at least 15 years old."
    )
    .min(
      new Date(new Date().setFullYear(new Date().getFullYear() - 120)),
      "Date of birth is not valid."
    ),
});

export const accountsInfoSchema = Yup.object().shape({
  email: Yup.string()
    .email("Email must be a valid email address.")
    .required("Email is required")
    .matches(
      /^[\w.-]+@[\w.-]+\.[a-zA-Z]{2,}$/,
      "Please use a valid email address"
    ),

  username: Yup.string()
    .min(3, "Username must be at least 3 characters long.")
    .max(11, "Username must be 1-10 characters long.")
    .matches(
      /^[a-zA-Z0-9]+$/,
      "Username can only contain letters and numbers."
    ),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters long.")
    .max(50, "Password must be less than 50 characters.")
    .matches(/[a-z]/, "Password must contain at least one lowercase letter.")
    .matches(/[A-Z]/, "Password must contain at least one uppercase letter.")
    .matches(/[0-9]/, "Password must contain at least one number.")
    .matches(
      /[!@#$%^&*(),.?":{}|<>]/,
      "Password must contain at least one special character."
    ),
});

// export const preferencesInfoSchema = Yup.object().shape({});
