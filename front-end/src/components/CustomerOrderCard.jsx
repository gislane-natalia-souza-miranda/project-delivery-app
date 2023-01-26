import React from 'react';

function CustomerOrderCard(props) {
  // recebe props: id, pedido, status, data, preço
  const { id, pedido, status, data, preço } = props;
  return (

    <div>
      <div data-testid="customer_orders__element-order-id-<id>">Pedido</div>
      <div data-testid="customer_orders__element-delivery-status-<id>">Status</div>
      <div data-testid="customer_orders__element-order-date-<id>">Data</div>
      <div data-testid="customer_orders__element-card-price-<id>">Preço</div>
    </div>
  );
}

export default CustomerOrderCard;
