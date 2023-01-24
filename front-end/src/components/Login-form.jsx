import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../services/axios';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [enableLogin, setEnableLogin] = useState(false);
  const [loginStatus, setLoginStatus] = useState(null);
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
    try {
      await api.post('/login', {
        email,
        password,
      });
      setLoginStatus(true);
    } catch (error) {
      setLoginStatus(false);
    }
  };

  useEffect(() => {
    const SIX = 6;
    const isValidEmail = /\S+@\S+\.\S+/.test(email);
    const isValidPassword = password.length >= SIX;

    setEnableLogin(isValidEmail && isValidPassword);
  }, [email, password]);
  return (
    <>
      { loginStatus && navigate('/customer/products') }
      <form>
        <label htmlFor="email">
          email:
          <input
            data-testid="common_login__input-email"
            type="email"
            name="email"
            value={ email }
            onChange={ handleChange }
          />
        </label>
        <label htmlFor="password">
          password:
          <input
            data-testid="common_login__input-password"
            type="password"
            name="password"
            value={ password }
            onChange={ handleChange }
          />
        </label>
        <button
          data-testid="common_login__button-login"
          type="button"
          disabled={ !enableLogin }
          onClick={ sendLogin }
        >
          LOGIN
        </button>
        <button
          data-testid="common_login__button-register"
          type="button"
          onClick={ () => navigate('/register') }
        >
          Ainda não tenho conta
        </button>
      </form>
      { (loginStatus === false) && (
        <span
          data-testid="common_login__element-invalid-email"
        >
          falha no login
        </span>
      )}

    </>
  );
}

export default LoginForm;
