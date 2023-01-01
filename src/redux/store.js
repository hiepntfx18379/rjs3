import { configureStore } from "@reduxjs/toolkit";
import { showDetailProductSlice } from "../components/home/products/productSlice";
import { shopSlice } from "../components/shop/shopSlice";

export const store = configureStore({
  reducer: {
    showDetail: showDetailProductSlice.reducer,
    shop: shopSlice.reducer,
  },
});
