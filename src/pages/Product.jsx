import {Add, Remove} from "@material-ui/icons";
import {useState} from "react";
import styled from "styled-components";
import Advert from "../components/Advert";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import NewsLetter from "../components/NewsLetter";

const Container = styled.div``;
const Wrapper = styled.div`
  padding: 50px;
  display: flex;
`;
const ImageContainer = styled.div`
  flex: 1;
`;
const Image = styled.img`
  width: 100%;
  object-fit: cover;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  text-align: justify; //! check this out
`;
const Title = styled.h1`
  font-weight: 300;
`;
const Description = styled.p`
  margin: 20px 0px;
`;
const Price = styled.span`
  font-size: 2rem;
  font-weight: 300;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 50%;
  margin: 30px 0px;
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
`;

const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 300;
`;

const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin: 0px 5px;
  cursor: pointer;
  background-color: #${(props) => props.color};
`;

const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
  font-size: 0.9rem;
`;

const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;

const Amount = styled.span`
  width: 30px;
  height: 30px;
  font-size:1.3rem;
  border-radius: 8px;
  border: 2px solid lightgray;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;

const Button = styled.button`
  background-color: white;
  color: black;
  padding: 12px;
  border: 2px solid black;
 border-radius:5px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 700;
  &:hover {
    background-color: #fffde7;
    transform: scale(1.1);
  }
`;

const Product = () => {
  const [amount, setAmount] = useState(1);

  const add = () => {
    setAmount(amount + 1);
  };

  const minus = () => {
    if (amount < 1) {
      setAmount(0);
    } else {
      setAmount(amount - 1);
    }
  };

  return (
    <Container>
      <NavBar />
      <Advert />
      <Wrapper>
        <ImageContainer>
          <Image
            src={
              "https://www.famousfootwear.com/blob/product-images/20000/32/67/6/32676_pair_large.jpg"
            }
          />
        </ImageContainer>
        <InfoContainer>
          <Title>Puma Shoes</Title>
          <Description>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis,
            recusandae. Lorem ipsum dolor sit amet, consectetur adipisicing
            elit. Debitis, soluta. Lorem ipsum dolor sit amet consectetur. Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Quis, recusandae.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis,
            soluta. Lorem ipsum dolor sit amet consectetur
          </Description>
          <Price>$ 24</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              <FilterColor color="000000" />
              <FilterColor color="1a237e" />
              <FilterColor color="9e9e9e" />
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize>
                <FilterSizeOption>XS</FilterSizeOption>
                <FilterSizeOption>S</FilterSizeOption>
                <FilterSizeOption>M</FilterSizeOption>
                <FilterSizeOption>L</FilterSizeOption>
                <FilterSizeOption>XL</FilterSizeOption>
                <FilterSizeOption>XXL</FilterSizeOption>
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Remove onClick={minus} style={{cursor: "pointer"}} />
              <Amount>{amount}</Amount>
              <Add onClick={add} style={{cursor: "pointer"}} />
            </AmountContainer>
            <Button>Add to Cart</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <NewsLetter />
      <Footer />
    </Container>
  );
};

export default Product;
