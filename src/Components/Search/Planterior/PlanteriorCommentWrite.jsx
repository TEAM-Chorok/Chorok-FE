import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import styled from "styled-components";
import { Button, Container, Grid, Input, Text } from "../../../Elements";
import { actionCreators as searchActions } from "../../../Redux/Modules/Search";
import Alert2 from "../../Alert2";

// 탐색 - planterior의 추천식물 목록 

const PlanteriorCommentWrite = () => {
  const dispatch = useDispatch();

  const postId = useParams().postId;
  const contentRef = React.useRef();
  const [message, setMessage] = React.useState();
  const [open, setOpen] = React.useState(false);


  const addComment = () => {
    if (contentRef.current.value === "" ||
      contentRef.current.value === " " ||
      contentRef.current.value === "  ") {
      setMessage("댓글 내용을 입력해주세요!")
      setOpen(true);
      return;
    }
    const commentdata = {
      postId : postId,
      commentContent : contentRef.current.value,
    }
    console.log(commentdata);
    dispatch(searchActions.writePlanteriorCommentDB(commentdata));
    contentRef.current.value = null;
  }

  return (
    <React.Fragment>
      <Wrapper open={open}>
        <CommentBox>
          <Input type="comment" placeholder="댓글을 입력해주세요." _ref={contentRef} />
          <ButtonBox>
            <Button type="tran" _onClick={() => { addComment(); }}>
              <Text size="small" color="#24A148">등록</Text>
            </Button>
          </ButtonBox>
        </CommentBox>
      </Wrapper>
      <Alert2 btn1="확인" open={open} setOpen={setOpen}>
        <Text size="small">{message}</Text>
      </Alert2>
    </React.Fragment>
  )
}


const Wrapper = styled.div`
width: 100%;
height: 100%;
background: #F7F8FA;
overflow: ${(props) => props.open ? "hidden" : "auto"};
`


const CommentBox = styled.div`
  position: relative;
  box-sizing: border-box;

  padding: 16px;
  width: 100%;
`
const ButtonBox = styled.div`
  position: absolute;
  top: 24px;
  right: 24px;
`


export default PlanteriorCommentWrite;