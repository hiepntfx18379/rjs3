import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { showDetailSelector } from "../../../redux/selector";
import { showDetailProductSlice } from "./productSlice";

export default function Modal({ proDetail }) {
  const dispatch = useDispatch();

  const handleHidenPopup = () => {
    dispatch(showDetailProductSlice.actions.HIDE_POPUP(false));
  };

  const hide = useSelector(showDetailSelector);
  // console.log("hide: ", hide);
  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-6 mx-auto max-w-4xl max-h-max bg-white text-black">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex w-[100%] h-auto p-3">
            <img src={proDetail.img1} className="object-cover  w-96 h-auto " />
            <div className=" p-10">
              <div className="text-left ">
                <div className=" font-semibold mt-4 mb-2 text-2xl">
                  {proDetail.name}
                </div>
                <div className="text-xl font-extrabold">
                  {new Intl.NumberFormat("en-DE").format(proDetail.price)} VND
                </div>
              </div>

              <div className=" mb-8 mt-6 text-left">{proDetail.long_desc}</div>
              <button className=" bg-gray-800 flex justify-center text-xl text-white  px-2 py-2 ">
                <FaShoppingCart className="mt-1 mr-2" /> View Detail
              </button>

              <button
                onClick={handleHidenPopup}
                className="absolute top-3 right-3 font-[900] uppercase text-3xl"
              >
                X
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
}
