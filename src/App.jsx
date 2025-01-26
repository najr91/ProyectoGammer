import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./components/pages/Inicio";
import Menu from "./components/common/Menu";
import Footer from "./components/common/Footer";
import DetalleProducto from "./components/pages/DetalleProducto";
import Administrador from "./components/pages/Administrador";
import ErroR404 from "./components/pages/ErroR404";
import FormularioProducto from "./components/Productos/FormularioProducto";
import Login from "./components/pages/Login";
import { useState } from "react";

function App() {
  const usuario = JSON.parse(sessionStorage.getItem("userKey")) || "";
  const [usuarioLogeado, setusuarioLogeado] = useState(usuario);

  return (
    <>
      <div className="App">
        <BrowserRouter>
          DetalleProducto
          <Menu setusuarioLogeado={setusuarioLogeado} usuarioLogeado={usuarioLogeado}></Menu>
          <Routes>
            <Route path="/" element={<Inicio></Inicio>}></Route>
            <Route
              path="/DetalleProducto/:id"
              element={<DetalleProducto></DetalleProducto>}
            ></Route>
            <Route
              path="/DetalleProducto"
              element={<DetalleProducto></DetalleProducto>}
            ></Route>
            <Route
              path="/administrador"
              element={<Administrador></Administrador>}
            ></Route>
            <Route
              path="/administrador/crear"
              element={<FormularioProducto crearProducto={true} />}
            ></Route>
            <Route
              path="/administrador/editar/:id"
              element={<FormularioProducto crearProducto={false} />}
            ></Route>
            <Route path="*" element={<ErroR404 />}></Route>
            <Route
              path="/login"
              element={<Login setusuarioLogeado={setusuarioLogeado}></Login>}
            ></Route>
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
