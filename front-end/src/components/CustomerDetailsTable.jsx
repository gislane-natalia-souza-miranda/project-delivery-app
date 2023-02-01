import React from 'react';
import propTypes from 'prop-types';
import OrderTable from './OrderTable';

export default function CustomerDetailsTable({ order }) {
  return (
    <table style={ { textAlign: 'center' } } className="table">
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
  );
}

CustomerDetailsTable.propTypes = {
  order: propTypes.object,
}.isRequired;
