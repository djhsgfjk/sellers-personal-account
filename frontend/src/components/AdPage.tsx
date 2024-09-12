import React from 'react';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import ModalWindow from './ModalWindow';
import AdEditor from './AdEditor';
import Button from 'react-bootstrap/Button';
import { Ad, urlParams } from '../types';
	
function AdPage() {
    const { id } = useParams<urlParams>();

    const [ad, setAd] = useState({} as Ad);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        const url = 'http://localhost:3000/advertisements/'+id;
    
        const request = new Request(url, {
            method: "GET",
        });
    
        fetch(request)
        .then((response) => {
            console.log('response', response);
            if (response.ok) {
                return response.json();
            }
        })
        .then((result) => {
            console.log('result', result);
            setAd(result as Ad);
        })
    }, []);
  
    // Картинка
    // Название;
    // Описание;
    // Стоимость;
    // Дата и время создания;
    // Количество просмотров;
    // Количество лайков;

    return (
        <div className='ad-page'>
            <Button className='ad-page__button--edit' variant="primary" onClick={handleShow}><i className="bi bi-pencil-fill"></i> Редактировать</Button>
        <div className='ad-page__ad ad'>
            {/* <div className='ad__id'>id={id}</div> */}
            <h2 className='ad__name'>{ad.name}</h2>
            <img className='ad__image' src={ad.imageUrl} alt={ad.name} />
            <div className='ad__description'>
                <h3 className='ad-page-description__title'>Описание</h3>
                <div className='ad-page-description__text'>{ad.description}</div>
            </div>
            <h3 className='ad__price'>{ad.price}₽</h3>
            <div className='ad__data'>
                <div className='ad__views'>
                    <b className='ad-page-views__title'><i className="bi bi-eye-fill"></i> Просмотры:</b> <span className='ad-page-views__text'>{ad.views}</span>
                </div>
                <div className='ad__likes'>
                    <b className='ad-page-likes__title'><i className="bi bi-heart-fill"></i> В избранном:</b> <span className='ad-page-views__text'>{ad.likes}</span>
                </div>
            </div>
        </div>
            <ModalWindow
                title='Редактировать объявление'  
                show={show}
                handleClose={handleClose}
                showButtons={true}
            >
                <AdEditor ad={ad} />
            </ModalWindow>
        </div>
    );
}

export default AdPage;