import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const Filter = () => {
  return (
    <Navbar expand="lg" bg="secondary" variant="dark">
      <Container>
        {/* <Navbar.Brand href="#home">Filter</Navbar.Brand> */}
        <Nav className="me-auto">
          {/* <Nav.Link href="#features">Features</Nav.Link> */}
          <Form.Check type="checkbox" label="exclude out of stock" />
          <Form.Check type="checkbox" label="fast delivery only" />
        </Nav>
        <Nav>
          <Button variant="light">clear filter</Button>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Filter;
