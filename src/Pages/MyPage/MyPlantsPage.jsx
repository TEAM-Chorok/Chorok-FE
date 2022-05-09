import React from 'react';
import styled from 'styled-components';
import { Text, Grid, Container } from '../../Elements';
import { GeneralHeader, MyPlantsList } from '../../Components';

const MyPlantsPage = () => {

    return (
        <React.Fragment>
            <Container>
                <GeneralHeader title="내 식물" size="h5"/>
                <MyPlantsList />
            </Container>
        </React.Fragment>
    )
}
export default MyPlantsPage;
