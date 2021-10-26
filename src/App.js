import './App.css';
import NavBar from "./components/navbar"
import Home from "./views/home"
import { BrowserRouter, Route } from "react-router-dom"
import Product from "./views/product"
import NewProduct from './views/new';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Route path="/" exact component={Home} />
      <Route path="/product/:_id" exact component={Product} />
      <Route path="/new" exact component={NewProduct} />
      <Route path="/new/:id" exact component={NewProduct} />
    </BrowserRouter >
  );
}

export default App;
