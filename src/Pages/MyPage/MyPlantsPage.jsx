import React from 'react';
import styled from 'styled-components';
import { Text, Grid, Container } from '../../Elements';
import { GeneralHeader, MyPlantsList } from '../../Components';

const MyPlantsPage = () => {

    return (
        <React.Fragment>
            <Container type="np">
                <GeneralHeader title="내 식물"/>
            </Container>
            <Hr />
            <Container>
                <MyPlantsList />
                <div style={{height:"60px", width:"100%"}}></div>
            </Container>
                
        </React.Fragment>
    )
}
const Hr = styled.hr`
border: 1px solid #E0E0E0;
margin:0px;
padding: 0px;
`
export default MyPlantsPage;
