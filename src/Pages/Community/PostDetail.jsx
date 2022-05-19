import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom/cjs/react-router-dom.min";
import styled from "styled-components";
import { DetailCommPost, CommPost, GeneralHeader, CommPostCommentList } from "../../Components";
import CommBottomSheet from "../../Components/Community/CommBottomSheet";
import { Container, Permit } from "../../Elements";
import { actionCreators as postActions } from "../../Redux/Modules/post";

const PostDetail = () => {
    const history = useHistory();
    const postId = useParams().postId;

    const dispatch = useDispatch();
    const post = useSelector(state => state.post?.post);
    const commentList = post?.commentList;

    useEffect(() => {
        dispatch(postActions.getDetailPostDB(postId));
    }, []);

    const is_session = sessionStorage.getItem('token') ? true : false;
    const is_login = useSelector((state) => state.user.is_login);
    
    if(!is_session || !is_login){
        // window.alert('로그인을 하시면 더 많은 기능을 이용하실 수 있습니다!');
        // history.push('/');
    }
    if(!post){
        return (
            <React.Fragment>
                <Container>
                    <GeneralHeader />
                </Container>
            </React.Fragment>
        )
    }
    return (
        <React.Fragment>
            <Container>
                <GeneralHeader title={post?.postType} size="base" />
                <Permit>
                    <CommBottomSheet type="post" postId={post?.postId}/>
                </Permit>
            </Container>
            <Container type="np">
                <HR />
                <DetailCommPost postList={post}/>
                <CommPostCommentList commentList={commentList}/>
            </Container>
        </React.Fragment>
    )
}
const HR = styled.hr`
    border: 1px solid #E0E0E0;
    width: 100vw;
    margin: 0px;
    margin-left: calc(-50vw + 50%);
`
export default PostDetail;