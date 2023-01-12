import { configureStore } from "@reduxjs/toolkit";
import { cartSlide } from "../components/cartDetail/cartSlide";
import { showDetailProductSlice } from "../components/home/products/productSlice";
import { detailSlice } from "../components/proDetail/detailSlice";
import { shopSlice } from "../components/shop/shopSlice";
import { userSlide } from "../components/user/useSlide";

export const store = configureStore({
  reducer: {
    showDetail: showDetailProductSlice.reducer,
    shop: shopSlice.reducer,
    detail: detailSlice.reducer,
    user: userSlide.reducer,
    cart: cartSlide.reducer,
  },
});
