import { Grid, Image, Text } from "../../Elements";
import React from "react";
import styled from "styled-components";
import { BiDotsVerticalRounded } from 'react-icons/bi';

const CommPostCommentList = () => {
    return (
        <React.Fragment>
            <CommentWrap>
                <Grid>
                    <Image type="circle" size="24px" imgUrl="https://pbs.twimg.com/media/ER7b4hOVAAAfBg-.jpg:large" />  
                </Grid>
                <CommentRowsBox>
                    <Grid>
                        <Text margin="0px 5px" size="small">댓쓴이</Text>
                        <Text size="xsmall" color="#6F6F6F">・ n시간 전</Text>
                    </Grid>
                    <Grid margin="0px 5px"><Text size="small">댓글내용댓글내용댓글내용댓글내용댓글내용댓글내용댓글내용댓글내용</Text></Grid>
                </CommentRowsBox>
                <Grid><BiDotsVerticalRounded style={{marginTop:"5px"}} /></Grid>
            </CommentWrap>

            <CommentWrap>
                <Grid>
                    <Image type="circle" size="24px" imgUrl="https://pbs.twimg.com/media/ER7b4hOVAAAfBg-.jpg:large" />  
                </Grid>
                <CommentRowsBox>
                    <Grid>
                        <Text margin="0px 5px" size="small">댓쓴이</Text>
                        <Text size="xsmall" color="#6F6F6F">・ n시간 전</Text>
                    </Grid>
                    <Grid margin="0px 5px"><Text size="small">댓글내용댓글내용댓글내용댓글내용댓글내용댓글내용댓글내용댓글내용</Text></Grid>
                </CommentRowsBox>
                <Grid><BiDotsVerticalRounded style={{marginTop:"5px"}} /></Grid>
            </CommentWrap>
        </React.Fragment>
    )

}
const CommentWrap = styled.div`
    width: 100%;
    height: fit-content;
    display: grid;
    grid-template-columns: 1fr 10fr 1fr;
    padding: 12px 0px;
    border-bottom: 1px solid #E0E0E0;
`
const CommentRowsBox = styled.div`
    width: 100%;
    height: fit-content;
    display: grid;
    align-items: center;
`
export default CommPostCommentList;