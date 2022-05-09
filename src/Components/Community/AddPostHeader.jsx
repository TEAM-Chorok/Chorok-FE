import React from "react";
import { useHistory } from "react-router-dom";
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import { Button } from "@mui/material";
import styled from "styled-components";
import { Text } from "../../Elements";
import { GrClose } from 'react-icons/gr';

const AddPostHeader = (props) => {
    const history = useHistory();
    const addPost = () => {
        
    }
    return ( 
        <React.Fragment>
            <Header>
                <GrClose style={{marginRight:"36px"}}
                onClick={()=> history.goBack()}></GrClose>
                <Text size="base" bold margin="0px">{props.title}</Text>
                {props.disable ? 
                <Button
                disabled={true}
                onClick={()=>addPost()}
                style={{
                    width:"fit-content",
                    height:"fit-content", 
                    fontSize:"16px", 
                    padding:"0px", 
                    justifyContent:"end"
                }}>올리기</Button>: 
                <Button
                onClick={()=>addPost()}
                style={{
                    width:"fit-content",
                    height:"fit-content", 
                    fontSize:"16px", 
                    padding:"0px", 
                    justifyContent:"end", 
                    color:"#24A148"}}>올리기</Button>}
                
            </Header>
        </React.Fragment>
    )
}
const Header = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 3fr 1fr;
    place-items: center;
    margin: 8px 0px;
    padding-bottom: 4px;
`
export default AddPostHeader;