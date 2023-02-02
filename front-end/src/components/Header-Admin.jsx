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
    <div className="header-container">
      <Link
        to="/customer/products" // mudar aqui
        data-testid="customer_products__element-navbar-link-orders"
        className="btn btn-success"
      >
        Gerenciar Usuários
      </Link>
      <span
        data-testid="customer_products__element-navbar-user-full-name"
        style={ { fontWeight: 'bold', fontSize: '15pt' } }
      >
        {user}
      </span>
      <Link
        to="/login"
        className="btn btn-danger"
        data-testid="customer_products__element-navbar-link-logout"
        onClick={ () => localStorage.clear('user') }
      >
        Logout
      </Link>
    </div>
  );
}

export default HeaderAdmin;
