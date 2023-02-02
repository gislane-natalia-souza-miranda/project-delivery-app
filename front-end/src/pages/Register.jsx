import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../services/axios';
import '../styles/Login.css';

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
      const { data } = await api.post('/register', { ...inputs });
      localStorage.user = JSON.stringify(data);
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
    <div className="login-container">
      <form autoComplete="off" onSubmit={ handleSubmit } className="login-form-container">
        <div className="form-group">
          <label htmlFor="name">
            <b>Nome</b>
            <input
              type="text"
              name="name"
              placeholder="Ex: Jon Doe"
              value={ inputs.name }
              onChange={ handleChanges }
              data-testid="common_register__input-name"
              className="form-control"
            />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="email">
            <b>Email</b>
            <input
              type="text"
              name="email"
              placeholder="exemplo@email.com"
              value={ inputs.email }
              onChange={ handleChanges }
              data-testid="common_register__input-email"
              className="form-control"
            />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="password">
            <b>Senha</b>
            <input
              type="password"
              name="password"
              value={ inputs.password }
              onChange={ handleChanges }
              data-testid="common_register__input-password"
              className="form-control"
            />
          </label>
        </div>
        <div className="form-group">
          <button
            type="submit"
            disabled={ disableBtn }
            data-testid="common_register__button-register"
            className="btn btn-success"
            style={ { width: '100%' } }
          >
            CADASTRAR
          </button>
        </div>
        <span
          style={ error ? { display: 'inline' } : { display: 'none' } }
          data-testid="common_register__element-invalid_register"
        >
          Erro
        </span>
      </form>
    </div>
  );
}
