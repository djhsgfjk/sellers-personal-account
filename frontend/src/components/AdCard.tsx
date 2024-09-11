import React from 'react';
import Card from 'react-bootstrap/Card';
import { Ad } from '../types';

function AdCard({ ad } : { ad: Ad }) {
    // Картинка
    // Название;
    // Стоимость;
    // Количество просмотров;
    // Количество лайков;

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