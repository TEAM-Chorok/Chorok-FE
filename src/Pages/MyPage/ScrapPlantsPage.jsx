import React from 'react';
import styled from 'styled-components';
import { GeneralHeader, ScrapPicturesPostList } from '../../Components';
import { Text, Grid, Container } from '../../Elements';

const ScrapPlantsPage = () => {

    return (
        <React.Fragment>
            <Container>
                <GeneralHeader title="스크랩한 식물" size="h5" />
                <ScrapPicturesPostList />
            </Container>
        </React.Fragment>
    )
}
export default ScrapPlantsPage;
