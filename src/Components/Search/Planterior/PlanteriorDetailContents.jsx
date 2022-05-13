import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { Grid, Image, Text } from "../../../Elements";
import { actionCreators as searchActions } from "../../../Redux/Modules/Search";
import { FaRegHeart, FaHeart, FaBookmark, FaRegComment, FaRegBookmark } from "react-icons/fa";
// planterior 사진 게시글 디테일 페이지 content 컴포넌트
const PhotoDetailContents = () => {
  const dispatch = useDispatch();
  const postData = useSelector((state) => state?.search?.planterior)
  const bookmark = postData?.postBookMark;
  const like = postData?.postLike;
  console.log(postData)

  return (
    <React.Fragment>
      <Grid width="100%" margin="12px 0">
        <Grid is_flex align="center">
          <Image type="circle" size="32px" imgUrl={postData?.profileImgUrl} />
          <Grid margin="0 8px">
            <Text bold size="small">{postData?.nickname}</Text><br />
            <Text size="xxsamll" color="#6F6F6F">{postData?.postRecentTime}</Text>
          </Grid>
        </Grid>
        <Grid margin="12px auto" width="100%">
          <Image type="square" size="328px" borderRadius="8px" imgUrl={postData?.postImgUrl} />
        </Grid>
        <Grid margin="12px 0">
          <Text size="small">{postData?.postContent}</Text>
        </Grid>
        <BookmarkBox>
          {like ?
          <Grid is_flex align="center">
              <FaHeart size="20px" color="#0AAF42" />
              <Text margin="0 8px" size="base" color="#6F6F6F">{postData?.postLike}</Text>
            </Grid>:
          <Grid is_flex align="center">
              <FaRegHeart size="20px" color="#393939" />
              <Text margin="0 8px" size="base" color="#6F6F6F">{postData?.postLike}</Text>
            </Grid>}
          <Grid is_flex margin="0 8px" align="center">
            <FaRegComment size="20px" color="#393939" />
            <Text margin="0 8px" size="base" color="#6F6F6F">{postData?.postCommentCount}</Text>
          </Grid>
          <Grid width="20px"/>
          {bookmark ?
            <FaBookmark size="20px" color="#0AAF42" />:
            <FaRegBookmark size="20px" color="#393939" />}
        </BookmarkBox>
      </Grid>
      <Grid height="1px" width="100%" bg="#E0E0E0" />
    </React.Fragment>
  )
}

const BookmarkBox = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 10fr 1fr;
`


export default PhotoDetailContents;