import React, { createContext, useState } from "react";
import all_product from "../Components/Assets/all_product";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let i = 0; i < all_product.length; i++) {
    cart[all_product[i].id] = 0;
  }
  return cart;
};

const ShopContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());

  const addToCart = (id) => {
    setCartItems((prev) => ({
      ...prev,
      [id]: prev[id] + 1,
    }));
  };

  const removeFromCart = (id) => {
    setCartItems((prev) => ({
      ...prev,
      [id]: Math.max(prev[id] - 1, 0),
    }));
  };

  const updateCartItemCount = (count, id) => {
    setCartItems((prev) => ({
      ...prev,
      [id]: count,
    }));
  };

  const contextValue = {
    all_product,
    cartItems,
    addToCart,
    removeFromCart,
    updateCartItemCount,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
