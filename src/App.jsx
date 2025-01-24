import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Inicio from './components/pages/Inicio';
import Menu from "./components/common/Menu"
import Footer from "./components/common/Footer"
import DetalleProducto from "./components/pages/DetalleProducto"
import Administrador from "./components/pages/Administrador";
import ErroR404 from "./components/pages/ErroR404";
import FormularioProducto from "./components/Productos/FormularioProducto";


function App() {
  return (
    <>
      <div className='App'>
        <BrowserRouter>
        <Menu></Menu>
         <Routes>
          <Route path='/' element={<Inicio></Inicio>}></Route>
          <Route path='/DetalleProducto' element={<DetalleProducto></DetalleProducto>}></Route>
          <Route
              path="/administrador"
              element={<Administrador></Administrador>}
            ></Route>
            <Route
              path="/administrador/crear"
              element={<FormularioProducto />}
            ></Route>
            <Route path="*" element={<ErroR404 />}></Route>
         </Routes>
         <Footer/>
         </BrowserRouter>
      </div>
    </>
  );
}

export default App;
