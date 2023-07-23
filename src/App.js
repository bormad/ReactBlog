import React from 'react';


import { Home } from './pages/Home';
import { Header } from './components/Header';
import { About } from './pages/About';
import { Footer } from './components/Footer';
import { FullPost } from './pages/FullPost';


function App() {

  const { pathname } = window.location;
  const postId = pathname.split('/post/')[1];


  return (
    <>
      <Header/>
      {pathname === '/' ? <Home/> : null}
      {pathname === '/about' ? <About/> : null}
      {pathname === '/login' ? <h2>Страница входа</h2> : null}
      {postId && <FullPost id={postId}/>}
      <Footer/>
    </>
  );
}

export default App;
