/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import HeaderNavBar from '../components/Header-navbar';
import ProductCard from '../components/ProductCard';
import api from '../services/axios';

function CustomerProducts() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  const [price, setPrice] = useState(0);

  const getProducts = async () => {
    const { token } = JSON.parse(localStorage.getItem('user'));
    if (token) {
      try {
        const prod = await api
          .get('/customer/products', { headers: { authorization: token } });
        setProducts(prod.data);
        console.log(prod.data);
      } catch (err) {
        return navigate('/login');
      }
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  const calculateTotal = () => {
    const carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    if (carrinho.length) {
      const total = carrinho.reduce((acc, cur) => acc
        + (Number(cur.price) * cur.quantity), 0);

      return setPrice(total);
    }
    return setPrice(0);
  };

  return (
    <div>
      <HeaderNavBar />
      {products.map((item, index) => (<ProductCard
        key={ index }
        item={ item }
        index={ index }
        calculateTotal={ calculateTotal }
      />))}
      <button
        type="button"
        data-testid="customer_products__button-cart"
        onClick={ () => navigate('/customer/checkout') }
        disabled={ price === 0.00 }
      >
        <span
          data-testid="customer_products__checkout-bottom-value"
        >
          {`Ver carrinho: R$ ${price && price.toFixed(2).replace(/\./, ',')}`}
        </span>
      </button>
      {/* - 21: customer_products__button-cart
- 22: customer_products__checkout-bottom-value */}
    </div>
  );
}

export default CustomerProducts;
