import React from "react";

const ImageDetail = ({ productById, img, id, ClickChangeImg }) => {
  return (
    <div onClick={() => ClickChangeImg(id)}>
      <img src={productById[img]} className=" img-detail" />
    </div>
  );
};

export default ImageDetail;
