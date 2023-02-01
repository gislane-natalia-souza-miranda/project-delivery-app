import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CheckoutTable from '../components/CheckoutTable';
import HeaderNavBar from '../components/Header-navbar';
import api from '../services/axios';
import '../styles/Checkout.css';

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
    <>
      <HeaderNavBar />
      <div className="checkout-container">
        <h4>Finalizar pedido</h4>
        <div className="table-checkout-container">
          <CheckoutTable productCar={ productCar } setProductcar={ setProductcar } />
          <h3
            data-testid="customer_checkout__element-order-total-price"
            className="total-price-btn"
          >
            {`Total: R$ ${totalPrice().toFixed(2).replace(/\./, ',')}`}
          </h3>
        </div>
        <h4>Detalhes e Endereço para entrega</h4>
        <div
          className="mb-3"
          style={ { display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '10px',
            flexDirection: 'column' } }
        >
          <div style={ { display: 'flex', gap: '10px' } }>
            <select
              data-testid="customer_checkout__select-seller"
              className="form-select"
              style={ { cursor: 'pointer' } }
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
              className="form-control"
              onChange={ ({ target }) => setSale({ ...sale,
                deliveryAddress: target.value }) }
            />
            <input
              type="number"
              data-testid="customer_checkout__input-address-number"
              placeholder="Numero"
              className="form-control"
              onChange={ ({ target }) => setSale({ ...sale,
                deliveryNumber: target.value }) }
            />
          </div>
          <button
            type="button"
            data-testid="customer_checkout__button-submit-order"
            style={ { width: '150px' } }
            onClick={ finishOrder }
            className="btn btn-success"
          >
            Finalizar pedido
          </button>
        </div>
      </div>
    </>
  );
}
