import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import propTypes from 'prop-types';
import LoginForm from '../components/Login-form';

function Login({ setAuth }) {
  const navigate = useNavigate();

  useEffect(() => {
    const sales = async () => {
      const user = JSON.parse(localStorage.getItem('user'));
      if (user) {
        if (user.role === 'administrator') {
          return navigate('/admin/manage');
        }
        if (user.role === 'seller') {
          return navigate('/seller/orders');
        }
        return navigate('/customer/products');
      }
      // return navigate('/login');
    };

    sales();
  }, []);

  return (
    <LoginForm setAuth={ setAuth } />
  );
}

Login.propTypes = {
  setAuth: propTypes.func.isRequired,
};

export default Login;
