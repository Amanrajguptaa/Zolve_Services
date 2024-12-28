import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Sidebar from './components/SideBar.jsx';
import ProductForm from './components/ProductForm.jsx';
import ProductList from './components/ProductList.jsx';
import Header from './components/Header.jsx';
import Dashboard from './components/Dashboard.jsx';

const App = () => {
  const [token, setToken] = useState('');

  useEffect(() => {
    const tokenData = localStorage.getItem('token');
    if (tokenData) {
      setToken(tokenData);
    }
  }, []);



  return (
    <div className="flex">
      <div className="">
        <Sidebar />
      </div>
      <div className="mt-20">
        <Header/>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Dashboard" element={<Dashboard token={token}/>} />
          <Route path="/AddProduct" element={<ProductForm token={token} />} />
          <Route path="/ProductList" element={<ProductList token={token} />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
