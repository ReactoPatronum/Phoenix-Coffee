import { createContext, useContext, useState } from "react";
import { Toaster } from "react-hot-toast";

const CartContext = createContext({});
export const useCart = () => useContext(CartContext);

export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [darkMode, setDarkMode] = useState(true);

  const contextValue = {
    cart,
    setCart,
    darkMode,
    setDarkMode,
  };
  return (
    <CartContext.Provider value={contextValue}>
      <Toaster />
      {children}
    </CartContext.Provider>
  );
};
