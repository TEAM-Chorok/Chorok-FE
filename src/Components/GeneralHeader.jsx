import React from "react";
import { useHistory } from "react-router-dom";
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import styled from "styled-components";
import {Text} from '../Elements';

const GeneralHeader = (props) => {
    const history = useHistory();
    return (
        <React.Fragment>
            <Header>
                <ArrowBackIosNewOutlinedIcon style={{position: "absolute", left: "0px", top:"10px" }} 
                onClick={()=> history.goBack()}></ArrowBackIosNewOutlinedIcon>
                <Text line="2.5em" size={props.size}>{props.title}</Text>
            </Header>
        </React.Fragment>
    )
}
const Header = styled.div`
  width: 100%;
  height: 50px;
  text-align: center;
  position: relative; 
`
export default GeneralHeader;