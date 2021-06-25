const setStorage = (name, value) => {
  if (typeof value === "object") {
    window.localStorage.setItem(name, JSON.stringify(value));
  } else {
    window.localStorage.setItem(name, value);
  }
};

const getStorage = (name) => {
  return JSON.parse(window.localStorage.getItem(name));
};

export { setStorage, getStorage };
