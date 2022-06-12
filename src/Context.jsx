import { useState, createContext } from "react";
export const Context = createContext();
export const Provider = ({ children }) => {
  const [items, setItems] = useState([]);

  const removeItem = (itemId) =>
    setItems(items.filter((item) => item.id !== itemId));
  const value = { items, setItems, removeItem };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};
