import styled from "styled-components";

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
  background-color: red;
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
  return (
    <Container>
      <Wrapper>
        <Title>Register</Title>
        <Form>
          <Input placeholder="Name" />
          <Input placeholder="Last Name" />
          <Input placeholder="username" />
          <Input placeholder="email" />

          <Input placeholder="password" />
          <Input placeholder="confirm password" />
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
