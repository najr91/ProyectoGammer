import React from "react";
import "../../../style/Style.css";
import { Facebook, Instagram, Whatsapp } from "react-bootstrap-icons";

const Footer = () => {
  return (
    <section>
      <div className="app-container">
        <main className="content"></main>
        <footer className="footer">
          <div className="col-12 col-md-3 col-lg-3 fs-3 p-3 ">
            <ul className="list-unstyled">
              <li>
                <p>
                  <b>Contactanos</b>
                </p>
              </li>
              <li>
                <p>
                  <b>
                    <a href="https://www.facebook.com " target="_blank">
                      <Facebook className="me-3  text-white" />
                    </a>
                    <a href="https://www.instagram.com/  " target="_blank">
                      <Instagram className="me-3 text-white" />
                    </a>
                    <a href="https://www.whatsapp.com/?lang=es_LA " target="_blank">
                      <Whatsapp className="text-white"   />
                    </a>
                  </b>
                </p>
              </li>
            </ul>
          </div>

          <div className="col-12 col-md-3 col-lg-3"></div>

          <div className="col-12 col-md-3 col-lg-3"></div>
        </footer>
      </div>
    </section>
  );
};

export default Footer;
