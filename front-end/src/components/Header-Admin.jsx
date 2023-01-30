import React from 'react';
import { Link } from 'react-router-dom';

function HeaderAdmin() {
  return (
    <div>
      <Link
        to="/customer/products" // mudar aqui
        data-testid="customer_products__element-navbar-link-orders"
      >
        Gerenciar Usuários
      </Link>
      <span data-testid="customer_products__element-navbar-user-full-name">
        Nome Administrador
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

export default HeaderAdmin;
