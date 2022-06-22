import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import { Col } from "react-bootstrap";

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Col md={3}>
          <Link to="/">
            <h2>Shop IT</h2>
          </Link>
        </Col>
        <Col md={6}>
          <Form.Control type="email" placeholder="Search" />
        </Col>
        <Col className="text-end" md={3}>
          <Link to="/cart">
            <Button variant="info">
              <FaShoppingCart fontSize="25px"></FaShoppingCart>
              10
            </Button>
          </Link>
        </Col>
      </Container>
    </Navbar>
  );
};

export default Header;
