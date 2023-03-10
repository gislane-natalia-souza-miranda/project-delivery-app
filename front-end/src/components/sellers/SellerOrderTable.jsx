import React from 'react';
import propTypes from 'prop-types';

function SellerOrderTable({ item, index }) {
  const { name, price, quantity, id } = item;
  const i = index;

  return (
    <tr key={ i }>
      <td data-testid={ `seller_order_details__element-order-table-item-number-${i}` }>
        {id}
      </td>
      <td data-testid={ `seller_order_details__element-order-table-name-${i}` }>
        {name}
      </td>
      <td data-testid={ `seller_order_details__element-order-table-quantity-${i}` }>
        {quantity}
      </td>
      <td data-testid={ `seller_order_details__element-order-table-unit-price-${i}` }>
        {price.replace(/\./, ',')}
      </td>
      <td data-testid={ `seller_order_details__element-order-table-sub-total-${i}` }>
        {(Number(price) * quantity).toFixed(2).replace(/\./, ',')}
      </td>
    </tr>

  );
}

SellerOrderTable.propTypes = {
  item: propTypes.object,
  i: propTypes.number,
}.isRequired;

export default SellerOrderTable;
