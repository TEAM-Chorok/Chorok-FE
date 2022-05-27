import React from 'react';
import styled from 'styled-components';
import { GeneralHeader, ScrapPicturesPostList, ScrapPlantList } from '../../Components';
import { Text, Grid, Container } from '../../Elements';

const ScrapPlantsPage = () => {

    return (
        <React.Fragment>
            <Container type="np">
                <GeneralHeader title="스크랩한 식물" />
                <Grid height="1px" bg="#E0E0E0"/>
            </Container>
            <Container>
                <ScrapPlantList />
                <div style={{height:"60px", width:"100%"}}></div>
            </Container>
        </React.Fragment>
    )
}

export default ScrapPlantsPage;
