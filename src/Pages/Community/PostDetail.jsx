import { Button } from "@mui/material";
import React, { useEffect }  from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import styled from "styled-components";
import { DetailCommPost, CommPost, GeneralHeader, CommPostCommentList, Alert2 } from "../../Components";
import CommBottomSheet from "../../Components/Community/CommBottomSheet";
import { Container, Input, Permit, Grid, Text} from "../../Elements";
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

    const [message, setMessage] = React.useState();
    const [open, setOpen] = React.useState(false);

    useEffect(() => {
        dispatch(postActions.getDetailPostDB(postId));
        dispatch(userActions.isLoginDB());
    }, []);

    const addComment = () => {
        if(comment === "" || comment === " ") { 
            setMessage("댓글 내용을 입력해주세요!");
            setOpen(true);
            return;
        }else {
            dispatch(postActions.addCommentDB(postId, comment));
        }

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
            {/* <Container> */}
                <Wrapper> 
                    <CommentBox>
                        <Input 
                            _onChange={(e) => setComment(e.target.value)}
                            type="comment" placeholder="댓글을 입력해주세요"  />
                            <ButtonBox>
                                <Button 
                                    onClick={()=>{addComment()}}
                                    variant="text" 
                                    style={{color: "#24A148", fontSize:"14px"}}>등록</Button>
                            </ButtonBox>
                     </CommentBox>   
                </Wrapper>
            {/* </Container> */}
            <Alert2 btn1="확인" open={open} setOpen={setOpen}>
                <Text size="small">{message}</Text>
            </Alert2>
            <div style={{height:"60px"}}></div>
        </React.Fragment>
    )
}
const HR = styled.hr`
    border: 1px solid #E0E0E0;
    width: 100%;
    margin: 0px;
`
const Wrapper = styled.div`
width: 100%;
height: fit-content%;
background: #F7F8FA;
overflow: hidden;
`
const CommentBox = styled.div`
  position: relative;
  box-sizing: border-box;

  padding: 16px;
  width: 100%;
`
const ButtonBox = styled.div`
  position: absolute;
  top: 18px;
  right: 24px;
`
export default PostDetail;