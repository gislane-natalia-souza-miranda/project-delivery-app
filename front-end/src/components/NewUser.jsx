import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../services/axios';

function NewUser() {
  const [inputs, setInputs] = useState({
    name: '',
    password: '',
    email: '',
    role: 'customer',
  });
  const [enableRegistre, setEnableRegistre] = useState(false);
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleChange = ({ target }) => {
    setInputs({ ...inputs, [target.name]: target.value });
  };

  const sendRegistre = async (e) => {
    e.preventDefault();
    setError(false);
    try {
      const { token } = JSON.parse(localStorage.getItem('user'));

      const { data } = await api.post(
        '/register/admin',
        inputs,
        { headers: { authorization: token } },
      );

      localStorage.user = JSON.stringify(data);
      return navigate('/admin/manage');
    } catch (err) {
      console.log(err);
      return setError(true);
    }
  };

  useEffect(() => {
    const MIN_PASSWORD = 6;
    const MIN_NAME = 12;
    const isValidEmail = /\S+@\S+\.\S+/.test(inputs.email);
    const isValidPassword = inputs.password.length >= MIN_PASSWORD;
    const isValidName = inputs.name.trim().length >= MIN_NAME; // .trim() tirar espaços em branco

    setEnableRegistre(isValidEmail && isValidPassword && isValidName);
  }, [inputs]);

  return (
    <>
      <form onSubmit={ sendRegistre }>
        <label htmlFor="name">
          Nome:
          <input
            data-testid="admin_manage__input-name"
            type="text"
            name="name"
            onChange={ handleChange }
          />
        </label>

        <label htmlFor="email">
          Email:
          <input
            data-testid="admin_manage__input-email"
            type="email"
            name="email"
            value={ inputs.email }
            onChange={ handleChange }
          />
        </label>

        <label htmlFor="password">
          Senha:
          <input
            data-testid="admin_manage__input-password"
            type="password"
            name="password"
            value={ inputs.password }
            onChange={ handleChange }
          />
        </label>

        <label htmlFor="role">
          Tipo:
          <select
            data-testid="admin_manage__select-role"
            name="role"
            onChange={ handleChange }
          >
            <option value="customer">Cliente</option>
            <option value="administrator">Administrador(a)</option>
            <option value="seller">Vendedor(a)</option>
          </select>
        </label>

        <button
          data-testid="admin_manage__button-register"
          type="submit"
          disabled={ !enableRegistre }
          onClick={ sendRegistre }
        >
          Cadastrar
        </button>
      </form>

      { error && (
        <span
          data-testid="admin_manage__element-invalid-register"
        >
          Falha no cadastro!
        </span>
      )}

    </>
  );
}

export default NewUser;
