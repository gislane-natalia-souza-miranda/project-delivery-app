import React from 'react';

export default function Checkout() {
  return (
    <table>
      <thead>
        Checkout
        <tr>
          <th>Item</th>
          <th>Descrição</th>
          <th>Quantidade</th>
          <th>Valor Unitário</th>
          <th>Sub-total</th>
          <th>Remover Item</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          products.map
          <td data-testid={ `customer_checkout__element-order-table-item-number${0}` }>
            1
          </td>
          <td data-testid={ `customer_checkout__element-order-table-name${0}` }>
            product.Name
          </td>
          <td data-testid={ `customer_checkout__element-order-table-quantity-${0}` }>
            product.quantity
          </td>
          <td data-testid={ `customer_checkout__element-order-table-unit-price-${0}` }>
            price
          </td>
          <td data-testid={ `customer_checkout__element-order-table-sub-total-${0}` }>
            price * quantity
          </td>
          <td data-testid={ `customer_checkout__element-order-table-remove-${0}` }>
            <buttom type="button">Remover</buttom>
          </td>
        </tr>

      </tbody>
    </table>
  );
}
