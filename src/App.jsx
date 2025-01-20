import { useState } from 'react'
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Inicio from './components/pages/Inicio';
import Footer from './components/pages/common/Footer';

function App() {
  return (
    <>
      <div className='App'>
        <BrowserRouter>
         <Routes>
          <Route path='/' element={<Inicio></Inicio>}></Route>
         </Routes>
         <Footer/>
        </BrowserRouter>
      </div>
      
    </>
  )
}

export default App
