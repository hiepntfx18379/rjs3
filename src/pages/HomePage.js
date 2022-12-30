import React from "react";
import Banner from "../components/home/banner/Banner";
import Cartegories from "../components/home/categories/Cartegories";
import BeFriend from "../components/home/others/BeFriend";
import OtherInfo from "../components/home/others/OtherInfo";
import Products from "../components/home/products/products";

const HomePage = () => {
  return (
    <div className="relative">
      <Banner />
      <Cartegories />
      <Products />
      <OtherInfo />
      <BeFriend />
    </div>
  );
};

export default HomePage;
