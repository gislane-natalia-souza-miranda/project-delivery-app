import React from 'react';
import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import CustomerOrders from './pages/CustomerOrders';
import Checkout from './pages/Checkout';
import CustomerProducts from './pages/CustomerProducts';
import SellerOrders from './pages/SellerOrders';
import CustomerDetails from './pages/CustomerDetails';
import Admin from './pages/Admin';

function App() {
  return (
    <Routes>
      <Route exact path="/" element={ <Navigate to="/login" /> } />
      <Route path="/login" element={ <Login /> } />
      <Route path="/register" element={ <Register /> } />
      <Route path="/customer/orders/:id" element={ <CustomerDetails /> } />
      <Route path="/customer/orders" element={ <CustomerOrders /> } />
      <Route path="/customer/products" element={ <CustomerProducts /> } />
      <Route path="/customer/checkout" element={ <Checkout /> } />
      <Route path="/admin/manage" element={ <Admin /> } />
      <Route path="/seller/orders" element={ <SellerOrders /> } />
    </Routes>
  );
}

export default App;
