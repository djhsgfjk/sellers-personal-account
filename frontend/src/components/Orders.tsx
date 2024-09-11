import React from 'react';
import { Order, OrderStatus } from '../types';
import OrderCard from './OrderCard';

const orders = [
  {
    "id": "1",
    "status": OrderStatus[0],
    "createdAt": "2024-08-12T20:20:55.351Z",
    "finishedAt": "",
    "total": 314000,
    "deliveryWay": "mail",
    "items": [
      {
        "id": "8",
        "name": "Новый айфон",
        "price": 100000,
        "createdAt": "2024-08-12T12:16:55.351Z",
        "views": 200000,
        "likes": 302,
        "imageUrl": "",
        "count": 3
      },
      {
        "id": "6",
        "name": "Картонная коробка",
        "description": "Почная.",
        "price": 7000,
        "createdAt": "2024-04-12T20:16:55.351Z",
        "views": 1,
        "likes": 0,
        "imageUrl": "",
        "count": 2
      }
    ]
  },
  {
    "id": "2",
    "status": OrderStatus[4],
    "createdAt": "2024-08-12T20:20:55.351Z",
    "finishedAt": "2024-08-12T20:25:55.351Z",
    "total": 33000,
    "deliveryWay": "sdek",
    "items": [
      {
        "id": "2",
        "name": "Ведро снега",
        "description": "Последняя возможность купить по выгодной цене!",
        "price": 3000,
        "createdAt": "2023-08-12T20:16:55.351Z",
        "views": 77832,
        "likes": 45666,
        "imageUrl": "",
        "count": 10
      },
      {
        "id": "5",
        "name": "Носки",
        "price": 6000,
        "createdAt": "2024-06-12T20:16:55.351Z",
        "views": 0,
        "likes": 0,
        "imageUrl": "",
        "count": 5
      }
    ]
  }
]

function Orders() {
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

