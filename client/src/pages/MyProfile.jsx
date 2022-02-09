import React from 'react';
import styled from 'styled-components';
import {Avatar} from "@material-ui/core";
import { useSelector } from 'react-redux';


const Container = styled.div`
  flex: 4;//! i want to evenly distribute the screen width between the side bar compnent and the users/products
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  `;
const ListContainer = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin:0;
  padding:0;
`;
const ListItem = styled.li`
  margin-bottom: 20px;
  color: black;
  list-style-type: none;
`;




const MyProfile = () => {
    const user=useSelector((state)=>state.user.currentUser)
    return (
        <Container>
           <h1>This is My Profile </h1>
           <Avatar style={{backgroundColor: "orange",width:"100px",height:"100px"}}>User</Avatar>
          {user&& <ListContainer>
               <h3>User Data</h3>
               <ListItem style={{color:"green"}}>UserId: {user._id}</ListItem>
               <ListItem>Username: {user.username}</ListItem>
               <ListItem>FirstName: {user.firstName}</ListItem>
               {user.lastName && <ListItem>LastName: {user.lastName}</ListItem>}
               <ListItem style={{color:"red"}}>Role: {user.isAdmin===true?"Admin":"Client"}</ListItem>
               <ListItem style={{color:"blue"}}>AccessToken: <br/>{user.accessToken} <br/></ListItem>
               <ListItem style={{fontWeight:700}}>User Created On: {user.createdAt}</ListItem>
              
           </ListContainer>}
        </Container>
    )
}

export default MyProfile
