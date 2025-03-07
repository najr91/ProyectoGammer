import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import ItemProducto from "../Productos/ItemProducto";
import "../../style/Administrador.css";
import { listarProductoAPI } from "../helpers/queries";

const Administrador = () => {
  const [listaProductos, setListaProductos] = useState([]);

  useEffect(() => {
    consultarAPI();
  }, []);

  const consultarAPI = async () => {
    const respuesta = await listarProductoAPI();
    if (respuesta.status === 200) {
      setListaProductos(respuesta.datos);
    } else {
      alert(`Error al cargar los productos: ${respuesta.error}`);
    }
  };

  return (
    <section className="container mainSection mt-5">
      <div className="d-flex justify-content-between align-items-center mt-5">
        <h1 className="display-4  my-5 text-white ">Juegos Disponibles</h1>
        <Link className="btn btn-primary" to="/administrador/crear">
        Añadir
</Link>

      </div>
      <hr />
      <Table responsive striped bordered hover>
        <thead>
          <tr className="text-center">
            <th>Nombre</th>
            <th>Precio</th>
            <th>Imagen</th>
            <th>Categoría</th>
            <th>Desarrollador</th>
            <th>Editar | Borrar</th>
          </tr>
        </thead>
        <tbody>
          {listaProductos.map((producto) => (
            <ItemProducto
              key={producto.id}
              producto={producto}
              setListaProductos={setListaProductos}
            />
          ))}
        </tbody>
      </Table>
    </section>
  );
};

export default Administrador;
