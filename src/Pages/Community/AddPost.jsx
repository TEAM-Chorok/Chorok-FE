import React, { useEffect } from 'react';
import { useHistory } from "react-router-dom";
import styled from 'styled-components';
import { Text, Grid, Image, Button, Container } from '../../Elements';
import { AddPostHeader, AddPostFooter } from '../../Components';
import { useDispatch } from 'react-redux';
import { actionCreators as postActions } from '../../Redux/Modules/post';
import { TiDelete } from "react-icons/ti";
import imageCompression from 'browser-image-compression';


const AddPost = () => {
    const dispatch = useDispatch();
    const [postTitle, setPostTitle] = React.useState("");
    const [postContent, setPostContent] = React.useState("");
    const [category, setCategory] = React.useState("");

    const [preview, setPreview] = React.useState(""); //preview
    const [imageUrl, setImageUrl] = React.useState(""); //보내는 image

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

    //이미지 re-sizing 
    // const handleFileOnChange = async (e) => {
    //     let file = e.target.files[0];	// 입력받은 file객체
        
    //     // 이미지 resize 옵션 설정 (최대 width을 100px로 지정)
    //     const options = { 
    //         maxSizeMB: 2, 
    //         maxWidthOrHeight: 100
    //     }
        
    //     try {
    //       const compressedFile = await imageCompression(file, options);
    //       setFile(compressedFile);
    
    //       // resize된 이미지의 url을 받아 fileUrl에 저장
    //       const promise = imageCompression.getDataUrlFromFile(compressedFile);
    //       promise.then(result => {
    //           setFileUrl(result);
    //       })
    //     } catch (error) {
    //         console.log(error);
    //     }
    //   }



    const submit = () => {
        dispatch(postActions.addPostDB( postTitle, imageUrl, postContent, category));
    }

    return (
        <React.Fragment>
            <Container>
                <AddPostHeader submit={submit} disable={postTitle === "" || postContent === "" || category === ""} title="초록톡 글쓰기"/>
                <HR />
                <Grid margin="16px 0">
                    <Button type="filter" checked={category === "postType02"} _onClick={() => {setCategory("postType02")}}>질문</Button>
                    <Button type="filter" checked={category === "postType03"} _onClick={() => {setCategory("postType03")}}>식물성장일기</Button>
                    <Button type="filter" checked={category === "postType04"} _onClick={() => {setCategory("postType04")}}>식물추천</Button>
                </Grid>
                <Grid padding="10px 4px" width="100%">
                    <Input type="text" placeholder='글 제목을 입력해주세요'
                    onChange={(e) => {setPostTitle(e.target.value)}}></Input>
                </Grid>
                <Grid padding="10px 4px" width="100%">
                    <Textarea placeholder='이웃집사들과 다양한 이야기를 나누어보세요' 
                    onChange={(e) => {setPostContent(e.target.value)}}></Textarea>
                </Grid>
            </Container>
            <Container type="np">
                {imageUrl === "" ? 
                    <ImageWrap style={{visibility:"hidden"}}>
                        <Image width="84px" height="84px" type="planterior" />
                        <IconBox>
                                <TiDelete
                                size="25px" style={{ flex: "none", marginLeft: "-6.5px" }} color="#5F6060" />
                            </IconBox>
                    </ImageWrap> :
                    <>
                        <ImageWrap>
                            <Image width="84px" height="84px" type="planterior" imgUrl={preview} />
                            <IconBox>
                                <TiDelete
                                size="25px" style={{ flex: "none", marginLeft: "-6.5px" }} color="#5F6060"
                                onClick={() => { setImageUrl(""); setPreview(""); }} />
                            </IconBox>

                        </ImageWrap>
                    </>
                }

                {/* bottom */}
                <AddPostFooter encodeFileToBase64={encodeFileToBase64} setImageUrl={setImageUrl}/>
            </Container>
        </React.Fragment>
    )
}
export default AddPost;

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
    width: fit-content;
    position: relative;
    margin: 12px 8px 12px 16px;
`
const IconBox = styled.div`
  position: absolute;
  top: -5px;
  right: -4px;

  display: flex;
  align-items: center;

  width: 12px;
  height: 12px;

  border: 1px solid #000;
  border-radius: 12px;
  background: #fff;
`

const Textarea = styled.textarea`
    width: 100%;
    height: 240px;
    border: none;
    font-size: 14px;
    resize: none;
    &::placeholder {
        color: #DDE1E6;
        font-weight: 600;
    }
    &:focus {
        outline:none;
    }
`
const HR = styled.hr`
    border: 1px solid #E0E0E0;
    width: 100vw;
    margin-left: calc(-50vw + 50%);
`

