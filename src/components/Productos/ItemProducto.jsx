import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const ItemProducto = ({ producto }) => {
  return (
    <tr>
      <td className="text-center">{producto.id}</td>
      <td>{producto.nombreProducto}</td>
      <td className="text-end">{producto.precio}</td>
      <td className="text-center">
        <img
          src={producto.imagen}
          className="img-thumbnail"
          alt={producto.nombreProducto}
          style={{ maxWidth: "100px" }}
        />
      </td>
      <td>{producto.categoria}</td>
      <td>{producto.desarrollador}</td>
      <td className="text-center">
        <Link
          className="btn btn-warning me-lg-2"
          to={`/administrador/editar/${producto.id}`}
        >
          <i className="bi bi-pencil-square"></i>
        </Link>
        <Button variant="danger" onClick={borrarProducto}>
          <i className="bi bi-trash"></i>
        </Button>
      </td>
    </tr>
  );
};

export default ItemProducto;
