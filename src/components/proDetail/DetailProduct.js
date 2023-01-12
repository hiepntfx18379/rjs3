import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IoCaretBackSharp, IoCaretForwardSharp } from "react-icons/io5";
import {
  productByIdSelector,
  productRelatedSelector,
} from "../../redux/selector";
import ProductShop from "../shop/ProductShop";
import ImageDetail from "./ImageDetail";
import { infoUserLogined, statusLoginSelector } from "../user/useSlide";
import { cartSlide } from "../cartDetail/cartSlide";
import { useNavigate } from "react-router-dom";
import { detailSlice } from "./detailSlice";

const DetailProduct = () => {
  // get product
  const productById = useSelector(productByIdSelector);
  const [numberProduct, setNumberProduct] = useState(1);

  // get related product
  const productRelated = useSelector(productRelatedSelector);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // change image
  const imageArray = ["img1", "img2", "img3", "img4"];
  const [imageDefault, setImage] = useState("img1");
  const changeImage = (id) => {
    setImage(imageArray[id]);
  };

  // handle de-in crement quality
  const handleDecrement = () => {
    if (numberProduct === 1) {
      setNumberProduct(1);
    } else setNumberProduct(numberProduct - 1);
  };
  const handleIncrement = () => {
    setNumberProduct(numberProduct + 1);
  };

  // display description
  const regex = /\s\•\s/g;
  let descText = productById.long_desc;

  // handle change data product to cart page
  // get status login
  const statusLogin = useSelector(statusLoginSelector);
  const dataProduct = {
    idProduct: productById._id.$oid,
    quatity: numberProduct,
    product: productById,
  };
  const handleClickAddCart = () => {
    if (statusLogin) {
      dispatch(cartSlide.actions.ADD_PRO(dataProduct));
      navigate("/cart");
    } else {
      navigate("/login");
      dispatch(detailSlice.actions.must_login(true));
    }
  };

  return (
    <div className="container">
      <div className="grid grid-cols-2">
        <div className="flex relative justify-between items-center">
          <div className=" flex flex-col absolute left-0 gap-5 z-10">
            {imageArray.map((img, id) => {
              return (
                <ImageDetail
                  productById={productById}
                  id={id}
                  key={id}
                  img={img}
                  ClickChangeImg={changeImage}
                />
              );
            })}
          </div>
          <img
            src={productById[imageDefault]}
            className="h-[400px] absolute right-0"
          />
        </div>

        <div className="ml-5">
          <div className=" titleDetail ">{productById.name}</div>
          <div className="py-5 text-3xl text-gray-400">
            {new Intl.NumberFormat("en-DE").format(productById.price)} VND
          </div>
          <div className=" leading-relaxed  text-gray-400">
            {productById.short_desc}
          </div>
          <div className="my-5 ">
            <span className="uppercase text-xl font-semibold ">category: </span>
            <span className="ml-3 text-xl font-semibold">
              {productById.category}s
            </span>
          </div>
          <div className=" border-2 text-gray-400 w-fit">
            <div className=" flex">
              <span className="py-1 pl-5 pr-10 uppercase mt-[2px]">
                Quantity
              </span>
              <span className="flex justify-center justify-between text-black py-1 pr-5">
                <button onClick={handleDecrement}>
                  <IoCaretBackSharp />
                </button>
                <span className="px-2 box-border text-sm mt-1">
                  {numberProduct}
                </span>
                <button onClick={handleIncrement}>
                  <IoCaretForwardSharp />
                </button>
              </span>
              <button
                className="px-5 bg-gray-800 py-1"
                onClick={handleClickAddCart}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-20">
        <span className=" uppercase font-bold text-xl ">
          Product Description
        </span>
        <div className="my-[20px] whitespace-pre-line">
          {descText.replace(regex, "\n- ")}
        </div>
      </div>

      <div className=" my-[30px]">
        <span className=" uppercase font-bold text-xl ">Related Products</span>
        <div className="flex gap-7 mt-[20px]">
          {productRelated.map((product, id) => {
            if (product.category === productById.category)
              return (
                <div className="w-[200px] h-[300px] text-center">
                  <ProductShop key={id} pro={product} id={id} />;
                </div>
              );
          })}
        </div>
      </div>
    </div>
  );
};

export default DetailProduct;
