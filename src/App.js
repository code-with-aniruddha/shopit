// import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Filter from "./components/Filter";
import Header from "./components/Header";
import Home from "./components/Home";
import Cart from "./components/Cart";
import { ProductProvider } from "./context/ProductContext";

function App() {
  return (
    <ProductProvider>
      <Header />
      <Filter />
      <Container>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/cart" exact element={<Cart />} />
        </Routes>
      </Container>
    </ProductProvider>
  );
}

export default App;
