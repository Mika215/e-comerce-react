import {useState} from "react";
import {useHistory} from "react-router-dom";
import styled from "styled-components";
const axios = require("axios");

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  //!add-background-image if necessary???? linier gredient
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: cyan;
`;
const Title = styled.h2``;
const Form = styled.form`
  //   display: flex;
  //   flex-direction: column;

  //   align-items: center;
  //   justify-content: space-between;
`;
const Input = styled.input``;
const Agreement = styled.span``;
const Button = styled.button``;

const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmedPassword, setConfirmedPassword] = useState("");
const history=useHistory();
  const registerMe = async (e) => {
    e.preventDefault();

    if (password !== confirmedPassword) {
      alert(
        "Password confirmation failed!\nPlease enter matching passwords !"
      );
      return;
    } else {
      const newUser = {
        username: username,
        password: password,
        firstName: firstName,
        lastName: lastName,
        email: email,
      };
      const res= await axios.post("http://localhost:5000/users/register",newUser)
        console.log(res.data)
        // console.log(res.err)
        // console.log(err.message)
        if(res.status===200){
          history.push("/register/activationemailsent");
        }
           
      // console.log(newUser);
    }
    setUsername("");
    setPassword("");
    setConfirmedPassword("");
    setFirstName("");
    setLastName("");
    setEmail("");
// if(res.status===200){
//   history.go(-1);
// }
    
  };

  return (
    <Container>
      <Wrapper>
        <Title>Register</Title>
        <Form onSubmit={registerMe}>
          <Input
          required
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="Name"
          />
          <Input
           required
           type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder="Last Name"
          />
          <Input
           required
           type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="username"
          />
          <Input
           required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="email"
          />

          <Input
           required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="password"
            type="password"
          />
          <Input
           required
            value={confirmedPassword}
            onChange={(e) => setConfirmedPassword(e.target.value)}
            placeholder="confirm password"
            type="password"
          />
          <Agreement>
            You must read, agree with, and accept all of the terms and
            conditions contained in these Terms. By creating an account, or by
            using or visiting our Website,
          </Agreement>
          <Button>Create</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
