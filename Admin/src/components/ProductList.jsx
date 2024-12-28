import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap-icons/font/bootstrap-icons.css';


const ProductList = ({ token }) => {
  const [products, setProducts] = useState([]);


  const getData = async () => {
    try {
      const response = await axios.get('https://zolve-soln.onrender.com/api/product/list-product');
      console.log(response.data.products);
      setProducts(response.data.products);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="mr-10 lg:ml-52 bg-[#F6F6F6] shadow-lg py-6 border-2 border-black/25 mx-16 sm:mx-8 md:mx-12 rounded-lg w-full my-8 px-4 sm:px-6 md:px-8">
      <h2 className="text-xl md:text-2xl font-bold text-[#0E1534] mb-4 text-center md:text-left">
        All Products
      </h2>
      {products.length === 0 ? (
        <p className="text-gray-500 text-center">No products available.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300 text-sm md:text-base">
            <thead className="bg-gray-100">
              <tr>
                <th className="border border-gray-300 px-2 sm:px-4 py-2 text-left">
                  <input type="checkbox" />
                </th>
                <th className="border border-gray-300 px-2 sm:px-4 py-2 text-left">Image</th>
                <th className="border border-gray-300 px-2 sm:px-4 py-2 text-left">Product Name</th>
                <th className="border border-gray-300 px-2 sm:px-4 py-2 text-left">Category</th>
                <th className="border border-gray-300 px-2 sm:px-4 py-2 text-left">Sub Category</th>
                <th className="border border-gray-300 px-2 sm:px-4 py-2 text-left">Price</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="border border-gray-300 px-2 sm:px-4 py-2">
                    <input type="checkbox" />
                  </td>
                  <td className="border border-gray-300 px-2 sm:px-4 py-2 flex items-center justify-center">
                    <img
                      src={product.images[0]}
                      alt={`${product.name || 'Product'} image`}
                      className="w-12 h-12 sm:w-16 sm:h-16 object-cover rounded"
                    />
                  </td>
                  <td className="border border-gray-300 px-2 sm:px-4 py-2">{product.name || 'N/A'}</td>
                  <td className="border border-gray-300 px-2 sm:px-4 py-2">{product.category || 'N/A'}</td>
                  <td className="border border-gray-300 px-2 sm:px-4 py-2">{product.subCategory || 'N/A'}</td>
                  <td className="border border-gray-300 px-2 sm:px-4 py-2">₹{product.price || 'N/A'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ProductList;
