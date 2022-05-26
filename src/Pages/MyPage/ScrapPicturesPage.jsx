import React from 'react';
import styled from 'styled-components';
import { GeneralHeader, ScrapPicturesPostList } from '../../Components';
import { Text, Grid, Container } from '../../Elements';

const ScrapPicturesPage = () => {

    return (
        <React.Fragment>
            <Container type="np">
                <GeneralHeader title="스크랩한 사진" size="base"/> 
                <hr style={{border: "1px solid #E0E0E0", margin:"0px"}} />
                <ScrapPicturesPostList />
                <div style={{height:"60px", width:"100%"}}></div>
            </Container>
        </React.Fragment>
    )
}
export default ScrapPicturesPage;
