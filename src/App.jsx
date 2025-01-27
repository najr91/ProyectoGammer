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
import ProtectorRutas from "./components/Routes/ProtectorRutas";
import RutasAdministrador from "./components/Routes/RutasAdministrador";
import Carrito from "./components/pages/Carrito";

function App() {
  const usuario = JSON.parse(sessionStorage.getItem("userKey")) || "";
  const [usuarioLogeado, setusuarioLogeado] = useState(usuario);

  return (
    <>
      <div className="App">
        <BrowserRouter>
          DetalleProducto
          <Menu
            setusuarioLogeado={setusuarioLogeado}
            usuarioLogeado={usuarioLogeado}
          ></Menu>
          <Routes>
            <Route path="/" element={<Inicio></Inicio>}></Route>
            <Route
              path="/DetalleProducto/:id"
              element={<DetalleProducto></DetalleProducto>}
            ></Route>
            <Route
              path="/administrador/*"
              element={
                <ProtectorRutas>
                  <RutasAdministrador />
                </ProtectorRutas>
              }
            />
            <Route path={"/Carrito"} element={<Carrito></Carrito>}></Route>
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
