import React from "react";
import { NavLink } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
const Navbar = () => {
  return (
    <div className="navbar">
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
        <NavLink to="register" className="icon-navbar link">
          <FaShoppingCart className="mr-1" />
          Cart
        </NavLink>
        <NavLink to="login" className="icon-navbar link">
          <FaUserAlt className="mr-1" />
          Login
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
