import { createSlice } from "@reduxjs/toolkit";

export const shopSlice = createSlice({
  name: "shop",
  initialState: {
    productsList: [],
    category: "All",
    search: "",
  },
  reducers: {
    productCategory: (state, action) => {
      state.category = action.payload;
    },

    textSearch: (state, action) => {
      state.search = action.payload;
    },
  },
});
