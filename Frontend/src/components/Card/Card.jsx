import React, { useContext, useEffect, useState } from "react";
import 'bootstrap-icons/font/bootstrap-icons.css';
import { ShopContext } from "../../context/ShopContext";
import axios from "axios";
import { Link } from "react-router-dom";
import './Card.css';

const Card = ({ id, title, description, price, images }) => {
  const [isHeart, setIsHeart] = useState(false);
  const [isAdded, setIsAdded] = useState(false);
  const[product,setProduct] = useState(null);

  const getProduct = async () => {
    try {
      const response = await axios.get(
        `https://zolve-soln.onrender.com/api/product/products/${id}`
      );
      setProduct(response.data.product);
    } catch (error) {
      console.error(error);
    }
  };

   useEffect(() => {
      getProduct();
    }, [id]);

  const { addToCart } = useContext(ShopContext);

  const toggleHeart = () => setIsHeart((prev) => !prev);

  const handleAddToCart = (e) => {
    e.preventDefault(); 
    setIsAdded((prev) => !prev);
    addToCart(product, 1);
  };

  return (
    <Link 
      to={`/product/${id}`} 
      className="transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
      aria-label={`View details for ${title}`}
    >
      <div className="card p-4 rounded-lg flex flex-col gap-3 bg-[#e0e0e0] h-[400px] w-[300px]">
        <div className="img_ctr bg-white rounded-lg h-[60%] relative">
          <img
            className="rounded-lg h-full w-full object-cover transition-all duration-300 transform"
            src={images}
            alt={title}
          />
          <button
            className={`bi bi-heart-fill border border-black px-[6px] py-1 w-fit rounded-full text-xs absolute right-2 top-2 cursor-pointer focus:outline-none ${
              isHeart
                ? "bg-[#188ab9] text-white heart-bounce"
                : "text-[#188ab9] hover:text-[#188ab9] transition-all"
            }`}
            aria-label={isHeart ? "Remove from wishlist" : "Add to wishlist"}
            onClick={toggleHeart}
          ></button>
        </div>

        <div className="desc_ctr flex  justify-between mt-4 md:mt-0 md:w-[90%]">
          <div className="right_ctr flex flex-col ">
            <h2 className="font-semibold text-xl text-[#333]">{title}</h2>
          </div>
          <div className="left_ctr flex flex-col items-end">
            <span className="text-xs line-through text-gray-500">₹1500</span>
            <span className="font-semibold text-lg text-[#188ab9]">₹{price}</span>
          </div>
        </div>

        <button
          className={`btn_ctr flex items-center justify-center text-white rounded-full px-8 py-2 text-sm cursor-pointer transition-all duration-300 transform focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#188ab9] ${
            isAdded
              ? "bg-green-600 hover:bg-green-700"
              : "bg-[#188ab9] hover:bg-[#317d9e] ease-in-out"
          }`}
          onClick={handleAddToCart}
          aria-label={isAdded ? "Remove from cart" : "Add to cart"}
        >
          {isAdded ? (
            <div className="flex items-center gap-2 animate-fade-in">
              <i className="bi bi-cart-check"></i> Added
            </div>
          ) : (
            "Add to Cart"
          )}
        </button>
      </div>
    </Link>
  );
};

export default Card;
