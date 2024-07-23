import { createContext, useEffect, useState } from "react";
import { menu_list } from "../../assets/assets";

export const StoreContext = createContext(null);

const StoreContextProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [cartItems, setCartItems] = useState({});

  useEffect(() => {
    setData(menu_list);
  }, []);

  const handleAdd = (itemId) => {
    const item = data.find(item => item.id === itemId);
    if (!item) return;
    setCartItems((prev) => ({
      ...prev,
      [itemId]: {
        ...item,
        quantity: prev[itemId] ? prev[itemId].quantity + 1 : 1
      }
    }));
  };

  const handleRemove = (itemId) => {
    setCartItems((prev) => {
      const updated = { ...prev };
      if (updated[itemId] && updated[itemId].quantity > 1) {
        updated[itemId].quantity -= 1;
      } else {
        delete updated[itemId];
      }
      return updated;
    });
  };

  const increaseQuantity = (itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: {
        ...prev[itemId],
        quantity: (prev[itemId].quantity || 0) + 1
      }
    }));
  };

  const decreaseQuantity = (itemId) => {
    setCartItems((prev) => {
      const updated = { ...prev };
      if (updated[itemId] && updated[itemId].quantity > 1) {
        updated[itemId].quantity -= 1;
      } else {
        delete updated[itemId];
      }
      return updated;
    });
  };

  const removeItemFromCart = (itemId) => {
    setCartItems((prev) => {
      const updated = { ...prev };
      delete updated[itemId];
      return updated;
    });
  };

  return (
    <StoreContext.Provider value={{ data, cartItems, handleAdd, handleRemove, increaseQuantity, decreaseQuantity, removeItemFromCart }}>
      {children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
