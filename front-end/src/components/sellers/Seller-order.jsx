import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

function SellerOrder({ order }) {
  return (
    <NavLink to={ `/seller/orders/${order.id}` } className="customer-card-container">
      <div className="order-info-container">

        <div
          data-testid={ `seller_orders__element-order-id-${order.id}` }
        >
          Pedido:
          {' '}
          { order.id }
        </div>
        <div
          data-testid={ `seller_orders__element-delivery-status-${order.id}` }
        >
          { order.status }

        </div>
        <div
          data-testid={ `seller_orders__element-order-date-${order.id}` }
        >
          { order.saleDate }

        </div>
        <div
          data-testid={ `seller_orders__element-card-price-${order.id}` }
        >
          { order.totalPrice }

        </div>
        <div
          data-testid={ `seller_orders__element-card-address-${order.id}` }
        >
          { order.deliveryAddress }

        </div>

      </div>
    </NavLink>
  );
}

SellerOrder.propTypes = {
  order: PropTypes.objectOf({
    id: PropTypes.string,
    status: PropTypes.string,
    saleDate: PropTypes.string,
    totalPrice: PropTypes.string,
    deliveryAddress: PropTypes.string,
  }),
}.isRequired;

export default SellerOrder;
