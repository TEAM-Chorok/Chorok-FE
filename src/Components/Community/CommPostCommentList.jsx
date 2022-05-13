import { Grid, Image, Permit, Text } from "../../Elements";
import React from "react";
import styled from "styled-components";
import { BiDotsVerticalRounded } from 'react-icons/bi';
import CommBottomSheet from "./CommBottomSheet";

const CommPostCommentList = (props) => {
    
    const commentList = props?.commentList;

    if(!commentList){
        return (
            <div></div>
        )
    }
    return (
        <React.Fragment>
            {commentList.map((p) => {
                return (
                    <CommentWrap key={p.commentId}>
                        <Grid>
                            <Image type="circle" size="24px" imgUrl={p.profileImgUrl} />  
                        </Grid>
                        <CommentRowsBox>
                            <Grid>
                                <Text margin="0px 5px" size="small">{p.nickname}</Text>
                                <Text size="xsmall" color="#6F6F6F">・ {p.commentRecentTime}</Text>
                            </Grid>
                            <Grid margin="0px 5px"><Text size="small">{p.commentContent}</Text></Grid>
                        </CommentRowsBox>
                        <Permit>
                            <Grid><CommBottomSheet /></Grid>
                        </Permit>
                    </CommentWrap>
                )
            })}
        </React.Fragment>
    )

}
const CommentWrap = styled.div`
    height: fit-content;
    display: grid;
    grid-template-columns: 1fr 10fr 1fr;
    padding: 12px 20px;
    border-bottom: 1px solid #E0E0E0;
`
const CommentRowsBox = styled.div`
    width: 100%;
    height: fit-content;
    display: grid;
    align-items: center;
`
export default CommPostCommentList;