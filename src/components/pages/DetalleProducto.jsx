import React from "react";
import "../../style/detalleProducto.css";

const DetalleProducto = () => {
  return (
    <section className="container mt-5">
  <article className="row justify-content-center">
    <div className="col-12 col-md-8">
      <div className="card shadow-sm rounded">
        <div className="row g-0">
          <div className="col-md-5">
            <img
              src="https://assetsio.gnwcdn.com/final-fantasy-14-online-dawntrail.jpg?width=1200&height=1200&fit=bounds&quality=70&format=jpg&auto=webp"
              alt="Juego Horizond"
              className="img-fluid rounded-start"
            />
          </div>

          <div className="col-md-7">
            <div className="card-body">
              <p className="card-text text-muted">Código: #123</p>
              <h4 className="card-title">Horizond</h4>
              <p className="card-text text-muted">Juego para PS5</p>
              <p className="card-description">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum sequi hic commodi accusamus
                blanditiis facere. Temporibus repellendus aliquid totam eligendi minima cupiditate dolores, dicta
                iure fugit magni rem voluptatum atque.
              </p>

              <div className="mb-3">
                <strong>Género:</strong> Acción y Aventura
              </div>

              <div className="d-flex justify-content-between align-items-center">
                <b className="text-success">Disponible</b>
                <button className="btn btn-outline-dark">Añadir al carrito</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </article>
</section>

  );
};

export default DetalleProducto;
