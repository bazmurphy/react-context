"use client";

import { useState, createContext, useContext } from "react";

// create the useStore custom hook
const useStore = () => {
  // use two pieces of state, user and cartCount
  const [user, setUser] = useState("");
  const [cartCount, setCartCount] = useState(0);

  return {
    // return an object with 2 properties and 4 methods
    user,
    cartCount,
    login: () => setUser("Baz"),
    logout: () => setUser(""),
    addToCart: () => setCartCount(cartCount + 1),
    removeFromCart: () => setCartCount(cartCount - 1),
  };
};

// create the Store Context
// initialsed to null
const StoreContext = createContext(null);

// create the Store Context Provider
// set the value to useStore() and pass it children as props
export const StoreContextProvider = ({ children }) => {
  return (
    <StoreContext.Provider value={useStore()}>{children}</StoreContext.Provider>
  );
};

// export these custom hooks
export const useUser = () => useContext(StoreContext).user;
export const useCartCount = () => useContext(StoreContext).cartCount;
export const useLogin = () => useContext(StoreContext).login;
export const useLogout = () => useContext(StoreContext).logout;
export const useAddToCart = () => useContext(StoreContext).addToCart;
export const useRemoveFromCart = () => useContext(StoreContext).removeFromCart;
