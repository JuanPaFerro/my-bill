import React from "react";
import { useState, useRef, useContext } from "react";
import { Context } from "../../Context";
const AddForm = () => {
  const { items, setItems } = useContext(Context);
  const name = useRef();
  const price = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    setItems([
      ...items,
      {
        id: `${Math.round(Math.random() * 1000)}-${name.current.value}-${
          price.current.value
        }`,
        name: name.current.value,
        price: price.current.value,
      },
    ]);
    name.current.value = "";
    price.current.value = "";
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full flex space-x-4 items-end text-lightGreen font-bold"
    >
      <div className="flex flex-col space-y-2 lg:w-64 w-36 ">
        <label htmlFor="name">Item Name :</label>
        <input
          required
          ref={name}
          name="name"
          type="text"
          className="rounded-sm border border-gray bg-darkGreen text-white px-2"
        />
      </div>
      <div className="flex flex-col space-y-2 w-20">
        <label htmlFor="price">Price $ :</label>
        <input
          required
          ref={price}
          name="price"
          type="number"
          className="rounded-sm border border-gray bg-darkGreen text-white px-2"
        />
      </div>
      <button
        type="submit"
        className="text-white bg-darkGreen hover:bg-lightGreen hover:text-black py-1 text-sm  px-4 rounded transition duration-300"
      >
        Add
      </button>
    </form>
  );
};

export default AddForm;
