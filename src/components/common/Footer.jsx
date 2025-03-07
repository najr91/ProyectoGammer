import "../../style/Footer.css";
import "../../style/Logo.css";
import "../../style/Style.css";
import GameOn from "../../img/GameOn.png";
import { Clock, Facebook, Instagram, Whatsapp } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer>
      <section className="bg-color5 py-4">
        <article className="container">
          <div className="row text-center align-items-center">
            <div className="col-12 col-sm-6 col-md-3 col-lg-3 mb-4">
              <a href="/" className="text-decoration-none">
                <img src={GameOn} alt="Logo GameOn" className="Logo" />
              </a>
            </div>
            <div className="col-12 col-sm-6 col-md-3 col-lg-3">
              <div className="redes-sociales">
                <h5 className=" fs-5">Redes sociales</h5>
                <ul className="list-unstyled">
                  <li className="display-inline ">
                    <a
                      href="https://www.instagram.com/?hl=es"
                      className=" link-footer text-light"
                    >
                      <Instagram></Instagram>
                    </a>
                  </li>

                  <li className="display-inline ">
                    <a
                      href="https://www.Facebook.com/?hl=es"
                      className=" link-footer text-light"
                    >
                      <Facebook></Facebook>
                    </a>
                  </li>

                  <li className="display-inline ">
                    <a
                      href="https://www.Whatsapp.com/?hl=es"
                      className=" link-footer text-light"
                    >
                      <Whatsapp></Whatsapp>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-3 col-lg-3 ">
              <div className="categoria">
                <h5 className=" fs-5">Categorías</h5>
                <ul className="list-unstyled">
                  <li>
                    <a
                      href="*"
                      className="link-footer fs-6"
                      title="PlayStation5"
                    >
                      PlayStation5
                    </a>
                  </li>
                  <li>
                    <a href="*" className="link-footer fs-6" title="Xbox">
                      Xbox
                    </a>
                  </li>
                  <li>
                    <a href="*" className="link-footer fs-6" title="Consolas">
                      Consolas
                    </a>
                  </li>
                  <li>
                    <a href="*" className="link-footer fs-6" title="Pc">
                      Pc
                    </a>
                  </li>
                  <li>
                    <a href="*" className="link-footer fs-6" title="Retros">
                      Retros
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-3 col-lg-3">
              <div className="ayuda">
                <h5 className="fs-5">Ayuda</h5>
                <ul className="list-unstyled">
                  <li>
                    <a
                      href="*"
                      className="link-footer fs-6"
                      title="Preguntas frecuentes"
                    >
                      Preguntas frecuentes
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="link-footer fs-6"
                      title="Sobre nosotros"
                    >
                      Sobre nosotros
                    </a>
                  </li>
                  <li>
                    <a href="#" className="link-footer fs-6" title="Contacto">
                      Contacto
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="link-footer fs-6"
                      title="Botón de arrepentimiento"
                    >
                      Botón de arrepentimiento
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </article>
      </section>
      <section className="bg-color4 pt-4 pb-2">
        <div className="container text-center">
          <div className="row align-items-center">
            <div className="col-12 col-sm-3 col-md-3 col-lg-3 mb-2">
              <a href="*" className=" text-decoration-none nav-link1 fs-6">
                Términos y Condiciones
              </a>
            </div>
            <div className="col-12 col-sm-3 col-md-3 col-lg-3 mb-2">
              <a href="*" className=" text-decoration-none nav-link1 fs-6">
                Configuración de cookies
              </a>
            </div>
            <div className="col-12 col-sm-3 col-md-3 col-lg-3 mb-2">
              <a href="*" className=" text-decoration-none nav-link1 fs-6">
                Politicas de privacidad
              </a>
            </div>
            <div className="col-12 col-sm-3 col-md-3 col-lg-3">
              <p className="fw-bold espacio">GameOn, 2024 &copy;</p>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
