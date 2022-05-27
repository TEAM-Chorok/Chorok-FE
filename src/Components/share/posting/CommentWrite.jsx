import React from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";

import { Button, Input, Text } from '../../../Elements';
import { actionCreators as postActions } from "../../../Redux/Modules/post";
import { actionCreators as searchActions } from "../../../Redux/Modules/Search";

import Alert2 from "../modal/Alert2";


// 코멘트 input창

const CommentWrite = (props) => {
  const {content, placeholder, commentId, choroktalk} = props;

  const dispatch = useDispatch();

  const postId = useParams().postId;
  const contentRef = React.useRef();

  const addComment = () => {
    if (!contentRef.current.value.replace(/\s/g, '').length) {
      props.setMessage("댓글 내용을 입력해주세요!")
      props.setOpen(true);
      return;
    }
    const commentdata = {
      postId : postId,
      commentContent : contentRef.current.value,
    }
    const editdata = {
      commentId : commentId,
      commentContent : contentRef.current.value,
    }
    if(content) {
      dispatch(searchActions.editPlanteriorCommentDB(editdata, postId));
      contentRef.current.value = null;
      props.setEdit(false);
      return;
    }
    dispatch(searchActions.writePlanteriorCommentDB(commentdata));
    contentRef.current.value = null;
  }
  

  const addChoroktalkComment = () => {
    if (!contentRef.current.value.replace(/\s/g, '').length) {
      props.setMessage("댓글 내용을 입력해주세요!")
      props.setOpen(true);
      return;
    }
    const commentdata = {
      postId : postId,
      commentContent : contentRef.current.value,
    }
    const editdata = {
      commentId : commentId,
      commentContent : contentRef.current.value,
    }
    if(content) {
      dispatch(postActions.editCommentDB(postId, editdata));
      contentRef.current.value = null;
      props.setEdit(false);
      return;
    }
    dispatch(postActions.addCommentDB(postId, commentdata));
    contentRef.current.value = null;
  }
  

  React.useEffect(() => {
    if(content) {
      contentRef.current.value = content;
    }
  }, [content])


  return (
    <React.Fragment>
      <Wrapper open={props.open}>
          <CommentBox edit={content? true : false }>
            <Input type="comment" placeholder={placeholder? placeholder : "댓글을 입력해주세요." } _ref={contentRef} />
            <ButtonBox>
            {choroktalk?
              <Button type="tran" _onClick={() => { addChoroktalkComment(); }}>
                <Text size="small" color="#24A148">{content? "수정" : "등록"}</Text>
              </Button>
            :
              <Button type="tran" _onClick={() => { addComment(); }}>
                <Text size="small" color="#24A148">{content? "수정" : "등록"}</Text>
              </Button>
            }
            </ButtonBox>
          </CommentBox>
      </Wrapper>

    </React.Fragment>
  )
}


const Wrapper = styled.div`
  width: 100%;
  background: #F7F8FA;
  overflow: ${(props) => props.open ? "hidden" : "auto"};
`


const CommentBox = styled.div`
  position: relative;
  box-sizing: border-box;

  padding: 18px 16px 16px 16px;
  width: 100%;

  background: ${(props) => props.edit? "#fff" : "#F7F8FA" };
`
const ButtonBox = styled.div`
  position: absolute;
  top: 26px;
  right: 24px;
`


export default CommentWrite;