import React from 'react';
import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Orders from './pages/Orders';
import CustomerProducts from './pages/CustomerProducts';

function App() {
  return (
    <Routes>
      <Route path="/" element={ <Navigate to="/login" /> } />
      <Route path="/login" element={ <Login /> } />
      <Route path="/register" element={ <Register /> } />
      <Route path="/customer/orders" element={ <Orders /> } />
      <Route path="/customer/products" element={ <CustomerProducts /> } />
    </Routes>
  );
}

export default App;
