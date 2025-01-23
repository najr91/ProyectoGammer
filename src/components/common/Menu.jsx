import { Navbar,Nav,Container, NavLink } from "react-bootstrap";
import '../../style/Menu.css'
import { Link } from "react-router-dom";

const Menu = () => {
    return (
        <Navbar expand="lg" className="Menu navbar-dark">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/">Inicio</Nav.Link>
            <Nav.Link href="/Nosotros">Sobre Nosotros</Nav.Link>
            <Nav.Link href="/Contactos">Contactos</Nav.Link>
            <Link to="/login" style={{ textDecoration: "none" }}>
      <button className="ButtonLogin">Ir a Login</button>
    </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
};

export default Menu;