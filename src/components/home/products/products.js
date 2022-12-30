import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getApiProduct } from "../../../redux/action";
import { productListSelector } from "../../../redux/selector";
import ProductItem from "./productItem";
import { showDetailProductSlice } from "./productSlice";

const Products = () => {
  const [product, setProduct] = useState([]);
  const dispatch = useDispatch();
  const listProSelector = useSelector(productListSelector);

  useEffect(() => {
    async function getDataProduct() {
      const req = await fetch(
        "https://firebasestorage.googleapis.com/v0/b/funix-subtitle.appspot.com/o/Boutique_products.json?alt=media&token=dc67a5ea-e3e0-479e-9eaf-5e01bcd09c74"
      );
      const res = await req.json();
      setProduct(res);
      dispatch(showDetailProductSlice.actions.add(res));
    }

    getDataProduct();
  }, []);

  return (
    <div className="container ">
      <div className=" uppercase mb-5">
        <div className=" text-second-title">made the hard way</div>
        <div className="text-main-title">top trending products</div>
      </div>
      <div className=" text-center text-sm grid grid-cols-4 gap-4">
        {product.map((pro, id) => (
          <ProductItem pro={pro} id={id} key={id} />
        ))}
      </div>
    </div>
  );
};

export default Products;
