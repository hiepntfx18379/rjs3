import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { detailSlice } from "../proDetail/detailSlice";

const ProductShop = ({ pro }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // khi click chuyen huong dong thoi gui id
  const navigatateToDetailPage = () => {
    navigate(`/detail/${pro._id.$oid}`);
    dispatch(detailSlice.actions.getIdProduct(pro._id.$oid));
  };

  return (
    <>
      <div
        className="animate-[zoomOut_2s_ease-in-out]"
        onClick={navigatateToDetailPage}
      >
        <img src={pro.img1} className="hover:opacity-60" />
        <div className=" font-semibold mt-4 mb-2">{pro.name}</div>
        <div className="price">
          {new Intl.NumberFormat("en-DE").format(pro.price)} VND
        </div>
      </div>
    </>
  );
};

export default ProductShop;
