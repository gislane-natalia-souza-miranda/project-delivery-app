import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import moment from 'moment';
import '../styles/CustomerOrder.css';

function OrderCard(props) {
  const obj = {
    Pendente: {
      backgroundColor: '#ccb800',
    },
    'Em Trânsito': {
      backgroundColor: '#056CF9',
    },
    Entregue: {
      backgroundColor: '#00CC9B',
    },
    Preparando: {
      backgroundColor: '#66CC00',
    },
  };

  const { item: { id, status, saleDate, totalPrice } } = props;
  const formattedDate = moment(saleDate).format('DD/MM/YYYY');

  return (
    <NavLink
      to={ `/customer/orders/${id}` }
      className="customer-card-container"
    >
      <div className="order-info">
        <div
          data-testid={ `customer_orders__element-order-id-${id}` }
          className="order-id btn btn-success"
        >
          Pedido
          <br />
          0
          { id }
        </div>

        <div className="order-date-totalPrice-containter">
          <section style={ { display: 'flex', flexDirection: 'column', gap: '5px' } }>
            <div
              data-testid={ `customer_orders__element-delivery-status-${id}` }
              className="status-container"
              style={ obj[status] }
            >
              {status}

            </div>
            <div
              data-testid={ `customer_orders__element-order-date-${id}` }
              style={ { backgroundColor: 'white', borderRadius: '3px' } }
            >
              {formattedDate}

            </div>
            Preço:
            <span
              data-testid={ `customer_orders__element-card-price-${id}` }
              style={ { backgroundColor: 'white', borderRadius: '3px' } }
            >
              { `R$ ${totalPrice.replace(/\./, ',')}` }
            </span>
          </section>
        </div>

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
