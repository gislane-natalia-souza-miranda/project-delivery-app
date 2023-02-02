import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import moment from 'moment';
import api from '../services/axios';
import SellerNav from '../components/sellers/Seller-nav';
import CustomerDetailsTable from '../components/CustomerDetailsTable';

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

  const [user, setUser] = useState((''));
  const [order, setOrder] = useState({});
  const { id } = useParams();

  const getOrder = async () => {
    try {
      const { data } = await api.get(`/orders/${id}`);
      const formattedDate = moment(data.saleDate).format('DD/MM/YYYY');
      setOrder({ ...data, saleDate: formattedDate });
    } catch (error) {
      console.log(error);
    }
  };

  const changeStatus = async (status) => {
    try {
      await api.patch(`/seller/orders/${id}`, { status });
      getOrder();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem('user')));
    getOrder();
  }, []);

  return (
    <div className="order-details-container">
      <SellerNav user={ user } />
      <div className="order-details">
        <div className="order-info-container">
          <span
            data-testid="seller_order_details__element-order-details-label-order-id"
            style={ { fontWeight: 'bold' } }
          >
            {`PEDIDO: 0${order.id}`}
          </span>
          <span
            data-testid="customer_order_details__element-order
        -details-label-seller-name"
            style={ { fontWeight: 'bold' } }
          >
            {`P. Vend: ${order?.sellerName && order.sellerName}`}
          </span>
          <span
            data-testid="seller_order_details__element-order-
          details-label-order-date"
            style={ { fontWeight: 'bold' } }
          >
            {order.saleDate}
          </span>
          <span
            data-testid="seller_order_details__element-
            order-details-label-delivery-status"
            className="status-customer-details"
            style={ obj[order.status] }
          >
            {order.status}
          </span>
          <button
            type="button"
            data-testid="seller_order_details__button-preparing-check"
            disabled={ order.status !== 'Pendente' }
            className={ order.status !== 'Pendente'
              ? 'btn btn-outline-success' : 'btn btn-success' }
            onClick={ () => changeStatus('Preparando') }
          >
            Em Preparo
          </button>
          <button
            type="button"
            className={ order.status !== 'Preparando'
              ? 'btn btn-outline-success' : 'btn btn-success' }
            data-testid="seller_order_details__button-dispatch-check"
            disabled={ order.status !== 'Preparando' }
            onClick={ () => changeStatus('Em Trânsito') }
          >
            Enviado
          </button>
        </div>
        <CustomerDetailsTable order={ order } />
        <span
          data-testid="seller_order_details__element-order-total-price"
          className="total-price-btn"
        >
          {`Total: R$ ${order?.totalPrice && order.totalPrice.replace(/\./, ',')}`}
        </span>
      </div>
    </div>
  );
}
