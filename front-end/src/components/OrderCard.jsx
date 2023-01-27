import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

function OrderCard(props) {
  const { item: { id, status, saleDate, totalPrice } } = props;
  // id, pedido, status, data, preço
  return (
    <NavLink
      to={ `/customer/orders/${id}` }
    >
      <div data-testid={ `customer_orders__element-order-id-${id}` }>
        {`Pedido: ${id}`}
      </div>

      <div data-testid={ `customer_orders__element-delivery-status-${id}` }>
        {`Status: ${status}`}

      </div>
      <div data-testid={ `customer_orders__element-order-date-${id}` }>
        {`Data: ${saleDate}`}

      </div>
      <div data-testid={ `customer_orders__element-card-price-${id}` }>
        {`Preço: ${totalPrice}`}
      </div>
    </NavLink>
  );
}

export default OrderCard;

OrderCard.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number,
    status: PropTypes.string,
    saleDate: PropTypes.string,
    totalPrice: PropTypes.string,
  }).isRequired,
};
