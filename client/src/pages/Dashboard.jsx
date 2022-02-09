import React from "react";
import styled from "styled-components";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import DashProducts from "../components/DashProducts";
import DashSideBar from "../components/DashSideBar";
import DashTopBar from "../components/DashTopBar";
import DashUsers from "../components/DashUsers";
import DashboardRoot from "./DashboardRoot";
import Login from "./Login";
import {useSelector} from "react-redux";

const Container = styled.div`
  position: relative;
  width: 100%;
`;

const Dashboard = () => {
  const user = useSelector((state) => state.user.currentUser);
  // let isAuthorised=(user.isAdmin===true)
  console.log(user);
  // // console.log(user)
  // console.log(user.isAdmin===true)
  // console.log(isAuthorised)

  return (
    <Router>
      <Container>
        <DashTopBar />
        <DashSideBar />
        <Switch>
          <Route exact path="/dash/admin">
            {user ? user.isAdmin ? <DashboardRoot /> : <Login /> : null}
          </Route>
          <Route exact path="/dash/admin/users">
            <DashUsers />
          </Route>
          <Route exact path="/dash/admin/products">
            <DashProducts />
          </Route>
        </Switch>
      </Container>
    </Router>
  );
};

export default Dashboard;
