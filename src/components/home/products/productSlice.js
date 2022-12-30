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
      const productShow = state.productsList.findIndex(
        (index) => index === action.id
      );
      if (productShow) state.status = true;
    },

    HIDE_POPUP: (state, action) => {
      state.status = action.payload;
    },
  },
});
