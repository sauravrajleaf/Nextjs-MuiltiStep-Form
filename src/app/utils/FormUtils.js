export const saveInLocal = (key, value) => {
  localStorage.setItem(key, value);
};

export const getFromLocal = (keys) => {
  const res = {};
  const booleanKeys = [
    "emailNotifications",
    "smsNotifications",
    "pushNotifications",
  ];
  keys.forEach((key) => {
    const value = localStorage.getItem(key);

    //Handle the null values
    res[key] = value !== null ? value : "";

    //converting string values to boolean
    if (booleanKeys.includes(key)) {
      res[key] = value === "true";
    }
  });

  return res;
};

export const navigateToNextPage = (router, nextRoute) => {
  router.push(nextRoute);
};

export const navigateToPrevPage = (router, prevRoute) => {
  router.back(prevRoute);
};
