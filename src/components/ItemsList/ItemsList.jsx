import React, { useContext } from "react";
import { Context } from "../../Context";

const ItemsList = () => {
  const { items, removeItem } = useContext(Context);
  const totalPrice = items.reduce(
    (acc, item) => (acc += Number(item.price)),
    0
  );
  return (
    <div className="w-full h-96 border-t overflow-auto border-lightGreen ">
      {items.length === 0 ? (
        <div className="w-full flex flex-col space-y-4 items-center mt-20">
          <p className="text-3xl text-lightGreen text-center">Add items in the form above</p>
          <p className="text-xl text-white font-bold">
            No items in the invoice
          </p>
        </div>
      ) : (
        items.map((item) => (
          <div
            key={item.id}
            className="flex w-full min-h-10 p-2 text-lightGreen border-b border-lightGreen items-center justify-between"
          >
            <div className="flex space-x-4">
              <button
                onClick={() => removeItem(item.id)}
                className="text-base font-bold text-lightRed hover:text-darkRed"
              >
                x
              </button>
              <p>{item.name}</p>
            </div>
            <p className="right-0">
              {Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
              }).format(item.price)}
            </p>
          </div>
        ))
      )}
      {items.length !== 0 && (
        <div className="flex justify-end pr-2 pt-2 text-lightGreen font-bold">
          {Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
          }).format(totalPrice)}
        </div>
      )}
    </div>
  );
};

export default ItemsList;
