import React from 'react';
import { useState } from 'react';
import ModalWindow from './ModalWindow';
import AdEditor from './AdEditor';
import AdCard from './AdCard';
import { Button } from 'react-bootstrap';
import { Ad } from '../types';

const ads = [
  {
    "id": "1",
    "name": "Стул старинный",
    "description": "Очень красивый",
    "price": 2000,
    "createdAt": "2022-08-12T20:16:55.351Z",
    "views": 20,
    "likes": 2,
    "imageUrl": ""
  },
  {
    "id": "2",
    "name": "Ведро снега",
    "description": "Последняя возможность купить по выгодной цене!",
    "price": 3000,
    "createdAt": "2023-08-12T20:16:55.351Z",
    "views": 77832,
    "likes": 45666,
    "imageUrl": ""
  },
  {
    "id": "3",
    "name": "Плащ невидимка",
    "price": 10000000,
    "createdAt": "2024-08-12T20:16:55.351Z",
    "views": 900,
    "likes": 19,
    "imageUrl": ""
  },
  {
    "id": "4",
    "name": "Ковер",
    "description": "Стильный модный, как у бабушки в деревне :)))",
    "price": 5000,
    "createdAt": "2024-07-12T20:16:55.351Z",
    "views": 2000000,
    "likes": 2,
    "imageUrl": ""
  },
  {
    "id": "5",
    "name": "Носки",
    "price": 6000,
    "createdAt": "2024-06-12T20:16:55.351Z",
    "views": 0,
    "likes": 0,
    "imageUrl": ""
  },
  {
    "id": "6",
    "name": "Картонная коробка",
    "description": "Прочная.",
    "price": 7000,
    "createdAt": "2024-04-12T20:16:55.351Z",
    "views": 1,
    "likes": 0,
    "imageUrl": ""
  },
  {
    "id": "7",
    "name": "Угловой диван",
    "description": "Стих для привлечения внимания: дама сдавала в багаж диван, чемодан, саквояж, картину, корзину, картонку и маленькую собачонку. выдали даме на станции четыре зеленых квитанции о том, что получен багаж: диван, чемодан, саквояж, картина, корзина, картонка и маленькая собачонка. вещи везут на перрон. кидают в открытый вагон. готово. уложен багаж: диван, чемодан, саквояж, картина, корзина, картонка и маленькая собачонка. но только раздался звонок, удрал из вагона щенок. хватились на станции дно: потеряно место одно. в испуге считают багаж: диван, чемодан, саквояж, картина, корзина, картонка… — товарищи! где собачонка? вдруг видят: стоит у колес огромный взъерошенный пес. поймали его — и в багаж, туда, где лежал саквояж, картина, корзина, картонка, где прежде была собачонка. приехали в город житомир. носильщик пятнадцатый номер везет на тележке багаж: диван, чемодан, саквояж, картину, корзину, картонку, а сзади ведут собачонку. собака-то как зарычит, а барыня как закричит: — разбойники! воры! уроды! собака — не той породы! швырнула она чемодан, ногой отпихнула диван, картину, корзину, картонку… — отдайте мою собачонку! — позвольте, мамаша! на станции, согласно багажной квитанции, от вас получили багаж: диван, чемодан, саквояж, картину, корзину, картонку и маленькую собачонку. однако за время пути собака могла подрасти!",
    "price": 999,
    "createdAt": "2024-08-12T14:16:55.351Z",
    "views": 20000,
    "likes": 1,
    "imageUrl": ""
  },
  {
    "id": "8",
    "name": "Новый айфон",
    "price": 100000,
    "createdAt": "2024-08-12T12:16:55.351Z",
    "views": 200000,
    "likes": 302,
    "imageUrl": ""
  }
] as Array<Ad>;

function Ads() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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

