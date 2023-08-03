import React from 'react';

import { Routes, Route } from 'react-router-dom';

import { Home } from './pages/Home';
import { About } from './pages/About';
import { FullPost } from './pages/FullPost';
import { Layout } from './components/Layout';
import { Login } from './pages/Login';
import { Profile } from './pages/Profile';


function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route path='/' element={<Home/>} exact/>
          <Route path='/about' element={<About/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/post/:id' element={<FullPost/>}/>
          <Route path='/profile' element={<Profile/>}/>
          <Route path='*' element={<h1>Ничего не найдено</h1>}/>
        </Route>
      </Routes>
    </>
  );
}

export default App;
