import React, { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import Product from "./Product";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Filter from "./Filter";

const Home = () => {
  const {
    state: { products },
  } = useContext(ProductContext);
  return (
    <Row>
      <Col className="filter" md={3}>
        <Filter />
      </Col>
      <Col md={9}>
        <Row className="g-4">
          {products.map((product) => (
            <Col xs={12} sm={6} md={4} key={product.id}>
              <Product product={product} />
            </Col>
          ))}
        </Row>
      </Col>
    </Row>
  );
};
export default Home;
