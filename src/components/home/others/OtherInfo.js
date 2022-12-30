import React from "react";
import BeFriend from "./BeFriend";

const OtherInfo = () => {
  return (
    <div className="w-100 bg-slate-100 ">
      <div className="container flex justify-around py-5 items-center">
        <div className=" box-title mt-8">
          <div className="text-main-title text-2xl">free shipping</div>

          <div className=" text-seconds-title ">free shipping worlwide</div>
        </div>

        <div className=" box-title mt-8">
          <div className="text-main-title text-2xl">24 x 7 service</div>

          <div className=" text-seconds-title ">free shipping worlwide</div>
        </div>

        <div className=" box-title mt-8">
          <div className="text-main-title text-2xl">festival offer</div>

          <div className=" text-seconds-title ">free shipping worlwide</div>
        </div>
      </div>
    </div>
  );
};

export default OtherInfo;
