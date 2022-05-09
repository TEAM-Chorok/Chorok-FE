import React from 'react';
import styled from 'styled-components';
import { GeneralHeader, MyPicturesPostList } from '../../Components';
import { Text, Grid, Container } from '../../Elements';

const MyPicturesPage = () => {

    return (
        <React.Fragment>
            <Container>
                <GeneralHeader title="내 사진" size="h5"/>
                <MyPicturesPostList />
            </Container>
        </React.Fragment>
    )
}
export default MyPicturesPage;
