import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import moment from 'moment';
import api from '../services/axios';
import HeaderNavBar from '../components/Header-navbar';
import CustomerDetailsTable from '../components/CustomerDetailsTable';
import '../styles/CustomerDetails.css';

export default function CustomerDetails() {
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
  const [order, setOrder] = useState({});
  const { id } = useParams();

  const getOrder = async () => {
    try {
      const { data } = await api.get(`/orders/${id}`);

      const formattedDate = moment(data.saleDate).format('DD/MM/YYYY');

      setOrder({ ...data, saleDate: formattedDate });
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getOrder();
  }, []);

  const changeStatus = async (status) => {
    try {
      await api.patch(`/seller/orders/${order.id}`, { status });
      getOrder();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <HeaderNavBar />
      <div className="order-details-container">
        <h3>Detalhes do Pedido</h3>
        <div className="order-details">
          <div className="order-info-container">
            <span
              style={ { fontWeight: 'bold' } }
              data-testid="customer_order_details__element-order-details-label-order-id"
            >
              {`PEDIDO: 000${order.id}`}
            </span>
            <span
              data-testid="customer_order_details__element
              -order-details-label-seller-name"
              style={ { fontWeight: 'bold' } }
            >
              {`P. Vend: ${order?.sellerName && order.sellerName}`}
            </span>
            <span
              data-testid="customer_order_details__element-order-details-label-order-date"
              style={ { fontWeight: 'bold' } }
            >
              {order.saleDate}
            </span>
            <span
              data-testid="customer_order_details__element
          -order-details-label-delivery-status"
              style={ obj[order.status] }
              className="status-customer-details"
            >
              {order.status}
            </span>
            <button
              type="button"
              className="btn btn-success"
              data-testid="customer_order_details__button-delivery-check"
              disabled={ order.status !== 'Em Trânsito' }
              onClick={ () => changeStatus('Entregue') }
            >
              Marcar como entregue
            </button>
          </div>
          <CustomerDetailsTable order={ order } />
          <span
            data-testid="customer_order_details__element-order-total-price"
            className="total-price-btn"
          >
            {`Total: R$ ${order?.totalPrice && order.totalPrice.replace(/\./, ',')}`}
          </span>
        </div>
      </div>
    </>
  );
}
