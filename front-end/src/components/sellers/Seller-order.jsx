import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import '../../styles/CustomerOrder.css';
import moment from 'moment';

function SellerOrder({ order }) {
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

  const date = moment(order.saleDate).format('DD/MM/YYYY');
  return (
    <NavLink to={ `/seller/orders/${order.id}` } className="customer-card-container">
      <div className="order-info">

        <div
          data-testid={ `seller_orders__element-order-id-${order.id}` }
          className="order-id btn btn-success"
        >
          Pedido
          <br />
          0
          { order.id }
        </div>
        <div className="order-date-totalPrice-containter">
          <section style={ { display: 'flex', flexDirection: 'column', gap: '5px' } }>
            <div
              data-testid={ `seller_orders__element-delivery-status-${order.id}` }
              className="status-container"
              style={ obj[order.status] }
            >
              { order.status }

            </div>
            <div
              data-testid={ `seller_orders__element-order-date-${order.id}` }
              style={ { backgroundColor: 'white', borderRadius: '3px' } }
            >
              { date }

            </div>
            <div
              data-testid={ `seller_orders__element-card-price-${order.id}` }
              style={ { backgroundColor: 'white', borderRadius: '3px' } }
            >
              { `R$ ${order.totalPrice.replace(/\./, ',')}` }
            </div>
          </section>
          <div
            data-testid={ `seller_orders__element-card-address-${order.id}` }
            style={ { marginTop: '10px', fontWeight: '100' } }
          >
            <i>{ order.deliveryAddress }</i>
          </div>
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
