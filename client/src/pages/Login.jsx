import {useState} from "react";
import {useLocation, useHistory} from "react-router-dom";
import styled from "styled-components";
import {login} from "../redux/serverConnect"; //!this is the login function from serverConnect
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
const Success = styled.span`
position:absolute;
font-size:2rem;
top:20px;
left:40%;
right:40%;
  color: green;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: space-between;
`;
const Input = styled.input``;

const Button = styled.button`
  width: 40%;
  padding: 10px;
  &:disabled {
    colo: red; //!this color should disable the login word
    cursor: not-allowed;
  }
`;
const Error = styled.span`
  color: red;
`;

const Login = () => {
  const history = useHistory();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // const [email, setEmail] = useState("");
  const dispatch = useDispatch();
  const {isFetching, error} = useSelector((state) => state.user);
 const user=useSelector((state) => state.user);
  const handleLogin = (e) => {
    e.preventDefault();
    login(dispatch, {username, password});
  
    history.push("/")
  };


  return (
    <Container>
      <Wrapper>
        <Title>Login</Title>
        {/* {user.currentUser!==null && <Success>
              Login Success!
            </Success>} */}
        <Form>
          <Input
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="username"
          />
          {/* <Input
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="email"
          /> */}

          <Input
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="password"
            type="password" //!this covers the password in the ui
          />
          <Button onClick={handleLogin} disabled={isFetching}>
            Login
          </Button>
          {error && (
            <Error>
              Wrong Email or Password ! Please enter your credentials correctly!
            </Error>
          )}
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
