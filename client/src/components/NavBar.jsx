import React from "react";
import styled from "styled-components";
import SearchIcon from "@material-ui/icons/Search";
import {Badge} from "@material-ui/core";
import {ShoppingCartOutlined} from "@material-ui/icons";
import {mobile} from "../responsiveness";
import {Link, useHistory} from "react-router-dom";
import {useSelector} from "react-redux";

const Container = styled.div`
  height: 65px;
  ${mobile({height: "45px"})}
  background-color: #e0e0e0;
`;
const Wrapper = styled.div`
  padding: 10px 20px;
  ${mobile({padding: "10px 0px"})}
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;
const Logo = styled.h1`
  font-weight: bold;
  font-size: 2.5rem;
  // ${mobile({fontSize: "1.6rem", paddingLeft: "8px"})}
  text-align: center;
`;

const Center = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  // margin-left:140px;//is this margin good or not check
`;
const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({display: "none"})}
`;
const SearchContainer = styled.div`
 border: 0.5px solid white; 
  display: flex;
  align-items: center;

  margin-left: 25px;
  ${mobile({margin: "0px", border: "none", padding: "3px"})}
  padding: 5px;
  &:hover{
//  padding:8px;
  width:100%;


    }
  }

`;
const Input = styled.input`
  border: none;
  padding: 4px 10px;
  color: black;
  font-size: 15px;
  border-radius: 5px;
  &:hover {
    width: 100%;
    padding: 8px;

    border-radius: 20px;
    ${mobile({borderRadius: "1px", padding: "5px"})}
  }
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({justifyContent: "center"})}
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
`;

const NavBar = () => {
  const history = useHistory();

  const quantity = useSelector((state) => state.cart.quantity);
  const user = useSelector((state) => state.user);
  // console.log(quantity);
  return (
    <Container>
      <Wrapper>
        <Left>
          <Logo
            onClick={() => {
              history.push("/");
            }}
          >
            DallolMart
          </Logo>
        </Left>
        <Center>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder="search..." />
            <SearchIcon style={{opacity: "0.5", fontSize: 20}} />
          </SearchContainer>
        </Center>
        <Right>
        <Link to={user.currentUser!==null?`/users/myprofile/${user.currentUser._id}`:"/register"} style={{textDecoration:"none", }}>
          <MenuItem
            // onClick={() => {
            //   history.push("/register");
            //   console.log(history);
            //   console.log("redirected to registration page");
            // }}
          >
            {user.currentUser!==null?`${user.currentUser.username}`:"Sign Up"}
          </MenuItem>
          </Link>
       {user.currentUser!==null?(   <Link to={"/logout"} style={{textDecoration:"none"}}>
            <MenuItem
            // onClick={() => {
            //   history.push("/login");
            //   console.log(history);
            //   console.log("redirected to login page");
            // }}
            >
              Logout
            </MenuItem>
          </Link>):(  <Link to={"/login"} style={{textDecoration:"none"}}>
            <MenuItem
            // onClick={() => {
            //   history.push("/login");
            //   console.log(history);
            //   console.log("redirected to login page");
            // }}
            >
              Login
            </MenuItem>
          </Link>)}
          <Link to={"/cart"} >
            <MenuItem>
              <Badge badgeContent={quantity} color="secondary">
                <ShoppingCartOutlined />
              </Badge>
            </MenuItem>
          </Link>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default NavBar;
