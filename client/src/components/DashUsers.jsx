import {React, useState} from "react";
import styled from "styled-components";
import {authRequest} from "../requestMethods";
import {DataGrid} from "@material-ui/data-grid";

const Container = styled.div`
  flex: 4; //! i want to evenly distribute the screen width between the side bar compnent and the users/products
  margin-bottom: 20px;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
`;
const Title = styled.h2``;

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
  color: orange;
  list-style-type: none;
  margin: 10px;
  font-weight: 600;
  font-size: 1.3rem;
`;

const DashUsers = () => {
const [users, setUsers] = useState([]);
// // const[isAuth,setIsAuth]=useState(true);

const getAllUsers = async () => {
  try {
    const res = await authRequest.get("/users");
    setUsers(res.data);
  } catch (err) {
    console.log(err);
  }
};

const handleDelete = async (userId) => {
  alert("Are you sure you want to permanently delete user?");
  try {
    const res = await authRequest.delete(`/users/${userId}`);
    console.log(res.data);
  } catch (err) {
    console.log(err);
  }
};



  const Columns = [
    {field: "id", headerName: "ID", width: 90},
    {
      field: "firstName",
      headerName: "First Name",
      width: 150,
      editable: true,
    },
    {
      field: "lastName",
      headerName: "Last name",
      width: 150,
      editable: true,
    },
    {
      field: "email",
      headerName: "Email",
      width: 150,
      editable: true,
    },
    {
      field: "username",
      headerName: "UserName",
      width: 150,
      editable: true,
    },
    {
      field: "createdAt",
      headerName: "User Created@",
      // type: 'number',
      width: 110,
      editable: true,
    },
    {
      field: "status",
      headerName: "Status",
      // type: 'number',
      default: "Active",
      width: 110,
      editable: true,
    },
    {
      field: "transaction",
      headerName: "Transaction Amount",
      type: "number",
      width: 110,
      editable: true,
    },
  ];


 
 

    
 
         
      

  return (
    <Container>
      <Wrapper>
        <Title>Users Category</Title>
        {users?.map((user) => (
          <ListContainer key={user._id}>
            <List>{user.firstName}</List>
            <button onClick={() => handleDelete(user._id)}>delete</button>
          </ListContainer>
        ))}
      </Wrapper>
      <button onClick={getAllUsers}>Get All Users</button>
      {/* { isAuth && <span style={{color:"red",marginLeft:"20px"}}>You are not autherised to access this information</span>} */}
    </Container>
  );
};

export default DashUsers;
