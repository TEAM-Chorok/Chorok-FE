import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { LabelingTestLink, PlanteriorDetailComments, PlanteriorDetailContents, PlanteriorList, RecommendPlant, SearchHeader } from "../../Components";

import { Container, Grid, Image, Text } from "../../Elements";
import { actionCreators as searchActions } from "../../Redux/Modules/Search";

// planterior 디테일 페이지 
const PlanteriorDetail = () => {
  const dispatch = useDispatch()
  const commentData = useSelector((state) => state?.search?.planterior?.postComment)
  console.log(commentData);

  React.useEffect(() => {
    dispatch(searchActions.getPlanteriorDetailDB());
  }, [])

  return (
    <React.Fragment>
      <Container>
          <PlanteriorDetailContents/>
        <Grid>
        {commentData?.map((cmt, idx) => {
          return(
            <PlanteriorDetailComments
              key={cmt.commentNo} 
              content={cmt.commentContent} 
              name={cmt.nickName} 
              time={cmt.RecentTime}
              img={cmt.profileImgUrl}
              />
          );
        })}
        </Grid>
      </Container>
    </React.Fragment>
  )
}

export default PlanteriorDetail;