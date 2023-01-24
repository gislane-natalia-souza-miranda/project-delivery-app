import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Login</h1>
      <button
        type="button"
        data-testid="common_login__button-register"
        onClick={ () => navigate('/register') }
      >
        Registro
      </button>
    </div>
  );
}
