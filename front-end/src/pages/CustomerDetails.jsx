import React from 'react';

export default function CustomerDetails() {
  return (
    <div>
      <span
        data-testid="customer_order_details__element-order-details-label-order-id"
      >
        Order Id
      </span>
      <span
        data-testid="customer_order_details__element-order-details-label-seller-name"
      >
        Nome
      </span>
      <span
        data-testid="40: customer_order_details__element-order-details-label-order-date"
      >
        Data
      </span>

      <span
        data-testid="customer_order_details__element-order-total-price"
      >
        Total price
      </span>
      <span
        data-testid="customer_order_details__button-delivery-check"
      >
        Delivery Check
      </span>
    </div>
  );
}
