import React, { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import Product from "./Product";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Home = () => {
  const {
    state: { products },
  } = useContext(ProductContext);
  return (
    <Row className="g-4">
      {products.map((product) => (
        <Col xs={12} sm={6} md={4} key={product.id}>
          <Product product={product} />
        </Col>
      ))}
    </Row>
  );
};
export default Home;
