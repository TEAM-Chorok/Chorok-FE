import { Masonry } from "@mui/lab";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { Container, Grid, Image, Input, Text } from "../../../Elements";
import { actionCreators as searchActions } from "../../../Redux/Modules/Search";
import PlanteriorList from "../Planterior/PlanteriorList";


const PlanteriorResult = (props) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const result = useSelector((state) => state.search?.resultPhoto);
  const list = result?.postList;

  console.log("요ㅕ요",result, list)

  const openDetail = (postId) => {
    history.push(`/planterior/post/${postId}`);
  }

  return (
    <React.Fragment>
      <Grid width="100%" margin="16px 0">
        <Masonry columns={2} spacing={2} sx={{ "margin": "auto", }}>
          {list?.map((post, idx) => {
            return (
              <ContentWrapper key={post.postId} onClick={() => { openDetail(post.postId); }}>
                <Image type="planterior" width="150px" imgUrl={post.postImgUrl} />
                <Grid is_flex margin="4px 0">
                  <Image type="circle" size="20px" />
                  <Text bold size="xsmall" margin="1px 4px">{post.nickname}</Text>
                </Grid>
                <TextBox>
                  <Text size="xsmall" color="#525252">
                    {post.postContent.length < 27
                      ? post.postContent
                      : post.postContent.slice(0, 26) + '...'}
                  </Text>
                </TextBox>
              </ContentWrapper>
            )
          })}
        </Masonry>
      </Grid>
    </React.Fragment>
  )
}


const ContentWrapper = styled.div`
  margin: auto;
  width: fit-content;
  height: fit-content;
`
const TextBox = styled.div`  
  height: 40px;
  
  font-size: 13px;
  line-height: 20px;
  color: #525252;
`




export default PlanteriorResult;