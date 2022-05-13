import React, { useState } from "react";
import CommPost from "./CommPost";
import { Grid } from "../../Elements";
import { useSelector } from "react-redux";
import { actionCreators as postActions } from "../../Redux/Modules/post";
import { useDispatch } from "react-redux";

const CommPostList = (props) => {
    const dispatch = useDispatch();
    const postList = useSelector(state => state.post?.postList);
    React.useEffect(() => {
        {props.isLogin? 
            dispatch(postActions.getPostListDB_login(props.category)) :
            dispatch(postActions.getPostListDB_non_login(props.category))
        }
    }, [props.category]);

    if (!postList) {
        return <div></div>;
    }
    return (
        <React.Fragment>
            {postList.map((p) =>{
                return (
                    <React.Fragment  key={p.postId}>
                    <CommPost postList={p}/>
                    <Grid width="100%" height="12px" bg="#F7F8FA" />
                    </React.Fragment>
                )
            })}
        </React.Fragment>
    )

}

export default CommPostList;