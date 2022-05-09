import React from "react";
import styled from "styled-components";
import { Text } from "../../Elements";
import { FaCamera } from 'react-icons/fa'

const AddPostFooter = (props) => {
    
    return (
        <React.Fragment>
            <BottomBox>
                <BottomWrap>
                    <FaCamera style={{width: "15px", height:"20px", color:"grey"}} 
                    onClick={()=>{props.setPreview(); 
                                    props.setImageUrl(); 
                                    props.setImgCount(props.imgCount+1);}}></FaCamera>
                    <Text>{props.imgCount}/3</Text>
                </BottomWrap>
            </BottomBox>
            
        </React.Fragment>
    )

}
const BottomBox = styled.div`
    width: 100vw;
    margin-left: calc(-50vw + 50%);
    border-top: 1px solid #DDE1E6;
`
const BottomWrap = styled.div`
    height: 30px;
    padding: 0px 16px;
    display: flex;
    justify-content: space-between;
    align-items:baseline;
`
export default AddPostFooter;