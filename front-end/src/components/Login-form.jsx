import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import propTypes from 'prop-types';
import api from '../services/axios';
import '../styles/Login.css';

function LoginForm({ setAuth }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [enableLogin, setEnableLogin] = useState(false);
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleChange = ({ target }) => {
    if (target.name === 'email') {
      setEmail(target.value);
    }
    if (target.name === 'password') {
      setPassword(target.value);
    }
  };

  const sendLogin = async () => {
    setError(false);
    try {
      const { data } = await api.post('/login', {
        email,
        password,
      });
      localStorage.user = JSON.stringify(data);
      setAuth();
      if (data.role === 'administrator') {
        return navigate('/admin/manage');
      }
      if (data.role === 'seller') {
        return navigate('/seller/orders');
      }
      return navigate('/customer/products');
    } catch (err) {
      console.log(err);
      setError(true);
    }
  };

  useEffect(() => {
    const SIX = 6;
    const isValidEmail = /\S+@\S+\.\S+/.test(email);
    const isValidPassword = password.length >= SIX;

    setEnableLogin(isValidEmail && isValidPassword);
  }, [email, password]);

  return (
    <div className="login-container">
      <form className="login-form-container">
        <div className="form-group">
          <label htmlFor="email">
            <b>Login</b>
            <input
              data-testid="common_login__input-email"
              type="email"
              name="email"
              value={ email }
              onChange={ handleChange }
              className="form-control"
            />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="password">
            <b>Senha</b>
            <input
              data-testid="common_login__input-password"
              type="password"
              name="password"
              value={ password }
              onChange={ handleChange }
              className="form-control"
            />
          </label>
        </div>
        <div className="form-group">
          <button
            data-testid="common_login__button-login"
            type="button"
            disabled={ !enableLogin }
            onClick={ sendLogin }
            className="btn btn-success"
            style={ { width: '100%' } }
          >
            LOGIN
          </button>
        </div>
        <div className="form-group">
          <button
            data-testid="common_login__button-register"
            type="button"
            onClick={ () => navigate('/register') }
            className="btn btn-outline-success"
            style={ { width: '100%' } }
          >
            Ainda não tenho conta
          </button>
        </div>
      </form>
      { error && (
        <span
          data-testid="common_login__element-invalid-email"
        >
          falha no login
        </span>
      )}

    </div>
  );
}

LoginForm.propTypes = {
  setAuth: propTypes.func.isRequired,
};

export default LoginForm;
