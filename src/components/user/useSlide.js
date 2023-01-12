import { createSlice } from "@reduxjs/toolkit";

export const userSlide = createSlice({
  name: "user",
  initialState: {
    statusLogin: false,
    userInfo: {},
  },
  reducers: {
    ON_LOGIN: (state, action) => {
      state.statusLogin = action.payload.statusLogin;
      state.userInfo = action.payload.userLogined;
    },

    ON_LOGOUT: (state, action) => {
      state.statusLogin = action.payload.statusLogin;
      state.userInfo = action.payload.userLogined;
    },
  },
});

// selector
export const statusLoginSelector = (state) => state.user.statusLogin;
export const infoUserLogined = (state) => state.user.userInfo;
