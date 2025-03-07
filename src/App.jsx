import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css"; 

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./components/pages/Inicio";
import Menu from "./components/common/Menu";
import Footer from "./components/common/Footer";
import DetalleProducto from "./components/pages/DetalleProducto";
import ErroR404 from "./components/pages/ErroR404";
import Login from "./components/pages/Login";
import { useEffect, useState } from "react";
import ProtectorRutas from "./components/Routes/ProtectorRutas";
import RutasAdministrador from "./components/Routes/RutasAdministrador"
import SobreNosotros from "./components/pages/SobreNosotros";
import Carrito from "./components/pages/Carrito";
import "bootstrap-icons/font/bootstrap-icons.css";



function App() {
  const usuario = JSON.parse(sessionStorage.getItem("userKey")) || "";
  const [usuarioLogeado, setusuarioLogeado] = useState(usuario);

  const [carrito, setCarrito] = useState([]);

  const agregarAlCarrito = (producto) => {
    setCarrito((prevCarrito) => [...prevCarrito, producto]);
  };  

  useEffect(() => {
    const carritoGuardado = JSON.parse(localStorage.getItem("carrito")) || [];
    if (carritoGuardado.length > 0) {
      setCarrito(carritoGuardado);
    }
  }, []);
  
   useEffect(() => {
    localStorage.setItem("carrito", JSON.stringify(carrito));
  }, [carrito]); 
  
  

  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Menu
            setusuarioLogeado={setusuarioLogeado}
            usuarioLogeado={usuarioLogeado}
          ></Menu>
          <Routes>
            <Route path="/" element={<Inicio></Inicio>}></Route>
            <Route
              path="/DetalleProducto/:id"
              element={
                <DetalleProducto
                  agregarAlCarrito={agregarAlCarrito}
                  carrito={carrito}
                ></DetalleProducto>
              }
            ></Route>
            <Route

              path="/administrador/*"
              element={
                <ProtectorRutas>
                  <RutasAdministrador />
                </ProtectorRutas>
              }
            />
            <Route path="/Carrito" element={<Carrito carrito={carrito} setCarrito={setCarrito } />} />
            <Route path="*" element={<ErroR404 />}></Route>
            <Route path="/Nosotros" element={<SobreNosotros />}></Route>
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
