import React from "react";
import styled from "styled-components";
import { CommPost, GeneralHeader, CommPostCommentList } from "../../Components";
import { Container } from "../../Elements";
import { BiDotsVerticalRounded } from 'react-icons/bi';

const PostDetail = () => {
    return (
        <React.Fragment>
            <Container>
                <GeneralHeader title="{category}" size="base" />
                <BiDotsVerticalRounded style={{position:"absolute", right:"20px", top:"32px"}}/>
                <HR />
                <CommPost />
                <CommPostCommentList />
            </Container>
        </React.Fragment>
    )
}
const HR = styled.hr`
    border: 1px solid #E0E0E0;
    width: 100vw;
    margin-left: calc(-50vw + 50%);
`
export default PostDetail;