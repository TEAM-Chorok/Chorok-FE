import React, { useEffect } from 'react';
import { useHistory } from "react-router-dom";
import styled from 'styled-components';
import { Text, Grid, Image } from '../../Elements';
import AddPostHeader from './AddPostHeader';
import AddPostFooter from './AddPostFooter';

const AddQuestion = () => {
    const history = useHistory();
    const [questionTitle, setQuestionTitle] = React.useState("");
    const [questionContent, setQuestionContent] = React.useState("");
    
    const [preveiw, setPreview] = React.useState(""); //preview
    const [imageUrl, setImageUrl] = React.useState(""); //보내는 image
    const [imgCount, setImgCount] =  React.useState(0);

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

    useEffect(() => {
        if(imgCount >= 3) {
            setImgCount(3);
        }
    }, [imgCount])

    return (
        <React.Fragment>
            <AddPostHeader disable={questionTitle === "" || questionContent === ""} title="질문하기"/>
            <Grid padding="10px 4px" width="100%">
                <Input type="text" placeholder='제목을 입력해주세요' 
                onChange={(e) => {setQuestionTitle(e.target.value)}}></Input>
            </Grid>
            <Grid padding="10px 4px" width="100%">
                <Textarea placeholder='내용을 입력해주세요' 
                onChange={(e) => {setQuestionContent(e.target.value)}}></Textarea>
            </Grid>
            {imgCount === 0 ? 
            <></> :
            <ImageWrap>
                <Image width="84px" height="84px" type="planterior" />
                <input style={{display:"none"}} />
            </ImageWrap>
            }
            
            {/* bottom */}
            <AddPostFooter imgCount={imgCount} setImgCount={setImgCount} setPreview={setPreview} setImageUrl={setImageUrl}/>
            
        </React.Fragment>
    )
}
const Input = styled.input`
    width: 100%;
    height: 40px;
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
    height: fit-content;
    border: none;
    font-size: 14px;
    &::placeholder {
        color: #DDE1E6;
        font-weight: 600;
    }
`
export default AddQuestion;