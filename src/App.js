import './App.css';
import NavBar from "./components/navbar"
import Home from "./views/home"
import { BrowserRouter, Route } from "react-router-dom"
import Product from "./views/product"

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Route path="/" exact component={Home} />
      <Route path="/product/:_id" exact component={Product} />
    </BrowserRouter >
  );
}

export default App;
