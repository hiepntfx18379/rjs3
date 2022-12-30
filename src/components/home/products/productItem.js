import { useDispatch, useSelector } from "react-redux";
import {
  productListSelector,
  showDetailSelector,
} from "../../../redux/selector";
import { showDetailProductSlice } from "./productSlice";
import Modal from "./Modal";

const ProductItem = ({ pro, id }) => {
  const show = useSelector(showDetailSelector);
  const dispatch = useDispatch();

  const handleShowPopupClick = () => {
    dispatch(showDetailProductSlice.actions.SHOW_POPUP(id));
  };

  //console.log(show);

  return (
    <div className="" onClick={handleShowPopupClick}>
      <img src={pro.img1} className="hover:opacity-60" />
      <div className=" font-semibold mt-4 mb-2">{pro.name}</div>
      <div className="price">
        {new Intl.NumberFormat("en-DE").format(pro.price)} VND
      </div>
      {show && <Modal proDetail={pro} />}
    </div>
  );
};

export default ProductItem;
