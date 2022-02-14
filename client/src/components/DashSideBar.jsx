import React from "react";
import styled from "styled-components";
import {
  PeopleOutline,
  LocalMall,
  CardGiftcard,
  PersonOutline,
} from "@material-ui/icons";
import {Link} from "react-router-dom";

const Container = styled.div`
  background-color: lightgray;
  height: 100vh;
  width: 15%;
  //flex:1; //! i want to evenly distribute the screen width between the side bar compnent and the users/products
  position: fixed;
  top: 68px;
  left: 0;
  padding-top: 40px;
  box-shadow: 0px 0px 12px 2.5px rgba(0, 0, 0, 0.55);
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: space-between;
`;
const ItemsContainer = styled.ul`
  margin-bottom: 30px;
  margin-left: 0;
  margin-right: 0;
  align-items: center;
  justify-content: center;
`;
const Item = styled.li`
  list-style-type: none;
  cursor: pointer;
`;

const DashSideBar = () => {
  return (
    <Container>
      <h3>Sidebar</h3>
      <Wrapper>
        <ItemsContainer>
          <Link to={"/dash/admin/users"} style={{textDecoration: "none",color:"black"}}>
            <Item>
              <PersonOutline
                style={{marginRight: "10px", fontSize: "1.9rem"}}
              />
              Users
            </Item>
          </Link>
          <Link to={"/dash/admin/products"} style={{textDecoration: "none",color:"black"}}>
            <Item>
              <CardGiftcard style={{marginRight: "10px"}} />
              Products
            </Item>
          </Link>
        </ItemsContainer>
        <ItemsContainer>
          <Link to={"/dash/admin/users"} style={{textDecoration: "none",color:"black"}}>
            <Item>
              <PeopleOutline
                style={{marginRight: "10px", fontSize: "1.9rem"}}
              />
              Users
            </Item>
          </Link>
          <Link to={"/dash/admin/products"} style={{textDecoration: "none",color:"black"}}>
            <Item>
              <LocalMall style={{marginRight: "10px"}} />
              Products
            </Item>
          </Link>
        </ItemsContainer>
        <ItemsContainer>
          <Link to={"/dash/admin/users"} style={{textDecoration: "none",color:"black"}}>
            <Item>
              <PeopleOutline style={{marginRight: "10px"}} />
              Users
            </Item>
          </Link>
          <Link to={"/dash/admin/products"} style={{textDecoration: "none",color:"black"}}>
            <Item>
              <LocalMall style={{marginRight: "10px"}} />
              Products
            </Item>
          </Link>
        </ItemsContainer>
      </Wrapper>
    </Container>
  );
};

export default DashSideBar;
