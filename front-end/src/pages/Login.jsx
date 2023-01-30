import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginForm from '../components/Login-form';
// import api from '../services/axios';

function Login() {
  const navigate = useNavigate();

  // modifiquei aqui
  useEffect(() => {
    const sales = async () => {
      const user = JSON.parse(localStorage.getItem('user'));
      if (user) {
        if (user.role === 'administrator') {
          return navigate('/admin/manage');
        }
        return navigate('/customer/products');
      }
      // return navigate('/login');
    };

    sales();
  }, []);

  return (
    <LoginForm />
  );
}

export default Login;
