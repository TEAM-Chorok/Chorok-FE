import React from 'react';
import styled from 'styled-components';
import { Container, Grid, Button, Image, Text } from '../../Elements';
import { AddPostFooter, AddPostHeader, AddQuestion, Alert2 } from '../../Components';
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

    // alert 모달 open/close
    const [open, setOpen] = React.useState(false);
    const [message, setMessage] = React.useState(null);

    const postId = params.postId;
    const post = useSelector(state => state.post?.post);
    const previousImg = post?.postImgUrl;

    const [postTypeCode, setPostTypeCode] = useState("");
    const [category, setCategory] = useState();

    const [postTitle, setPostTitle] = React.useState("");
    const [postContent, setPostContent] = React.useState("");

    const [preview, setPreview] = React.useState(""); //preview
    const [imageUrl, setImageUrl] = React.useState(""); //보내는 image



    useEffect(() => {
        dispatch(postActions.getDetailPostDB(postId));
        setPostContent(post?.postContent);
        setPostTitle(post?.postTitle);
        setPreview(post?.postImgUrl);

        if(post?.postType === "질문"){
            setPostTypeCode("postType02");
            setCategory("postType02")
        }else if(post?.postType === "식물성장일기"){
            setPostTypeCode("postType03")
            setCategory("postType03")
        }else if(post?.postType === "식물추천"){
            setPostTypeCode("postType04")
            setCategory("postType04")
        }
        
    }, [ post?.postContent, post?.postImgUrl, post?.postTitle, post?.postType]);

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
        // return; 
        if(!postTypeCode){
            setMessage("카테고리를 선택해주세요!");
            setOpen(true);
            return;
        }
        const formData = new FormData();
        formData.append('postTitle', postTitle);
        formData.append('postContent', postContent);
        formData.append('postTypeCode', postTypeCode);

        if (!post?.postImgUrl){ //전 글에 이미지가 없었던 경우
            if(imageUrl){ //이미지 삽입
                formData.append('postImgUrl', imageUrl);
                dispatch(postActions.editPostDB(formData, post?.postId)); 
            }else{ //이미지 변경 없이 내용만 변경
                dispatch(postActions.editPostDB(formData, post?.postId));
            }
        } else if(imageUrl === ""){ // 이미지 수정 X
            if(preview === ""){ // 이미지 삭제
                dispatch(postActions.editPostDB(formData, post?.postId)); 
            }else { 
                formData.append('originalUrl', preview);
                dispatch(postActions.editPostDB(formData, post?.postId));   
            }
        } else { // 이미지 수정하는 경우
            formData.append('postImgUrl', imageUrl);
            dispatch(postActions.editPostDB(formData, post?.postId));
        }
    }



    return (
        <React.Fragment>
                <AddPostHeader edit submit={submit} disable={postTitle === "" || postContent === "" || category === ""} title="초록톡 수정하기"/>
                <Grid height="1px" width="100%" bg="#E0E0E0" />
                <Grid margin="16px">
                    <Button type="filter" checked={category === "postType02"} 
                        _onClick={() => {setCategory("postType02"); setPostTypeCode("postType02")}}>질문</Button>
                    <Button type="filter" checked={category === "postType03"} 
                        _onClick={() => {setCategory("postType03"); setPostTypeCode("postType03")}}>식물성장일기</Button>
                    <Button type="filter" checked={category === "postType04"} 
                        _onClick={() => {setCategory("postType04"); setPostTypeCode("postType04")}}>식물추천</Button>
                </Grid>
                <Grid padding="0 16px" width="100%">
                    <Input maxLength="15" type="text" placeholder='글 제목을 입력해주세요' defaultValue={post?.postTitle}
                    onChange={(e) => {setPostTitle(e.target.value)}}></Input>
                </Grid>
                <Grid width="100%" padding="16px">
                    <Textarea placeholder='이웃집사들과 다양한 이야기를 나누어보세요'  defaultValue={post?.postContent}
                    onChange={(e) => {setPostContent(e.target.value)}}></Textarea>
                </Grid>
                <FixedBox>
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
                          onClick={() => { setImageUrl(""); setPreview(""); }} />
                      </IconBox>
                        <input style={{display:"none"}} />
                    </ImageWrap>
                }
                
                {/* bottom */}
                <AddPostFooter encodeFileToBase64={encodeFileToBase64} setImageUrl={setImageUrl}/>
                </FixedBox>
            <Alert2 open={open} setOpen={setOpen} btn1={message === 5 ? "확인" : "계속 작성하기"} >
                <Text bold wordbreak size="small">
                {message}
                </Text>
            </Alert2>
        </React.Fragment>
    )
}

const Input = styled.input`
    font-family: 'SUIT';
    width: 100%;
    height: 40px;
    font-size: 16px;
    border: none;
    border-bottom: 1px solid #DDE1E6;
    &::placeholder {
        color: #DDE1E6;
        font-weight: 500;
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
    font-family: 'SUIT';
    width: 100%;
    height: 40vh;
    border: none;
    font-size: 14px;
    resize: none;
    &::placeholder {
        color: #DDE1E6;
        font-weight: 500;
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
const FixedBox = styled.div`
    position: fixed;
    bottom: 56px;
`

export default EditPost;