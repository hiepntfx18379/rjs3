import React, { Fragment } from "react";

const RowCheckout = ({ row }) => {
  return (
    <Fragment>
      <div className="flex justify-between">
        <span className="text-sm">
          {row.product.name.length < 40
            ? row.product.name
            : row.product.name.slice(0, 33) + "..."}
        </span>
        <div className="text-gray-500">
          <span>
            {new Intl.NumberFormat("en-DE").format(row.product.price)} VND x
          </span>
          <span> {row.quatity}</span>{" "}
        </div>
      </div>
      <hr className="border-1 border-gray-500 my-2" />
    </Fragment>
  );
};

export default RowCheckout;
