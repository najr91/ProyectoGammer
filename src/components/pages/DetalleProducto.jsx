import React, { useEffect, useState } from "react";
import "../../style/detalleProducto.css";
import { obtenerJuegos } from "../helpers/queriesProductos";
import { useParams } from "react-router-dom";
import { Fire } from "react-bootstrap-icons";

const DetalleProducto = ({ agregarAlCarrito }) => {  
  const [Estrellas, setEstrellas] = useState(0);
  const [Comentario, setComentario] = useState("");
  const [ComentariosList, setComentariosList] = useState([
    {
      user: "Juan Perez",
      text: "¡Me encantó el juego! La historia es increíble.",
      Estrellas: 5,
    },
    {
      user: "Maria Gómez",
      text: "Buen juego, pero algunas secciones son un poco repetitivas.",
      Estrellas: 4,
    },
    {
      user: "José Martinéz",
      text: "No me gusto, le falta mas opciones para modificar los personajes.",
      Estrellas: 2,
    },
  ]);
  const [hoveredEstrella, setHoveredEstrella] = useState(0);
  const [juegos, setJuegos] = useState({});
  const { id } = useParams();

  const handleComentarioChange = (event) => {
    setComentario(event.target.value);
  };

  const handleComentarioSubmit = (event) => {
    event.preventDefault();
    if (Comentario.trim()) {
      setComentariosList([
        ...ComentariosList,
        {
          user: "Nuevo Usuario",
          text: Comentario,
          Estrellas: Estrellas,
        },
      ]);
      setComentario("");
      setEstrellas(0);
    }
  };

  const handleEstrellasChange = (newEstrellas) => {
    setEstrellas(newEstrellas);
  };

  const handleMouseEnter = (star) => {
    setHoveredEstrella(star);
  };

  const handleMouseLeave = () => {
    setHoveredEstrella(0);
  };


  const obtenerJuego = async () => {
    const respuesta = await obtenerJuegos(id);
    if (respuesta.status === 200) {
      const datos = await respuesta.json();
      setJuegos(datos);
    } else {
      alert("Ocurrio un error intente mas tarde");
    }
  };

  useEffect(() => {
    obtenerJuego();
  }, []);  
 
  const agregarAlCarritoHandler = () => {
    const producto = {
      id: juegos.id,
      nombreJuego: juegos.nombreJuego,
      precio: juegos.precio,
      imagen: juegos.imagen,
    };
    console.log(producto)
    agregarAlCarrito(producto); 
  };

  return (
    <section className="container mt-5">
      <article className="row justify-content-center mt-5">
        <div className="col-12 col-md-8">
          <div className="card shadow-sm rounded">
            <div className="row g-0">
              <div className="col-md-5">
                <img
                  src={juegos.imagen}
                  alt="Juego Horizond"
                  className="img-fluid rounded-start "
                />
              </div>
              <div className="col-md-7">
                <div className="card-body">
                  <p className="card-text text-muted">Código: #{juegos.id}</p>
                  <h4 className="card-title">{juegos.nombreJuego}</h4>
                  <p className="card-text text-muted">
                    Juego para <b>{juegos.TipoConsola}</b>
                  </p>
                  <p className="card-description">
                    {juegos.descripcion_amplia}
                  </p>
                  <p className="card-description">
                    <b>Desarrollador: </b>{juegos.desarrollador}
                  </p>
                  <div className="mb-3">
                    <b>Género:</b> {juegos.categoria}
                  </div>
                  <div className="mb-3">
                    {juegos.JuegoSemanal === "Si" && (
                      <>
                        <b>
                          Juego semanal
                          <Fire className="ms-1 text-danger" />
                        </b>
                      </>
                    )}
                  </div>
                  <div className="d-flex justify-content-between align-items-center">
                    <b className="text-success">Disponible</b>
                    <button
                      onClick={agregarAlCarritoHandler}
                      className="btn btn-outline-dark"
                    >
                      Añadir al carrito
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="card-footer p-2">
              <h5 className="Calificacion-titulo">Calificación</h5>
              <div className="Calificacion">
                {[1, 2, 3, 4, 5].map((star) => (
                  <b
                    key={star}
                    className={`Estrella ${
                      Estrellas >= star || hoveredEstrella >= star
                        ? "filled"
                        : ""
                    } fs-3 `}
                    onClick={() => handleEstrellasChange(star)}
                    onMouseEnter={() => handleMouseEnter(star)}
                    onMouseLeave={handleMouseLeave}
                  >
                    &#9733;
                  </b>
                ))}
              </div>
            </div>

            <div className="card-body">
              <h5>Comentarios</h5>
              <form onSubmit={handleComentarioSubmit}>
                <div className="mb-3">
                  <textarea
                    className="form-control rezine"
                    rows="3"
                    placeholder="Deja tu comentario"
                    value={Comentario}
                    onChange={handleComentarioChange}
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  Enviar Comentario
                </button>
              </form>

              <div className="Comentarios-list mt-4">
                {ComentariosList.map((c, index) => (
                  <div key={index} className="Comentario">
                    <b>{c.user}</b> -{" "}
                    <b className="text-muted">{c.Estrellas} Estrellas</b>
                    <p>{c.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
};

export default DetalleProducto;

