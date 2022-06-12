export default (state, action) => {
  switch (action.type) {
    case "FILTER_PRODUCT_BY_STOCK":
      return {
        ...state,
        products: state.products.filter((product) => product.stock > 0),
      };
    case "FILTER_PRODUCT_BY_DELIVERY":
      return {
        ...state,
        products: state.products.filter(
          (product) => product.delivery === "same day"
        ),
      };
    case "CLEAR_FILTER":
      return { ...action.payload };
    default:
      return state;
  }
};
