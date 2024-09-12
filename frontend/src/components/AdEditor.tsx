import React from 'react';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { Button, Modal } from 'react-bootstrap';
import { Ad } from '../types';

function AdEditor({ ad, handleSave, handleClose } : { ad?: Ad, handleSave: (ad: Ad) => void, handleClose: () => void }) {
    const [imageUrl, setImageUrl] = useState(ad?.imageUrl);
    const [name, setName] = useState(ad?.name);
    const [description, setDescription] = useState(ad?.description);
    const [price, setPrice] = useState(ad?.price);
    
    // Картинка (текстовое поле для ввода URL);
    // Название (текстовое поле);
    // Описание (текстовое поле)
    // Стоимость (числовое поле);

    return (
        <>
            <Form className="ad-editor">
                <Form.Group className="mb-3 ad-editor__value" controlId="formBasicEmail">
                    <Form.Label>Фото</Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="Введите URL фото товара..." 
                        defaultValue={imageUrl} 
                        onChange={(event) => {setImageUrl(event.target.value)}}
                    />
                </Form.Group>

                <Form.Group className="mb-3 ad-editor__value" controlId="formBasicEmail">
                    <Form.Label>Название</Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="Введите название товара..." 
                        defaultValue={name} 
                        onChange={(event) => {setName(event.target.value)}}
                    />
                </Form.Group>
        
                <Form.Group className="mb-3 ad-editor__value" controlId="formBasicEmail">
                    <Form.Label>Описание</Form.Label>
                    <Form.Control 
                        as="textarea" 
                        rows={5} 
                        placeholder="Введите описание..." 
                        defaultValue={description} 
                        onChange={(event) => {setDescription(event.target.value)}}
                    />
                </Form.Group>

                <Form.Group className="mb-3 ad-editor__value" controlId="formBasicEmail">
                    <Form.Label>Стоимость</Form.Label>
                    <InputGroup className="mb-3">
                        <Form.Control
                            placeholder="0"
                            defaultValue={price}
                            onChange={(event) => {setPrice(parseInt(event.target.value))}}
                        />
                        <InputGroup.Text>₽</InputGroup.Text>
                    </InputGroup>
                </Form.Group>
                <div className='ad-editor__buttons'>
                <Button variant="secondary" onClick={handleClose}>Отмена</Button>
                <Button variant="primary" onClick={() => {
                        if (handleSave) {
                            handleSave({imageUrl, name, description, price} as Ad);
                        }}
                    }
                >Сохранить</Button>
            </div> 
            </Form>
    </>);
}

export default AdEditor;