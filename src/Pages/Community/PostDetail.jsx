import { Button } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import styled from "styled-components";
import { DetailCommPost, CommPost, GeneralHeader, CommPostCommentList, Alert2 } from "../../Components";
import CommBottomSheet from "../../Components/Community/CommBottomSheet";
import { Container, Input, Permit, Grid, Text } from "../../Elements";
import { actionCreators as postActions } from "../../Redux/Modules/post";
import { actionCreators as userActions } from "../../Redux/Modules/User";

const PostDetail = () => {

    const history = useHistory();
    const postId = useParams().postId;
    const dispatch = useDispatch();
    const post = useSelector(state => state.post?.post);
    const nickname = localStorage.getItem('nickname');
    const commentList = post?.commentList;
    const contentRef = React.useRef();

    const [comment, setComment] = React.useState("");

    const [message, setMessage] = React.useState();
    const [open, setOpen] = React.useState(false);
    const [deleteOpen, setDeleteOpen] = React.useState(false);


    const deleteOne = () => {
        dispatch(postActions.deletePostDB(postId));      
      }

    useEffect(() => {
        dispatch(postActions.getDetailPostDB(postId));
        dispatch(userActions.isLoginDB());
    }, []);

    const addComment = () => {
        if (comment === "" || comment === " ") {
            setMessage("댓글 내용을 입력해주세요!");
            setOpen(true);
            return;
        }
        else {
            dispatch(postActions.addCommentDB(postId, comment));
            contentRef.current.value = null;
        }
    }

    const is_local = localStorage.getItem('token') ? true : false;

    if (!post) {
        return (
            <React.Fragment>
                <Container type="np">
                    <GeneralHeader />
                </Container>
            </React.Fragment>
        )
    }

    return (
        <React.Fragment>
            <Container type="np">
                <GeneralHeader title={post?.postType} size="base" />
                {is_local && nickname === post?.nickname ?
                    <CommBottomSheet type="post" postId={post?.postId} setDeleteOpen={setDeleteOpen} /> :
                    null
                }

            </Container>
            <Container type="np">
                <Grid width="100%" height="1px" bg="#E0E0E0" />
                <DetailCommPost postList={post} />
                {commentList?.map((cmt) => {
                    return (
                        <CommPostCommentList
                            key={cmt?.commentId}
                            postId={post?.postId}
                            commentId={cmt?.commentId}
                            content={cmt?.commentContent}
                            name={cmt?.nickname}
                            time={cmt?.commentRecentTime}
                            img={cmt?.profileImgUrl === null || cmt?.profileImgUrl === "null"? "/img/noProfileImgSmall.svg" : cmt.profileImgUrl}
                            setMessage={setMessage}
                            setOpen={setOpen} />
                    )
                })}
            </Container>
            <Container type="np">
                <Grid width="100%" height="1px" bg="#E0E0E0" />
            </Container>
            {/* <Container> */}
            <Wrapper>
                <CommentBox >
                    <Input
                        _onChange={(e) => setComment(e.target.value)}
                        type="comment" placeholder="댓글을 입력해주세요" _ref={contentRef} />
                    <ButtonBox>
                        <Button
                            onClick={() => { addComment() }}
                            variant="text"
                            style={{ color: "#24A148", fontSize: "14px" }}>등록</Button>
                    </ButtonBox>
                </CommentBox>
            </Wrapper>
            {deleteOpen &&
                <AlertBox>
                    <Alert2 open={deleteOpen} setOpen={setDeleteOpen} btn1={"확인"} func={deleteOne}>
                        <Text bold wordbreak size="small">
                        게시글을 삭제할까요?
                        </Text>
                    </Alert2>
                </AlertBox>
            }
            {/* </Container> */}
            <Alert2 btn1="확인" open={open} setOpen={setOpen}>
                <Text size="small">{message}</Text>
            </Alert2>
            <div style={{ height: "60px" }}></div>
        </React.Fragment>
    )
}

const Wrapper = styled.div`
width: 100%;
height: fit-content%;
background: #F7F8FA;
overflow: hidden;
`
const CommentBox = styled.div`
  position: relative;
  box-sizing: border-box;

  padding: 18px 16px 16px 16px;
  width: 100%;

  background: ${(props) => props.edit ? "#fff" : "#F7F8FA"};

`
const ButtonBox = styled.div`
  position: absolute;
  top: 18px;
  right: 24px;
`

const AlertBox = styled.div`
  position: absolute;
  top: 0;
  padding-top: 40vh;
  width: 100%;
`

export default PostDetail;