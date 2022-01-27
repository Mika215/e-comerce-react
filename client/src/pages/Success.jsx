import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  justify-content: center;
  padding: 80px;
`;
const ImageContainer = styled.div``;
const Image = styled.img`
  width: 300px;
  hight: 250px;
  justify-content: center;
  align-items: center;
`;
const Success = () => {
  return (
    <Container>
      <ImageContainer>
        <Image alt="there was supposed to be a logo here" src="xxx" />
      </ImageContainer>
      <h1>Thanks for Chooseing DallolMart!</h1>
      <p>Payment successful!</p>
    </Container>
  );
};

export default Success;
