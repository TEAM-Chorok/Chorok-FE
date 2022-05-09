import React from "react";
import { useHistory } from "react-router-dom";
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import { Button } from "@mui/material";
import styled from "styled-components";
import { Text } from "../../Elements";

const AddPostHeader = (props) => {
    const history = useHistory();
    const addPost = () => {
        
    }
    return ( 
        <React.Fragment>
            <Header>
                <ArrowBackIosNewOutlinedIcon 
                onClick={()=> history.goBack()}></ArrowBackIosNewOutlinedIcon>
                <Text size="h5" bold margin="0px">{props.title}</Text>
                <Button
                onClick={()=>addPost()}
                disabled={props.disable} 
                style={{width:"fit-content", height:"fit-content", fontSize:"18px"}}>완료</Button>
            </Header>
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
export default AddPostHeader;