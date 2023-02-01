/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import '../styles/ProductCard.css';

export default function ProducCard({ item, index, calculateTotal }) {
  const [quantity, setQuantity] = useState(0);
  const [product, setProduct] = useState();

  const setLocalStorage = () => {
    if (product) {
      const carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];

      const newArr = carrinho.filter((prod) => prod.id !== product.id
      && prod.quantity > 0);

      if (product.quantity <= 0) {
        return localStorage.setItem('carrinho', JSON.stringify([...newArr]));
      }

      localStorage.setItem('carrinho', JSON.stringify([...newArr, product]));
    }
  };

  const insertQuantity = () => {
    if (quantity < 0) setQuantity(0);
    setProduct({ ...item, quantity });
  };

  useEffect(() => {
    setLocalStorage();
    calculateTotal();
  }, [product]);

  useEffect(() => {
    insertQuantity();
  }, [quantity]);

  return (
    <div key={ index } className="product-card-container">
      <h6
        data-testid={ `customer_products__element-card-title-${item.id}` }
      >
        {item.name}
      </h6>
      <img
        alt={ item.name }
        src={ item.urlImage }
        data-testid={ `customer_products__img-card-bg-image-${item.id}` }
      />
      <span data-testid={ `customer_products__element-card-price-${item.id}` }>
        { `R$ ${item.price.replace(/\./, ',')}` }
      </span>
      <div style={ { display: 'flex', alignItems: 'center' } }>
        <button
          type="button"
          data-testid={ `customer_products__button-card-rm-item-${item.id}` }
          className="btn btn-danger"
          style={ { width: '36px' } }
          onClick={ () => setQuantity((prevState) => {
            const result = prevState - 1;
            return result;
          }) }
        >
          -
        </button>
        <input
          type="text"
          value={ quantity }
          style={ { width: '45px', textAlign: 'center' } }
          className="form-control"
          onChange={ (e) => {
            setQuantity(Number(e.target.value));
          } }
          data-testid={ `customer_products__input-card-quantity-${item.id}` }
        />
        <button
          type="button"
          data-testid={ `customer_products__button-card-add-item-${item.id}` }
          className="btn btn-success"
          onClick={ () => setQuantity((prevState) => {
            const result = prevState + 1;
            return result;
          }) }
        >
          +
        </button>
      </div>
    </div>
  );
}

ProducCard.propTypes = {
  item: PropTypes.object,
  index: PropTypes.number,
  calculateTotal: PropTypes.func,
}.isRequired;
