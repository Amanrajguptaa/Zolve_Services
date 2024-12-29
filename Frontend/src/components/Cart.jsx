import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext.jsx";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Link } from "react-router-dom";

const Cart = () => {
  const { 
    cartItems, 
    totalPrice, 
    removeFromCart, 
    increaseQuantity, 
    decreaseQuantity 
  } = useContext(ShopContext);

  const handleIncreaseQuantity = (itemId) => {
    increaseQuantity(itemId);
  };

  const handleDecreaseQuantity = (itemId) => {
    decreaseQuantity(itemId);
  };

  const handleRemoveItem = (itemId) => {
    removeFromCart(itemId);
  };

  return (
    <div className="cart-container p-4">
      <h2 className="font-semibold text-2xl mb-4">Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty!</p>
      ) : (
        <div>
          <div className="cart-items">
            {cartItems.map((item) => {
              if (!item) return null;

              return (
                <div
                  key={item._id}
                  className="cart-item flex items-center justify-between p-4 bg-gray-100 mb-4 rounded-lg"
                >
                  <div className="item-details flex items-center">
                    <img
                      src={item.images || "/placeholder-image.png"}
                      alt={item.title || "Unnamed Item"}
                      className="w-16 h-16 rounded-md object-cover"
                    />
                    <div className="ml-4">
                      <h3 className="font-semibold">{item.name || "Unnamed Item"}</h3>
                      <p className="text-sm">₹{(item.price || 0).toFixed(2)}</p>
                    </div>
                  </div>
                  <div className="quantity flex items-center gap-2">
                    <button
                      className="bg-gray-300 p-2 rounded-full"
                      onClick={() => handleDecreaseQuantity(item._id)}
                    >
                      -
                    </button>
                    <span>{item.quantity || 0}</span>
                    <button
                      className="bg-gray-300 p-2 rounded-full"
                      onClick={() => handleIncreaseQuantity(item._id)}  
                    >
                      +
                    </button>
                  </div>
                  <div className="remove">
                    <button
                      className="text-red-500 hover:text-red-700"
                      onClick={() => handleRemoveItem(item._id)}
                    >
                      <i className="bi bi-trash"></i> Remove
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="total-price mt-6">
            <h3 className="font-semibold text-xl">Total Price: ₹{(totalPrice || 0).toFixed(2)}</h3>
          </div>
          <div className="checkout-button mt-4">
            <Link to="/checkout">
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
