import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function SellerNav({ user }) {
  return (
    <nav className="header-container" style={ { top: 0 } }>
      <Link
        to="/seller/orders"
        data-testid="customer_products__element-navbar-link-orders"
        className="btn btn-success"
      >
        Pedidos
      </Link>

      <div
        data-testid="customer_products__element-navbar-user-full-name"
      >
        <span style={ { fontWeight: 'bold', fontSize: '15pt' } }>
          {' '}
          { user.name }
          {' '}
        </span>
      </div>
      <Link
        to="/login"
        className="btn btn-danger"
        data-testid="customer_products__element-navbar-link-logout"
        onClick={ () => localStorage.clear('user') }
      >
        Logout
      </Link>
    </nav>
  );
}

SellerNav.propTypes = {
  user: PropTypes.objectOf({
    name: PropTypes.string,
  }),
}.isRequired;

export default SellerNav;
