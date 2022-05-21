import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { GeneralHeader, LabelingTestLink, PlanteriorCommentWrite, PlanteriorDetailComments, PlanteriorDetailContents, PlanteriorList, RecommendPlant, SearchHeader } from "../../Components";

import { Container, Grid, Image, Text } from "../../Elements";
import { actionCreators as searchActions } from "../../Redux/Modules/Search";
import { useParams } from 'react-router-dom'


// planterior 디테일 페이지 
const PlanteriorDetail = () => {
  const dispatch = useDispatch()
  const commentData = useSelector((state) => state?.search?.planterior?.commentList);
  const postId = useParams().postId;

  console.log(commentData)

  React.useEffect(() => {
    dispatch(searchActions.getPlanteriorDetailDB(postId));
  }, [])

  return (
    <React.Fragment>
        <HeaderBox>
          <GeneralHeader />
        </HeaderBox>
        <PlanteriorDetailContents />
        <Grid width="100%">
          {commentData?.map((cmt, idx) => {
            return (
              <PlanteriorDetailComments
                key={cmt?.commentId}
                content={cmt?.commentContent}
                name={cmt?.nickname}
                time={cmt?.commentRecentTime}
                img={cmt?.profileImgUrl ? cmt.profileImgUrl : "/img/noProfileImgSmall.svg"}
              />
            );
          })}
        </Grid>
        <InputBox>
          <PlanteriorCommentWrite />
        </InputBox>
        <Grid height="132px" />
    </React.Fragment>
  )
}

const HeaderBox = styled.div`
  position: sticky; 
  top: 0;
`

const InputBox = styled.div`
  position: fixed;
  bottom: 56px;
  width: 100%;
`

export default PlanteriorDetail;