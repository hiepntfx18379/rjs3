import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import iphone from "../../../asset/product_1.png";
import mac from "../../../asset/product_2.png";
import ipad from "../../../asset/product_3.png";
import watch from "../../../asset/product_4.png";
import airPods from "../../../asset/product_5.png";
import { getCategorySelector } from "../../../redux/selector";

const Cartegories = () => {
  const map1 = [iphone, mac];
  const map2 = [ipad, watch, airPods];
  const categorySelector = useSelector(getCategorySelector);
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/shop/${categorySelector}`);
  };
  return (
    <div className="container">
      <div className=" box-title">
        <div className=" text-seconds-title ">
          carefully created collections
        </div>
        <div className="text-main-title">browse our cartegories</div>
      </div>
      <div className=" grid grid-cols-2 gap-x-4 mb-4 rounded-md overflow-hidden">
        {map1.map((cate, i) => {
          return <img src={cate} key={i} onClick={handleClick} />;
        })}
      </div>
      <div className="grid grid-cols-3 gap-x-4 mb-4 rounded-md overflow-hidden">
        {map2.map((cate, i) => {
          return <img src={cate} key={i} onClick={handleClick} />;
        })}
      </div>
    </div>
  );
};

export default Cartegories;
