import React from "react";
import styled from "styled-components";
import { Grid, Text, Image } from "../../../Elements";
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';

const MyPostsPost= () => {
    return (
        <React.Fragment>
            <Grid height="462px" width="100%" padding="15px 0px 0px 0px" >
                <PostHeader>
                    <Text color="#0AAF42">category</Text>
                    <Text color="#878D96">n시간 전</Text>
                </PostHeader>
                    <Text fontSize="18px">post title</Text>
                <PostProfile>
                    <Grid><Image imgUrl="sample.jpeg" type="circle" size="24px"/></Grid>
                    <PostHeaderInfo>
                        <Text fontSize="14px" margin="2px 0px">nickname</Text>
                    </PostHeaderInfo>
                </PostProfile>
                <Grid margin="10px 0px">
                    <Text fontSize="14px" margin="20px 0px">post body</Text>
                    <PostImage style={{backgroundImage:"url(sample.jpeg)"}}/>
                </Grid>
                <PostFooter>
                    <Grid><FavoriteBorderOutlinedIcon></FavoriteBorderOutlinedIcon></Grid>
                    <Text fontSize="20px" margin="0px">n</Text>
                    <Grid><ChatBubbleOutlineOutlinedIcon></ChatBubbleOutlineOutlinedIcon></Grid>
                    <Text fontSize="20px" margin="1px">n</Text>
                </PostFooter>
            </Grid>
        </React.Fragment>
    )
}
const PostHeader = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`
const PostProfile = styled.div`
    width: 100%;
    height: fit-content;
    margin: 8px 0px;
    display: grid; 
    grid-template-columns: 1fr 10fr;
    align-items:center;
`
const PostHeaderInfo = styled.div`
    width: 100%;
    height: fit-content;
    margin-left: 5px;
`
const PostFooter = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 7fr;
`
const PostImage = styled.div`
    width: 348px;
    height: 240px;
    margin: 15px 0px 10px 0px;
    border-radius: 10px;

`
export default MyPostsPost;