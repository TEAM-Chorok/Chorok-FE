import React, { useState } from "react";
import CommPost from "./CommPost";
import { Grid } from "../../Elements";
import { useSelector } from "react-redux";
import { actionCreators as postActions } from "../../Redux/Modules/post";
import { useDispatch } from "react-redux";

const CommPostList = (props) => {
    const dispatch = useDispatch();
    const postList = useSelector(state => state.list?.postList);
    console.log(postList);

    React.useEffect(() => {
        dispatch(postActions.getPostListDB_non_login(props.category));
    }, [props.category]);

    if (!postList) {
        return <div></div>;
    }

    return (
        <React.Fragment>
            {postList.map((p) =>{
                <>
                <CommPost key={p.postId} postList={p.postList}/>
                <Grid width="100%" height="12px" bg="#F7F8FA" />
                </>
            })}
        </React.Fragment>
    )

}

export default CommPostList;