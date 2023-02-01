import React from 'react';
import propTypes from 'prop-types';

export default function CheckoutTable({ productCar, setProductcar }) {
  const removeProduct = (id) => {
    const novoCarrinho = productCar.filter((product) => product.id !== id);
    setProductcar(novoCarrinho);
    localStorage.setItem('carrinho', JSON.stringify(novoCarrinho));
  };

  return (
    <table className="table" style={ { textAlign: 'center' } }>
      <thead>
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
        {productCar.map((item, i) => (
          <tr key={ i }>
            <td
              data-testid={ `customer_checkout__element-order-table-item-number-${i}` }
            >
              {i + 1}
            </td>
            <td data-testid={ `customer_checkout__element-order-table-name-${i}` }>
              {item.name}
            </td>
            <td
              data-testid={ `customer_checkout__element-order-table-quantity-${i}` }
            >
              {item.quantity}
            </td>
            <td
              data-testid={ `customer_checkout__element-order-table-unit-price-${i}` }
            >
              {item.price.replace(/\./, ',')}
            </td>
            <td
              data-testid={ `customer_checkout__element-order-table-sub-total-${i}` }
            >
              {(Number(item.price) * item.quantity).toFixed(2).replace(/\./, ',')}
            </td>
            <td
              data-testid={ `customer_checkout__element-order-table-remove-${i}` }
            >
              <button
                type="button"
                onClick={ () => removeProduct(item.id) }
                className="btn btn-outline-danger"
              >
                Remover
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

CheckoutTable.propTypes = {
  productCar: propTypes.object,
  setProductcar: propTypes.func,
}.isRequired;
