import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginForm from '../components/Login-form';
import api from '../services/axios';

function Login() {
  const navigate = useNavigate();

  useEffect(() => {
    const sales = async () => {
      const user = JSON.parse(localStorage.getItem('user'));
      if (user) {
        const { data } = await api.get('/orders/customer');
        if (data) {
          return navigate('/customer/products');
        }
      }
    };

    sales();
  }, []);

  return (
    <LoginForm />
  );
}

export default Login;
