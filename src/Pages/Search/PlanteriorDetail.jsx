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

  return (
    <React.Fragment>
      <HeaderBox>
        <GeneralHeader title="식물 공간"/>
        {writer === user ?
          <MoreContentSheet planterior url={`/planterior/edit/${postId}`} postId={postId}/> :
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
      <Alert2 btn1="확인" open={open} setOpen={setOpen}>
        <Text size="small">{message}</Text>
      </Alert2>
    </React.Fragment>
  )
}

const HeaderBox = styled.div`
  position: sticky; 
  top: 0;
  border-bottom: 1px solid #E0E0E0;
`

const FixWrapper = styled.div`
  box-sizing: border-box;
  position: fixed;
  bottom: 54px;
  width: 100%;
  border-top: 1px solid #E0E0E0;
  background: #F7F8FA;
`


export default PlanteriorDetail;