import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router';

export const Login = () => {
  const navigate = useNavigate();
  const [fields, setFields] = React.useState({
    email: 'test@test.ru',
    password: '123456'
  });

  const onSubmit = async (event) => {
    event.preventDefault();

    const resp = await fetch(`https://mentor.archakov.im/api/mock/login?email=${fields.email}&password=${fields.password}`);

    if(resp.ok) {
      const { token } = await resp.json();
      
      window.localStorage.setItem('token', token)

      navigate('/profile');
    } else {
      alert('Ошибка! Неверная почта или пароль')
    }
  }

  const handleChangeInput = (e) => {
    setFields({
      ...fields,
      [e.target.name]: e.target.value
    })
  }

    return (
        <Form onSubmit={onSubmit} className='login-form'>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control name='email' onChange={handleChangeInput} type="email" value={fields.email}/>
          </Form.Group>
    
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Пароль</Form.Label>
            <Form.Control name='password' onChange={handleChangeInput} type="password" value={fields.password}/>
          </Form.Group>
          <Button variant="primary" type="submit">
            Войти
          </Button>
        </Form>
      );
}