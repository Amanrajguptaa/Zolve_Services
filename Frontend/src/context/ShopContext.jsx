import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const [token, setToken] = useState(""); 
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState(() => {
    const savedCartItems = localStorage.getItem("cartItems");
    return savedCartItems ? JSON.parse(savedCartItems) : [];
  });
  const [totalPrice, setTotalPrice] = useState(0);

  const getProductsData = async () => {
    try {
      const response = await axios.get(
        "https://zolve-soln.onrender.com/api/product/list-product"
      );
      setProducts(response.data.products);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const addToCart = (product, quantity) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item._id === product._id);

      if (existingItem) {
        const updatedItems = prevItems.map((item) =>
          item._id === product._id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
        localStorage.setItem("cartItems", JSON.stringify(updatedItems));
        return updatedItems;
      } else {
        const updatedItems = [...prevItems, { ...product, quantity }];
        localStorage.setItem("cartItems", JSON.stringify(updatedItems));
        return updatedItems;
      }
    });
  };

  const removeFromCart = (productId) => {
    setCartItems((prevItems) => {
      const updatedItems = prevItems.filter((item) => item._id !== productId);
      localStorage.setItem("cartItems", JSON.stringify(updatedItems));
      return updatedItems;
    });
  };

  const increaseQuantity = (productId) => {
    setCartItems((prevItems) => {
      const updatedItems = prevItems.map((item) =>
        item._id === productId ? { ...item, quantity: item.quantity + 1 } : item
      );
      localStorage.setItem("cartItems", JSON.stringify(updatedItems));
      return updatedItems;
    });
  };

  const decreaseQuantity = (productId) => {
    setCartItems((prevItems) => {
      const updatedItems = prevItems.map((item) =>
        item._id === productId && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );
      localStorage.setItem("cartItems", JSON.stringify(updatedItems));
      return updatedItems;
    });
  };

  const calculateTotalPrice = () => {
    const total = cartItems.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    setTotalPrice(total);
  };

  useEffect(() => {
    getProductsData();
  }, [token]);

  useEffect(() => {
    calculateTotalPrice();
  }, [cartItems]); 

  const value = {
    products,
    cartItems,
    totalPrice,
    addToCart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    setToken, 
  };

  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
};

export default ShopContextProvider;
