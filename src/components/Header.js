import React from "react";
import { Button, Nav } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from "react-router-dom";

export const Header = () => {
    const [isAuth, setIsAuth] = React.useState(false)
    let { pathname } = useLocation();
    const navigate = useNavigate();

    React.useEffect(() => {
        if (window.localStorage.getItem('token')) {
            setIsAuth(true)
        } 
    }, [pathname]);

    const handleClickAuth = () => {
        if (isAuth && window.confirm('Вы действительно хотите выйти?')) {
            window.localStorage.removeItem('token');
            navigate('/')
            setIsAuth(false)
        } else {
            navigate('/login')
        }
    }

    return (
        <div className='header'>
            <Link to='/'><h2>React Blog</h2></Link>
            <Nav variant="pills" defaultActiveKey="/home">
            <Nav.Item>
                <Nav.Link to="/" as={Link} active={pathname === '/'}>Главная</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link to='/about' as={Link} active={pathname === '/about'}>Обо мне</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Button onClick={handleClickAuth} variant={isAuth ? 'danger' : 'dark'}>
                    {isAuth ? 'Выйти' : 'Войти'}
                </Button>
            </Nav.Item>
            </Nav>
        </div>
    )
}