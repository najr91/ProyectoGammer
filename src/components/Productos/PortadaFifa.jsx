import "../../style/PortadaFifa.css";

const PortadaFifa = () => {
  return (
    <div className="mt-5 container ConteinerBanner">
      <div className="row">
        <div className="col-12 col-md-6 d-flex align-items-center justify-content-center">
          <div className="textoColumna">
            <h1 className="TituloBanner">Explora el Mundo del Fútbol</h1>
            <p className="TextoBanner">
              Bienvenido a un universo donde el fútbol lo es todo. Vive la pasión y emoción de cada partido.
            </p>
          </div>
        </div>

        <div className="col-12 col-md-6">
          <img
            src="https://static.ua-football.com/img/upload/22/2bc371.jpeg"
            alt="Fútbol"
            className="img-fluid ImagenBanner"
          />
        </div>
      </div>
    </div>
  );
};

export default PortadaFifa;
