import React from 'react';
import styled from 'styled-components';
import { Container, Grid, Button, Image } from '../../Elements';
import { AddPostFooter, AddPostHeader, AddQuestion } from '../../Components';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { actionCreators as postActions } from '../../Redux/Modules/post';
import { useDispatch } from 'react-redux';

const EditPost = (props) => {
    const params = useParams();
    const dispatch = useDispatch();

    const postId = params.postId;
    const post = useSelector(state => state.post.post);

    const [postTypeCode, setPostTypeCode] = useState();
    if(post.postType === "질문"){
        setPostTypeCode("postType02")
    }else if(post.postType === "식물성장일기"){
        setPostTypeCode("postType03")
    }else if(post.postType === "식물추천"){
        setPostTypeCode("postType04")
    }

    const [category, setCategory] = useState(postTypeCode);

    const [postTitle, setPostTitle] = React.useState(post.postTitle);
    const [postContent, setPostContent] = React.useState(post.postContent);

    const [preview, setPreview] = React.useState(post.postImgUrl); //preview
    const [imageUrl, setImageUrl] = React.useState(post.postImgUrl); //보내는 image

    

    //사진 미리보기
    const reader = new FileReader();
    const encodeFileToBase64 = (fileBlob) => {
        reader.readAsDataURL(fileBlob);
        return new Promise((resolve) => {
        reader.onload = () => {
            setPreview(reader.result);
        };
        });
    };
    //이미지 안바뀌면 그냥 안날리는걸로 해보기
    const editPost = ( postId, category, postTitle, postContent, imageUrl) => {
        dispatch(postActions.editPostDB(postId, category, postTitle, postContent, imageUrl));
    }


    return (
        <React.Fragment>
            <Container>
                <AddPostHeader editPost={editPost} disable={postTitle === "" || postContent === "" || category === ""} title="초록톡 글쓰기"/>
                <HR />
                <Grid margin="16px 0">
                    <Button type="filter" checked={category === "postType02"} _onClick={() => {setCategory("postType02")}}>질문</Button>
                    <Button type="filter" checked={category === "postType03"} _onClick={() => {setCategory("postType03")}}>식물성장일기</Button>
                    <Button type="filter" checked={category === "postType04"} _onClick={() => {setCategory("postType04")}}>식물추천</Button>
                </Grid>
                <Grid padding="10px 4px" width="100%">
                    <Input type="text" placeholder='글 제목을 입력해주세요' defaultValue={post.postTitle}
                    onChange={(e) => {setPostTitle(e.target.value)}}></Input>
                </Grid>
                <Grid padding="10px 4px" width="100%">
                    <Textarea placeholder='이웃집사들과 다양한 이야기를 나누어보세요'  defaultValue={post.postContent}
                    onChange={(e) => {setPostContent(e.target.value)}}></Textarea>
                </Grid>
                {imageUrl === "" ? 
                    <ImageWrap style={{visibility:"hidden"}}>
                        <Image width="84px" height="84px" type="planterior" />
                        <input style={{display:"none"}} />
                    </ImageWrap> :
                    <ImageWrap>
                        <Image width="84px" height="84px" type="planterior" imgUrl={preview} />
                        <input style={{display:"none"}} />
                    </ImageWrap>
                }
                
                {/* bottom */}
                <AddPostFooter encodeFileToBase64={encodeFileToBase64} setImageUrl={setImageUrl}/>
            </Container>
        </React.Fragment>
    )
}

const Input = styled.input`
    width: 100%;
    height: 40px;
    font-size: 16px;
    border: none;
    border-bottom: 1px solid #DDE1E6;
    &::placeholder {
        color: #DDE1E6;
        font-weight: 600;
    }
`
const ImageWrap = styled.div`
    width: 100vw;
    margin-left: calc(-50vw + 50%);
    padding: 15px 6px 15px 16px;
    background-color: #F4F4F4;
`
const Textarea = styled.textarea`
    width: 100%;
    height: 350px;
    border: none;
    font-size: 14px;
    resize: none;
    &::placeholder {
        color: #DDE1E6;
        font-weight: 600;
    }
`
const HR = styled.hr`
    border: 1px solid #E0E0E0;
    width: 100vw;
    margin-left: calc(-50vw + 50%);
`
export default EditPost;