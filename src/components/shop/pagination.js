import React, { Fragment, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { productListSelector } from "../../redux/selector";
import ProductItem from "../home/products/productItem";

function productAPage(listProduct, productPerPage, currentPage) {
  return listProduct.slice(
    (currentPage - 1) * productPerPage,
    (currentPage - 1) * productPerPage + productPerPage
  );
}

const Pagination = () => {
  let listProduct = useSelector(productListSelector);
  const [currentPage, setCurrentPage] = useState(1);
  let productPerPage = 3;
  let totalPage = Math.ceil(listProduct.length / productPerPage);
  let listProductSlice = [];

  const hanleNextPage = () => {
    if (currentPage < totalPage) setCurrentPage(currentPage + 1);
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  listProductSlice = productAPage(listProduct, productPerPage, currentPage);

  return (
    <>
      {listProductSlice.map((pro, id) => {
        return <ProductItem pro={pro} id={id} key={id} />;
      })}
      <div className="absolute -bottom-[80px] left-[40%]">
        <button onClick={handlePreviousPage} className="btn-pagination ">
          Previous
        </button>

        <span className="text-black font-black uppercase text-2xl w-10 px-4">
          {currentPage}
        </span>
        <button onClick={hanleNextPage} className="btn-pagination ">
          Next
        </button>
      </div>
    </>
  );
};

export default Pagination;
