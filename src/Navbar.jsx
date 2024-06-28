import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Navigation() {
  return ( 
    <Navbar expand="lg" className="bg-primary-subtle">
      <Container>
        <Navbar.Brand href="#home">Star Wars Database</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Favourites</Nav.Link>
           </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>    
   );
}

export default Navigation;
