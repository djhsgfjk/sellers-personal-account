import React from 'react';
import { useState, useEffect } from 'react';
import { Order, OrderStatus } from '../types';
import OrderCard from './OrderCard';

function Orders() {
  const [orders, setOrders] = useState([] as Array<Order>);

  useEffect(() => {
    const url = 'http://localhost:3000/orders';

    const request = new Request(url, {
        method: "GET",
    });

    fetch(request)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
    })
    .then((result) => {
      setOrders(result as Array<Order>);
    })
  }, []);
  
  return (
    <div className="orders"
      style={{
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        gap: '32px',
      }}
    >
        {orders.map((order: Order) => (
          <OrderCard order={order}/>
        ))}
    </div>
  );
}

export default Orders;

