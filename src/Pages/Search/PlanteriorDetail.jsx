import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { LabelingTestLink, PlanteriorDetailComments, PlanteriorDetailContents, PlanteriorList, RecommendPlant, SearchHeader } from "../../Components";

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
      <Container>
          <PlanteriorDetailContents/>
        <Grid>
        {commentData?.map((cmt, idx) => {
          return(
            <PlanteriorDetailComments
              key={cmt?.commentNo} 
              content={cmt?.commentContent} 
              name={cmt?.nickname} 
              time={cmt?.commentRecentTime}
              img={cmt?.profileImgUrl}
              />
          );
        })}
        </Grid>
      </Container>
    </React.Fragment>
  )
}

export default PlanteriorDetail;