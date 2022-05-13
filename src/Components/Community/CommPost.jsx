import React from "react";
import { Text, Grid, Image } from "../../Elements";
import styled from "styled-components";
import { FaRegHeart, FaHeart, FaBookmark, FaRegComment, FaRegBookmark } from "react-icons/fa";
import { useHistory } from "react-router-dom";
import { actionCreators as postActions } from "../../Redux/Modules/post";
import { useDispatch } from "react-redux";

const CommPost = (props) => {   
    const dispatch = useDispatch();
    const history = useHistory();
    
    const isLogin = sessionStorage.getItem('token');
    const post = props?.postList;

    const postLike = post.postLike;
    const bookmarked = post.postBookMark;

    const [like, setLike] = React.useState(postLike);
    const [bookmark, setBookmark] = React.useState(bookmarked);

    const toggleLike = () => {
        if (like === false && isLogin) {
        setLike(true);
        console.log(like);
        dispatch(postActions.likePostDB(post.postId));
        } else {
        setLike(false);
        dispatch(postActions.likePostDB(post.postId));
        }
    };
    const toggleBookmark = () => {
        if (bookmark === false && isLogin) {
        setBookmark(true);
        dispatch(postActions.bookmarkPostDB(post.postId));
        } else {
        setBookmark(false);
        dispatch(postActions.bookmarkPostDB(post.postId));
        }
    };



    return (
        <React.Fragment>
            <Grid width="100%" padding="20px" margin="0px 0px 12px 0px">
                <Grid width="100%" >
                    <Grid><Text size="xs" color="#24A148">{post.postType}</Text></Grid>
                </Grid>
                <Grid width="100%" _onClick={()=>history.push(`/community/${post.postId}`)}>
                    <Grid>
                        <Text size="large">{post.postTitle}</Text>
                    </Grid>
                    <Grid is_flex align="center" margin="5px 0px 0px 0px">
                        <Image type="circle" size="24px" imgUrl={post.profileImgUrl}/>
                        <Text margin="0px 5px" size="small">{post.nickname}</Text>
                        <Grid><Text size="xsmall" color="#6F6F6F">・ {post.postRecentTime}</Text></Grid>
                    </Grid>
                    <Grid margin="8px 0px 16px 0px"><Text color="#262626" size="small">{post.postContent}</Text></Grid>
                    {post.postImgUrl? 
                    <Grid width="100%" >
                        <Image type="rectangle" imgUrl={post.postImgUrl} width="100%" height="240px"/>
                    </Grid>: null}
                </Grid>
                {/* bottom part - 좋아요, 댓글, 북마크 */}
                <Grid width="100%" margin="20px 0px" position="relative">
                    <Grid is_flex >
                        {like? 
                            <FaHeart onClick={()=>{console.log('하트'); toggleLike()}} style={{width:"20px", height:"fit-content", color:"#FA4D56"}}/> : 
                            <FaRegHeart onClick={()=>toggleLike()} style={{width:"20px", height:"fit-content"}}/>
                        }
                        <Text margin="0px 8px" size="base"  color="#6F6F6F">{post.postLikeCount}</Text>
                        <FaRegComment  style={{width: "20px", height:"fit-content"}} /><Text margin="0px 8px" size="base" color="#6F6F6F">{post.commentCount}</Text>
                    </Grid>
                    <Grid position="absolute" top="0px" right="0px" >
                        {bookmark? 
                            <FaBookmark onClick={()=>toggleBookmark()} style={{width: "20px", height:"fit-content", color:"#0AAF42"}}/> : 
                            <FaRegBookmark  onClick={()=>toggleBookmark()}style={{width: "20px", height:"fit-content"}} />
                        }
                    </Grid>
                </Grid>
            </Grid>
        </React.Fragment>
        
    )
}

export default CommPost;