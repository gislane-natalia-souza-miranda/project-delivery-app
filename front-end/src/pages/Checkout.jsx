import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import HeaderNavBar from '../components/Header-navbar';

export default function Checkout() {
  const [productCar, setProductcar] = useState([]);

  useEffect(() => {
    const carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    setProductcar(carrinho);
  }, []);

  const removeProduct = (id) => {
    const novoCarrinho = productCar.filter((product) => product.id !== id);
    setProductcar(novoCarrinho);
    localStorage.setItem('carrinho', JSON.stringify(novoCarrinho));
  };
  const totalPrice = () => {
    if (productCar.length) {
      const total = productCar.reduce((acc, cur) => acc
        + (Number(cur.price) * cur.quantity), 0);

      return (total);
    }
    return (0);
  };

  const navigate = useNavigate();
  const finishOrder = (id) => {
    navigate(`/customer/orders/${id}`);
  };
  return (
    <div>
      <HeaderNavBar />
      <table>
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
                >
                  Remover
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <h1 data-testid="customer_checkout__element-order-total-price">
        {totalPrice().toFixed(2).replace(/\./, ',')}
      </h1>
      <p>Detalhes e Endereço para entrega</p>
      <select data-testid="customer_checkout__select-seller">
        <option>Fulana</option>
      </select>
      <input
        type="text"
        data-testid="customer_checkout__input-address"
        placeholder="Endereço"
      />
      <input
        type="number"
        data-testid="customer_checkout__input-address-number"
        placeholder="Numero"
      />
      <button
        type="button"
        data-testid="customer_checkout__button-submit-order"
        onClick={ finishOrder }
      >
        Finalizar pedido
      </button>
    </div>
  );
}
