import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function ColorSchemesExample() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Flying Website</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="login">Login</Nav.Link>
            <Nav.Link href="register">Register</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      
    </>
  );
}

export default ColorSchemesExample;