import React from "react";
import { Text, Grid } from "../../Elements";
import styled from "styled-components";
import EnergySavingsLeafOutlinedIcon from '@mui/icons-material/EnergySavingsLeafOutlined';
import CommentOutlinedIcon from '@mui/icons-material/CommentOutlined';

const CommPost = () => {

    return (
        <React.Fragment>
            <Grid key={1} width="100%">
                <Grid width="100%" position="relative" >
                    <Grid><Text fontSize="0.7em" color="grey">카테고리</Text></Grid>
                    <Grid position="absolute" top="0px" right="15px"><Text fontSize="0.7em" color="grey">n시간 전</Text></Grid>
                </Grid>
                <Grid width="100%">
                    <Grid margin="10px 0px" ><Text size="M">커뮤니티 글 제목</Text></Grid>
                    <Grid margin="0px 0px 7px 0px" ><Text>커뮤니티 글 내용</Text></Grid>
                    <Grid width="100%" height="100px">
                        <Image src="sample.jpeg"/>
                    </Grid>
                </Grid>
                <Grid width="100%"  padding="25px 0px 15px 0px" is_flex>
                    <Grid margin="0px 15px"><EnergySavingsLeafOutlinedIcon style={{width:"0.7em", height:"fit-content"}}/><Text>n</Text></Grid>
                    <Grid margin="0px 15px" ><CommentOutlinedIcon  style={{width:"0.7em", height:"fit-content"}} /><Text>n</Text></Grid>
                </Grid>
            </Grid>
        </React.Fragment>
        
    )
}
const Image = styled.img`
    width: 100%;
    height: 100px;
    object-fit: cover;
    border-radius: 10px;
    // opacity: 80%;
`
export default CommPost;