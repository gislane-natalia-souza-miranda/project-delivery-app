import React, { useEffect, useState } from 'react';
import SellerNav from '../components/sellers/Seller-nav';
import SellerOrder from '../components/sellers/Seller-order';
import api from '../services/axios';

function SellerOrders() {
  const [user, setUser] = useState({});
  const [orders, setOrders] = useState([]);

  const getOrders = async () => {
    if (user.id) {
      try {
        const { data } = await api.get(`seller/orders/${user.id}`);
        console.log('data', data);
        setOrders(data);
      } catch (error) {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem('user')));
  }, []);

  useEffect(() => {
    getOrders();
  }, [user]);
  return (
    <>
      <SellerNav user={ user } />
      <ul>
        { orders && orders.map((item) => <SellerOrder key={ item.id } order={ item } />) }
      </ul>
    </>
  );
}

export default SellerOrders;
