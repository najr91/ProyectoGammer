import React from "react";
import "../../style/detalleProducto.css";

const DetalleProducto = () => {
  return (
    <section className="container mt-5">
      <article className="row justify-content-center">
        <div className="col-12 col-md-8">
          <div className="card card-estilizada shadow-sm rounded">
            <div className="row">
              <div className="col-md-5">
                <img
                  src="https://assetsio.gnwcdn.com/final-fantasy-14-online-dawntrail.jpg?width=1200&height=1200&fit=bounds&quality=70&format=jpg&auto=webp"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
};

export default DetalleProducto;
