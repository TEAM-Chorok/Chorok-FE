import React from "react";
import styled from "styled-components";
import { Container,Grid } from "../../Elements";
import MyPostsPost from "./Setting/MyPostsPost";

const MyPostsPostList= () => {
    return (
        <React.Fragment>        
            {/* map돌리기 */}
            <MyPostsPost />
            <MyPostsPost />
        </React.Fragment>
    )
}
export default MyPostsPostList;