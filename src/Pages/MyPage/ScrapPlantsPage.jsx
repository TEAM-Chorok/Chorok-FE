import React from 'react';
import styled from 'styled-components';
import { GeneralHeader, ScrapPicturesPostList, ScrapPlantList } from '../../Components';
import { Text, Grid, Container } from '../../Elements';

const ScrapPlantsPage = () => {

    return (
        <React.Fragment>
            <Container>
                <GeneralHeader title="스크랩한 식물" />
            </Container>
            <Hr />
            <Container>
                <ScrapPlantList />
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
export default ScrapPlantsPage;
