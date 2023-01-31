import React from 'react';
import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import CustomerProducts from './pages/CustomerProducts';
import Checkout from './pages/Checkout';
import CustomerOrders from './pages/CustomerOrders';
import CustomerDetails from './pages/CustomerDetails';
import SellerOrders from './pages/SellerOrders';
import SellerOrdersDetails from './pages/SellerOrdersDetails';

function App() {
  return (
    <Routes>
      <Route path="/" element={ <Navigate to="/login" /> } />
      <Route path="/login" element={ <Login /> } />
      <Route path="/register" element={ <Register /> } />
      <Route path="/customer/orders" element={ <CustomerOrders /> } />
      <Route path="/customer/products" element={ <CustomerProducts /> } />
      <Route path="/customer/checkout" element={ <Checkout /> } />
      <Route path="/customer/orders/:id" element={ <CustomerDetails /> } />
      <Route path="/seller/orders" element={ <SellerOrders /> } />
      <Route path="/seller/orders/:id" element={ <SellerOrdersDetails /> } />
    </Routes>
  );
}

export default App;
