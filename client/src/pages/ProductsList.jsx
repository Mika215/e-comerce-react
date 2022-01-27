import styled from "styled-components";
import Advert from "../components/Advert";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import Products from "../components/Products";

const Container = styled.div``;

const Title = styled.h1`
  margin: 20px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 20px;
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 700;
  margin-right:20px;
`;

const Select = styled.select`
padding:10px;
margin-right:20px;
font-size:0.9rem;
font-weight: 500;
`;
const Option = styled.option`
  // background-color:#${(props) => props.bg}
  // color:#${(props) => props.color};
`;

const ProductsList = () => {
  return (
    <Container>
      <NavBar />
      <Advert />
      <Title>Popular Products</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select>
            <Option disabled selected>
              Color
            </Option>
            <Option color="ffffff" bg="4caf50">
              Green
            </Option>
            <Option color="ffffff" bg="0091ea">
              Blue
            </Option>
            <Option color="ffffff" bg="ffff00">
              Yellow
            </Option>
            <Option color="ffff" bg="00000">
              White
            </Option>
            <Option color="00000" bg="ffffff">
              Black
            </Option>
            <Option color="ffffff" bg="bdbdbd">
              Gray
            </Option>
          </Select>
          <Select placeholder="Size">
          <Option disabled selected>
              Size
            </Option>
            <Option>XS</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
            <Option>XXL</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products:</FilterText>
          <Select>
            <Option disabled selected>
              Price
            </Option>
            <Option>Price(Asc)</Option>
            <Option>Price(Desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products />
      <Footer />
    </Container>
  );
};

export default ProductsList;
