import React from 'react';
import PropTypes from 'prop-types';

function SellerOrder({ order }) {
  return (
    <li>
      <div>
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
    </li>
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
