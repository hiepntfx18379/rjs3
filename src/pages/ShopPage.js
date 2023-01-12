import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, Outlet, useParams } from "react-router-dom";
import bannerShop from "../asset/bannerShop.jpg";
import { shopSlice } from "../components/shop/shopSlice";

const ShopPage = () => {
  const dispatch = useDispatch();
  const [textSearch, setTextSearch] = useState("");
  const params = useParams();

  const handleTextSearchInput = (e) => {
    setTextSearch(e.target.value);
    dispatch(shopSlice.actions.textSearch(e.target.value));
  };

  const [sortProduct, setSortProduct] = useState("Default");

  const handleSortProduct = (e) => {
    setSortProduct(e.target.value);
    dispatch(shopSlice.actions.sortProduct(e.target.value));
  };

  useEffect(() => {
    dispatch(shopSlice.actions.productCategory(params.category));
  }, [params.category]);

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
              value={textSearch}
              onChange={handleTextSearchInput}
            />
            <select className="border-element" onChange={handleSortProduct}>
              <option value="default">default sorting</option>
              <option value="price">price (Hight-Low)</option>
            </select>
          </div>
        </div>

        <div className="block-grid-categories">
          <nav className="col-span-1">
            <div className="box-category w-100">
              <div className="main-category">Apple</div>

              <Link to="All" className="sub-category link">
                All
              </Link>

              <div className=" n-category">iphone & mac</div>
              <div className="flex flex-col">
                <Link to="iphone" className="sub-category link">
                  Iphone
                </Link>
                <Link to="ipad" className="sub-category link">
                  Ipad
                </Link>
                <Link to="macbook" className="sub-category link">
                  Macbook
                </Link>
              </div>

              <div className=" n-category">Wireless</div>
              <div className="flex flex-col">
                <Link to="airpod" className="sub-category link">
                  Airpod
                </Link>
                <Link to="watch" className="sub-category link">
                  Watch
                </Link>
              </div>

              <div className=" n-category">other</div>
              <div className="flex flex-col">
                <Link className="sub-category link">Mouse</Link>
                <Link className="sub-category link">Keyboard</Link>
                <Link className="sub-category link">Other</Link>
              </div>
            </div>
          </nav>
          <div className="col-span-4 ">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopPage;
