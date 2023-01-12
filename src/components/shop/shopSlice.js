import { createSlice } from "@reduxjs/toolkit";

export const shopSlice = createSlice({
  name: "shop",
  initialState: {
    category: "All",
    search: "",
    sort: "default",
  },
  reducers: {
    productCategory: (state, action) => {
      state.category = action.payload;
    },

    textSearch: (state, action) => {
      state.search = action.payload;
    },

    sortProduct: (state, action) => {
      state.sort = action.payload;
    },
  },
});
