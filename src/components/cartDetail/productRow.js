import React from "react";
import {
  IoCaretBackSharp,
  IoCaretForwardSharp,
  IoTrashBinSharp,
} from "react-icons/io5";

const ProductRow = ({ picked, incre, decre, del }) => {
  return (
    <tr>
      <td>
        <img src={picked.product.img1} />
      </td>
      <td className=" font-semibold">{picked.product.name}</td>
      <td>
        {new Intl.NumberFormat("en-DE").format(picked.product.price)}
        <br />
        VND
      </td>
      <td>
        <span className="flex text-black py-1 pr-5 justify-center ml-6">
          <button onClick={() => decre(picked.product._id.$oid)}>
            <IoCaretBackSharp />
          </button>
          <span className=" box-border text-sm mt-1 px-2  ">
            {picked.quatity}
          </span>
          <button onClick={() => incre(picked.product._id.$oid)}>
            <IoCaretForwardSharp />
          </button>
        </span>
      </td>
      <td>
        {new Intl.NumberFormat("en-DE").format(
          picked.product.price * picked.quatity
        )}
        <br />
        VND
      </td>
      <td>
        <IoTrashBinSharp
          className="h-8 w-8 ml-6"
          onClick={() => del(picked.product._id.$oid)}
        />
      </td>
    </tr>
  );
};

export default ProductRow;
