import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { ReactNode } from '../types';

function ModalWindow({   
    title, 
    text, 
    showButtons, 
    handleClose, 
    handleSave, 
    show,
    children 
} : { 
    title: string, 
    text?: string, 
    showButtons?: boolean, 
    handleClose?: () => void, 
    handleSave?: () => void, 
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
        {showButtons ? 
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Отмена</Button>
          <Button variant="primary" onClick={handleSave}>Сохранить</Button>
        </Modal.Footer> 
        : null}
      </Modal>
  );
}

export default ModalWindow;