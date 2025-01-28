import "../../style/SobreNosotros.css";
import Matias from '../../img/matias.jpeg'
import dana from '../../img/dana.jpeg'
import nelson from '../../img/nelson.jpeg'

const SobreNosotros = () => {
  return (
    <>
      <div className="container ContainerSobreNosotros">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6 col-lg-6">
              <div className="container-tituloNosotros container pt-5">
                <h2 className="display-4 fw-bold">Sobre Nosotros</h2>
                <p>
                  "En el desarrollo web, el trabajo en equipo es clave para
                  transformar ideas en soluciones innovadoras. La colaboración y
                  la comunicación eficaz entre diseñadores, desarrolladores y
                  clientes permiten crear experiencias digitales únicas y
                  funcionales que marcan la diferencia."
                </p>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-6">
              <div className="img-portada-nosotros">
                <img
                  src="https://images.pexels.com/photos/5380596/pexels-photo-5380596.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-5">
        <div className="row">
          <div className="col-12 col-md-6 col-lg-4">
            <div className="card-nosotros">
              <img
                src={Matias}
                alt="Matias"
              />
              <div className="info-integrantes container">
                <div>
                  <h4>Matias Sanchez</h4>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <div className="card-nosotros">
              <img
                src={nelson}
                alt="Nelson"
              />
              <div className="info-integrantes container">
                <div>
                  <h4>Nelson Juarez Rivas</h4>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <div className="card-nosotros">
              <img
                src={dana}
                alt="dana"
              />
              <div className="info-integrantes container">
                <div>
                  <h4>Dana Albornoz</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-5 pt-5">
        <div className="row">
          <div className="col-12 col-md-6 col-lg-6">
            <div className="img-portada-nosotros">
              <img
                src="https://images.pexels.com/photos/7988079/pexels-photo-7988079.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
              />
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-6">
            <div className="container-tituloNosotros container pt-5">
              <h2 className="display-4 fw-bold">Trabaja con nosotros</h2>
              <p>
                "Trabajar con nosotros significa formar parte de un equipo
                apasionado por la programación web, donde la innovación, la
                colaboración y la excelencia se combinan para crear soluciones
                digitales únicas que impulsan el éxito de cada proyecto y
                cliente."
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SobreNosotros;
