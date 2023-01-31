import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function HeaderAdmin() {
  const [user, setUser] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const usr = JSON.parse(localStorage.getItem('user'));
    if (!usr) return navigate('/login');
    setUser(usr.name);
  }, []);

  return (
    <div>
      <Link
        to="/customer/products" // mudar aqui
        data-testid="customer_products__element-navbar-link-orders"
      >
        Gerenciar Usuários
      </Link>
      <span data-testid="customer_products__element-navbar-user-full-name">
        {user}
      </span>
      <button
        type="button"
        data-testid="customer_products__element-navbar-link-logout"
        onClick={ () => localStorage.clear('user') }
      >
        <Link to="/login">
          Logout
        </Link>
      </button>
    </div>
  );
}

export default HeaderAdmin;
