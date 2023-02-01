import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header-navbar.css';

function HeaderNavBar() {
  const [user, setUser] = useState('');

  useEffect(() => {
    const { name } = JSON.parse(localStorage.getItem('user'));
    setUser(name);
  }, []);

  return (
    <div className="header-container">
      <div>
        <Link
          to="/customer/products"
          data-testid="customer_products__element-navbar-link-products"
          className="btn btn-success"
          style={ { marginRight: '10px' } }
        >
          Produtos
        </Link>
        <Link
          to="/customer/orders"
          data-testid="customer_products__element-navbar-link-orders"
          className="btn btn-success"

        >
          Pedidos
        </Link>
      </div>
      <span
        data-testid="customer_products__element-navbar-user-full-name"
        style={ { fontWeight: 'bold', fontSize: '15pt' } }
      >
        { user }
      </span>
      <Link
        to="/login"
        className="btn btn-danger"
        data-testid="customer_products__element-navbar-link-logout"
        onClick={ () => localStorage.clear('user') }
      >
        Logout
      </Link>
    </div>
  );
}

export default HeaderNavBar;
