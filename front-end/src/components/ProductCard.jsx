/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

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
        onClick={ () => setQuantity((prevState) => {
          const result = prevState + 1;
          return result;
        }) }
      >
        ADD
      </button>
      <button
        type="button"
        data-testid={ `customer_products__button-card-rm-item-${index + 1}` }
        onClick={ () => setQuantity((prevState) => {
          const result = prevState - 1;
          return result;
        }) }
      >
        REMOVE
      </button>
      <input
        type="number"
        value={ quantity }
        onChange={ (e) => {
          setQuantity(Number(e.target.value));
        } }
        data-testid={ `customer_products__input-card-quantity-${index + 1}` }
      />
    </div>
  );
}

ProducCard.propTypes = {
  item: PropTypes.object,
  index: PropTypes.number,
  calculateTotal: PropTypes.func,
}.isRequired;
