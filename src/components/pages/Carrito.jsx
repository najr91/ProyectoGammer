import React from "react";
import { Button, Card, Row, Col } from "react-bootstrap";

const Carrito = ({ carrito }) => {
  
  const total = carrito.reduce((acc, producto) => acc + parseFloat(producto.precio), 0);

  return (
    <section className="container mt-5">
      <h3 className="text-center mb-4">Tu Carrito de Compras</h3>
      <Row>
        {carrito.length > 0 ? (
          carrito.map((producto, index) => (
            <Col md={4} key={index} className="mb-4">
              <Card className="h-100 shadow-sm">
                <Card.Img variant="top" src={producto.imagen} />
                <Card.Body>
                  <Card.Title>{producto.nombreJuego}</Card.Title>
                  <Card.Text>{producto.descripcion}</Card.Text>
                  <h5 className="text-success">
                    ${parseFloat(producto.precio).toLocaleString()} 
                  </h5>
                  <Button variant="danger" className="w-100">
                    Eliminar del carrito
                  </Button>
                </Card.Body>
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
            Total: ${total.toLocaleString()} 
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


