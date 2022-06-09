// import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import "./App.css";
import Filter from "./components/Filter";
import Header from "./components/Header";
import Home from "./components/Home";
import { ProductProvider } from "./context/ProductContext";

function App() {
  return (
    <ProductProvider>
      <Header />
      <Filter />
      <Container>
        <Home />
      </Container>
    </ProductProvider>
  );
}

export default App;
