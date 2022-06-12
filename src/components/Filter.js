import { useContext, useState } from "react";
import { ProductContext } from "../context/ProductContext";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const Filter = () => {
  const { filterProducts } = useContext(ProductContext);
  const initialCheckState = { stock: false, delivery: false };
  const [checkState, setCheckState] = useState(initialCheckState);
  const onFilter = (criteria) => {
    criteria === "clear"
      ? setCheckState(initialCheckState)
      : setCheckState({ ...checkState, [criteria]: !checkState[criteria] });
    filterProducts(criteria);
  };
  return (
    <Navbar expand="lg" bg="secondary" variant="dark">
      <Container>
        <Nav className="me-auto">
          <Form.Check
            onChange={() => onFilter("stock")}
            type="checkbox"
            label="exclude out of stock"
            checked={checkState.stock}
          />
          <Form.Check
            onChange={() => onFilter("delivery")}
            type="checkbox"
            label="fast delivery only"
            checked={checkState.delivery}
          />
        </Nav>
        <Nav>
          <Button onClick={() => onFilter("clear")} variant="light">
            clear filter
          </Button>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Filter;
