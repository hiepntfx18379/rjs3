import React from "react";
import { useSelector } from "react-redux";
import { listRemaining, productListSelector } from "../../redux/selector";
import Pagination from "./pagination";

const NavShop = () => {
  const listProduct = useSelector(listRemaining);
  const listDefault = useSelector(productListSelector);
  const listPro = listProduct.length < 1 ? listDefault : listProduct;
  return (
    <div className="grid grid-cols-3 gap-x-1 ml-4 text-center relative">
      <Pagination listPro={listPro} />
    </div>
  );
};

export default NavShop;
