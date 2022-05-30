import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import { Text, Grid, Image, Container, Button } from '../../../Elements';
import { actionCreators as MyActions } from '../../../Redux/Modules/MyPage';
import { ReactComponent as FavoriteIcon} from "../../../Assets/img/likeBookmarkIcons/favorite.svg"
import { ReactComponent as FavoriteSelectedIcon} from "../../../Assets/img/likeBookmarkIcons/favorite_selected.svg"
import { ReactComponent as BookmarkIcon} from "../../../Assets/img/likeBookmarkIcons/Bookmark.svg";
import { ReactComponent as BookmarkSelectedIcon} from "../../../Assets/img/likeBookmarkIcons/Bookmark_selected.svg";
import { ReactComponent as CommentIcon } from "../../../Assets/img/likeBookmarkIcons/Comment.svg";
import { actionCreators as postActions } from '../../../Redux/Modules/post';
import InfiniteScroll from '../../share/etc/InfiniteScroll';
import { ReactComponent as NotFound } from "../../../Assets/img/errorIcons/nondata.svg"


const MyPicturesPostList = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const totalPage =  useSelector(state => state.mypage?.photoList?.totalPage);
    const myPictureList = useSelector(state => state.mypage?.photoList?.content);
    
    // 무한스크롤 관련 state
    const [isLoading, setIsLoading] = React.useState(false);
    const [page, setPage] = React.useState(0);

    const likePost = (page, postId) => {
        dispatch(MyActions.likePostDB(page, postId));
      }
    
    const bookmarkPost = (page, postId) => {
    dispatch(MyActions.bookmarkPostDB(page, postId));
    }
    
    useEffect(() => {
        dispatch(MyActions.getMyPhotoListDB(page));
    },[page]);

    //infinite scroll 실행 함수
    const callback = async ([entry], observer) => {
        if(entry.isIntersecting && !isLoading) {
            if(totalPage > page + 1){
                observer.unobserve(entry.target); //관찰 종료
                setIsLoading(true);
                    await new Promise ((resolve) => {
                    setTimeout(resolve, 2000);
                });
                setPage((pre) => pre + 1);
                setIsLoading(false);
                observer.observe(entry.target);
            }   
        }   
    }
    if (!myPictureList || myPictureList.length === 0) {
        return (
          <>
            <Grid margin="15vh auto">
              <Grid margin="20px auto" align="center">
                <Text bold size="h5" weight="700">작성된<br />식물 공간 사진이 없어요</Text>
              </Grid>
              <Grid margin="auto">
                <NotFound />
              </Grid>
            </Grid>
            <Grid width="100%" padding="0 16px">
              <Button type="square" _onClick={() => { history.push('/planterior/write'); }}>
                <Text color="#fff" weight="600">식물공간 자랑하기</Text>
              </Button>
            </Grid>
          </>
        )
      }
    return (
        <React.Fragment>
            {myPictureList? 
            <InfiniteScroll
                page={page} 
                callback={callback} 
                isLoading={isLoading}
                totalPage={totalPage}>
                {myPictureList?.map((p) => {
                    return(
                         <React.Fragment  key={p.postId}>
                        <Container>
                        <Grid width="100%">
                            <Text size="xsmall" color="#24A148">{p.plantPlace}</Text>
                            <Grid is_flex align="center" margin="5px 0px 16px 0px">
                                
                                {p?.profileImgUrl===null?
                                    <Image type="circle" size="32px" imgUrl="/img/noProfileImgSmall.svg"/> :
                                    <Image type="circle" size="32px" imgUrl={p?.profileImgUrl}/>
                                }
                                <Wrapper> 
                                    <Text align="left" margin="0px 8px" size="small">{p?.nickname.length < 11 ? p?.nickname : p?.nickname.slice(0,10) + '...' }</Text>
                                    <Text align="left" margin="0px 10px" size="xsmall" color="#6F6F6F"> {p?.postRecentTime}</Text>
                                </Wrapper>
                                
                            </Grid>
                            
                            {p?.postImgUrl? 
                                <Grid width="100%"  _onClick={()=>history.push(`/planterior/post/${p.postId}`)}>
                                    <Image type="planterior" borderRadius="8px" imgUrl={p.postImgUrl} width="100%"/>
                                </Grid>: 
                                null
                            }
                            <Grid margin="12px 0px 16px 0px"><Text color="#262626" size="small">{p?.postContent}</Text></Grid>
                            {/* bottom part - 좋아요, 댓글, 북마크  */}
                            <Grid width="100%" margin="20px 0px" position="relative">
                                <Grid is_flex align="center">
                                    {p.postLike? 
                                        <FavoriteSelectedIcon 
                                        onClick={()=> likePost("mypictures", p.postId)} /> : 
                                        <FavoriteIcon fill='#6F6F6F'
                                        onClick={()=>likePost("mypictures", p.postId)} />
                                    }
                                    <Text margin="0px 8px" size="base"  color="#6F6F6F">{p?.postLikeCount}</Text>
                                    <CommentIcon fill='#6F6F6F' />
                                    <Text margin="0px 8px" size="base" color="#6F6F6F">{p?.commentCount}</Text>
                                </Grid>
                                <Grid position="absolute" top="0px" right="0px" >
                                    {p.postBookMark? 
                                     <BookmarkIcon fill="#0AAF42" stroke="#0AAF42"
                                     onClick={()=>bookmarkPost("mypictures", p.postId)}
                                      />
                                      :
                                      <BookmarkIcon fill="transparent" stroke="#6F6F6F"
                                      onClick={()=>bookmarkPost("mypictures", p.postId)}
                                       />
                                    }
                                   
                                </Grid>
                            </Grid>
                        </Grid>
                        </Container>
                        <Container type="np">
                            <div style={{height:"12px", width:"100%", backgroundColor:"#F7F8FA"}}></div>
                        </Container>
                        </React.Fragment>
                    )
                })}
            </InfiniteScroll> :

                null

            }   
                 
                    
        </React.Fragment>
    )
}

const Wrapper = styled.div`
    display: grid;
    grid-template-rows: 1fr 1fr;
    width: 100%;

`

const ContentWrapper = styled.div`
  ${'' /* box-sizing: border-box; */}
  width: 100%;
  height: fit-content;
`

const FloatBox = styled.div`
  position: absolute;
  top: 0px;

  display:flex;
  align-items: center;
  
  margin: auto;

  width: 100%;
  height: 100%;

  background: rgba(255, 255, 255, 0.5);
  border-radius: 10px;
`
const FadeIn = keyframes`
  from {
    opacity: 0
  }
  to {
    opacity: 1
  }
`;


const DoneBox = styled.div`
  width: 100%;
  animation-duration: 0.5s;
  animation-timing-function: ease-out;
  animation-name: ${FadeIn};
  animation-fill-mode: forwards;
`;
const RelativeBox = styled.div`
  position: relative;
  width: 100%;
`

export default MyPicturesPostList;
