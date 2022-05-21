import { Button } from "@mui/material";
import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom/cjs/react-router-dom.min";
import styled from "styled-components";
import { DetailCommPost, CommPost, GeneralHeader, CommPostCommentList } from "../../Components";
import CommBottomSheet from "../../Components/Community/CommBottomSheet";
import { Container, Input, Permit, Grid } from "../../Elements";
import { actionCreators as postActions } from "../../Redux/Modules/post";
import { actionCreators as userActions } from "../../Redux/Modules/User";

const PostDetail = () => {
    const history = useHistory();
    const postId = useParams().postId;

    const dispatch = useDispatch();
    const post = useSelector(state => state.post?.post);
    const nickname = localStorage.getItem('nickname');
    const commentList = post?.commentList;
    const [comment, setComment] = React.useState("");


    useEffect(() => {
        dispatch(postActions.getDetailPostDB(postId));
        dispatch(userActions.isLoginDB());
    }, []);

    const addComment = () => {
        dispatch(postActions.addCommentDB(postId, comment));
    }

    const is_session = sessionStorage.getItem('token') ? true : false;

    if(!post){
        return (
            <React.Fragment>
                <Container>
                    <GeneralHeader />
                </Container>
            </React.Fragment>
        )
    }

    return (
        <React.Fragment>
            <Container>
                <GeneralHeader title={post?.postType} size="base" />
                {is_session && nickname === post?.nickname ? 
                <CommBottomSheet type="post" postId={post?.postId}/> : 
                null
                }
                    
            </Container>
            <Container type="np">
                <HR />
                <DetailCommPost postList={post}/>
            </Container>
            <Container>
                <CommPostCommentList commentList={commentList} nickname={nickname}/>
            </Container>
            <Container type="np">
                <HR style={{marginTop:"60px"}}/>
            </Container>
            <Container>
                <Grid position="relative" width="100%">
                    <Input 
                    _onChange={(e) => setComment(e.target.value)}
                    type="square" width="100%" height="40px" placeholder="댓글을 입력해주세요" padding="0px 30px 0px 16px" />
                    <Button 
                    onClick={()=>{addComment()}}
                    variant="text" 
                    style={{color: "#24A148", fontSize:"14px", position:"absolute", top:"0px", right:"0px",
                    margin:"0px", padding:"7.5px"}}>등록</Button>
                </Grid>
            </Container>
        </React.Fragment>
    )
}
const HR = styled.hr`
    border: 1px solid #E0E0E0;
    width: 100%;
    margin: 0px;
`
export default PostDetail;