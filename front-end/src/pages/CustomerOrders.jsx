import { useEffect, useState } from 'react';
import HeaderNavBar from '../components/Header-navbar';
import OrderCard from '../components/OrderCard';
import api from '../services/axios';
import '../styles/CustomerOrder.css';

function CustomerOrders() {
  const [orders, setOrders] = useState([]);

  const getOrders = async () => {
    const { data } = await api.get('/orders/customer');

    setOrders(data);
  };

  useEffect(() => {
    getOrders();
  }, []);

  return (
    <>
      <HeaderNavBar />
      <div className="customer-order-container">
        {orders.length && orders.map((item) => (

          <OrderCard
            key={ item.id }
            item={ item }
          />

        ))}
      </div>
    </>
  );
}

export default CustomerOrders;
