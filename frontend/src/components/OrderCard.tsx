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
            <Card.Title>Заказ №{order.id}</Card.Title>
            <Card.Subtitle>{order.total}₽</Card.Subtitle>
            <Card.Text>
                <div><b>Статус:</b> {order.status}</div>
                <div><b>Дата создания:</b> {new Date(Date.parse(order.createdAt)).toLocaleDateString()}</div>
                <div></div>
                {order.finishedAt ? <div><b>Дата завершения:</b> {new Date(Date.parse(order.finishedAt)).toLocaleDateString()}</div>
                : <div><b>Возможность завершения:</b> Да</div>}
            </Card.Text>
            <Button variant="primary">Показать все товары ({order.items.length})</Button>
          </Card.Body>
        </Card>
      );
}

export default OrderCard;