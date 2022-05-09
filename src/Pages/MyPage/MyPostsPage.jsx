import React from "react";
import styled from "styled-components";
import { GeneralHeader, MyPostsPostList } from "../../Components";
import { Container } from "../../Elements";

const MyPostsPage = () => {
    return (
        <React.Fragment>
            <Container>
                <GeneralHeader title="내가 쓴 글" size="h5"/>
                <MyPostsPostList />
            </Container>
        </React.Fragment>
    )
}
export default MyPostsPage;