import "../../style/Productos.css";
import CardProducto from "./CardProducto";

const Productos = ({productos}) => {
  return (
    <div className="container">
      <div className="Container-TituloProducto container">
        <h3>Productos</h3>
        <button>Ver màs</button>
      </div>
      <div className="mt-4 container">
        <div className="row">
          {
            productos.map((item)=>(
              <div className="col-12 col-md-4 col-lg-4">
              <CardProducto productosItem ={item}></CardProducto>
            </div>
            ))
          }  
        </div>
      </div>
    </div>
  );
};

export default Productos;
