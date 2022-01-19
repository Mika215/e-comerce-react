import {useState} from "react";
import {Add, Remove} from "@material-ui/icons";
import styled from "styled-components";
import Advert from "../components/Advert";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 20px;
`;

const Title = styled.h1`
  font-weight: 400;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;
const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  text-transform: uppercase;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"}; //!i like this cool
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;
const TopTextContainer = styled.div``;
const TopText = styled.span`
  text-decoration: underline;
  text-transform: capitalize;
  margin: 0px 10px;
  cursor: pointer;
  &:hover {
    color: orange;
  }
`;
const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
`;

const Info = styled.div`
  flex: 3;
`;
const Product = styled.div`
  display: flex;
  justify-content: space-between;
`;
const ProductDetails = styled.div`
  flex: 2;
  display: flex;
`;
const Image = styled.img`
  width: 280px;
`;
const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  text-align: justify;
`;

const ProductName = styled.span`
  //   padding-bottom: 20px;
`;
const ProductId = styled.span`
  //   padding-bottom: 20px;
`;
const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;
const ProductSize = styled.span`
  //   padding-bottom: 20px;
`;

const PriceDetails = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justifay-content: item;
`;
const ProductQuantityContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  margin-top: 24px;
`;

const ProductQuantity = styled.span`
  font-size: 20px;
  margin: 5px;
`;

const ProductPrice = styled.span`
  font-size: 25px;
  font-weight: 400;
`;

const Hr = styled.hr`
  border: none;
  height: 1px;
  background-color: #eee;
`;

const Summary = styled.div`
flex:1;
border:0.5px solid lightgray;
border-radius:10px;
padding:20px;
margin-top:28px;
height:50vh;
// display:flex;
// flex-direction:column;
// align-items:center;
// justify-content:space-between;
`;
const SummaryTitle = styled.h3`
font-weight:600;
font-size:20px;
text-transform: uppercase;
`;
const SummaryItem = styled.div`
display:flex;
align-items:center;
margin:30px 0px;
justify-content:space-between;
`;
const SummaryItemText = styled.p`
font-size:${props=>props.type==="total"? "22px" :"18px"};
font-weight:${props=>props.type==="total"&& 800};
`;
const SummaryItemPrice = styled.span`
font-size:${props=>props.type==="total"? "22px" :"20px"};
text-decoration:${props=>props.type==="total"&& "underline"};
font-weight:${props=>props.type==="total"&& 800}`;
const Button = styled.button`
padding: 10px;
width:100%;

font-weight: 500;
text-transform: uppercase;
  cursor: pointer;
  background-color:black;
  color:white;
  border:none;
  font-size:15px;

  `;

const defaultProduct = {
  id: "888902",
  name: "Nick Shoe",
  color: "blue",
  size: "43",
  price: "24",
};
const Cart = () => {
  const initialPrice = defaultProduct.price;
  const [totalPrice, setTotalPrice] = useState(initialPrice);
  const [quantity, setQuantity] = useState(1);

  const add = () => {
    setQuantity(quantity + 1);
    let tempo = initialPrice * quantity;
    // tempo+=totalPrice;
    console.log(tempo);
    setTotalPrice(tempo);
  };

  const minus = () => {
    if (quantity === 0) {
      setQuantity(0);
      setTotalPrice(0);
    } else if (quantity === 1) {
      setTotalPrice(initialPrice);
    } else {
      setQuantity(quantity - 1);
      let tempo = initialPrice * quantity;
      setTotalPrice(tempo);
    }
  };

  return (
    <Container>
      <NavBar />
      <Advert />
      <Wrapper>
        <Title>Your Shoping Cart</Title>
        <Top>
          <TopButton>Continue Shoping</TopButton>
          <TopTextContainer>
            <TopText>Your Shoping Bag (2)</TopText>
            <TopText>Your Wish list(8)</TopText>
          </TopTextContainer>
          <TopButton type="filled">Check-out now</TopButton>
        </Top>
        <Bottom>
          <Info>
            <Product>
              <ProductDetails>
                <Image
                  src={
                    "https://di2ponv0v5otw.cloudfront.net/posts/2019/06/09/5cfd25d9d1aa25b0f9995d88/m_5cfd25fabb22e3b9095b7248.jpg"
                  }
                />
                <Details>
                  <ProductName>
                    <b>Product: </b>Nick Sport
                  </ProductName>
                  <ProductId>
                    <b>Id: </b>898234
                  </ProductId>
                  {/* //!for each product it will have it's own assigned collor in the DB;using the props we can dinamically change the colors */}
                  <ProductColor color={"gray"}></ProductColor>
                  <ProductSize>
                    <b>Size: </b>43
                  </ProductSize>
                </Details>
                <PriceDetails>
                  <ProductQuantityContainer>
                    <Remove onClick={minus} />
                    <ProductQuantity>{quantity}</ProductQuantity>
                    <Add onClick={add} />
                  </ProductQuantityContainer>
                  <ProductPrice>€ {totalPrice}</ProductPrice>
                </PriceDetails>
              </ProductDetails>
            </Product>
            <Hr />
            <Product>
              <ProductDetails>
                <Image
                  src={
                    "https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fwp-content%2Fblogs.dir%2F6%2Ffiles%2F2018%2F09%2Fnike-air-vapormax-95-white-french-blue-0.jpg?w=960&cbr=1&q=90&fit=max"
                  }
                />
                <Details>
                  <ProductName>
                    <b>Product: </b>Nick Casual
                  </ProductName>
                  <ProductId>
                    <b>Id: </b>55572
                  </ProductId>
                  {/* //!for each product it will have it's own assigned collor in the DB;using the props we can dinamically change the colors */}
                  <ProductColor color={"darkCyan"}></ProductColor>
                  <ProductSize>
                    <b>Size: </b>42.5
                  </ProductSize>
                </Details>
                <PriceDetails>
                  <ProductQuantityContainer>
                    <Remove onClick={minus} />
                    <ProductQuantity>{quantity}</ProductQuantity>
                    <Add onClick={add} />
                  </ProductQuantityContainer>
                  <ProductPrice>€ {totalPrice}</ProductPrice>
                </PriceDetails>
              </ProductDetails>
            </Product>
          </Info>
          <Summary>
            <SummaryTitle>Order Summary</SummaryTitle>
            <SummaryItem>
            <SummaryItemText>Subtotal</SummaryItemText>
            <SummaryItemPrice>€ 48</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
            <SummaryItemText>Estimated Shiping</SummaryItemText>
            <SummaryItemPrice>€6</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
            <SummaryItemText>Shiping Discount</SummaryItemText>
            <SummaryItemPrice>€ -4</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
            <SummaryItemText type="total">Total</SummaryItemText>
            <SummaryItemPrice type="total">€ 50</SummaryItemPrice>
            </SummaryItem>
           
            <Button>Checkout Now</Button>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;
