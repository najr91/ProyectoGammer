import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { borrarProductoAPI, listarProductoAPI } from "../helpers/queries";

const ItemProducto = ({ producto, setListaProductos }) => {
  const borrarProducto = async () => {
    const respuesta = await borrarProductoAPI(producto.id);
    if (respuesta.status === 200) {
      const respListaProductos = await listarProductoAPI();
      if (respListaProductos.status === 200) {
        setListaProductos(respListaProductos.datos);
        alert("El producto se eliminó con exito");
      } else {
        alert("Ocurrio un error , intente más tarde");
      }
    }
  };

  return (
    <tr>
      <td className="text-center">{producto.id}</td>
      <td>{producto.nombre}</td>
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
        <Button variant="danger" onClick={borrarProducto}>
          <i className="bi bi-trash"></i>
        </Button>
      </td>
    </tr>
  );
};

export default ItemProducto;
