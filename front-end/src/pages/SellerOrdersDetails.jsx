import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import moment from 'moment';
import api from '../services/axios';
import SellerNav from '../components/sellers/Seller-nav';
import SellerOrderTable from '../components/sellers/SellerOrderTable';

export default function CustomerDetails() {
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
    <div>
      <SellerNav user={ user } />
      <span data-testid="seller_order_details__element-order-details-label-order-id">
        {order.id}
      </span>
      <span data-testid="customer_order_details__element-order-details-label-seller-name">
        {order?.sellerName && order.sellerName}
      </span>
      <span data-testid="seller_order_details__element-order-details-label-order-date">
        {order.saleDate}
      </span>
      <span
        data-testid="seller_order_details__element-order-details-label-delivery-status"
      >
        {order.status}
      </span>
      <span data-testid="seller_order_details__element-order-total-price">
        {order?.totalPrice && order.totalPrice.replace(/\./, ',')}
      </span>
      <button
        type="button"
        data-testid="seller_order_details__button-preparing-check"
        disabled={ order.status !== 'Pendente' }
        onClick={ () => changeStatus('Preparando') }
      >
        Em Preparo
      </button>
      <button
        type="button"
        data-testid="seller_order_details__button-dispatch-check"
        disabled={ order.status !== 'Preparando' }
        onClick={ () => changeStatus('Em Trânsito') }
      >
        Enviado
      </button>
      <table style={ { textAlign: 'center' } }>
        <thead>
          <tr>
            <th>Item</th>
            <th>Descrição</th>
            <th>Quantidade</th>
            <th>Valor Unitário</th>
            <th>Sub-total</th>
          </tr>
        </thead>
        <tbody>
          {order?.products ? order.products.map((item, i) => (<SellerOrderTable
            key={ i }
            item={ item }
            index={ i }
          />)) : <tr />}
        </tbody>
      </table>
    </div>
  );
}
