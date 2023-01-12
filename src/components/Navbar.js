import React, { Fragment, useState } from "react";
import { NavLink } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { infoUserLogined, userSlide } from "./user/useSlide";
import { getFromStorage, saveToStorage } from "./user/storage";
import { IoCaretDownSharp } from "react-icons/io5";
import { cartSlide } from "./cartDetail/cartSlide";

const KEY = "userLogin";
const userLoginArray = getFromStorage(KEY)
  ? JSON.parse(getFromStorage(KEY))
  : [];
const Navbar = () => {
  // scroll navbar
  const [onScroll, setOnScroll] = useState(false);
  window.onscroll = () => {
    setOnScroll(window.scrollY === 0 ? false : true);
    return () => (window.onscroll = null);
  };

  const userInfoLogin = useSelector(infoUserLogined);

  //handle Logout
  const dispatch = useDispatch();
  const handleLogout = () => {
    userLoginArray.shift();
    saveToStorage(KEY, JSON.stringify(userLoginArray));
    dispatch(
      userSlide.actions.ON_LOGOUT({ statusLogin: false, userLogined: {} })
    );
    dispatch(cartSlide.actions.LIST_PRO({ list: [] }));
  };

  return (
    <div className={onScroll ? "scrolled" : "navbar"}>
      <div>
        <NavLink to="home" className="mr-3 link">
          Home
        </NavLink>
        <NavLink to="shop" className="link">
          Shop
        </NavLink>
      </div>
      <div className="title-navbar">boutique</div>
      <div className="flex justify-between ">
        <NavLink to="cart" className="icon-navbar link">
          <FaShoppingCart className="mr-1" />
          Cart
        </NavLink>

        {userInfoLogin.name ? (
          <Fragment>
            <div className="group flex relative flex-col">
              <span className="flex">
                <FaUserAlt className="mr-1" />
                {userInfoLogin.name.length > 10
                  ? userInfoLogin.name.slice(0, 12) + "..."
                  : userInfoLogin.name}
                <IoCaretDownSharp className="ml-1 mt-1" />
              </span>
              <div className="hidden group-hover:flex flex-col z-50 absolute top-5 bg-black text-white mt-1 p-3 right-0">
                <NavLink
                  to="login"
                  className="mb-1 link"
                  onClick={handleLogout}
                >
                  LogOut
                </NavLink>
                <div className="link">Setting</div>
              </div>
            </div>
          </Fragment>
        ) : (
          <NavLink to="login" className="icon-navbar link">
            <FaUserAlt className="mr-1" /> Login
          </NavLink>
        )}
      </div>
    </div>
  );
};

export default Navbar;
