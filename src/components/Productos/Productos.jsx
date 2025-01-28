import { useState } from "react";
import "../../style/Productos.css";
import CardProducto from "./CardProducto";

const Productos = ({ productos }) => {
  //creamos un estado para el filtro
  const [Filtro, setFiltro] = useState({
    Busqueda: "",
  });

  //creamos funcion para realizar el filtro , filtrar los productos
  const FiltrarProductos = (Productos) => {
    //filtramos el array de productos
    return Productos.filter((product) => {
      //pasamos a minuscula el valor del estado
      const BusquedaText = Filtro.Busqueda.toLowerCase();
      return (
        //filtramos los productos que coincidan con la busqueda
        product.nombreJuego.toLowerCase().includes(BusquedaText) ||
        //filtramos resultados que coincidan con la categoria
        product.categoria.toLowerCase().includes(BusquedaText)
      );
    });
  };
  //guardamos resultado del filtro en una variable
  const ProductosFiltrados = FiltrarProductos(productos);

  return (
    <div className="container">
      <div className="Container-TituloProducto container">
        <h3>Productos</h3>
        <input
          type="text"
          className="inputFiltro"
          placeholder="Buscar"
          onChange={(e) => setFiltro({ ...Filtro, Busqueda: e.target.value })}
        />
      </div>
      <div className="mt-4 container">
        <div className="row">
          {ProductosFiltrados.length > 0 ? (
            ProductosFiltrados.map((item) => (
              //mapeamos el array de productos
              // mostramos los juegos en forma de card
              <div className="col-12 col-md-4 col-lg-4" key={item.id}>
                <CardProducto productosItem={item} />
              </div>
            ))
          ) : (
            <div className="text-center text-white fs-2">
              <p>No se encontraron resultados.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Productos;
