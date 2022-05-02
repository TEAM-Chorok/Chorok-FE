import React from 'react';
import styled from 'styled-components';
import { Text, Grid, Container } from '../../Elements';
import { MyPlantsHeader, MyPlantsList } from '../../Components';

const MyPlantsPage = () => {

    return (
        <React.Fragment>
            <Container>
                <MyPlantsHeader />
                <MyPlantsList />
            </Container>
        </React.Fragment>
    )
}
export default MyPlantsPage;
