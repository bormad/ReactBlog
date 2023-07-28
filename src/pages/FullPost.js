import { Button } from 'react-bootstrap';
import { useParams, Link } from "react-router-dom";
import { posts } from './Home';

export const FullPost = () => {
    let { id } = useParams();

    const post = posts.find(obj => obj.id.toString() === id);

    return (
        <div className='full-post'>
            <h1>{post.title}</h1>
            <p>{post.text}</p>
            <Button to="/" as={Link}>Назад</Button>
        </div>
    )
}