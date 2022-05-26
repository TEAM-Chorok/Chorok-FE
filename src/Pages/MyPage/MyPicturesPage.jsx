import React from 'react';
import styled from 'styled-components';
import { GeneralHeader, MyPicturesPostList } from '../../Components';
import { Text, Grid, Container } from '../../Elements';

const MyPicturesPage = () => {

    return (
        <React.Fragment>
            <Container type="np">
                <GeneralHeader title="내 식물공간" size="base"/>
            
                <hr style={{border: "1px solid #E0E0E0", margin:"0px"}} />
                <MyPicturesPostList />
                <div style={{height:"60px", width:"100%"}}></div>
            </Container>
        </React.Fragment>
    )
}
export default MyPicturesPage;
