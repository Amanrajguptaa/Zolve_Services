import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const [token, setToken] = useState("");
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState({});
  const [totalPrice, setTotalPrice] = useState(0);

  const addToCart = async (itemId, quantity) => {
    let cartData = { ...cartItems };

    if (cartData[itemId]) {
      cartData[itemId].quantity += quantity;
    } else {
      const product = products.find((product) => product._id === itemId);
      if (product) {
        cartData[itemId] = {
          title: product.name,
          price: product.price,
          quantity: quantity,
          image: product.images,
        };
      }
    }

    setCartItems(cartData);
    calculateTotalPrice(cartData);

    if (token) {
      try {
        await axios.post(
          "https://zolve-services.onrender.com/api/cart/add-to-cart",
          { itemId, quantity },
          { headers: { token } }
        );
      } catch (error) {
        console.log("Error adding item to cart:", error);
      }
    }
  };

  const calculateTotalPrice = (cartData) => {
    let total = 0;
    for (const itemId in cartData) {
      const item = cartData[itemId];
      const price = item.price || 0;
      const quantity = item.quantity || 0;
      total += price * quantity;
    }
    setTotalPrice(total);
  };

  const getUserCart = async (token) => {
    try {
      const response = await axios.post(
        "https://zolve-services.onrender.com/api/cart/get-cart",
        {},
        { headers: { token } }
      );
      if (response.data.cartData) {
        setCartItems(response.data.cartData);
        calculateTotalPrice(response.data.cartData);
      }
    } catch (error) {
      console.log("Error fetching cart data:", error);
    }
  };

  const removeFromCart = async (itemId) => {
    let updatedCart = { ...cartItems };
    delete updatedCart[itemId]; 

    setCartItems(updatedCart);
    calculateTotalPrice(updatedCart);

    if (token) {
      try {
        await axios.post(
          "https://zolve-services.onrender.com/api/cart/remove-item",
          { itemId },
          { headers: { token } }
        );
      } catch (error) {
        console.log("Error removing item from cart:", error);
      }
    }
  };

  const decreaseQuantity = async (itemId) => {
    let updatedCart = { ...cartItems };
    const item = updatedCart[itemId];
    if (item && item.quantity > 1) {
      item.quantity -= 1;
      updatedCart[itemId] = item;
      setCartItems(updatedCart);
      calculateTotalPrice(updatedCart);

      if (token) {
        try {
          await axios.post(
            "https://zolve-services.onrender.com/api/cart/update-cart",
            { itemId, quantity: item.quantity },
            { headers: { token } }
          );
        } catch (error) {
          console.log("Error updating quantity:", error);
        }
      }
    }
  };

  const increaseQuantity = async (itemId) => {
    let updatedCart = { ...cartItems };
    const item = updatedCart[itemId];
    if (item) {
      item.quantity += 1;
      updatedCart[itemId] = item;
      setCartItems(updatedCart);
      calculateTotalPrice(updatedCart);

      if (token) {
        try {
          await axios.post(
            "https://zolve-services.onrender.com/api/cart/update-cart",
            { itemId, quantity: item.quantity },
            { headers: { token } }
          );
        } catch (error) {
          console.log("Error updating quantity:", error);
        }
      }
    }
  };

  useEffect(() => {
    const tokenData = localStorage.getItem("token");
    if (tokenData) {
      setToken(tokenData);
      getUserCart(tokenData);
    }
  }, []);

  const getProductsData = async () => {
    if (token) {
      try {
        const response = await axios.get("https://zolve-services.onrender.com/api/product/list-product");
        setProducts(response.data.products);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    }
  };

  useEffect(() => {
    if (token) {
      getProductsData();
    }
  }, [token]);

  const value = {
    products,
    cartItems,
    totalPrice,
    addToCart,
    calculateTotalPrice,
    removeFromCart,
    decreaseQuantity,
    increaseQuantity,
  };

  return (
    <ShopContext.Provider value={value}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
