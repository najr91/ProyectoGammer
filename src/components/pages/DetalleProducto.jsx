import React, { useEffect, useState } from "react";
import "../../style/detalleProducto.css";
import { obtenerJuegos } from "../helpers/queriesProductos";
import { useParams } from 'react-router-dom';


const DetalleProducto = () => {
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

  const [juegos, setJuegos] = useState({})

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

  const {id} = useParams()

  useEffect(() => {
    obtenerJuego();
  }, []);

  const obtenerJuego = async () => {
    const respuesta = await obtenerJuegos(id);
    if (respuesta.status === 200) {
      const datos = await respuesta.json();
      setJuegos(datos);
    } else {
      alert("Ocurrio un error intente mas tarde");
    }
  };

  return (
    <section className="container mt-5">
      <article className="row justify-content-center mt-5">
        <div className="col-12 col-md-8">
          <div className="card shadow-sm rounded">
            <div className="row g-0">
              <div className="col-md-5">
                <img
                  src="https://assetsio.gnwcdn.com/final-fantasy-14-online-dawntrail.jpg?width=1200&height=1200&fit=bounds&quality=70&format=jpg&auto=webp"
                  alt="Juego Horizond"
                  className="img-fluid rounded-start "
                />
              </div>
              <div className="col-md-7">
                <div className="card-body">
                  <p className="card-text text-muted">Código: #123</p>
                  <h4 className="card-title">Horizond</h4>
                  <p className="card-text text-muted">Juego para PS5</p>
                  <p className="card-description">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Rerum sequi hic commodi accusamus blanditiis facere.
                  </p>
                  <div className="mb-3">
                    <b>Género:</b> Acción y Aventura
                  </div>
                  <div className="d-flex justify-content-between align-items-center">
                    <b className="text-success">Disponible</b>
                    {/* error 404 */}
                    <button className="btn btn-outline-dark">
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
