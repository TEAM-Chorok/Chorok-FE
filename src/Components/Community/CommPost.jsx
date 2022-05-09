import React from "react";
import { Text, Grid, Image } from "../../Elements";
import styled from "styled-components";
import { FaRegHeart, FaRegComment, FaRegBookmark } from "react-icons/fa";
import CommentOutlinedIcon from '@mui/icons-material/CommentOutlined';

const CommPost = () => {

    return (
        <React.Fragment>
            <Grid width="100%" padding="20px 0px" margin="0px 0px 12px 0px">
                <Grid width="100%" >
                    <Grid><Text size="xs" color="#24A148">식물추천</Text></Grid>
                </Grid>
                <Grid width="100%">
                    <Grid>
                        <Text size="large">커뮤니티 글 제목</Text>
                    </Grid>
                    <Grid is_flex align="center" margin="5px 0px 0px 0px">
                        <Image type="circle" size="24px" imgUrl="sample.jpeg"/>
                        <Text margin="0px 5px" size="small">글쓴이</Text>
                        <Grid><Text size="xsmall" color="#6F6F6F">・ n시간 전</Text></Grid>
                    </Grid>
                    <Grid margin="8px 0px 16px 0px"><Text color="#262626" size="small">커뮤니티 글 내용</Text></Grid>
                    <Grid width="100%" >
                        <Image type="rectangle" imgUrl="sample.jpeg" width="100%" height="240px"/>
                    </Grid>
                </Grid>
                <Grid width="100%" margin="16px 0px" position="relative">
                    <Grid is_flex >
                        <FaRegHeart style={{width:"20px", height:"fit-content"}}/><Text margin="0px 8px" size="base"  color="#6F6F6F">11</Text>
                        <FaRegComment  style={{width: "20px", height:"fit-content"}} /><Text margin="0px 8px" size="base" color="#6F6F6F">5</Text>
                    </Grid>
                    <Grid position="absolute" top="0px" right="0px" >
                        <FaRegBookmark style={{width: "20px", height:"fit-content"}} />
                    </Grid>
                </Grid>
            </Grid>
        </React.Fragment>
        
    )
}

export default CommPost;