import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./components/pages/Inicio";
import Administrador from "./components/pages/Administrador";
import ErroR404 from "./components/pages/ErroR404";
import FormularioProducto from "./components/Productos/FormularioProducto";

function App() {
  return (
    <>
      <div className="App">
        <BrowserRouter //aqui falta el navbar >
        >
          <Routes>
            <Route path="/" element={<Inicio></Inicio>}></Route>
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
          {/* Footer en todas las páginas */}
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
