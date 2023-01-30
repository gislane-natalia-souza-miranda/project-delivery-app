import React, { useEffect, useState } from 'react';
import SellerNav from '../components/sellers/Seller-nav';
import SellerOrder from '../components/sellers/Seller-order';
import api from '../services/axios';

function SellerOrders() {
  const [user, setUser] = useState({});
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem('user')));
  }, []);

  useEffect(() => {
    if (user.id) {
      try {
        const getOrders = api.get(`seller/orders/${user.id}`);
        setOrders(getOrders.data);
      } catch (error) {
        console.log(error);
      }
    }
  }, [user]);

  return (
    <>
      <SellerNav user={ user } />
      <ul>
        { orders.map((item) => <SellerOrder key={ item.id } order={ item } />) }
      </ul>
    </>
  );
}

export default SellerOrders;
