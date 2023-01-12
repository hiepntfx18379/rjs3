import { createSlice } from "@reduxjs/toolkit";

export const detailSlice = createSlice({
  name: "detail",
  initialState: {
    id: "",
    mustLogin: false,
  },
  reducers: {
    getIdProduct: (state, action) => {
      state.id = action.payload;
    },
    must_login: (state, action) => {
      state.mustLogin = action.payload;
    },
  },
});

// selector
export const mustLoginSelector = (state) => state.detail.mustLogin;
