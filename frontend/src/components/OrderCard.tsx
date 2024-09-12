import React from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Order, Ad } from '../types';
import ModalWindow from './ModalWindow';
import AdCard from './AdCard';

function OrderCard({ order } : { order: Order }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
        <Button variant="primary" onClick={handleShow}>Показать все товары ({order.items.length})</Button>
      </Card.Body>
      <ModalWindow
        title={'Товары заказа №' + order.id}
        showButtons={false}
        handleClose={handleClose}
        show={show}
        windowWidth='40rem'
      >
        <div className="ads"
          style={{
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: '32px',
          }}
        >
          {order.items.map((ad: Ad) => (
            <AdCard ad={ad}/>
          ))}
        </div>
      </ModalWindow>
    </Card>
  );
}

export default OrderCard;