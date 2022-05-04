import React from 'react';
import styled from 'styled-components';
import { MyPicturesHeader, MyPicturesPostList } from '../../Components';
import { Text, Grid, Container } from '../../Elements';

const MyPicturesPage = () => {

    return (
        <React.Fragment>
            <Container>
                <MyPicturesHeader />
                <MyPicturesPostList />
            </Container>
        </React.Fragment>
    )
}
export default MyPicturesPage;
