import React from 'react';
import styled from 'styled-components';
import DashProducts from '../components/DashProducts';
import DashUsers from '../components/DashUsers';




const Container=styled.div`
dislay:flex;
flex-direction:column;
justify-content:center;
align-items:center;
margin-left:70px;
`;

const DashboardRoot = () => {
    return (
        <Container>
            <h2>Mixed Category</h2>
            <DashProducts/>
            <DashUsers/>
            
        </Container>
    )
}

export default DashboardRoot
