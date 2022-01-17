import styled from "styled-components";
import CategoryItem from "./CategoryItem";
import {categories} from "../data";

const Container = styled.div`
padding:20px;
display:flex;
justify-content:space-between;
`;
//! try to give some animation and zoom on hover over the images for the Categories
//! can put light balck opacity full of the rectangle 
const Categories = () => {
  return (
    <Container >
      {categories.map((item) => (
        <CategoryItem key={item.id} item={item} />
      ))}
    </Container>
  );
};

export default Categories;
