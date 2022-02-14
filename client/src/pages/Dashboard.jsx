import React from "react";
import styled from "styled-components";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import DashProducts from "../components/DashProducts";
import DashSideBar from "../components/DashSideBar";
import DashTopBar from "../components/DashTopBar";
import DashUsers from "../components/DashUsers";
import DashboardRoot from "./DashboardRoot";
import Login from "./Login";
import SingleUser from "./SingleUser";
import {useSelector} from "react-redux";
// import { render } from 'react-dom';
// import { Admin, Resource } from 'react-admin';
// import { Provider } from 'react-redux';
// import { createHashHistory } from 'history';

// import restProvider from 'ra-data-simple-rest';

// import { PostList, PostEdit, PostCreate, PostIcon } from './posts';

const Container = styled.div`
  position: relative;
  width: 100%;
`;
// const history = createHashHistory();
const Dashboard = () => {
  const user = useSelector((state) => state.user.currentUser);
  // let isAuthorised=(user.isAdmin===true)
  console.log(user);


//  return(
//    <Admin dataProvider={restProvider("http://localhost:500")}>
// <Resource  name="users" list={DashUsers}/>
//    </Admin>
//  )

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
          <Route exact path="/dash/admin/user/:userId">
            <SingleUser />
          </Route>
        </Switch>
      </Container>
    </Router>
  );
};

export default Dashboard;
