import React from 'react';
import { useState, useEffect } from 'react';
import ModalWindow from './ModalWindow';
import AdEditor from './AdEditor';
import AdCard from './AdCard';
import { Button } from 'react-bootstrap';
import { Ad } from '../types';

function Ads() {
  const [ads, setAds] = useState([] as Array<Ad>);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleSave = (ad: Ad) => {
    const url = 'http://localhost:3000/advertisements';

    const request = new Request(url, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(ad),
    });

    fetch(request)
    .then((response: any) => {
      if (response.ok) {
        setShow(false);
        response.json()
        .then((newAd: Ad) => {
          setAds([...ads, newAd as Ad]);
        });
      } else {
        return new Error;
      }
    })
    .catch(() => {
      alert('При сохранении возникала ошибка , попробуйте ещё раз');
    })
  }

  useEffect(() => {
    const url = 'http://localhost:3000/advertisements';

    const request = new Request(url, {
        method: "GET",
    });

    fetch(request)
    .then((response: any) => {
      if (response.ok) {
        return response.json();
      }
    })
    .then((result: any) => {
      setAds(result as Array<Ad>);
    })
  }, []);


  return (
    <div className="ads-page">
      <Button className='ads-page__button--add' variant="primary" onClick={handleShow}><i class="bi bi-file-earmark-plus-fill"></i> Новое объявление</Button>
      <div className="ads">
        {ads.map((ad: Ad) => (
          <AdCard ad={ad}/>
        ))}
      </div>
        <ModalWindow
            title='Добавить объявление'  
            show={show}
            handleClose={handleClose}
        >
            <AdEditor handleClose={handleClose} handleSave={handleSave} />
        </ModalWindow>
    </div>
  );
}

export default Ads;

