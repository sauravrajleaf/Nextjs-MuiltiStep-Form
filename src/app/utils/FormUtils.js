export const saveInLocal = (formData, keys) => {
  keys.forEach((key) => {
    localStorage.setItem(key, formData[key]);
  });
};

export const getFromLocal = (formData, keys) => {
  const res = {};

  keys.forEach((key) => {
    console.key;
    res[key] = localStorage.getItem(key, formData[key]);
  });
  return res;
};

export const navigateToNextPage = (router, nextRoute) => {
  router.push(nextRoute);
};

export const navigateToPrevPage = (router) => {
  router.back();
};
