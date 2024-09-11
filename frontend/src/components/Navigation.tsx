import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { navItem } from '../types';

function Navigaion({ navItems } : { navItems: navItem[] }) {
  const expand = 'md';
  return (
    <Navbar expand={expand} 
        style={{
            flexWrap: 'nowrap',
            marginBottom: '16px',
        }}
    >
        <Navbar.Brand >Личный кабинет продавца</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Offcanvas
            placement="end"
        >
            <Offcanvas.Header closeButton />
            <Offcanvas.Body 
            >
                <Nav 
                    className="justify-content-end flex-grow-1 pe-3" 
                    variant='underline'
                    style={{
                        alignItems: 'flex-start',
                    }}
                >
                    {navItems.map(({key, title, href, active}) => (
                        <Nav.Link key={key} href={href} active={active} >{title}</Nav.Link>
                    ))}
                </Nav>
            </Offcanvas.Body>
        </Navbar.Offcanvas>
    </Navbar>
  );
}

export default Navigaion;
