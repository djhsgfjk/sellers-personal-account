import React from 'react';
import { useParams } from 'react-router-dom';
import { Ad, urlParams } from '../types';

const ad =   {
    "id": "1",
    "name": "Стул старинный",
    "description": "Очень красивый",
    "price": 2000,
    "createdAt": "2022-08-12T20:16:55.351Z",
    "views": 20,
    "likes": 2,
    "imageUrl": ""
  } as Ad;
	
function AdPage() {
    const { id } = useParams<urlParams>();
    // Картинка
    // Название;
    // Описание;
    // Стоимость;
    // Дата и время создания;
    // Количество просмотров;
    // Количество лайков;

    return (
        <div className='ad-page'>
            <div className='ad-page__id'>id={id}</div>
            <h2 className='ad-page__name'>{ad.name}</h2>
            <img className='ad-page__image' src={ad.imageUrl} alt={ad.name} />
            <div className='ad-page__description'>
                <h3 className='ad-page-description__title'>Описание</h3>
                <div className='ad-page-description__text'>{ad.description}</div>
            </div>
            <h3 className='ad-page__price'>{ad.price}₽</h3>
            <div className='ad-page__data'>
                <div className='ad-page__views'>
                    <b className='ad-page-views__title'><i className="bi bi-eye-fill"></i> Просмотры:</b> <span className='ad-page-views__text'>{ad.views}</span>
                </div>
                <div className='ad-page__likes'>
                    <b className='ad-page-likes__title'><i className="bi bi-heart-fill"></i> В избранном:</b> <span className='ad-page-views__text'>{ad.likes}</span>
                </div>
            </div>
        </div>
    );
}

export default AdPage;