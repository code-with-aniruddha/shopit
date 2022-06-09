import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const Product = ({ product }) => {
  return (
    <Card>
      <Card.Img variant="top" src="/images/prod-img.svg" />
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        {/* <Card.Text>{product.description}</Card.Text> */}
        <Button variant="primary">Add to cart</Button>
      </Card.Body>
    </Card>
  );
};

export default Product;
