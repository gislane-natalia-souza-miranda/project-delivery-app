import { useEffect, useState } from 'react';
import HeaderNavBar from '../components/Header-navbar';
import OrderCard from '../components/OrderCard';
import api from '../services/axios';

function CustomerOrders() {
  const [orders, setOrders] = useState([]);

  const getOrders = async () => {
    const { data } = await api.get('/orders/customer');
    console.log(data);
    setOrders(data);
  };

  useEffect(() => {
    getOrders();
  }, []);

  return (
    <>
      <HeaderNavBar />

      { orders.map((item) => (

        <OrderCard
          key={ item.id }
          item={ item }
        />

      ))}
    </>
  );
}

export default CustomerOrders;
