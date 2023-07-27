import React from 'react';

import { Routes, Route, Link} from 'react-router-dom';

import { Home } from './pages/Home';
import { Header } from './components/Header';
import { About } from './pages/About';
import { Footer } from './components/Footer';
import { FullPost } from './pages/FullPost';


function App() {


  const postId = window.location.pathname.split('/post/')[1];


  return (
    <>
      <Header/>

      <Link to="/about">Открыть статью 2</Link>

      <Routes>
        <Route path='/' element={<Home/>} exact/>
        <Route path='/about' element={<About/>}/>
        <Route path='/login' element={<h1>Логин форма</h1>}/>
        <Route path='/post/' element={<FullPost id={postId}/>}/>
      </Routes>

      <Footer/>
    </>
  );
}

export default App;
