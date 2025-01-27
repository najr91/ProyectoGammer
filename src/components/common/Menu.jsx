import { Navbar, Nav, Container } from "react-bootstrap";
import "../../style/Menu.css";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink,useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

const Menu = ({ usuarioLogeado, setusuarioLogeado }) => {
  const navegacion = useNavigate();

  const logout = () => {
    sessionStorage.removeItem("userKey");
    setusuarioLogeado("");
    navegacion("/");
  };
  return (
    <Navbar expand="lg" className="Menu navbar-dark">
      <Container>
        <Navbar.Brand href="#home"><img src="c:\Users\BEEP\Downloads\WhatsApp Image 2025-01-23 at 15.59.26.jpeg" alt="" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/">Inicio</Nav.Link>
            <Nav.Link href="/Nosotros">Sobre Nosotros</Nav.Link>
            <Nav.Link href="/Contactos">Contactos</Nav.Link>
            {usuarioLogeado && usuarioLogeado.length > 0 ? (
              <>
                <NavLink className="nav-link" to="/administrador">
                  Administrador
                </NavLink>
                <Nav.Item>
                  <Button
                    className="nav-link btn ButtonLogin btn-link text-black"
                    variant="link"
                    onClick={logout}
                  >
                    Logout
                  </Button>
                </Nav.Item>
              </>
            ) : (
              <Link to="/login">
                <button className="ButtonLogin">Ir a Login</button>
              </Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Menu;

