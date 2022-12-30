import React from "react";
import { useNavigate } from "react-router-dom";
import banner from "../../../asset/banner1.jpg";

const Banner = () => {
  const navigation = useNavigate();

  const navigationHandleClick = () => {
    navigation("/shop");
  };
  return (
    <div className="w-100 h-auto">
      <img src={banner} />
      <div className="absolute top-[135px] left-[11%] tracking-widest">
        <div className="uppercase text-sm text-gray-400 ">
          new inspiration 2023
        </div>
        <div className="text-4xl mb-4 mt-4 w-[90%] font-semibold uppercase">
          20% off on new season
        </div>
        <button
          onClick={navigationHandleClick}
          className=" bg-gray-800 text-gray-400 px-4 py-3 "
        >
          Browse collections
        </button>
      </div>
    </div>
  );
};

export default Banner;
