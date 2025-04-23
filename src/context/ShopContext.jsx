import { createContext, useState } from "react";
import products from "../products/products";

// context api
export const ProductContext = createContext();

// getDefaultValues function
const getDefaultValues = () => {
  let cart = {};
  for (let i = 1; i <= products.length; i++) {
    cart[i] = 0;
  }
  return cart;
};

// ShopContext component
const ShopContext = ({ children }) => {
  // state for cartItems
  const [cartItems, setCartItems] = useState(getDefaultValues);

  //addToCart function
  const addToCart = (id) => {
    setCartItems((prev) => ({ ...prev, [id]: prev[id] + 1 }));
  };

  //   removeCart
  const removeCart = (id) => {
    setCartItems((prev) => ({ ...prev, [id]: prev[id] - 1 }));
  };

  //updateCart
  const updateCart = (id, newValue) => {
    setCartItems((prev) => ({ ...prev, [id]: newValue }));
  };

  //getTotals
  const getTotals = () => {
    let total = 0;
    for (let uniqueId in cartItems) {
      if (cartItems[uniqueId] > 0) {
        let itemInfo = products.find((obj) => obj.id === Number(uniqueId));
        total = total + cartItems[uniqueId] * itemInfo.price;
      }
    }
    return total;
  };

  //chekOut
  const checkOut = () => {
    setCartItems(getDefaultValues());
  };

  const contextValues = {
    cartItems,
    addToCart,
    removeCart,
    updateCart,
    getTotals,
    checkOut,
  };

  //   ui
  return (
    <div>
      <ProductContext.Provider value={contextValues}>
        {children}
      </ProductContext.Provider>
    </div>
  );
};

export default ShopContext;
