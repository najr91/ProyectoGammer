import React from "react";
import { ListGroup, Button, Card, Row, Col } from "react-bootstrap";
import { Trash } from "react-bootstrap-icons";

const Carrito = () => {
  const products = [
    {
      id: 1,
      name: "Producto 1",
      price: 100,
      imageUrl:
        "https://cloudfront-us-east-1.images.arcpublishing.com/infobae/CNTWUAMXZRF3BPIYPCNPFHOMJQ.jpg",
    },
    {
      id: 2,
      name: "Producto 2",
      price: 200,
      imageUrl:
        "https://cloudfront-us-east-1.images.arcpublishing.com/infobae/CNTWUAMXZRF3BPIYPCNPFHOMJQ.jpg",
    },
    {
      id: 3,
      name: "Producto 3",
      price: 300,
      imageUrl:
        "https://cloudfront-us-east-1.images.arcpublishing.com/infobae/CNTWUAMXZRF3BPIYPCNPFHOMJQ.jpg",
    },
  ];

  return (
    <section className="mt-5">
      <Card>
        <Card.Body>
          <Card.Title>Carrito</Card.Title>
          <ListGroup variant="flush">
            {products.map((product) => (
              <ListGroup.Item key={product.id}>
                <Row className="align-items-center">
                  <Col xs={3}>
                    <img
                      src={product.imageUrl}
                      alt={product.name}
                      className="img-fluid"
                    />
                  </Col>
                  <Col>
                    <div>{product.name}</div>
                    <div>${product.price}</div>
                  </Col>
                  <Col xs="auto">
                    <Button variant="danger" size="sm">
                      <Trash />
                    </Button>
                  </Col>
                </Row>
              </ListGroup.Item>
            ))}
          </ListGroup>

          <div className="d-flex justify-content-between mt-3">
            <h5>Total: $600</h5>
            <Button variant="success">Proceder al pago</Button>
          </div>
        </Card.Body>
      </Card>
    </section>
  );
};

export default Carrito;
