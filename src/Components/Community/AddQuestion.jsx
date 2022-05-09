import React, { useEffect } from 'react';
import { useHistory } from "react-router-dom";
import styled from 'styled-components';
import { Text, Grid, Image, Button } from '../../Elements';
import AddPostHeader from './AddPostHeader';
import AddPostFooter from './AddPostFooter';

const AddQuestion = () => {
    const history = useHistory();
    const [questionTitle, setQuestionTitle] = React.useState("");
    const [questionContent, setQuestionContent] = React.useState("");
    const [category, setCategory] = React.useState("");

    const [preview, setPreview] = React.useState(""); //preview
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
            <AddPostHeader disable={questionTitle === "" || questionContent === "" || category === ""} title="초록톡 글쓰기"/>
            <HR />
            <Grid margin="16px 0">
                <Button type="filter" _onClick={() => {setCategory("postType02")}}>질문</Button>
                <Button type="filter" _onClick={() => {setCategory("postType03")}}>식물성장일기</Button>
                <Button type="filter" _onClick={() => {setCategory("postType04")}}>식물추천</Button>
            </Grid>
            <Grid padding="10px 4px" width="100%">
                <Input type="text" placeholder='글 제목을 입력해주세요'
                onChange={(e) => {setQuestionTitle(e.target.value)}}></Input>
            </Grid>
            <Grid padding="10px 4px" width="100%">
                <Textarea placeholder='이웃집사들과 다양한 이야기를 나누어보세요' 
                onChange={(e) => {setQuestionContent(e.target.value)}}></Textarea>
            </Grid>
            {imgCount === 0 ? 
            <></> :
            <ImageWrap>
                <Image width="84px" height="84px" type="planterior" imgUrl={preview} />
                <input style={{display:"none"}} />
            </ImageWrap>
            }
            
            {/* bottom */}
            <AddPostFooter encodeFileToBase64={encodeFileToBase64} imgCount={imgCount} setImgCount={setImgCount} setImageUrl={setImageUrl}/>
            
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
    height: 450px;
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
export default AddQuestion;