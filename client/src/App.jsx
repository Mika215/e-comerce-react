import "./App.css";
import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"; //!switch is only available in "npm i react-router-dom@5.3.0" other versions doens't support it?
import Register from "./components/Register";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Product from "./pages/Product";
import ProductsList from "./pages/ProductsList";
import Pay from "./pages/Pay";
import Success from "./pages/Success";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/products">
            <ProductsList />
          </Route>
          <Route exact path="/products/single">
            <Product />
          </Route>
          <Route exact path="/register">
            <Register />
          </Route>
         
          <Route exact path="/cart">
            <Cart />
          </Route>
          <Route exact path="/pay">
            <Pay />
          </Route>
          <Route exact path="/success">
            <Success />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
