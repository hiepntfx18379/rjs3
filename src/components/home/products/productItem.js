import { useDispatch } from "react-redux";
import { showDetailProductSlice } from "./productSlice";

const ProductItem = ({ pro }) => {
  const dispatch = useDispatch();
  const handleShowPopupClick = () => {
    dispatch(showDetailProductSlice.actions.SHOW_POPUP(true));
  };

  return (
    <>
      <div className="animate-[zoomOut_2s_ease-in-out]">
        <img
          src={pro.img1}
          className="hover:opacity-60"
          onClick={handleShowPopupClick}
        />
        <div className=" font-semibold mt-4 mb-2">{pro.name}</div>
        <div className="price">
          {new Intl.NumberFormat("en-DE").format(pro.price)} VND
        </div>
      </div>
    </>
  );
};

export default ProductItem;
