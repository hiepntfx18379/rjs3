export const getApiProduct = (data) => {
  return {
    type: "getProductsList",
    payload: data,
  };
};

export const showPopUp = (data) => {
  return {
    type: "SHOW_POPUP",
    payload: data,
  };
};

export const hidePopUp = (data) => {
  return {
    type: "HIDE_POPUP",
    payload: data,
  };
};
