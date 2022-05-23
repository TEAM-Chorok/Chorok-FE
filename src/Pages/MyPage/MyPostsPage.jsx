import React from "react";
import styled from "styled-components";
import { GeneralHeader, MyPostsPostList } from "../../Components";
import { Container } from "../../Elements";

const MyPostsPage = () => {
    return (
        <React.Fragment>
            <Container>
                <GeneralHeader title="내가 쓴 글" size="base"/>
            </Container>
            <Container type="np">
                <hr style={{border: "1px solid #E0E0E0", margin:"0px"}} />
            </Container>
            <MyPostsPostList />
                <div style={{height:"60px", width:"100%"}}></div>
        </React.Fragment>
    )
}
export default MyPostsPage;