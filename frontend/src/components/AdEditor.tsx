import React from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { Ad } from '../types';

function AdEditor({ ad } : { ad?: Ad }) {
    // Картинка (текстовое поле для ввода URL);
    // Название (текстовое поле);
    // Описание (текстовое поле)
    // Стоимость (числовое поле);

    return (
        <Form className="ad-editor">
            <Form.Group className="mb-3 ad-editor__value" controlId="formBasicEmail">
                <Form.Label>Фото</Form.Label>
                <Form.Control type="text" placeholder="Введите URL фото товара..." value={ad?.imageUrl} />
            </Form.Group>

            <Form.Group className="mb-3 ad-editor__value" controlId="formBasicEmail">
                <Form.Label>Название</Form.Label>
                <Form.Control type="text" placeholder="Введите название товара..." value={ad?.name} />
            </Form.Group>
    
            <Form.Group className="mb-3 ad-editor__value" controlId="formBasicEmail">
                <Form.Label>Описание</Form.Label>
                <Form.Control as="textarea" rows={5} placeholder="Введите описание..." value={ad?.description} />
            </Form.Group>

            <Form.Group className="mb-3 ad-editor__value" controlId="formBasicEmail">
                <Form.Label>Стоимость</Form.Label>
                <InputGroup className="mb-3">
                    <Form.Control
                        placeholder="0"
                        value={ad?.price}
                    />
                    <InputGroup.Text>₽</InputGroup.Text>
                </InputGroup>
            </Form.Group>
        </Form>
    );
}

export default AdEditor;