import { createSelector } from "@reduxjs/toolkit";

// home
export const productListSelector = (state) => state.showDetail.productsList;
export const showDetailSelector = (state) => state.showDetail.status;

//shop
export const getCategorySelector = (state) => state.shop.category;
export const getSeacrchSelector = (state) => state.shop.search;

export const listRemaining = createSelector(
  productListSelector,
  getCategorySelector,
  getSeacrchSelector,
  (listProducts, category, textSeach) => {
    return listProducts.filter((product) => {
      if (textSeach === "" && category === "All") return product;
      else if (category !== "All") return product.category === category;
      else if (textSeach !== "") {
        return product.name.toLowerCase().split(" ").includes(textSeach);
      }
    });
  }
);
