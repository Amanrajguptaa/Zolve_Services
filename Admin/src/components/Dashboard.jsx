import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Dashboard = ({ token }) => {
  const [products, setProducts] = useState([]);

  const getData = async () => {
    try {
      const response = await axios.get('https://zolve-services.onrender.com/api/product/list-product', {
        headers: { token },
      });
      console.log(response.data.products);
      setProducts(response.data.products);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const productsSold = products.length; 
  const totalRevenue = products.reduce((acc, product) => acc + product.price, 0); 
  const activeUsers = 150; 
  const newOrders = 45; 

  return (
    <div className="mx-12 lg:ml-52 mr-10 bg-[#F6F6F6] shadow-lg py-6 border-2 border-black/25 sm:ml-6 rounded-lg my-10 w-[80%] px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col gap-3 text-[#1a94c2]">
        <div className="text-2xl font-bold">Dashboard</div>
        <div className="text-xl font-semibold text-black">
          Hello, Welcome Back <span className="italic text-[#1a94c2] font-bold">Admin</span>
        </div>
        <div className="text-md font-normal text-black">
          Here are few insights as per the sales, please have a look.
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6 mt-8">
        <div className="bg-white shadow-md rounded-lg p-6 text-center border-2 border-gray-200">
          <div className="text-5xl font-bold text-[#1a94c2]">{productsSold}</div>
          <div className="text-sm font-medium text-gray-600">Products Listed</div>
        </div>

        <div className="bg-white shadow-md rounded-lg p-6 text-center border-2 border-gray-200">
          <div className="text-5xl font-bold text-[#1a94c2]">₹{totalRevenue}</div>
          <div className="text-sm font-medium text-gray-600">Total Amount</div>
        </div>

        <div className="bg-white shadow-md rounded-lg p-6 text-center border-2 border-gray-200">
          <div className="text-5xl font-bold text-[#1a94c2]">{activeUsers}</div>
          <div className="text-sm font-medium text-gray-600">Active Users</div>
        </div>

        <div className="bg-white shadow-md rounded-lg p-6 text-center border-2 border-gray-200">
          <div className="text-5xl font-bold text-[#1a94c2]">{newOrders}</div>
          <div className="text-sm font-medium text-gray-600">New Orders</div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
