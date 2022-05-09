import React from "react";
import styled from "styled-components";
import { Text } from "../../Elements";
import { FaCamera } from 'react-icons/fa'
import { useRef } from "react";

const AddPostFooter = (props) => {
    const imgRef = useRef();
    const handleClick = () => {
        imgRef.current.click();
    }

    return (
        <React.Fragment>
            <BottomBox>
                <BottomWrap>
                    <div onClick={handleClick}>
                        <FaCamera style={{width: "15px", height:"20px", color:"grey"}}></FaCamera>
                    </div>
                    <input type="file" ref={imgRef}
                    onClick={(e)=>{props.setImageUrl(e.target.files[0]); props.encodeFileToBase64(e.target.files[0])}}
                    style={{display:"none"}}/>
                    <Text>{props.imgCount}/3</Text>
                </BottomWrap>
            </BottomBox>
            
        </React.Fragment>
    )

}
const BottomBox = styled.div`
    position: fixed;
    width: 100vw;
    // margin-left: calc(-50vw + 50%);
    border-top: 1px solid #DDE1E6;
    bottom: 20px;
    left: 0px;
`
const BottomWrap = styled.div`
    height: 30px;
    padding: 0px 16px;
    display: flex;
    justify-content: space-between;
    align-items:baseline;
`
export default AddPostFooter;