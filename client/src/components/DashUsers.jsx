import {React, useState} from "react";
import styled from "styled-components";
import {authRequest} from "../requestMethods";


const Container = styled.div`
  // flex: 4; //! i want to evenly distribute the screen width between the side bar compnent and the users/products
  // margin-bottom: 20px;

  // flex: 4;
  padding: 20px;
  margin-left: 15%;
`;

const UserWrraper = styled.div`
  display: flex;
  margin-top: 20px;
  width: 100%;
  flex-wrap: wrap;
`;

const UserDisplay = styled.div`
  width: 100%;
  padding: 20px;
  -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
`;

const UserDisplayTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const UserDisplayImg = styled.img`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  object-fit: cover;
  background-color: #9fa8da;
  color: white;
  font-size: 18px;
  font-weight: 600;
`;

const UserDisplayAvatar = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
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
const UserDisplayTitle = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
`;
const UserDisplayUsername = styled.span`
  font-size: 16px;
  font-weight: 600;
`;
const UserDisplayUserTitle = styled.span`
  font-style: italic;
  font-weight: 300;
`;

const Title = styled.h2`
margin-bottom:10px;
`;



const DashUsers = (props) => {
  const [users, setUsers] = useState([]);

  const getAllUsers = async () => {
    try {
      const res = await authRequest.get("/users");
      setUsers(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleEdit = (userId) => {
    console.log(`user with user id${userId} redy to be edited`);
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

  
  return (
    <Container>
      <UserWrraper>
        {users && <Title>All Users</Title>}
        {users?.map((user) => (
          <UserDisplay key={user._id}>
            <UserDisplayTop>
            { user.image? (<UserDisplayImg src={user.image}/>)
              :<UserDisplayAvatar>
                {`${user.lastName}`
                  ? `${user.firstName}`[0].toUpperCase() +
                    `${user.lastName}`[0].toUpperCase()
                  : `${user.firstName}`[0].toUpperCase()}
              </UserDisplayAvatar>
              }
              <UserDisplayTitle>
                <UserDisplayUsername>
                  {user.firstName} {user.lastName}
                </UserDisplayUsername>
                <UserDisplayUserTitle>{user.email}</UserDisplayUserTitle>
              </UserDisplayTitle>
              <ActionWrraper>
                <Button name="edit" onClick={() => handleEdit(user._id)}>
                  Edit
                </Button>
                <Button name="delete" onClick={() => handleDelete(user._id)}>
                  Delete
                </Button>
              </ActionWrraper>
            </UserDisplayTop>
          </UserDisplay>
        ))}
      </UserWrraper>
      <button onClick={getAllUsers}>Get All Users</button>
    </Container>
  );
};

export default DashUsers;
