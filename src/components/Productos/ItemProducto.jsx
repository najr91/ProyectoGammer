import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const ItemProducto = ({ producto }) => {
  return (
    <tr>
      <td className="text-center">{producto.id}</td>
      <td>{producto.nombreJuego}</td>
      <td className="text-end">{producto.precio}</td>
      <td className="text-center">
        <img
          src={producto.imagen}
          className="img-thumbnail"
          alt={producto.nombreJuego}
          style={{ maxWidth: "100px" }}
        />
      </td>
      <td>{producto.descripcion}</td>
      <td>{producto.categoria}</td>
      <td>{producto.desarrollador}</td>
      <td>{producto.reseñas}</td>

      <td className="text-center">
        <Link
          className="btn btn-warning me-lg-2"
          to={`/administrador/editar/${producto.id}`}
        >
          <i className="bi bi-pencil-square"></i>
        </Link>
        <Button variant="danger">
          <i className="bi bi-trash"></i>
        </Button>
      </td>
    </tr>
  );
};

export default ItemProducto;
