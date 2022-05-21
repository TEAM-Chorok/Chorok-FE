import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { Text, Grid, Image, Container } from '../../../Elements';
import { actionCreators as MyActions } from '../../../Redux/Modules/MyPage';
import { ReactComponent as FavoriteIcon} from "../../../Assets/img/likeBookmarkIcons/favorite.svg"
import { ReactComponent as BookmarkIcon} from "../../../Assets/img/likeBookmarkIcons/Bookmark.svg";
import { ReactComponent as CommentIcon } from "../../../Assets/img/likeBookmarkIcons/Comment.svg";

const MyPicturesPostList = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const myPictureList = useSelector(state => state.mypage?.photoList);
    
    useEffect(() => {
        dispatch(MyActions.getMyPhotoListDB());
    },[]);

    return (
        <React.Fragment>
                 {myPictureList?.map((p) => {
                     return(
                         <React.Fragment  key={p.postId}>
                        <Container>
                        <Grid width="100%" _onClick={()=>history.push(`/community/${p.postId}`)}>
                            <Grid is_flex align="center" margin="5px 0px 16px 0px">
                                {p?.profileImgUrl===null?
                                    <Image type="circle" size="32px" imgUrl="/img/noProfileImgSmall.svg"/> :
                                    <Image type="circle" size="32px" imgUrl={p?.profileImgUrl}/>
                                }
                                <Text margin="0px 8px" size="small">{p?.nickname}</Text>
                                <Text size="xsmall" color="#6F6F6F">・ {p?.postRecentTime}</Text>
                            </Grid>
                            
                            {p?.postImgUrl? 
                                <Grid width="100%" >
                                    <Image type="rectangle" borderRadius="8px" imgUrl={p.postImgUrl} width="100%" height="328px"/>
                                </Grid>: 
                                null
                            }
                            <Grid margin="12px 0px 16px 0px"><Text color="#262626" size="small">{p?.postContent}</Text></Grid>
                            {/* bottom part - 좋아요, 댓글, 북마크  */}
                            <Grid width="100%" margin="20px 0px" position="relative">
                                <Grid is_flex align="center">
                                    {/* {like? 
                                        <FavoriteSelectedIcon 
                                        // onClick={()=> toggleLike()} 
                                        style={{width:"24px", height:"fit-content"}}/> : 
                                        <FavoriteIcon 
                                        // onClick={()=>toggleLike()} 
                                        style={{width:"24px", height:"fit-content"}}/>
                                    } */}
                                     <FavoriteIcon 
                                        // onClick={()=>toggleLike()} 
                                        style={{width:"24px", height:"fit-content"}}/>
                                    <Text margin="0px 8px" size="base"  color="#6F6F6F">{p?.postLikeCount}</Text>
                                    <CommentIcon 
                                        style={{width: "20px", height:"fit-content"}} />
                                    <Text margin="0px 8px" size="base" color="#6F6F6F">{p?.commentCount}</Text>
                                </Grid>
                                <Grid position="absolute" top="0px" right="0px" >
                                    <BookmarkIcon fill="transparent" stroke="#393939"
                                    // onClick={()=>toggleBookmark()}
                                    style={{width: "24px", height:"fit-content"}} />
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
                    
        </React.Fragment>
    )
}
export default MyPicturesPostList;
