import React from "react";
import svg from "../../assets/404.svg";
import "../../style/error.css"
import { Link } from "react-router-dom";

const ErroR404 = () => {
  return (
    <div className="page-wrapper">
      <div className="cont-404 mt-5">
        <img src={svg} alt="Imagen error404" className="fs-white"/>
        <Link className="btn btn-primary" to={"/"} variant="primary">Volver al inicio</Link>
      </div>
    </div>
  );
};

export default ErroR404;


