import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { Text, Grid, Image, Container } from '../../Elements';
import { actionCreators as MyActions } from '../../Redux/Modules/MyPage';
import { ReactComponent as FavoriteIcon} from "../../Assets/img/likeBookmarkIcons/favorite.svg"
import { ReactComponent as FavoriteSelectedIcon} from "../../Assets/img/likeBookmarkIcons/favorite_selected.svg"
import { ReactComponent as BookmarkIcon} from "../../Assets/img/likeBookmarkIcons/Bookmark.svg";
import { ReactComponent as CommentIcon } from "../../Assets/img/likeBookmarkIcons/Comment.svg";
import InfiniteScroll from '../share/etc/InfiniteScroll';

const MyPostsPostList= () => {
    const history = useHistory();
    const dispatch = useDispatch();
    
    const totalPage = useSelector(state => state.mypage?.postList?.totalPage);
    const myPostList = useSelector(state => state.mypage?.postList?.content);

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
      dispatch(MyActions.getMyPostListDB(page));
    }, [page])

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

    if(!myPostList || myPostList.length === 0){
        return (
            <React.Fragment>
                <div></div>
            </React.Fragment>
        )
    }
    return (
        <React.Fragment>   
            {myPostList? 
            <InfiniteScroll
                page={page} 
                callback={callback} 
                isLoading={isLoading}
                totalPage={totalPage}>
                {myPostList?.map((p) => {
                    return(
                        <Grid  key={p.postId} width="100%">
                        <Container>
                            <Grid width="100%" _onClick={() => {history.push(`/community/${p?.postId}`)}} >
                                <Grid width="100%" >
                                    <Grid><Text size="xs" color="#24A148">{p?.postType}</Text></Grid>
                                </Grid>
                                {p?.postTitle === "title" || p?.postTitle === "null"? 
                                    null: 
                                    <Grid>
                                        <Text size="large">{p?.postTitle}</Text>
                                    </Grid>
                                }
                                
                                <Grid is_flex align="center" margin="5px 0px 16px 0px" >
                                    {p?.profileImgUrl===null?
                                        <Image type="circle" size="24px" imgUrl="/img/noProfileImgSmall.svg"/> :
                                        <Image type="circle" size="24px" imgUrl={p?.profileImgUrl}/>
                                    }
                                    <Text margin="0px 8px" size="small">{p?.nickname}</Text>
                                    <Text size="xsmall" color="#6F6F6F">・ {p?.postRecentTime}</Text>
                                </Grid>
                                
                                <Grid margin="12px 0px 16px 0px">
                                    <Text color="#262626" size="small">{p?.postContent}</Text>
                                </Grid>
                                
                                

                                <Grid width="100%">                                
                                    {p?.postImgUrl? 
                                        <Grid margin="12px auto">
                                            <Image type="planterior" borderRadius="8px" imgUrl={p.postImgUrl} width="100%"/>
                                        </Grid>: 
                                        null
                                    }
                                </Grid>
                            </Grid>
                            {/* bottom part - 좋아요, 댓글, 북마크  */}
                            <Grid width="100%" margin="20px 0px" position="relative">
                                    <Grid is_flex align="center">
                                        {p.postLike? 
                                            <FavoriteSelectedIcon 
                                            onClick={()=> likePost("myposts", p.postId)} /> : 
                                            <FavoriteIcon fill='#6F6F6F'
                                            onClick={()=>likePost("myposts", p.postId)} />
                                        }
                                        <Text margin="0px 8px" size="base"  color="#6F6F6F">{p?.postLikeCount}</Text>
                                        <CommentIcon  fill='#6F6F6F'/>
                                        <Text margin="0px 8px" size="base" color="#6F6F6F">{p?.commentCount}</Text>
                                    </Grid>
                                    <Grid position="absolute" top="0px" right="0px" >
                                        {p.postBookMark? 
                                            <BookmarkIcon fill="#0AAF42" stroke="#0AAF42"
                                            onClick={()=>bookmarkPost("myposts", p.postId)}
                                            />
                                            :
                                            <BookmarkIcon fill="transparent" stroke="#6F6F6F"
                                            onClick={()=>bookmarkPost("myposts", p.postId)}
                                            />
                                        }
                                    </Grid>
                                </Grid>
                        </Container>
                        <Container type="np">
                            <div style={{backgroundColor:"#F7F8FA", height: "12px", width:"100%"}}></div>
                        </Container>
                        </Grid>
                    )
                })}
                </InfiniteScroll> 
                : <RelativeBox>
                    <FloatBox>
                    <Grid margin="auto">
                        <Text bold size="base" margin="auto">데이터를 불러오고 있습니다💬</Text>
                    </Grid>
                    </FloatBox>
                </RelativeBox>}     
            
        </React.Fragment>
    )
}

const RelativeBox = styled.div`
  position: relative;
  width: 100%;
`

const FloatBox = styled.div`
  position: absolute;
  top: 0;

  display:flex;
  align-items: center;
  
  margin: auto;

  width: 100%;
  height: 100%;

  background: rgba(255, 255, 255, 0.5);
  border-radius: 10px;
`
export default MyPostsPostList;