import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Link to="/">
          <Navbar.Brand>Shop IT</Navbar.Brand>
        </Link>
        <Navbar.Text>
          <Link to="/cart">
            <Button variant="info">
              <FaShoppingCart fontSize="25px"></FaShoppingCart>
              10
            </Button>
          </Link>
        </Navbar.Text>
      </Container>
    </Navbar>
  );
};

export default Header;
