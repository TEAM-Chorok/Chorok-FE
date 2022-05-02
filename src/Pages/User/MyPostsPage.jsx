import React from "react";
import styled from "styled-components";
import { MyPostsHeader, MyPostsPostList } from "../../Components";
import { Container } from "../../Elements";

const MyPostsPage = () => {
    return (
        <React.Fragment>
            <Container>
                <MyPostsHeader />
                <MyPostsPostList />
            </Container>
        </React.Fragment>
    )
}
export default MyPostsPage;