import { Button } from 'react-bootstrap';

export const FullPost = ({ id }) => {
    return (
        <div className='full-post'>
            <h1>Статья №{id}</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur quia velit sit assumenda dolorem labore minima quaerat quas tempora natus repellendus deleniti sunt odio ut explicabo, laborum doloribus debitis fugiat.</p>
            <Button>Назад</Button>
        </div>
    )
}