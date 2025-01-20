import { useState } from 'react'
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Inicio from './components/pages/Inicio';
import Menu from './components/common/Menu';

function App() {
  return (
    <>
      <div className='App'>
        <BrowserRouter>
        <Menu></Menu>
         <Routes>
          <Route path='/' element={<Inicio></Inicio>}></Route>
         </Routes>
        </BrowserRouter>
        
      </div>
      
    </>
  )
}

export default App
