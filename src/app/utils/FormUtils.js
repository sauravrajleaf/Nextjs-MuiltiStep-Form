import { personalInfoSchema } from "@/schemas/UserSchema";
import { accountsInfoSchema } from "@/schemas/UserSchema";
import { preferencesInfoSchema } from "@/schemas/UserSchema";

// key - single value
export const saveInLocal = (key, value) => {
  localStorage.setItem(key, value);
};

// Keys - array
export const getFromLocal = (keys) => {
  const res = {};

  const booleanKeys = [
    "emailNotifications",
    "smsNotifications",
    "pushNotifications",
    "isValid",
  ];
  keys.forEach((key) => {
    const value = localStorage.getItem(key);

    // Only assign the value if it is not null
    if (value !== null) {
      //converting boolean string values to boolean
      if (booleanKeys.includes(key)) {
        res[key] = value === "true";
      }
      res[key] = value;
    }
  });

  return res;
};

export const navigateToNextPage = (router, nextRoute) => {
  router.push(nextRoute);
};

export const navigateToPrevPage = (router, prevRoute) => {
  router.push(prevRoute);
};

export const getSchema = (pathname) => {
  switch (pathname) {
    case "/personal-info":
      return personalInfoSchema;
    case "/account-info":
      return accountsInfoSchema;
    case "/preferences-info":
      return preferencesInfoSchema;
    default:
      return personalInfoSchema;
  }
};
