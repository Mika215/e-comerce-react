import "./App.css";
import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"; //!switch is only available in "npm i react-router-dom@5.3.0" other versions doens't support it?
import Register from "./pages/Register";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Product from "./pages/Product";
import ProductsList from "./pages/ProductsList";
import Pay from "./pages/Pay";
import Success from "./pages/Success";
import Login from "./pages/Login";
import {useSelector} from "react-redux";
import Logout from "./pages/Logout";
import MyProfile from "./pages/MyProfile";
import Dashboard from "./pages/Dashboard";
import Forbidden from "./pages/Forbidden";
const App = () => {
  const user = useSelector((state) => state.user.currentUser);
  {
    // user && console.log(user);
  }
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/products">
            <ProductsList />
          </Route>
          <Route path="/product/:id">
            <Product />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/logout">
            <Logout />
          </Route>

          <Route path="/cart">
            <Cart />
          </Route>
          <Route path="/pay">
            <Pay />
          </Route>
          <Route path="/success">
            <Success />
          </Route>
          <Route path="/users/myprofile/:id">
            <MyProfile />
          </Route>
          <Route path="/dash/admin">
          {/* //!this is very helpfull but it keeps the isFetching state permanently true and can not login while is fetching */}
          {user ? user.isAdmin ? <Dashboard /> : <Login/> : <Forbidden/> }
          
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
