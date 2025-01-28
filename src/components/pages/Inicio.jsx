import { useEffect, useState } from "react";
import "../../style/Inicio.css";
import Productos from "../Productos/Productos";
import SliderPortada from "../Slider/SliderPortada";
import { getProductos } from "../helpers/queriesProductos";
import PortadaFifa from "../Productos/PortadaFifa";
import { Link } from "react-router-dom";

const Inicio = () => { 
  // creamos un estado para guardar los productos
  const [productos, setProductos] = useState([])

  useEffect(() => {
    getProductos().then((respuesta) => {
      // actualizamos el estado como producto
      setProductos(respuesta);
    });
  }, []);

  return (
    <div className="mainSeccion">
      <section>
        <article>
          <div className="PortadaInicio">
            <div className="ContainerInicio container">
              <div>
              <h1 className="display-2">La plataforma de juegos definitiva</h1>
              <p>
              Descubre los mejores videojuegos, disfruta aventuras épicas, desafíos emocionantes y momentos inolvidables que harán vibrar tu mundo gamer.
              </p>
              <div className="pt-4">
              <a href="/" className="button-portada text-decoration-none text-black" >Learn More</a>
              </div>
              
              </div>
            </div>
          </div>
        </article>
        <article>
            <SliderPortada productos={productos}></SliderPortada>
        </article>
        <article className="my-5">
          <Productos productos={productos}></Productos>
        </article>
        <article>
          <PortadaFifa></PortadaFifa>
        </article>
      </section>
    </div>
  );
};

export default Inicio;
