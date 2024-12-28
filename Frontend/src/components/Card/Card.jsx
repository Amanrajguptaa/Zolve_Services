import React, { useContext, useState } from "react";
import 'bootstrap-icons/font/bootstrap-icons.css';
import './Card.css';
import { ShopContext } from "../../context/ShopContext";
import { Link } from "react-router-dom";

const Card = ({id,title,description,price,images}) => {
  const [isHeart, setIsHeart] = useState(false);
  const [isAdded, setIsAdded] = useState(false);

  const {addToCart} = useContext(ShopContext);

  function toggleHeart() {
    setIsHeart(!isHeart);
  }

  const handleAddToCart = () => {
    setIsAdded(!isAdded);
  };

  return (
    <>
    <Link to={`/product/${id}`}>
    <div>
      <div className="card p-4 rounded-lg hidden md:flex flex-col gap-3 bg-[#e0e0e0] h-[400px] w-[300px]">
        <div className="img_ctr bg-white rounded-lg h-[60%] relative">
        <img className="rounded-lg h-[100%] w-[100%] bg-cover " src={images} alt="" />
          <div
            className={`bi bi-heart-fill border border-black px-[6px] py-1 w-fit rounded-full text-xs absolute right-2 top-2 cursor-pointer ${
              isHeart ? "bg-[#188ab9] text-white heart-bounce" : "text-[#188ab9]"
            }`}
            onClick={toggleHeart}
          ></div>
        </div>

        <div className="desc_ctr flex items-center justify-between mt-4 mb-4">
          <div className="right_ctr flex flex-col">
            <div className="text-xs">{}</div>
            <div className="font-semibold w-[80%] text-lg font-agrandirtb -mt-1">{title}</div>
          </div>
          <div className="left_ctr flex flex-col items-end">
            <div className="text-xs line-through">₹1500</div>
            <div className="font-semibold text-lg -mt-1  font-agrandirtb">₹{price}</div>
          </div>
        </div>

        <div
          className={`btn_ctr flex items-center justify-center text-white rounded-full px-8 py-2  text-sm cursor-pointer ${
            isAdded
              ? "bg-green-600"
              : "bg-[#188ab9] hover:bg-[#317d9e] duration-200 ease-in-out"
          }`}
        >
          {isAdded ? (
            <div className="flex items-center  gap-2 animate-fade-in">
              <i className="bi bi-cart-check"></i> Added
            </div>
          ) : (
            "Add to Cart"
          )}
        </div>
      </div>

      <div className="mob_card p-4 rounded-lg flex gap-4 bg-[#e0e0e0] h-[175px] w-full md:hidden">
        <div className="img_ctr bg-white rounded-lg h-full w-6/12 relative">
          <div
            className={`bi bi-heart-fill border border-black px-[6px] py-1 w-fit rounded-full text-xs absolute right-2 top-2 cursor-pointer ${
              isHeart ? "bg-[#188ab9] text-white heart-bounce" : "text-[#188ab9]"
            }`}
            onClick={toggleHeart}
          ></div>
        </div>

        <div className="w-6/12 flex flex-col justify-between">
          <div className="desc_ctr flex flex-col gap-4 items-start justify-between">
            <div className="right_ctr flex flex-col">
              <div className="text-xs">Category Name</div>
              <div className="font-semibold text-xl leading-5">
                Product Name
              </div>
            </div>
            <div className="left_ctr flex flex-col items-start">
              <div className="text-xs line-through">₹1500</div>
              <div className="font-semibold text-xl -mt-1">₹1,234</div>
            </div>
          </div>

          <div
            className={`btn_ctr flex items-center justify-center text-white rounded-full px-8 py-2 text-sm cursor-pointer ${
              isAdded
                ? "bg-green-600"
                : "bg-[#188ab9] hover:bg-[#317d9e] duration-200 ease-in-out"
            }`}
            onClick={handleAddToCart}
          >
            {isAdded ? (
              <div className="flex items-center gap-2 animate-fade-in">
                <i className="bi bi-cart-check"></i> Added
              </div>
            ) : (
              "Add to Cart"
            )}
          </div>
        </div>
      </div>
      </div>
      </Link>
    </>
  );
};

export default Card;