import { createContext, useContext, useState } from "react";
import { Toaster } from "react-hot-toast";

const CartContext = createContext({});
export const useCart = () => useContext(CartContext);

export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const contextValue = { cart, setCart };
  return (
    <CartContext.Provider value={contextValue}>
      <Toaster />
      {children}
    </CartContext.Provider>
  );
};
