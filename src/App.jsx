import { useState } from 'react'
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Inicio from './components/pages/Inicio';
import Menu from "./components/common/Menu"
import Footer from "./components/common/Footer"
import DetalleProducto from "./components/pages/DetalleProducto"

function App() {
  return (
    <>
      <div className='App'>
        <BrowserRouter>
        <Menu></Menu>
         <Routes>
          <Route path='/' element={<Inicio></Inicio>}></Route>
          <Route path='/DetalleProducto' element={<DetalleProducto></DetalleProducto>}></Route>
         </Routes>
         <Footer/>
        </BrowserRouter>
        
      </div>
      
    </>
  )
}

export default App
