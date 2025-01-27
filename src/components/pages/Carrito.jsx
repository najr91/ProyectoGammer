import React, { useState } from "react";
import { Button, Card, Row, Col, Modal, Form } from "react-bootstrap";
import Swal from "sweetalert2";

const Carrito = ({ carrito, setCarrito }) => {
  const [showModal, setShowModal] = useState(false);
  const [nombre, setNombre] = useState("");
  const [direccion, setDireccion] = useState("");
  const [tarjeta, setTarjeta] = useState("");

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

  const handleSubmit = (e) => {
    e.preventDefault();
    Swal.fire({
      title: "Compra realizada con éxito!",
      icon: "success",
      draggable: false,
    });
    
    handleCloseModal(); 
  };

  return (
    <section className="container mt-5">
      <h3 className="text-center mb-4">Tu Carrito de Compras</h3>

      <Row className="g-3">
        {carrito.length > 0 ? (
          carrito.map((producto, index) => (
            <Col md={12} key={index} className="mb-4">
              <Card className="shadow-sm border-light rounded">
                <Row>
                  <Col md={3}>
                    <Card.Img
                      variant="top"
                      src={producto.imagen}
                      className="img-fluid rounded-start"
                    />
                  </Col>
                  <Col md={9}>
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
                  </Col>
                </Row>
              </Card>
            </Col>
          ))
        ) : (
          <p className="text-center w-100">
            No tienes productos en el carrito.
          </p>
        )}
      </Row>

      {carrito.length > 0 && (
        <div className="d-flex justify-content-between align-items-center mt-4">
          <h4>
            <strong>Total: ${total.toLocaleString()}</strong>
          </h4>
          <Button variant="primary" className="btn-lg" onClick={handleShowModal}>
            Proceder al Pago
          </Button>
        </div>
      )}

      {/* Modal */}
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Formulario de Compra</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formNombre">
              <Form.Label>Nombre Completo</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingresa tu nombre"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formDireccion">
              <Form.Label>Dirección de Envío</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingresa tu dirección"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formTarjeta">
              <Form.Label>Número de Tarjeta</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingresa el número de tu tarjeta"
                required
              />
            </Form.Group>

            <div className="d-flex mx-auto">
            <Form.Group className="mb-3" controlId="CodigoSeguridad">
              <Form.Label>Codigo de seguridad</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingresa el número de tu tarjeta"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="FechaExpiracion">
              <Form.Label>Fecha de Expiracion</Form.Label>
              <Form.Control
                type="date"
                placeholder="Ingresa el número de tu tarjeta"
                required
              />
            </Form.Group>
            </div>

            <div className="d-flex justify-content-end">
              <Button variant="secondary" onClick={handleCloseModal} className="me-2">
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

