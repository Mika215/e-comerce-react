import {useState} from "react";
import {useLocation, useHistory,Link} from "react-router-dom";
import styled from "styled-components";
import {logout} from "../redux/serverConnect"; //!this is the logout function from serverConnect
import {useDispatch, useSelector} from "react-redux";
// const axios = require("axios");

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div`
  width: 50%;
  padding: 20px;
  background-color: light-gray;
`;
const Title = styled.h2``;



const Button = styled.button`
  width: 40%;
  padding: 10px;
  &:disabled {
    colo: red; //!this color should disable the logout word
    cursor: not-allowed;
  }
`;
const Success = styled.span`
position:absolute;
font-size:2rem;
top:20px;
left:40%;
right:40%;
  color: green;
`;

const Logout = () => {
  const history = useHistory();

  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const handlelogout = (e) => {
    // e.preventDefault();
    logout(dispatch);
    history.go("/")
  };

  

  return (
    <Container>
      <Wrapper>
      {user.currentUser===null && <Success>
              User Loged out!
            </Success>}
        <Title>logout</Title>
      <Button onClick={()=>handlelogout()}>Logout</Button>
          
    
      </Wrapper>
    </Container>
  );
};

export default Logout;
