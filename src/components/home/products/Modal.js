import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { detailSlice } from "../../proDetail/detailSlice";

import { showDetailProductSlice } from "./productSlice";

export default function Modal({ proDetail }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleHidenPopup = () => {
    dispatch(showDetailProductSlice.actions.HIDE_POPUP(false));
  };

  const handleToDetailPage = () => {
    navigate(`/detail/${proDetail._id.$oid}`);
    dispatch(detailSlice.actions.getIdProduct(proDetail._id.$oid));
    handleHidenPopup();
  };

  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden bg-slate-500 overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-6 mx-auto max-w-4xl max-h bg-white text-black">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex w-[100%] p-3">
            <img
              src={proDetail.img1}
              className=" object-contain w-96 h-auto "
            />
            <div className=" p-5 mt-8 ">
              <div className="text-left ">
                <div className=" font-semibold mt-4 mb-2 text-xl">
                  {proDetail.name}
                </div>
                <div className="text-xl font-extrabold">
                  {new Intl.NumberFormat("en-DE").format(proDetail.price)} VND
                </div>
              </div>

              <div className=" mb-8 mt-6 text-left overflow-auto h-72">
                {proDetail.long_desc}
              </div>
              <button
                className=" bg-gray-800 flex justify-center text-xl text-white  px-2 py-2 "
                onClick={handleToDetailPage}
              >
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
    </>
  );
}
