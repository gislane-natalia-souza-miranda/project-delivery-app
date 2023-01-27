import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

function OrderCard(props) {
  const { item: { id, pedido, status, data, preco } } = props;
  // id, pedido, status, data, preço
  return (
    <NavLink
      to={ `/customer/orders/${id}` }
    >
      <div data-testid={ `customer_orders__element-order-id-${id}` }>
        {`Pedido: ${pedido}`}
      </div>

      <div data-testid={ `customer_orders__element-delivery-status-${id}` }>
        {`Status: ${status}`}

      </div>
      <div data-testid={ `customer_orders__element-order-date-${id}` }>
        {`Data: ${data}`}

      </div>
      <div data-testid={ `customer_orders__element-card-price-${id}` }>
        {`Preço: ${preco}`}
      </div>
    </NavLink>
  );
}

export default OrderCard;

OrderCard.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number,
    pedido: PropTypes.number,
    status: PropTypes.string,
    data: PropTypes.string,
    preco: PropTypes.number,
  }).isRequired,
};
