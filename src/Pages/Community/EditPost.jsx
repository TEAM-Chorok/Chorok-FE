import React from 'react';
import styled from 'styled-components';
import { Container, Grid, Button, Image } from '../../Elements';
import { AddPostFooter, AddPostHeader, AddQuestion } from '../../Components';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { actionCreators as postActions } from '../../Redux/Modules/post';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { TiDelete } from 'react-icons/ti';

const EditPost = () => {
    const params = useParams();
    const dispatch = useDispatch();

    const postId = params.postId;
    const post = useSelector(state => state.post?.post);

    const [postTypeCode, setPostTypeCode] = useState("");
    const [category, setCategory] = useState();

    const previousTitle = post?.postTitle;
    const [postTitle, setPostTitle] = React.useState(previousTitle);
    const [postContent, setPostContent] = React.useState(post?.postContent);

    const [preview, setPreview] = React.useState(post?.postImgUrl); //preview
    const [imageUrl, setImageUrl] = React.useState(""); //보내는 image




    useEffect(() => {
        dispatch(postActions.getDetailPostDB(postId));

        if(post.postType === "질문"){
            setPostTypeCode("postType02");
        }else if(post.postType === "식물성장일기"){
            setPostTypeCode("postType03")
        }else if(post.postType === "식물추천"){
            setPostTypeCode("postType04")
        }
        
    }, []);

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
    const submit = ( ) => {
        console.log(postTypeCode);
        
        const formData = new FormData();
        formData.append('postTitle', postTitle);
        formData.append('postContent', postContent);
        formData.append('postTypeCode', postTypeCode);
        formData.append('plantPlaceCode', null);

        if(imageUrl === ""){ // 이미지 수정 X
            formData.append('originalUrl', preview);
            dispatch(postActions.editPostDB(formData, post?.postId));   
            return;
        } else {
            formData.append('postImgUrl', imageUrl);
            dispatch(postActions.editPostDB(formData, post?.postId));
            return;
        }
    }



    return (
        <React.Fragment>
            <Container>
                <AddPostHeader edit submit={submit} disable={postTitle === "" || postContent === "" || category === ""} title="초록톡 수정하기"/>
                <HR />
                <Grid margin="16px 0">
                    <Button type="filter" checked={category === "postType02"} 
                        _onClick={() => {setCategory("postType02"); setPostTypeCode("postType02")}}>질문</Button>
                    <Button type="filter" checked={category === "postType03"} 
                        _onClick={() => {setCategory("postType03"); setPostTypeCode("postType03")}}>식물성장일기</Button>
                    <Button type="filter" checked={category === "postType04"} 
                        _onClick={() => {setCategory("postType04"); setPostTypeCode("postType04")}}>식물추천</Button>
                </Grid>
                <Grid padding="10px 4px" width="100%">
                    <Input type="text" placeholder='글 제목을 입력해주세요' defaultValue={post.postTitle}
                    onChange={(e) => {setPostTitle(e.target.value)}}></Input>
                </Grid>
                <Grid padding="10px 4px" width="100%">
                    <Textarea placeholder='이웃집사들과 다양한 이야기를 나누어보세요'  defaultValue={post.postContent}
                    onChange={(e) => {setPostContent(e.target.value)}}></Textarea>
                </Grid>
                {preview === "" || preview===null ? 
                    <ImageWrap style={{visibility:"hidden"}}>
                        <Image width="84px" height="84px" type="planterior" />
                        <input style={{display:"none"}} />
                    </ImageWrap> :
                    <ImageWrap>
                        <Image size="84px" borderRadius="4px" type="square" imgUrl={preview} />
                        <IconBox>
                        <TiDelete
                          size="25px" style={{ flex: "none", marginLeft: "-6.5px" }} color="#5F6060"
                          onClick={() => { setImageUrl(); setPreview(""); }} />
                      </IconBox>
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
    &:focus {
        outline: none;
    }
`
const ImageWrap = styled.div`

    padding: 8px 6px;
    position: relative;
`
const Textarea = styled.textarea`
    width: 100%;
    height: 40vh;
    border: none;
    font-size: 14px;
    resize: none;
    &::placeholder {
        color: #DDE1E6;
        font-weight: 600;
    }
    &:focus {
        outline: none;
    }
`
const HR = styled.hr`
    border: 1px solid #E0E0E0;
    width: 100vw;
    margin-left: calc(-50vw + 50%);
`
const IconBox = styled.div`
  position: absolute;
  top: 4px;
  left: 82px;

  display: flex;
  align-items: center;

  width: 12px;
  height: 12px;

  border: 1px solid #000;
  border-radius: 12px;
  background: #fff;
`

export default EditPost;