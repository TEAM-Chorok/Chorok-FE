import React from 'react';
import styled from 'styled-components';
import { GeneralHeader, ScrapPicturesPostList } from '../../Components';
import { Text, Grid, Container } from '../../Elements';

const ScrapPicturesPage = () => {

    return (
        <React.Fragment>
            <Container>
                <GeneralHeader title="스크랩한 사진" size="h5"/>
                <ScrapPicturesPostList />
            </Container>
        </React.Fragment>
    )
}
export default ScrapPicturesPage;
