import React, { useContext, useState, useEffect } from "react";
import { ShopContext } from "../context/ShopContext.jsx";
import axios from "axios";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cartItems, setCartItems, token, calculateTotalPrice, totalPrice, removeFromCart, increaseQuantity, decreaseQuantity } = useContext(ShopContext);
  const [cartData, setCartData] = useState(cartItems);

  useEffect(() => {
    setCartData(cartItems);
    calculateTotalPrice(cartItems);
  }, [cartItems, calculateTotalPrice]);

  const handleIncreaseQuantity = (itemId, currentQuantity) => {
    increaseQuantity(itemId); 
  };

  const handleDecreaseQuantity = (itemId, currentQuantity) => {
    decreaseQuantity(itemId); 
  };

  const handleRemoveItem = async (itemId) => {
    removeFromCart(itemId); 
  };

  return (
    <div className="cart-container p-4">
      <h2 className="font-semibold text-2xl">Your Cart</h2>
      {Object.keys(cartData).length === 0 ? (
        <p>Your cart is empty!</p>
      ) : (
        <div>
          <div className="cart-items">
            {Object.keys(cartData).map((itemId) => {
              const item = cartData[itemId];
              return (
                <div
                  key={itemId}
                  className="cart-item flex items-center justify-between p-4 bg-gray-100 mb-4 rounded-lg"
                >
                  <div className="item-details flex items-center">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-16 h-16 rounded-md object-cover"
                    />
                    <div className="ml-4">
                      <h3 className="font-semibold">{item.name}</h3>
                      <p className="text-sm">₹{item.price || 0}</p>
                    </div>
                  </div>

                  <div className="quantity flex items-center gap-2">
                    <button
                      className="bg-gray-300 p-2 rounded-full"
                      onClick={() => handleDecreaseQuantity(itemId, item.quantity)}
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      className="bg-gray-300 p-2 rounded-full"
                      onClick={() => handleIncreaseQuantity(itemId, item.quantity)}
                    >
                      +
                    </button>
                  </div>

                  <div className="remove">
                    <button
                      className="text-red-500 hover:text-red-700"
                      onClick={() => handleRemoveItem(itemId)}
                    >
                      <i className="bi bi-trash"></i> Remove
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="total-price mt-6">
            <h3 className="font-semibold text-xl">Total Price: ₹{totalPrice}</h3>
          </div>

          <div className="checkout-button mt-4">
            <Link to='/checkout'>
            <button
              className="bg-[#188ab9] text-white px-8 py-2 rounded-full text-sm"
              onClick={() => alert("Proceeding to checkout")}
            >
              Proceed to Checkout
            </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
