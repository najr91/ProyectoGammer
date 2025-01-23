import React from "react";
import "../../style/Style.css";
import { Clock, Facebook, Instagram, Whatsapp } from "react-bootstrap-icons";

const Footer = () => {
  return (
    <section>
      <div className="app-container">
        <main className="content"></main>
        <footer className="footer ">
          <div className="row mx-3">
            <div className="col-12 col-md-3 col-lg-3 fs-4 p-2">
              <ul className="list-unstyled">
                <li>
                  <p>
                    <b>CONTACTANOS</b>
                  </p>
                </li>
                <li>
                  <p>
                    <b>
                      <a href="https://www.facebook.com " target="_blank">
                        <Facebook className="me-3  " />
                      </a>
                      <a href="https://www.instagram.com/  " target="_blank">
                        <Instagram className="me-3 " />
                      </a>
                      <a
                        href="https://www.whatsapp.com/?lang=es_LA "
                        target="_blank"
                      >
                        <Whatsapp className="" />
                      </a>
                    </b>
                  </p>
                </li>
              </ul>
            </div>

            <div className="col-12 col-md-3 col-lg-3 mx-auto p-2">
              <ul className="list-unstyled">
                <li className="fs-4">
                  <b>
                    <p>INCONVENIENTE</p>
                  </b>
                </li>
                <li className="fs-5 row">
                  <p>
                    Por cualquier problema o duda dirigase <a href="">aquí</a>.
                  </p>
                </li>
              </ul>
            </div>

            <div className="col-12 col-md-3 col-lg-3 ms-auto">
              <ul className="list-unstyled">
                <li className="fs-4">
                  <b>
                    <p>SERVICIO AL CLIENTE</p>
                  </b>
                </li>
                <li>
                  <p>
                   <Clock/>
                    SIEMPRE ABIERTO - horarios de despacho a partir de 11AM a 10PM. Los pedidos del domingo se envian el día lunes
                  </p>
                </li>
              </ul>
            </div>

            <div className="mx-auto mt-3"><p><b>©Todos los derechos reservados</b></p></div>
          </div>
        </footer>
      </div>
    </section>
  );
};

export default Footer;
