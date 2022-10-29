import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import CartWidget from "./CartWidget";
import "../styles/components/NavBar.scss";
import { Link } from "react-router-dom";

function CollapsibleExample() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>
          <Link to="/">Computacion Otto</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link>
              <Link to="/cpu">Cpu</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/mouse">Mouse</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/procesadores">Procesadores</Link>
            </Nav.Link>
            
            
          </Nav>
        </Navbar.Collapse>
        <Link to="/cart">
          <CartWidget />
        </Link>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;
