import React from "react";

const Carrito = ({ carrito }) => {
  console.log(carrito); 

  return (
    <section className="container mt-5">
      <h3>Tu Carrito de Compras</h3>
      <div className="row">
  {carrito.length > 0 ? (  
    carrito.map((producto, index) => (
      <div key={index} className="col-md-4 mb-3">
        <div className="card">
          <img
            src={producto.imagen}
            alt={producto.nombreJuego}
            className="card-img-top"
          />
          <div className="card-body">
            <h5 className="card-title">{producto.nombreJuego}</h5>
            <p className="card-text">${producto.precio}</p>
          </div>
        </div>
      </div>
    ))
  ) : (
    <p>No tienes productos en el carrito.</p>
  )}
</div>

    </section>
  );
};

export default Carrito;

