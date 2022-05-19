import React from 'react';
import styled from 'styled-components';
import { GeneralHeader, ScrapPicturesPostList } from '../../Components';
import { Text, Grid, Container } from '../../Elements';

const ScrapPicturesPage = () => {

    return (
        <React.Fragment>
            <Container>
                <GeneralHeader title="스크랩한 사진" size="base"/> 
            </Container>
            <Container type="np">
                <hr style={{border: "1px solid #E0E0E0", margin:"0px"}} />
            </Container>
            <Container>
                <ScrapPicturesPostList />
            </Container>
        </React.Fragment>
    )
}
export default ScrapPicturesPage;
