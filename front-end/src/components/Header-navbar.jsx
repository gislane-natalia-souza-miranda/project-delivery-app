import React from 'react';

function HeaderNavBar() {
  return (
    <div>
      <span data-testid="customer_products__element-navbar-link-products">
        Página de Produtos
      </span>
      <span data-testid="customer_products__element-navbar-link-orders">
        Página de Pedidos
      </span>
      <span data-testid="customer_products__element-navbar-user-full-name">
        Nome da pessoa usuária
      </span>
      <span data-testid="customer_products__element-navbar-link-logout">
        Logout
      </span>
    </div>
  );
}

export default HeaderNavBar;
