import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { GeneralHeader, CommentWrite, PlanteriorDetailComments, PlanteriorDetailContents, MoreContentSheet, Alert2 } from "../../Components";

import { Grid, Text } from "../../Elements";
import { actionCreators as searchActions } from "../../Redux/Modules/Search";
import { useParams } from 'react-router-dom'

// planterior 디테일 페이지 
const PlanteriorDetail = () => {
  const dispatch = useDispatch()
  const commentData = useSelector((state) => state?.search?.planterior?.commentList);
  const postId = useParams().postId;
  const writer = useSelector((state) => state?.search?.planterior?.nickname);
  const user = localStorage.getItem('nickname');

  React.useEffect(() => {
    dispatch(searchActions.getPlanteriorDetailDB(postId));
  }, [dispatch, postId])

  const [message, setMessage] = React.useState();
  const [open, setOpen] = React.useState(false);
  const [deleteOpen, setDeleteOpen] = React.useState(false);

  const deletePlanterior = () => {
    dispatch(searchActions.deletePlanteriorPostDB(postId));
  }

  return (
    <React.Fragment>
      <HeaderBox>
        <GeneralHeader title="식물 공간" />
        {writer === user ?
        <IconBox>
          <MoreContentSheet planterior url={`/planterior/edit/${postId}`} postId={postId} setOpen={setDeleteOpen}/> 
        </IconBox> :
          <></>}
      </HeaderBox>
      <PlanteriorDetailContents />
      <Grid width="100%">
        {commentData?.map((cmt, idx) => {
          return (
            <PlanteriorDetailComments
              key={cmt?.commentId}
              commentId={cmt?.commentId}
              content={cmt?.commentContent}
              name={cmt?.nickname}
              time={cmt?.commentRecentTime}
              img={cmt?.profileImgUrl ? cmt.profileImgUrl : "/img/noProfileImgSmall.svg"}
              setMessage={setMessage}
              setOpen={setOpen}
            />
          );
        })}
      </Grid>
      <FixWrapper>
        <CommentWrite setMessage={setMessage} setOpen={setOpen} open={open} />
      </FixWrapper>
      <Grid height="132px" bg="#F7F8FA" />

      {open &&
        <Alert2 btn1="확인" open={open} setOpen={setOpen}>
          <Text size="small">{message}</Text>
        </Alert2>
      }

      {deleteOpen &&
        <AlertBox>
          <Alert2 open={deleteOpen} setOpen={setDeleteOpen} btn1={"확인"} func={deletePlanterior}>
            <Text bold wordbreak size="small">
              게시글을 삭제할까요?
            </Text>
          </Alert2>
        </AlertBox>
      }

    </React.Fragment>
  )
}

const HeaderBox = styled.div`
  position: sticky; 
  top: 0;
  border-bottom: 1px solid #E0E0E0;
`

const IconBox = styled.div`
  position: absolute;
  top: 12px;
  right: 16px;
  width: 20px;
  height: 20px;
  text-align: center;
`
const FixWrapper = styled.div`
  box-sizing: border-box;
  position: fixed;
  bottom: 54px;
  width: 100%;
  border-top: 1px solid #E0E0E0;
  background: #F7F8FA;
`

const AlertBox = styled.div`
  position: absolute;
  top: 0;
  padding-top: 40vh;
  width: 100%;
`


export default PlanteriorDetail;