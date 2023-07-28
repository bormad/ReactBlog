import React from 'react';

import { Routes, Route } from 'react-router-dom';

import { Home } from './pages/Home';
import { Header } from './components/Header';
import { About } from './pages/About';
import { Footer } from './components/Footer';
import { FullPost } from './pages/FullPost';


function App() {
  return (
    <>
      <Header/>

      <Routes>
        <Route path='/' element={<Home/>} exact/>
        <Route path='/about' element={<About/>}/>
        <Route path='/login' element={<h1>Логин форма</h1>}/>
        <Route path='/post/:id' element={<FullPost/>}/>
      </Routes>

      <Footer/>
    </>
  );
}

export default App;
