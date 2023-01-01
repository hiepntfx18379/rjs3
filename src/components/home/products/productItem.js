import { useDispatch, useSelector } from "react-redux";
import { showDetailSelector } from "../../../redux/selector";
import { showDetailProductSlice } from "./productSlice";
import Modal from "./Modal";

const ProductItem = ({ pro }) => {
  const dispatch = useDispatch();
  const handleShowPopupClick = () => {
    dispatch(showDetailProductSlice.actions.SHOW_POPUP(true));
  };

  return (
    <>
      <div>
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
