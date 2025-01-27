import React from "react";
import { Button, Card, Row, Col } from "react-bootstrap";

const Carrito = ({ carrito, setCarrito  }) => {
  const total = carrito.reduce((acc, producto) => acc + parseFloat(producto.precio), 0);

  const eliminarDelCarrito = (id) => {
    const carritoActualizado = carrito.filter((producto) => producto.id !== id);
    setCarrito(carritoActualizado); 
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
                    <Card.Img variant="top" src={producto.imagen} className="img-fluid rounded-start" />
                  </Col>
                  <Col md={9}>
                    <Card.Body>
                      <Card.Title>{producto.nombreJuego}</Card.Title>
                      <Card.Text>{producto.descripcion}</Card.Text>
                      <h5 className="text-success">
                        ${parseFloat(producto.precio).toLocaleString()}
                      </h5>
                      <div className="d-flex justify-content-end">
                        <Button variant="danger" className="mt-2 w-100" onClick={() => eliminarDelCarrito(producto.id)}>
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
          <p className="text-center w-100">No tienes productos en el carrito.</p>
        )}
      </Row>
      {carrito.length > 0 && (
        <div className="d-flex justify-content-between align-items-center mt-4">
          <h4>
            <strong>Total: ${total.toLocaleString()}</strong>
          </h4>
          <Button variant="primary" className="btn-lg">
            Proceder al Pago
          </Button>
        </div>
      )}
    </section>
  );
};

export default Carrito;

