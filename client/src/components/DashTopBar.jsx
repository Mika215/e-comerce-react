import React from "react";
import styled from "styled-components";
import {Settings} from "@material-ui/icons";
import {Avatar} from "@material-ui/core";

const Container = styled.div`
  height: 68px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position:sticky;
  top:0;
  z-index:999;

background-color:white;
// box-shadow: 1px 2px rgba(215,215,215,0.60);
box-shadow: 0px 0px 8px 1.5px rgba(0, 0, 0, 0.5);

`;
const Left = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-left:10px;
`;
const Logo = styled.h1``;


const Right = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;

`;
const IconContainer = styled.li`
  list-style-type: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-right:20px;
  cursor:pointer;
`;

const DashTopBar = () => {
  return (
    <Container>
      <Left>
        <Logo>Dashboard</Logo>
      </Left>
      <Right>
        <IconContainer>
          <Avatar style={{backgroundColor: "#651fff"}}>MT</Avatar>
        </IconContainer>
        <IconContainer>
          <Settings />
        </IconContainer>
      </Right>
    </Container>
  );
};

export default DashTopBar;
