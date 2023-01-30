import React, { Link } from 'react';
import PropTypes from 'prop-types';

function SellerNav({ user }) {
  return (
    <nav>
      <div
        data-testid="customer_products__element-navbar-link-orders"
      >
        <Link to="/seller/orders">
          Pedidos
        </Link>
      </div>
      <div
        data-testid="customer_products__element-navbar-user-full-name"
      >
        <p>
          {' '}
          { user.name }
          {' '}
        </p>
      </div>
      <button
        type="button"
        data-testid="customer_products__element-navbar-link-logout"
      >
        Sair
      </button>
    </nav>
  );
}

SellerNav.propTypes = {
  user: PropTypes.objectOf({
    name: PropTypes.string,
  }),
}.isRequired;

export default SellerNav;
