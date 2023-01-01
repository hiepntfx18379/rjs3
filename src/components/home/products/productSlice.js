import { createSlice } from "@reduxjs/toolkit";

export const showDetailProductSlice = createSlice({
  name: "showDetail",
  initialState: {
    status: false,
    productsList: [],
  },
  reducers: {
    add: (state, action) => {
      state.productsList = action.payload;
    },

    SHOW_POPUP: (state, action) => {
      state.status = action.payload;
    },

    HIDE_POPUP: (state, action) => {
      state.status = action.payload;
    },
  },
});
