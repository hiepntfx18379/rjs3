import React from "react";
import { useSelector } from "react-redux";
import { listRemaining } from "../../redux/selector";
import Pagination from "./pagination";

const NavShop = () => {
  const listProduct = useSelector(listRemaining);

  return (
    <div className="grid grid-cols-3 gap-x-1 ml-4 text-center relative">
      <Pagination listPro={listProduct} />
    </div>
  );
};

export default NavShop;
