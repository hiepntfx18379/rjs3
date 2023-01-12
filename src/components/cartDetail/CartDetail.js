import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import bannerCart from "../../asset/bannerCart.jpg";
import { getFromStorage, saveToStorage } from "../user/storage";
import { infoUserLogined } from "../user/useSlide";
import {
  cartSlide,
  listCartSelector,
  totalPriceSelector,
  totalProductsSelector,
} from "./cartSlide";
import ProductRow from "./productRow";
const productOfUser = "listProduct";

const CartDetail = () => {
  let listProductsUser = JSON.parse(getFromStorage(productOfUser)) || [];
  let listCart = useSelector(listCartSelector);
  const dispatch = useDispatch();
  const userLogined = useSelector(infoUserLogined);

  // load privioua products added before
  useEffect(() => {
    let indexBill = listProductsUser.findIndex(
      (bill) => bill.emailUser === userLogined.email
    );
    if (indexBill !== -1) {
      dispatch(
        cartSlide.actions.LIST_PRO({
          list: listProductsUser[indexBill].arrProducts,
        })
      );
    }
  }, []);

  // save user vs product in a array
  const dataUser = {
    emailUser: userLogined.email,
    arrProducts: listCart,
  };
  useEffect(() => {
    if (listCart.length === 0) {
      saveToStorage(productOfUser, JSON.stringify(listProductsUser));
    } else {
      let index = listProductsUser.findIndex(
        (user) => user.emailUser === dataUser.emailUser
      );
      if (index === -1) listProductsUser.push(dataUser);
      else listProductsUser[index].arrProducts = listCart;
      saveToStorage(productOfUser, JSON.stringify(listProductsUser));
    }
  }, [listCart]);

  const totalPrice = useSelector(totalPriceSelector);
  const totalProducts = useSelector(totalProductsSelector);

  const handleUpdateDecreament = (id) => {
    dispatch(cartSlide.actions.UP_QUAN_PRO({ idProduct: id, type: "decre" }));
  };

  const handleUpdateIncreament = (id) => {
    dispatch(cartSlide.actions.UP_QUAN_PRO({ idProduct: id, type: "incre" }));
  };

  const removeItem = (id) => {
    dispatch(cartSlide.actions.DEL_PRO(id));
  };

  return (
    <>
      <img src={bannerCart} className=" -mb-11" />
      <div className="container grid grid-cols-4 gap-2">
        <div className="tableListProducts col-span-3">
          <table className="table-auto w-[100%] text-center">
            <thead className="bg-gray-200 tracking-widest">
              <tr>
                <th className="w-[21%]">IMAGE</th>
                <th>PRODUCT</th>
                <th>PRICE</th>
                <th>QUANTITY</th>
                <th>TOTAL</th>
                <th>REMOVE</th>
              </tr>
            </thead>
            <tbody>
              {listCart.map((picked, id) => {
                return (
                  <ProductRow
                    picked={picked}
                    incre={handleUpdateIncreament}
                    decre={handleUpdateDecreament}
                    del={removeItem}
                  />
                );
              })}
            </tbody>
          </table>
          <div className="semii-final flex justify-between bg-gray-200 m-3 py-2 ">
            <NavLink to="/shop">⬅ Continue shopping</NavLink>
            <NavLink to="checkout" className="border-1 border-black">
              Proceed to checkout ➡
            </NavLink>
          </div>
        </div>
        <div className=" col-span-1 p-4 bg-gray-200 text-black font-bold uppercase h-fit sticky top-[81px]">
          <div className="text-xl  mb-4">cart total</div>
          <div className="">
            <span>total quantity: </span> <span>{totalProducts}</span>
            <hr className="border-1 border-black my-2" />
          </div>
          <div className="total">
            <span>total: </span>
            <span>{new Intl.NumberFormat("en-DE").format(totalPrice)} VND</span>
          </div>
          <div className="mt-4">
            <input
              type="text"
              className="p-2 w-[100%]"
              placeholder="Enter your coupon"
            />
            <button className="bg-gray-400 w-[100%] p-2">
              🎉🧧🎁 Apply Coupon
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartDetail;
