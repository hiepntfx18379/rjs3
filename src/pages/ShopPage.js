import React from "react";
import { useSelector } from "react-redux";
import bannerShop from "../asset/bannerShop.jpg";
import ProductItem from "../components/home/products/productItem";
import Pagination from "../components/shop/pagination";
import { productListSelector } from "../redux/selector";
const ShopPage = () => {
  const listProduct = useSelector(productListSelector);
  console.log(listProduct);

  return (
    <div>
      <div className="w-100 h-auto -mb-10">
        <img src={bannerShop} />
        <div className="absolute top-[135px] left-[41%]  tracking-widest ">
          <div className="font-extrabold text-transparent text-8xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            Shop
          </div>
        </div>
      </div>

      <div className="container">
        <div className="block-grid-categories">
          <div className=" title-category col-span-1 uppercase text-2xl text-main-title mt-2">
            Categories
          </div>
          <div className=" col-span-4 flex justify-between ">
            <input
              type="text"
              placeholder="Search for"
              className="border-element"
            />
            <select className="border-element">
              <option value="default">default sorting</option>
              <option value="a-z">A-Z</option>
              <option value="price">price (Hight-Low)</option>
            </select>
          </div>
        </div>

        <div className="block-grid-categories">
          <div className="col-span-1">
            <div className="box-category w-100">
              <div className="main-category">Apple</div>
              <div className="sub-category link">All</div>

              <div className=" n-category">iphone & mac</div>
              <div className="sub-category link">Iphone</div>
              <div className="sub-category link">Ipad</div>
              <div className="sub-category link">Macbook</div>

              <div className=" n-category">Wireless</div>
              <div className="sub-category link">Airpod</div>
              <div className="sub-category link">Watch</div>

              <div className=" n-category">other</div>
              <div className="sub-category link">Mouse</div>
              <div className="sub-category link">Keyboard</div>
              <div className="sub-category link">Other</div>
            </div>
          </div>
          <div className="col-span-4 ">
            <div className="grid grid-cols-3 gap-x-1 ml-4 text-center relative">
              <Pagination />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopPage;
