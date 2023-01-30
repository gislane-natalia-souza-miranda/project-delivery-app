import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../services/axios';

export default function Register() {
  const [inputs, setInputs] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [disableBtn, setDisableBtn] = useState(true);
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    try {
      await api.post('/register', { ...inputs });
      navigate('/customer/products');
    } catch (err) {
      if (err) return setError(true);
    }
  };

  const handleChanges = ({ target }) => {
    setInputs({ ...inputs, [target.name]: target.value });
  };

  useEffect(() => {
    const { name, email, password } = inputs;
    const emailRegex = /\S+@\S+\.\S+/;
    const FIVE = 6;
    const TWELVE = 12;

    if (name.trim().length >= TWELVE // .trim() tirar espaços em branco
    && password.length >= FIVE && emailRegex.test(email)) {
      return setDisableBtn(false);
    }

    return setDisableBtn(true);
  }, [inputs]);

  return (
    <form autoComplete="off" onSubmit={ handleSubmit }>
      <label htmlFor="name">
        Nome:
        <input
          type="text"
          name="name"
          placeholder="Ex: Jon Doe"
          value={ inputs.name }
          onChange={ handleChanges }
          data-testid="common_register__input-name"
        />
      </label>
      <label htmlFor="email">
        Email:
        <input
          type="text"
          name="email"
          placeholder="exemplo@email.com"
          value={ inputs.email }
          onChange={ handleChanges }
          data-testid="common_register__input-email"
        />
      </label>
      <label htmlFor="password">
        Senha:
        <input
          type="password"
          name="password"
          value={ inputs.password }
          onChange={ handleChanges }
          data-testid="common_register__input-password"
        />
      </label>
      <button
        type="submit"
        disabled={ disableBtn }
        data-testid="common_register__button-register"
      >
        CADASTRAR
      </button>
      <span
        style={ error ? { display: 'inline' } : { display: 'none' } }
        data-testid="common_register__element-invalid_register"
      >
        Erro
      </span>
    </form>
  );
}
