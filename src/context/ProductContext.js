import { createContext, useReducer } from "react";
import { ProductList } from "./ProductList";
import ProductReducer from "./ProductReducer";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const initialState = { products: ProductList };
  const [state, dispatch] = useReducer(ProductReducer, initialState);
  const criteriaToAction = {
    stock: "FILTER_PRODUCT_BY_STOCK",
    delivery: "FILTER_PRODUCT_BY_DELIVERY",
    clear: "CLEAR_FILTER",
  };
  const filterProducts = function (criteria) {
    dispatch({
      type: criteriaToAction[criteria],
      payload: criteria === "clear" ? initialState : undefined,
    });
  };

  return (
    <ProductContext.Provider value={{ state, filterProducts }}>
      {children}
    </ProductContext.Provider>
  );
};
