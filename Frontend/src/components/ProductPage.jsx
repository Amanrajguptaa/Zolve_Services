import React, { useContext, useEffect, useState } from "react";
import RelatedProducts from "./RelatedProducts/RelatedProducts";
import { ShopContext } from "../context/ShopContext";
import axios from "axios";
import { useParams } from "react-router-dom";

const ProductPage = () => {
  const [quantity, setQuantity] = useState(1);
  const [product, setProduct] = useState(null);
  const { productId } = useParams();
  const { addToCart } = useContext(ShopContext);

  const getProduct = async () => {
    try {
      const response = await axios.get(
        `https://zolve-soln.onrender.com/api/product/products/${productId}`
      );
      setProduct(response.data.product);
      console.log(response.data.product);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getProduct();
  }, [productId]);

  const increaseQuantity = () => setQuantity(quantity + 1);
  const decreaseQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-6 md:p-16">
      <div className="flex flex-col md:flex-row justify-center items-center gap-8 border-b border-b-black pb-10">
        <div className="flex-1">
          <div className="bg-gray-200 rounded-lg w-full h-[400px] mb-4">
            <img src={product.images} className="w-full h-[400px] bg-cover rounded-lg " alt="" />
          </div>

        </div>

        <div className="flex-1">
          <h2 className="text-5xl font-bold">{product.name}</h2>
          <p className="text-lg text-gray-500 mt-1">
            1k+ Units Sold Last Month
          </p>
          <p className="text-gray-600 mt-4 border-b border-b-black pb-4">
            {product.description.split(" ").slice(0, 10).join(" ")}...
          </p>
          <div className="flex gap-10">
            <div className="mt-6 flex flex-col justify-center gap-2 items-center border-r border-r-black pr-8">
              <div className="gap-5">
                <p className="text-gray-400 line-through">₹1500</p>
                <p className="text-3xl font-bold">₹{product.price}</p>
                <span className="bg-blue-100 text-blue-600 text-sm px-3 py-1 mt-3 rounded-full">
                  {product.discountPercentage}20% Off
                </span>
              </div>
            </div>

            <div className="flex flex-col items-center gap-4 mt-6">
              <div className="flex items-center justify-center gap-3">
                <button
                  className="w-10 h-10 border border-gray-300 rounded-lg"
                  onClick={decreaseQuantity}
                >
                  -
                </button>
                <p className="font-medium">{quantity}</p>
                <button
                  className="w-10 h-10 border border-gray-300 rounded-lg flex items-center justify-center"
                  onClick={increaseQuantity}
                >
                  +
                </button>
              </div>
              <button
                onClick={() => addToCart(product._id, quantity)}
                className="bg-black text-white px-6 py-2 rounded-lg"
              >
                Add to Cart
              </button>
            </div>
          </div>

          <div className="flex justify-center items-center gap-10 md:gap-16 border-t border-t-black pt-8 mt-8">
            <div className="flex flex-col justify-center items-center">
              <div className="bg-red-500 rounded-full w-10 h-10 md:w-12 md:h-12"></div>
              feat1
            </div>
            <div className="flex flex-col justify-center items-center">
              <div className="bg-blue-500 rounded-full w-10 h-10 md:w-12 md:h-12"></div>
              feat1
            </div>
            <div className="flex flex-col justify-center items-center">
              <div className="bg-green-300 rounded-full w-10 h-10 md:w-12 md:h-12"></div>
              feat1
            </div>
            <div className="flex flex-col justify-center items-center">
              <div className="bg-gray-800 rounded-full w-10 h-10 md:w-12 md:h-12"></div>
              feat1
            </div>
          </div>
        </div>
      </div>

      <div>
        <h3 className="mt-3 font-bold text-3xl text-gray-800">Description</h3>
        <p className="text-gray-600 text-lg mt-3">{product.description}</p>
      </div>

      <RelatedProducts id={product._id} category={product.category} />
    </div>
  );
};

export default ProductPage;
