import React, { useState } from "react";
import { Button, Card, Row, Col, Modal, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import "../../style/Carrito.css";
import Table from "react-bootstrap/Table";

const Carrito = ({ carrito, setCarrito }) => {
  const [showModal, setShowModal] = useState(false);
  const comprobanteLocalStorage = JSON.parse(localStorage.getItem('comprobante')) || []
  const [comprobante, setComprobante] = useState(comprobanteLocalStorage);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const total = carrito.reduce(
    (acc, producto) => acc + parseFloat(producto.precio),
    0
  );

  const eliminarDelCarrito = (id) => {
    const carritoActualizado = carrito.filter((producto) => producto.id !== id);
    Swal.fire({
      title: "El producto ha sido eliminado del carrito!",
      icon: "success",
      draggable: false,
    });
    setCarrito(carritoActualizado);
  };

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  const onSubmit = (data) => {
    Swal.fire({
      title: "Compra realizada con éxito!",
      icon: "success",
      draggable: false,
    });

   const nuevoComprobante =[...comprobante,data]
   setComprobante(nuevoComprobante)
   localStorage.setItem('comprobante', JSON.stringify(nuevoComprobante));
    handleCloseModal();
  };

  return (
    <section className="container mt-5 py-5">
      <h3 className="text-center mb-4">Tu Carrito de Compras</h3>
      <div className="row">
          {carrito.length > 0 ? (
            carrito.map((producto, index) => (
              <div className="col-12 col-md-6 col-lg-4 my-4" key={index}>
                <Card className="shadow-sm  bg-dark text-light">
                  <div>
                    <div className="card-head">
                      <Card.Img
                        variant="top"
                        src={producto.imagen}
                        className="img-fluid rounded-start"
                      />
                    </div>
                    <Card.Body>
                      <Card.Title>{producto.nombreJuego}</Card.Title>
                      <Card.Text>{producto.descripcion}</Card.Text>
                      <h5 className="text-success">
                        ${parseFloat(producto.precio).toLocaleString()}
                      </h5>
                      <div className="d-flex justify-content-end">
                        <Button
                          variant="danger"
                          className="mt-2 w-100"
                          onClick={() => eliminarDelCarrito(producto.id)}
                        >
                          Eliminar del carrito
                        </Button>
                      </div>
                    </Card.Body>
                  </div>
                </Card>
              </div>
            ))
          ) : (
            <p className="text-center w-100">
              No tienes productos en el carrito.
            </p>
          )}
        </div>

      {carrito.length > 0 && (
        <div className="d-flex justify-content-between align-items-center mt-4">
          <h4>
            <strong>Total: ${total.toLocaleString()}</strong>
          </h4>
          <Button
            variant="primary"
            className="btn-lg"
            onClick={handleShowModal}
          >
            Proceder al Pago
          </Button>
        </div>
      )}
      <div className="container-Comprobante">
        {
          comprobante.length > 0 ? (
            <Table striped bordered hover responsive variant="dark">
            <thead>
              <tr>
                <th>#</th>
                <th>Nombre</th>
                <th>Direccion</th>
                <th>Fecha de vencimiento</th>
              </tr>
            </thead>
            <tbody>
              {comprobante.map((item) => (
                <tr>
                  <td>1</td>
                  <td>{item.nombre}</td>
                  <td>{item.direccion}</td>
                  <td>{item.fechaVencimiento}</td>
                </tr>
              ))}
            </tbody>
          </Table>
          ):(
           <p>No hay comprobante</p>
          )
        }
       
      </div>
      {/* Modal */}
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Formulario de Compra</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group className="mb-3" controlId="formNombre">
              <Form.Label>Nombre Completo</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingresa tu nombre"
                {...register("nombre", {
                  required: "El nombre es un dato obligatorio",
                  minLength: {
                    value: 2,
                    message: "Debe ingresar como mínimo 2 caracteres",
                  },
                  maxLength: {
                    value: 50,
                    message: "Debe ingresar como máximo 50 caracteres",
                  },
                })}
              />
              <Form.Text className="text-danger">
                {errors.nombre?.message}
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formDireccion">
              <Form.Label>Dirección de Envío</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingresa tu dirección"
                {...register("direccion", {
                  required: "El nombre de la dirección es un dato obligatorio",
                  minLength: {
                    value: 5,
                    message: "Debe ingresar como mínimo 5 caracteres",
                  },
                  maxLength: {
                    value: 40,
                    message: "Debe ingresar como máximo 40 caracteres",
                  },
                })}
              />
              <Form.Text className="text-danger">
                {errors.direccion?.message}
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formTarjeta">
              <Form.Label>Número de Tarjeta</Form.Label>
              <Form.Control
                type="number"
                placeholder="Ingresa el número de tu tarjeta"
                {...register("numero", {
                  required: "El número de la tarjeta es un dato obligatorio",
                  minLength: {
                    value: 13,
                    message: "Debe ingresar como mínimo 13 caracteres",
                  },
                  maxLength: {
                    value: 19,
                    message: "Debe ingresar como máximo 19 caracteres",
                  },
                })}
              />
              <Form.Text className="text-danger">
                {errors.numero?.message}
              </Form.Text>
            </Form.Group>

            <Form.Group
              className="mb-5 d-flex align-items-center"
              controlId="CodigoSeguridad"
            >
              <Form.Label className="mb-0 me-3">Código de seguridad</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingresa el código de seguridad"
                {...register("cvv", {
                  required: "El código de seguridad es obligatorio",
                  minLength: {
                    value: 3,
                    message: "Debe ingresar como mínimo 3 caracteres",
                  },
                  maxLength: {
                    value: 3,
                    message: "Debe ingresar como máximo 3 caracteres",
                  },
                })}
              />
              <Form.Text className="text-danger">
                {errors.cvv?.message}
              </Form.Text>
            </Form.Group>

            <Form.Group
              className="mb-4 d-flex align-items-center"
              controlId="FechaExpiracion"
            >
              <Form.Label className="mb-0 me-3">Fecha de Expiración</Form.Label>
              <Form.Control
                type="date"
                {...register("fechaVencimiento", {
                  required: "La fecha de vencimiento es obligatoria",
                  validate: {
                    notInPast: (value) =>
                      new Date(value) > new Date() ||
                      "La fecha de vencimiento no puede ser en el pasado",
                  },
                })}
              />
              <Form.Text className="text-danger">
                {errors.fechaVencimiento?.message}
              </Form.Text>
            </Form.Group>

            <div className="d-flex justify-content-end">
              <Button
                variant="secondary"
                onClick={handleCloseModal}
                className="me-2"
              >
                Cancelar
              </Button>
              <Button variant="primary" type="submit">
                Confirmar Compra
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </section>
  );
};

export default Carrito;
