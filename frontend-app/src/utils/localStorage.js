export const saveInLocalStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const getFromLocalStorage = key => {
  return JSON.parse(localStorage.getItem(key) || {});
};