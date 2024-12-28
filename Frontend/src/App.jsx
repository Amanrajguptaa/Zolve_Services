import React, { useContext } from 'react'
import SignUp from './components/SignUp'
import { Route, Routes } from 'react-router-dom'
import Login from './components/Login'
import ProductPage from './components/ProductPage'
import Products from './components/Products'
import Home from './pages/Home.jsx'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Category from './pages/Category.jsx'
import Profile from './components/Profile.jsx'
import Cart from './components/Cart.jsx'
import LimitedEdition from './pages/LimitedEdition.jsx'
import Checkout from './pages/Checkout.jsx'

const App = () => {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/product" element={<Products />} />
        <Route path="/product/:productId" element={<ProductPage/>} />
        <Route path="/category/:categoryText" element={<Category />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout/>} />
        <Route path="/limited-edition" element={<LimitedEdition/>} />
        <Route path="/" element={<Home/>} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
