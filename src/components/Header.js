import React from "react";
import { Nav } from 'react-bootstrap';
import { Link } from "react-router-dom";

export const Header = () => {
    return (
        <div className='header'>
            <Link to='/'><h2>React Blog</h2></Link>
            <Nav variant="pills" defaultActiveKey="/home">
            <Nav.Item>
                <Nav.Link to="/" as={Link}>Главная</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link to='/about' as={Link}>Обо мне</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link to='/login' as={Link}>Войти</Nav.Link>
            </Nav.Item>
            </Nav>
        </div>
    )
}