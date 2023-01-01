import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getProductshow,
  productListSelector,
  showDetailSelector,
} from "../../../redux/selector";
import Modal from "./Modal";
import ProductItem from "./productItem";
import { showDetailProductSlice } from "./productSlice";

function productShow(product, show) {
  return show && <Modal proDetail={product} />;
}

const Products = () => {
  const [product, setProduct] = useState([]);
  const dispatch = useDispatch();
  const show = useSelector(showDetailSelector);
  const [pro, setPro] = useState();

  let proShow = productShow(pro, show);

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
          <div key={id} onClick={() => setPro(pro)}>
            <ProductItem pro={pro} />
          </div>
        ))}
      </div>
      {proShow}
    </div>
  );
};

export default Products;
