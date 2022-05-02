import React from 'react';
import styled from 'styled-components';
import { Text, Grid, Container } from '../../Elements';
import { MyPagePost } from '../index';

const MyPicturesPostList = () => {

    return (
        <React.Fragment>
            {/* map으로 postlist 돌림 */}
            <MyPagePost />
            <MyPagePost />
            <MyPagePost />
        </React.Fragment>
    )
}
export default MyPicturesPostList;
