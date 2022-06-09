import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Shop IT</Navbar.Brand>
        <Navbar.Text>text</Navbar.Text>
      </Container>
    </Navbar>
  );
};

export default Header;
