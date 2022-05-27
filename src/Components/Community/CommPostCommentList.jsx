import { Button, Grid, Image, Input, Permit, Text } from "../../Elements";
import React from "react";
import styled from "styled-components";
import CommBottomSheet from "./CommBottomSheet";
import CommentWrite from "../share/posting/CommentWrite";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { actionCreators as postActions } from "../../Redux/Modules/post";
import { useEffect } from "react";
import MoreContentSheet from "../share/posting/MoreContentSheet";
import Alert2 from "../share/modal/Alert2";

const CommPostCommentList = (props) => {
  const { content, name, time, img, commentId } = props;

  const dispatch = useDispatch();
  const user = localStorage.getItem('nickname');
  const [edit, setEdit] = React.useState(false);

  const postId = useParams().postId;


  // alert 모달 open/close
  const [open, setOpen] = React.useState(false);

  const deleteComment = () => {
    dispatch(postActions.deleteCommentDB(postId, commentId));
  }



  return (
    <Grid width="100%">
      <CommentWrapper>
        {edit ?
          <CommentBox>
            <CommentWrite
              choroktalk
              content={content}
              commentId={commentId}
              setEdit={setEdit}
              setOpen={props.setOpen}
              setMessage={props.setMessage}
              placeholder="수정할 내용을 입력해주세요." />

          </CommentBox>
          :
          <Grid width="100%" padding="16px">
            <ProfileBox>
              <Image type="circle" size="24px" imgUrl={img} />
              <Grid margin="0px 8px 2px 8px">
                <Text bold size="small">{name}</Text>
                <Text size="xsmall" color="#888"> · {time}</Text>
              </Grid>
            </ProfileBox>
            {user === name ?
              <Permit>
                <AbsoluteBox>
                  <MoreContentSheet
                    commentedit
                    setEdit={setEdit}
                    commentId={commentId}
                    setOpen={setOpen} />
                </AbsoluteBox>
              </Permit> :
              null}
            <Grid margin="0 20px 0 32px" width="275px">
              <Text size="small">{content}</Text>
            </Grid>
          </Grid>
        }
        <Grid height="1px" width="100%" bg="#E0E0E0" />


      </CommentWrapper>
      {open &&
        <AlertBox>
          <Alert2 open={open} setOpen={setOpen} btn1={"확인"} func={deleteComment}>
            <Text bold wordbreak size="small">
              댓글을 삭제할까요?
            </Text>
          </Alert2>
        </AlertBox>
      }
    </Grid>
  )

}

const CommentBox = styled.div`
  position: relative;
  box-sizing: border-box;

  width: 100%;

  background: #fff;
`

const ProfileBox = styled.div`
    display: flex;
    align-items: center;
`
const CommentWrapper = styled.div`
    position: relative;
    width: 100%;
    min-height: 52px;
`

const AbsoluteBox = styled.div`
  position: absolute;
  top: 12px;
  right: 8px;
  width: 20px;
  height: 20px;
`

const AlertBox = styled.div`
  position: absolute;
  top: 0;
  padding-top: 40vh;
  width: 100%;
`

export default CommPostCommentList;