import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { Grid, Image, Text } from "../../../Elements";
import { actionCreators as searchActions } from "../../../Redux/Modules/Search";

// planterior 사진 게시글 디테일 페이지 content 컴포넌트

const PhotoDetailContents = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(searchActions.getPlanteriorDetailDB());
  }, [])

  return (
    <React.Fragment>
      <Text bold size="M">글 제목제목 제모옥</Text>
      <Grid is_flex margin="20px 0 0 0">
        <Image type="circle" size="40px" imgUrl="https://pbs.twimg.com/media/ER7b4hOVAAAfBg-.jpg:large" />
        <Grid margin="0 10px">
          <Text bold>닉네이이임</Text><br />
          <Text size="XS" color="#888">1일 전</Text>
        </Grid>
      </Grid>
      <Grid margin="20px 0" width="100%">
        <hr />
      </Grid>
      <Grid margin="0 auto" width="100%">
        <Image type="square" size="348px" imgUrl="https://www.shouse.garden/data/photo/s210823_1707462865.jpg" />
      </Grid>
      <Grid margin="20px 0">
        <Text>글 내용내용 내요오오오옹 내용이에요</Text>
      </Grid>
    </React.Fragment>
  )
}


export default PhotoDetailContents;