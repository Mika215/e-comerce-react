import React from "react";

const Login = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Register</Title>
        <Form>
          <Input placeholder="username" />
          <Input placeholder="email" />
          <Input placeholder="password" />
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
