import styled from "styled-components";
import {Send} from "@material-ui/icons";
const Container = styled.div`
  height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  //   padding: 10px;
  background-color: #fcf5f5;
`;

const Title = styled.h1`
  font-size: 40px;

  margin: 20px;
`;
const Description = styled.div`
  font-size: 24px;
  font-weight: 300;
  margin: ;
`;
const InputContainer = styled.div``;
const Input = styled.input``;
const Button = styled.button`
  background-color: red;
  color: white;
  border: none;
`;

const NewsLetter = () => {
  return (
    <Container>
      <Title>Subscribe to our Newsletter</Title>
      <Description>Get regular updates about our services!</Description>
      <InputContainer>
        <Input />
        <Button>
          <Send />
        </Button>
      </InputContainer>
    </Container>
  );
};

export default NewsLetter;
