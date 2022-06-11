import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { FaShoppingCart } from "react-icons/fa";
import { Badge } from "react-bootstrap";

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Shop IT</Navbar.Brand>
        <Navbar.Text>
          <Button variant="info">
            <FaShoppingCart fontSize="25px"></FaShoppingCart>
            10
          </Button>
        </Navbar.Text>
      </Container>
    </Navbar>
  );
};

export default Header;
