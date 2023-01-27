import React from 'react';
import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Checkout from './pages/Checkout';
import CustomerProducts from './pages/CustomerProducts';
import CustomerDetails from './pages/CustomerDetails';

function App() {
  return (
    <Routes>
      <Route path="/" element={ <Navigate to="/login" /> } />
      <Route path="/login" element={ <Login /> } />
      <Route path="/register" element={ <Register /> } />
      <Route path="/customer/products" element={ <CustomerProducts /> } />
      <Route path="/customer/checkout" element={ <Checkout /> } />
      <Route path="/customer/orders/:id" element={ <CustomerDetails /> } />
    </Routes>
  );
}

export default App;
