import React, {useState} from "react";
import styled from "styled-components";
import {authRequest} from "../requestMethods";

const Container = styled.div`
  // flex: 4; //! i want to evenly distribute the screen width between the side bar compnent and the Products/products
  // margin-bottom: 20px;

  // flex: 4;
  padding: 20px;
  margin-left: 15%;
`;

const ProductWrraper = styled.div`
  display: flex;
  margin-top: 20px;
  width: 100%;
  flex-wrap: wrap;
`;

const ProductDisplay = styled.div`
  width: 100%;
  padding: 20px;
  -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
`;

const ProductDisplayTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ProductDisplayImg = styled.img`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 70px;
  // border-radius: 50%;
  object-fit: cover;
  background-color: #9fa8da;
  color: white;
  font-size: 18px;
  font-weight: 600;
`;

const ProductDisplayAvatar = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 70px;
  // border-radius: 50%;
  object-fit: cover;
  background-color: #9fa8da;
  color: white;
  font-size: 18px;
  font-weight: 600;
`;

const ActionWrraper = styled.div`
  justify-content: space-between;
`;

const Button = styled.button`
  width: 80px;
  border: none;
  padding: 6px;
  background-color: #${(props) => (props.name === "edit" ? "2196f3" : "ef5350")};
  //bbcd34 blue=> 1565c0  red=>ff0f0f
  color: white;
  font-weight: 600;
  font-size: 14px;
  border-radius: 5px;
  cursor: pointer;
  margin-right: ${(props) => props.name === "edit" && "5px"};
  margin-left: ${(props) => props.name === "delete" && "5px"};
`;
const ProductDisplayTitle = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
`;
const ProductDisplayProductname = styled.span`
  font-size: 16px;
  font-weight: 600;
`;
const ProductDisplayProductTitle = styled.span`
  font-style: italic;
  font-weight: 300;
`;

const Title = styled.h2`
  margin-bottom: 10px;
`;
const DashProducts = () => {
  const [products, setProducts] = useState([]);

  const getAllProducts = async () => {
    try {
      const res = await authRequest.get("/products");
      setProducts(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleEdit = (productId) => {
    console.log(`user with user id${productId} redy to be edited`);
  };

  const handleDelete = async (productId) => {
    console.log(`product id no:${productId} will be deleted`);
    alert("Are you sure you want to permanently delete Product?");
    try {
      const res = await authRequest.delete(`/products/${productId}`);
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Container>
      <ProductWrraper>
        {products && <Title>All Products</Title>}
        {products?.map((product) => (
          <ProductDisplay key={product._id}>
            <ProductDisplayTop>
              {product.image ? (
                <ProductDisplayImg src={product.image} />
              ) : (
                <ProductDisplayAvatar>
                  {`${product.categories}`.split(",")[0].toUpperCase()}
                </ProductDisplayAvatar>
              )}
              <ProductDisplayTitle>
                <ProductDisplayProductname>
                  {product.title}
                </ProductDisplayProductname>
                <ProductDisplayProductTitle>
                  €{product.price}
                </ProductDisplayProductTitle>
                <ProductDisplayProductTitle>
                  {product.inStock ? "In Stock" : "sold out"}
                </ProductDisplayProductTitle>
              </ProductDisplayTitle>
              <ActionWrraper>
                <Button name="edit" onClick={() => handleEdit(product._id)}>
                  Edit
                </Button>
                <Button name="delete" onClick={() => handleDelete(product._id)}>
                  Delete
                </Button>
              </ActionWrraper>
            </ProductDisplayTop>
          </ProductDisplay>
        ))}
      </ProductWrraper>
      <button onClick={getAllProducts}>Get All Products</button>
    </Container>
  );
};

export default DashProducts;
