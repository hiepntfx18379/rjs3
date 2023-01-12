import React from "react";
import { useSelector } from "react-redux";
import bannerCheckout from "../../asset/checkoutBanner.jpg";
import { saveToStorage } from "../user/storage";
import { infoUserLogined } from "../user/useSlide";
import { listCartSelector, totalPriceSelector } from "../cartDetail/cartSlide";
import RowCheckout from "./RowCheckout";
const productOfUser = "OrderProductOfUser";

const Checkout = () => {
  const listCart = useSelector(listCartSelector);

  const userLogined = useSelector(infoUserLogined);
  const dataUser = {
    emailUser: userLogined.email,
    arrProducts: listCart,
  };
  saveToStorage(productOfUser, JSON.stringify(dataUser));

  const totalPrice = useSelector(totalPriceSelector);

  return (
    <>
      <img src={bannerCheckout} className=" -mb-11 m-auto" />
      <div className="container grid grid-cols-5 gap-2">
        <div className="tableListProducts col-span-3">
          <div className="text-2xl uppercase tracking-widest font-semibold mb-4">
            billing details
          </div>
          <form className="mb-6">
            <div className="mb-6">
              <label
                for="fName"
                className=" uppercase block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                full name
              </label>
              <input
                type="text"
                id="fName"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                placeholder="Enter Your Full Name Here"
                required
              />
            </div>
            <div className="mb-6">
              <label
                for="email"
                className=" uppercase block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter Your Email Here"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                required
              />
            </div>
            <div className="mb-6">
              <label
                for="phone"
                className=" uppercase block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                phone number
              </label>
              <input
                type="text"
                id="phone"
                placeholder="Enter Your Phone Here"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                required
              />
            </div>
            <div className="mb-6">
              <label
                for="address"
                className=" uppercase block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                address
              </label>
              <input
                type="text"
                id="address"
                placeholder="Enter Your Address Here"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                required
              />
            </div>

            <button className="text-gray-200 text-xl bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg  px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Place order
            </button>
          </form>
        </div>
        <div className=" col-span-2 p-4 bg-gray-200 text-black font-bold h-fit sticky top-[81px]">
          <div className="text-xl uppercase mb-4">Your Order</div>
          <div className="">
            {listCart.map((pro, id) => (
              <RowCheckout row={pro} key={id} />
            ))}
          </div>
          <div className="flex justify-between">
            <span className="uppercase">total: </span>
            <span className="text-xl -mt-1">
              {new Intl.NumberFormat("en-DE").format(totalPrice)} VND
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
