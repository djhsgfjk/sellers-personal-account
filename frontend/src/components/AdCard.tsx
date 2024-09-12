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
    <Card className='ad-card'>
      <a className='ad-card__link' href={"ads/"+ad.id}>
        <Card.Img variant="top" src={ad.imageUrl} alt={ad.name} />
        <Card.Body>
          <Card.Title>{ad.name}</Card.Title>
          <Card.Subtitle>{ad.price}₽</Card.Subtitle>
          <Card.Text>
              <div><i className="bi bi-eye-fill"></i> {ad.views}</div>
              <div><i className="bi bi-heart-fill"></i> {ad.likes}</div>
          </Card.Text>
        </Card.Body>
      </a>
    </Card>
  );
}

export default AdCard;