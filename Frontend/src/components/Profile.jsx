import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';

const ProfileSection = () => {

  return (
    <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-8">
      <div className="flex items-center space-x-6">
        <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center overflow-hidden">
          <img
            src="https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o="
            alt="Profile"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="flex flex-col">
          <h2 className="text-3xl font-semibold text-gray-900">John Doe</h2>
          <p className="text-gray-600 text-sm">johndoe@example.com</p>
        </div>
      </div>

      <div className="mt-8 space-y-6">
        <div className="flex justify-between">
          <p className="text-gray-500 font-semibold">Phone</p>
          <p className="text-gray-900">+91 987654323456</p>
        </div>
        <div className="flex justify-between">
          <p className="text-gray-500 font-semibold">Address</p>
          <p className="text-gray-900">123 Apple Street, Bangalore, KA, India</p>
        </div>
        <div className="flex justify-between">
          <p className="text-gray-500 font-semibold">Joined</p>
          <p className="text-gray-900">January 2025</p>
        </div>
      </div>

      <div className="mt-8 flex justify-end space-x-4">
        <button className="bg-gray-800 text-white rounded-lg py-2 px-6 text-sm font-semibold shadow-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-300">
          Edit Profile
        </button>
        <button className="bg-transparent border border-gray-300 rounded-lg py-2 px-6 text-sm text-gray-700 font-semibold hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-300">
          Logout
        </button>
      </div>
    </div>
  );
};

export default ProfileSection;
