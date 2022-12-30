import { configureStore } from "@reduxjs/toolkit";
import { showDetailProductSlice } from "../components/home/products/productSlice";

export const store = configureStore({
  reducer: {
    showDetail: showDetailProductSlice.reducer,
  },
});
