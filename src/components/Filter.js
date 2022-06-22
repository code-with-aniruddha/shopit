import { useContext, useState } from "react";
import { ProductContext } from "../context/ProductContext";
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
    <div>
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
      <div>
        <Button onClick={() => onFilter("clear")} variant="light">
          clear filter
        </Button>
      </div>
    </div>
  );
};

export default Filter;
