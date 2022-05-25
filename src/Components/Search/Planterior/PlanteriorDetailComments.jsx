import React from "react";
import styled from "styled-components";
import { Grid, Image, Text } from "../../../Elements";
import CommentWrite from "../../share/posting/CommentWrite";
import MoreContentSheet from "../../share/posting/MoreContentSheet";
import Alert2 from '../../share/modal/Alert2';
import { useDispatch } from "react-redux";
import { actionCreators as searchActions } from "../../../Redux/Modules/Search";
import { useParams } from "react-router-dom";

// planterior 사진 게시글 디테일 페이지 comment 컴포넌트

const PhotoDetailComments = (props) => {
  const dispatch = useDispatch();

  const { content, name, time, img, commentId } = props;

  const user = localStorage.getItem('nickname');
  const [edit, setEdit] = React.useState(false);
  const postId = useParams().postId;

  // alert 모달 open/close
  const [open, setOpen] = React.useState(false);

  const deletePlanterior = () => {
    dispatch(searchActions.deletePlanteriorCommentDB(commentId, postId));
  }

  return (
    <Grid width="100%">
      {edit ?
        <CommentWrite
          content={content}
          commentId={commentId}
          setEdit={setEdit}
          setOpen={props.setOpen}
          setMessage={props.setMessage}
          placeholder="수정할 내용을 입력해주세요." />
        :
        <Grid width="100%" padding="12px 16px">
          <CommentWrapper>
            <ProfileBox>
              <Image type="circle" size="24px" imgUrl={img} />
              <Grid margin="0px 8px 2px 8px">
                <Text bold size="small">{name}</Text>
                <Text size="xsmall" color="#888"> · {time}</Text>
              </Grid>
            </ProfileBox>

            {user === name ?
              <AbsoluteBox>
                <MoreContentSheet planterior commentedit setEdit={setEdit} commentId={commentId} setOpen={setOpen} />
              </AbsoluteBox> :
              <></>}

            <Grid margin="0 20px 0 32px" width="275px">
              <Text size="small">{content}</Text>
            </Grid>
          </CommentWrapper>
        </Grid>
      }
      <Grid height="1px" width="100%" bg="#E0E0E0" />

      {open &&
        <AlertBox>
          <Alert2 open={open} setOpen={setOpen} btn1={"확인"} func={deletePlanterior}>
            <Text bold wordbreak size="small">
              댓글을 삭제할까요?
            </Text>
          </Alert2>
        </AlertBox>
      }

    </Grid>
  )
}




const CommentWrapper = styled.div`
    position: relative;
    width: 100%;
    min-height: 52px;
`

const ProfileBox = styled.div`
    display: flex;
    align-items: center;
`

const AbsoluteBox = styled.div`
  position: absolute;
  top: 0px;
  right: 0px;
`

const AlertBox = styled.div`
  position: absolute;
  top: 0;
  padding-top: 40vh;
  width: 100%;
`


export default PhotoDetailComments;