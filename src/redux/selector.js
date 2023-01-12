import { createSelector } from "@reduxjs/toolkit";
import { saveToStorage, getFromStorage } from "../components/user/storage";

// home
export const productListSelector = (state) => state.showDetail.productsList;
export const showDetailSelector = (state) => state.showDetail.status;

//shop
export const getCategorySelector = (state) => state.shop.category;
export const getSeacrchSelector = (state) => state.shop.search;
export const getSortSelector = (state) => state.shop.sort;

function sortingDefault(arr) {
  return arr.sort((a, b) => a.name.localeCompare(b.name));
}

function sortingPrice(arr) {
  return arr.sort((a, b) => parseInt(a.price) - parseInt(b.price));
}

export const listSorted = createSelector(
  productListSelector,
  getSortSelector,
  (listProduct, sortText) => {
    let list = [];
    if (sortText === "default") {
      list = sortingDefault(listProduct);
      return list;
    } else {
      list = sortingPrice(listProduct);
      return list;
    }
  }
);

export const listRemaining = createSelector(
  productListSelector,
  getCategorySelector,
  getSeacrchSelector,

  (listProducts, category, textSeach) => {
    return listProducts.filter((product) => {
      if (textSeach === "" && category === "All") {
        return product;
      } else if (textSeach !== "") {
        return product.name.toLowerCase().split(" ").includes(textSeach);
      } else if (category !== "All") return product.category === category;
    });
  }
);

// detail
export const getIdProductSelector = (state) => state.detail.id;
export const productByIdSelector = createSelector(
  productListSelector,
  getIdProductSelector,
  (listProduct, idPro) => {
    return listProduct.find((product) => {
      if (product._id.$oid === idPro) return product;
    });
  }
);

export const productRelatedSelector = createSelector(
  productListSelector,
  getIdProductSelector,
  productByIdSelector,
  (listProduct, idPro, productId) => {
    return listProduct.filter((pro) => {
      return pro._id.$oid !== idPro && productId.category === pro.category;
    });
  }
);

// user
// export const statusUserLogin = (state) => state.user.ON_LOGIN;
