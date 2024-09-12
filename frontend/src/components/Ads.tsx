import React from 'react';
import { useState, useRef, useEffect } from 'react';
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

  useEffect(() => {
    const url = 'http://localhost:3000/advertisements';

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
            showButtons={true}
        >
            <AdEditor />
        </ModalWindow>
    </div>
  );
}

export default Ads;

