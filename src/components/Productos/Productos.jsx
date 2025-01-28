import { useState } from "react";
import "../../style/Productos.css";
import CardProducto from "./CardProducto";

const Productos = ({ productos }) => {
    const [Filtro, setFiltro] = useState({
      Busqueda: ''

    })

    const FiltrarProductos =(Productos)=>{
      return Productos.filter((product)=>{
        const BusquedaText = Filtro.Busqueda.toLowerCase()
        return (
          product.nombreJuego.toLowerCase().includes(BusquedaText)||
          product.categoria.toLowerCase().includes(BusquedaText)
        )
      })
    }

    const ProductosFiltrados=FiltrarProductos(productos)

  return (
    <div className="container">
      <div className="Container-TituloProducto container">
        <h3>Productos</h3>
        <input type="text" className="inputFiltro"  placeholder="Buscar" 
        onChange={(e)=> setFiltro({...Filtro,Busqueda:e.target.value})}
        />
      </div>
      <div className="mt-4 container">
        <div className="row">
          {ProductosFiltrados.map((item) => (
            <div className="col-12 col-md-4 col-lg-4" key={item.id}>
              <CardProducto productosItem={item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Productos;
