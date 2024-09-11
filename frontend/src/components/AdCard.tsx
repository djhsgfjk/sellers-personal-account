// В карточке объявления есть следующая информация о нем:
// Картинка
// Название;
// Стоимость;
// Количество просмотров;
// Количество лайков;

import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { ad } from '../types';

function AdCard({ ad } : { ad: ad }) {
    return (
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={ad.imageUrl} alt={ad.name} />
          <Card.Body>
            <Card.Title>{ad.name}</Card.Title>
            <Card.Text>
                <div><b>Стоимость:</b> <span>{ad.price}</span></div>
                <div><b>Просмотры:</b> <span>{ad.views}</span></div>
                <div><b>В избранном:</b> <span>{ad.likes}</span></div>
            </Card.Text>
          </Card.Body>
        </Card>
      );
}

export default AdCard;