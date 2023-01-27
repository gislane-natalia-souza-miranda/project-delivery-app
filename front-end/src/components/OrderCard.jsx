import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import moment from 'moment';

function OrderCard(props) {
  const { item: { id, status, saleDate, totalPrice } } = props;
  const formattedDate = moment(saleDate).format('DD/MM/YYYY');
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
        {`Data: ${formattedDate}`}

      </div>
      Preço:
      <span data-testid={ `customer_orders__element-card-price-${id}` }>
        {totalPrice.replace(/\./, ',')}
      </span>
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
