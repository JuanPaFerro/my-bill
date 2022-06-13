import { useState, useEffect, createContext } from "react";
export const Context = createContext();

const initialState = window.localStorage.getItem("items");

export const Provider = ({ children }) => {
  const [items, setItems] = useState(
    initialState ? JSON.parse(initialState) : []
  );

  useEffect(() => {
    window.localStorage.setItem("items", JSON.stringify(items));
    console.log(window.localStorage.getItem("items"));
  }, [items]);

  const removeItem = (itemId) =>
    setItems(items.filter((item) => item.id !== itemId));
  const value = { items, setItems, removeItem };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};
