import React from "react";
import { useHistory } from "react-router-dom";
import { MdArrowBackIos } from "react-icons/md";
import styled from "styled-components";
import {Text} from '../Elements';

const GeneralHeader = (props) => {
    const history = useHistory();
    return (
        <React.Fragment>
            <Header>
                <MdArrowBackIos style={{position: "absolute", left: "0px", top:"14px" }} 
                onClick={()=> history.goBack()}></MdArrowBackIos>
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
  align-items: center;
`
export default GeneralHeader;