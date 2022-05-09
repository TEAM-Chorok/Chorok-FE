import React from 'react';
import { useHistory } from "react-router-dom";
import styled from 'styled-components';
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import { Text, Grid, Image} from '../../Elements';
import { Button } from '@mui/material';
import { AddPostHeader } from '..';

const AddPlantDairy = () => {
    const history = useHistory;
    const [diaryTitle, setDiaryTitle] = React.useState("");
    const [diaryContent, setDiaryContent] = React.useState("");
    const [preveiw, setPreview] = React.useState(""); //preview
    const [imageUrl, setImageUrl] = React.useState(""); //보내는 image
    //사진 미리보기
    const reader = new FileReader();
    const encodeFileToBase64 = (fileBlob) => {
        reader.readAsDataURL(fileBlob);
        return new Promise((resolve) => {
        reader.onload = () => {
            setImage(reader.result);
        };
        });
    };


    return (
        <React.Fragment>
            <AddPostHeader disable={diaryTitle === "" || diaryContent === ""} title="식물성장일기"/>
            <Grid padding="10px 4px" width="100%">
                <Input type="text" placeholder='제목을 입력해주세요'
                onChange={(e) => {setDiaryTitle(e.target.value)}}></Input>
            </Grid>
            <Grid padding="10px 4px" width="100%">
                <Textarea placeholder='내용을 입력해주세요'
                onChange={(e) => {setDiaryContent(e.target.value)}}></Textarea>
            </Grid>
            <Grid>
                <Image width=""/>
            </Grid>
            <Grid>

            </Grid>
        </React.Fragment>
    )
}
const Header = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 4fr 1fr;
    align-items: center;
    margin: 30px 0px;
`
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
export default AddPlantDairy;