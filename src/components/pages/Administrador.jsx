import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import ItemProducto from "../Productos/ItemProducto";
import "../../style/Administrador.css";

const Administrador = () => {
  const [listaProductos, setListaProductos] = useState([]);

  useEffect(() => {
    const cargarProductos = async () => {
      try {
        const respuesta = await fetch("http://localhost:3004/productos");
        const productos = await respuesta.json();
        setListaProductos(productos);
      } catch (error) {
        console.log("Error al cargar los productos:", error);
      }
    };

    cargarProductos();
  }, []);

  return (
    <section className="container mainSection">
      <div className="d-flex justify-content-between align-items-center mt-5">
        <h1 className="display-4">Juegos Disponibles</h1>
        <Link className="btn btn-primary" to="/administrador/crear">
          <i className="bi bi-file-earmark-plus"></i>
        </Link>
      </div>
      <hr />
      <Table responsive striped bordered hover>
        <thead>
          <tr className="text-center">
            <th>ID</th>
            <th>Producto</th>
            <th>Precio</th>
            <th>Imagen</th>
            <th>Descripcion</th>
            <th>Categoría</th>
            <th>Requisitos</th>
            <th>Reseñas</th>
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
