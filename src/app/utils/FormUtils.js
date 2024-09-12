export const saveInLocal = (key, value) => {
  localStorage.setItem(key, value);
};

export const getFromLocal = (keys) => {
  const res = {};

  keys.forEach((key) => {
    // console.key;
    const value = localStorage.getItem(key);

    res[key] = value !== null ? value : "";
  });

  return res;
};

export const navigateToNextPage = (router, nextRoute) => {
  router.push(nextRoute);
};

export const navigateToPrevPage = (router) => {
  router.back();
};
