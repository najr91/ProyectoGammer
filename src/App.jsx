import { useState } from 'react'
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Inicio from './components/pages/Inicio';

function App() {
  return (
    <>
      <div className='App'>
        <BrowserRouter>
         <Routes>
          <Route path='/' element={<Inicio></Inicio>}></Route>
         </Routes>
        </BrowserRouter>
      </div>
      
    </>
  )
}

export default App
