import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function SellerNav({ user }) {
  return (
    <nav>
      <Link
        to="/seller/orders"
        data-testid="customer_products__element-navbar-link-orders"
      >
        Pedidos
      </Link>

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
        onClick={ () => localStorage.clear('user') }
      >
        <Link to="/login">
          Logout
        </Link>
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
