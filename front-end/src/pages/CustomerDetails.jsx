import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import moment from 'moment';
import api from '../services/axios';
import OrderTable from '../components/OrderTable';

export default function CustomerDetails() {
  const [order, setOrder] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const getOrder = async () => {
      try {
        const { data } = await api.get(`/orders/${id}`);

        const formattedDate = moment(data.saleDate).format('DD/MM/YYYY');

        setOrder({ ...data, saleDate: formattedDate });
      } catch (error) {
        console.log(error.message);
      }
    };

    getOrder();
  }, []);

  return (
    <div>
      {console.log(order)}
      <span
        data-testid="customer_order_details__element-order-details-label-order-id"
      >
        {order.id}
      </span>
      <span
        data-testid="customer_order_details__element-order-details-label-seller-name"
      >
        {order?.sellerName && order.sellerName}
      </span>
      <span
        data-testid="customer_order_details__element-order-details-label-order-date"
      >
        {order.saleDate}
      </span>
      <span
        data-testid="customer_order_details__element-order-details-label-delivery-status"
      >
        {order.status}
      </span>
      <span
        data-testid="customer_order_details__element-order-total-price"
      >
        {order?.totalPrice && order.totalPrice.replace(/\./, ',')}
      </span>
      <button
        type="button"
        data-testid="customer_order_details__button-delivery-check"
        disabled
      >
        Marcar como entregue
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
          {order?.products ? order.products.map((item, i) => (<OrderTable
            key={ i }
            item={ item }
            index={ i }
          />)) : <tr />}
        </tbody>
      </table>
    </div>
  );
}
