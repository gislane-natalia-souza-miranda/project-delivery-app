import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import HeaderNavBar from '../components/Header-navbar';
import api from '../services/axios';

function CustomerProducts() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  const getProducts = async () => {
    const { token } = JSON.parse(localStorage.getItem('user'));
    if (token) {
      try {
        const prod = await api
          .get('/customer/products', { headers: { authorization: token } });
        setProducts(prod.data);
      } catch (err) {
        return navigate('/login');
      }
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      <HeaderNavBar />
      {products.map((item, index) => (
        <div key={ index }>
          <h6 data-testid={ `customer_products__element-card-title-${index + 1}` }>
            {item.name}
          </h6>
          <h6 data-testid={ `customer_products__element-card-price-${index + 1}` }>
            {item.price.replace(/\./, ',')}
          </h6>
          <img
            style={ { width: '60px', height: '100px' } }
            alt={ item.name }
            src={ item.urlImage }
            data-testid={ `customer_products__img-card-bg-image-${index + 1}` }
          />
          <button
            type="button"
            data-testid={ `customer_products__button-card-add-item-${index + 1}` }
          >
            ADD
          </button>
          <button
            type="button"
            data-testid={ `customer_products__button-card-rm-item-${index + 1}` }
          >
            REMOVE
          </button>
          <input
            type="number"
            defaultValue={ 0 }
            data-testid={ `customer_products__input-card-quantity-${index + 1}` }
          />
        </div>))}
      {/* - 21: customer_products__button-cart
- 22: customer_products__checkout-bottom-value */}
    </div>
  );
}

export default CustomerProducts;
