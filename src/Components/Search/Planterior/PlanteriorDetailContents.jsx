import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { Container, Grid, Image, Text } from "../../../Elements";
import { actionCreators as searchActions } from "../../../Redux/Modules/Search";
import { ReactComponent as BookMarkIcon } from '../../../Assets/img/likeBookmarkIcons/Bookmark.svg'
import { ReactComponent as CommentIcon } from '../../../Assets/img/likeBookmarkIcons/Comment.svg'
import { ReactComponent as FavoriteIcon } from '../../../Assets/img/likeBookmarkIcons/favorite.svg'
import { ReactComponent as CheckedFavoriteIcon } from '../../../Assets/img/likeBookmarkIcons/favorite_selected.svg'



// planterior 사진 게시글 디테일 페이지 content 컴포넌트
const PhotoDetailContents = () => {
  const dispatch = useDispatch();
  const postData = useSelector((state) => state?.search?.planterior)
  const bookmark = postData?.postBookMark;
  const like = postData?.postLike;
  const postId = postData?.postId;

  const likePost = () => {
    dispatch(searchActions.likePlanteriorPostDB(postId));
  }

  const bookmarkPost = () => {
    dispatch(searchActions.bookMarkPlanteriorPostDB(postId));
  }


  return (
    <React.Fragment>
      <Grid width="100%" margin="12px 0">
        <Grid width="100%" padding="0 16px">

          <Grid is_flex align="center">
            <Image type="circle" size="32px" imgUrl={postData?.profileImgUrl ? postData.profileImgUrl : "/img/noProfileImgSmall.svg"} />
            <Grid margin="0 8px">
              <Text bold size="small">{postData?.nickname}</Text><br />
              <Text size="xxsamll" color="#6F6F6F">{postData?.postRecentTime}</Text>
            </Grid>
          </Grid>
          <Grid margin="12px auto">
            <Image type="planterior" width="330px" imgUrl={postData?.postImgUrl} />
          </Grid>
          <Grid margin="12px 0">
            <Text size="small">{postData?.postContent}</Text>
          </Grid>
          <BookmarkBox>

            <Grid is_flex align="center" margin="auto">
              {like ?
                <CheckedFavoriteIcon onClick={() => { likePost(); }} /> :
                <FavoriteIcon fill="#393939" onClick={() => { likePost(); }} /> }
              <Text margin="0 8px" size="base" color="#6F6F6F">{postData?.postLikeCount}</Text>
            </Grid>

            <Grid is_flex margin="3px 8px" align="center">
              <CommentIcon fill="#656565" />
              <Text margin="0 8px" size="base" color="#6F6F6F">{postData?.commentCount}</Text>
            </Grid>
            <Grid width="20px" />

            <Grid is_flex margin="0 8px" align="center">
              {bookmark ?
                <BookMarkIcon
                  className='bookmark'
                  fill="#6FDC8C"
                  stroke="#0AAF42"
                  onClick={() => { bookmarkPost(); }}
                />
                :
                <BookMarkIcon
                  className='bookmark'
                  fill="none"
                  stroke="#393939"
                  onClick={() => { bookmarkPost(); }}
                />
              }
            </Grid>

          </BookmarkBox>
        </Grid>
      </Grid>
      <Grid height="1px" width="100%" bg="#E0E0E0" />
    </React.Fragment>
  )
}

const BookmarkBox = styled.div`
  margin: 24px auto 0 auto;
  display: grid;
  width: 100%;
  grid-template-columns: 1fr 1fr 10fr 1fr;
`


export default PhotoDetailContents;