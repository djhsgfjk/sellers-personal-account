import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Order } from '../types';

function OrderCard({ order } : { order: Order }) {
    // Номер заказа;
    // Дата создания заказа;
    // Статус (текстом);
    // Возможность завершения заказа;
    // Количество товаров;
    // Стоимость заказа;
    // Кнопка “Показать все товары”

    return (
        <Card style={{ width: '28rem' }}>
          <Card.Body>
            <Card.Title><span>Заказ №</span><span>{order.id}</span></Card.Title>
            <Card.Text>
                <div><b>Дата создания заказа:</b> <span>{new Date(Date.parse(order.createdAt)).toLocaleDateString()}</span></div>
                <div><b>Статус:</b> <span>{order.status}</span></div>
                {order.finishedAt ? <div><b>Дата завершения заказа:</b> <span>{new Date(Date.parse(order.finishedAt)).toLocaleDateString()}</span></div>
                : <div><b>Возможность завершения заказа:</b> <span>Да</span></div>}
                <div><b>Количество товаров:</b> <span>{order.items.length}</span></div>
                <div><b>Стоимость заказа:</b> <span>{order.total}</span></div>
            </Card.Text>
            <Button variant="primary">Показать все товары</Button>
          </Card.Body>
        </Card>
      );
}

export default OrderCard;