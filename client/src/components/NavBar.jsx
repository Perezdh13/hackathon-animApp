import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import { Link } from 'react-router-dom';
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
            <Link className="link" to="/anuncia">
              Anuncia tu mascota
            </Link>
          </Nav.Link>
          <Nav.Link className="text-white me-5 " href="#link">
            <Link className="link" to="/contact">
              Contacto
            </Link>
          </Nav.Link>
          <Nav.Link className="text-white me-5 " href="#link">
            <Link className="link" to="/report">
              Reportar abuso o maltrato
            </Link>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default BasicExample;
