import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { ReactNode } from '../types';

function ModalWindow({   
    title, 
    text, 
    handleClose, 
    show,
    children 
} : { 
    title: string, 
    text?: string, 
    handleClose: () => void, 
    show: boolean,
    children?: ReactNode 
}) {
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>{title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {text ? <p>{text}</p> : null}
                {children ? children : null}
            </Modal.Body>
        </Modal>
    );
    }

export default ModalWindow;