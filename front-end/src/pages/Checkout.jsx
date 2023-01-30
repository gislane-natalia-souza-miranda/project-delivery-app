import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import HeaderNavBar from '../components/Header-navbar';
import api from '../services/axios';

export default function Checkout() {
  const [productCar, setProductcar] = useState([]);
  const [sellers, setSellers] = useState([]);
  const [sale, setSale] = useState({});
  const navigate = useNavigate();

  const getSellers = async () => {
    try {
      const dbSellers = await api.get('/users/sellers');
      setSellers(dbSellers.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    if (sellers.length) return setSale({ sellerId: sellers[0].id });
  }, [sellers]);

  useEffect(() => {
    const carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    setProductcar(carrinho);
    getSellers();
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

  const postSale = async () => {
    const user = JSON.parse(localStorage.getItem('user')) || [];

    try {
      const { data } = await api.post('/orders/insert', sale, {
        headers: {
          authorization: user.token,
        },
      });

      navigate(`/customer/orders/${data.id}`);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    if (sale.userId) {
      postSale();
    }
  }, [sale]);

  const finishOrder = () => {
    const carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    const user = JSON.parse(localStorage.getItem('user')) || [];

    const products = carrinho.map(({ id, quantity }) => ({
      id,
      quantity,
    }));

    setSale({ ...sale,
      products,
      userId: user.id,
      totalPrice: Number(totalPrice().toFixed(2)),
    });
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
      <select
        data-testid="customer_checkout__select-seller"
        onChange={ (e) => setSale({ ...sale, sellerId: Number(e.target.value) }) }
      >
        {sellers.map((sel, index) => (
          <option
            key={ index }
            value={ sel.id }
          >
            {sel.name}
          </option>))}
      </select>
      <input
        type="text"
        data-testid="customer_checkout__input-address"
        placeholder="Endereço"
        onChange={ ({ target }) => setSale({ ...sale, deliveryAddress: target.value }) }
      />
      <input
        type="number"
        data-testid="customer_checkout__input-address-number"
        placeholder="Numero"
        onChange={ ({ target }) => setSale({ ...sale, deliveryNumber: target.value }) }
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
