import React, {useState} from "react";
import styled from "styled-components";
import { authRequest } from "../requestMethods";
import { DataGrid } from '@material-ui/data-grid';

const Container = styled.div`
  flex: 4; //! i want to evenly distribute the screen width between the side bar compnent and the users/products
  margin-bottom:20px;
  `;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-bottom:20px;
`;
const Title=styled.h2``;

const ListContainer = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin: 0;
  padding: 0;
`;

const List = styled.li`
  margin-bottom: 20px;
  color: green;
  list-style-type: none;
  margin: 10px;
  font-weight: 600;
  font-size: 1rem;
`;
const DashProducts = () => {
  const [products, setProducts] = useState([]);

  const getAllProducts = async () => {
    try {
      const res=await authRequest.get("/products")
      setProducts(res.data)
    } catch (err) {
      console.log(err);
    }
   
  };
  const handleDelete = async (productId) => {
    console.log(`product id no:${productId} will be deleted`);
    alert("Are you sure you want to permanently delete Product?")
    try {
      const res=await authRequest.delete(`/products/${productId}`)
      console.log(res.data)
      
    } catch (err) {
      console.log(err)
      
    }
  };

  return (
    <Container>
      <Wrapper>
        <Title>Products Category</Title>
        {products.map((product) => (
          <ListContainer key={product._id}>
            <List>{product.title}</List>
            <button onClick={() => handleDelete(product._id)}>delete</button>
          </ListContainer>
        ))}
      </Wrapper>
      <button onClick={getAllProducts}>Get All Products</button>
    </Container>
  );
};

export default DashProducts;
