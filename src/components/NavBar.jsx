import React from "react";
import styled from "styled-components";
import SearchIcon from "@material-ui/icons/Search";
import {Badge} from "@material-ui/core";
import {ShoppingCartOutlined} from "@material-ui/icons";

const Container = styled.div`
  height: 65px;
  background-color: #e0e0e0;
`;
const Wrapper = styled.div`
  padding: 10px 20px;
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
  font-size:35px;
  text-align: center;
  
`;

const Center = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  margin-left:140px;//is this margin good or not check
`;
const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
`;
const SearchContainer = styled.div`
  border: 0.5px solid white;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;
const Input = styled.input`
  border: none;
  padding: 4px 10px;
  color: black;
  font-size: 15px;
  border-radius: 5px;
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
`;

const NavBar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Logo>DallolMart.</Logo>
        </Left>
        <Center>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder="search..." />
            <SearchIcon style={{opacity: "0.5", fontSize: 20}} />
          </SearchContainer>
        </Center>
        <Right>
          <MenuItem>Sign Up</MenuItem>
          <MenuItem>Login</MenuItem>
          <MenuItem>
            <Badge badgeContent={5} color="secondary">
              <ShoppingCartOutlined />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default NavBar;
