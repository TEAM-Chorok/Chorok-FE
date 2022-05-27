import React from "react";
import styled from "styled-components";
import { GeneralHeader, MyPostsPostList } from "../../Components";
import { Container, Grid } from "../../Elements";


const MyPostsPage = () => {
    return (
        <React.Fragment>
            <GeneralHeader title="내가 쓴 초록톡" size="base" />
            <Grid height="1px" bg="#E0E0E0"/>
            <MyPostsPostList />
            <div style={{ height: "60px", width: "100%" }}></div>
        </React.Fragment>
    )
}
export default MyPostsPage;