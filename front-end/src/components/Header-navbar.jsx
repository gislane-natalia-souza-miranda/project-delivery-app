import React from 'react';
import { Link } from 'react-router-dom';

function HeaderNavBar() {
  return (
    <div>
      <Link
        to="/customer/products"
        data-testid="customer_products__element-navbar-link-products"
      >
        Produtos
      </Link>
      <Link
        to="/customer/orders"
        data-testid="customer_products__element-navbar-link-orders"
      >
        Pedidos
      </Link>
      <span data-testid="customer_products__element-navbar-user-full-name">
        Cliente Zé Birita
      </span>
      <button
        type="button"
        data-testid="customer_products__element-navbar-link-logout"
        onClick={ () => localStorage.clear('user') }
      >
        <Link to="/login">
          Logout
        </Link>
      </button>
    </div>
  );
}

export default HeaderNavBar;
