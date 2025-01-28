import React from "react";
import svg from "../../assets/404.svg";
import "../../style/error.css"
import { Link } from "react-router-dom";

const ErroR404 = () => {
  return (
   <>
   <div className="cont-404">
    <img src={svg} alt="" className="fs-white"/>
    <Link className="btn btn-primary" to={"/"} variant="primary " >Volver al inicio</Link>
   </div>
   </>
  );
};

export default ErroR404; 

