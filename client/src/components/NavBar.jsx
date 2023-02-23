import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function BasicExample() {
  return (
    <Navbar className="link-bar " expand="lg">
     
        <Navbar.Toggle className="hamburger border-0" aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto ">
            <Nav.Link className="text-white me-5" href="#home">
              Adopta
            </Nav.Link>
            <Nav.Link className="text-white me-5" href="#link">
            Anuncia tu mascota
            </Nav.Link>
            <Nav.Link className="text-white me-5 " href="#link">
              Contacto
            </Nav.Link>
            <Nav.Link className="text-white me-5 " href="#link">
              Reportar abuso o maltrato
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
    </Navbar>
  );
}

export default BasicExample;
