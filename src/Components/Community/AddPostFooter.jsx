import React from "react";
import styled from "styled-components";
import { Text } from "../../Elements";
import { IoCamera } from 'react-icons/io5';
import { useRef } from "react";

const AddPostFooter = (props) => {
    const imgRef = useRef();
    const handleClick = () => {
        imgRef.current.click();
    }

    //업로드 후 미리보기에서 삭제후 다시 업로드 하려고 하면 안됨 와이₩? 
    return (
        <React.Fragment>
            <BottomBox>
                <BottomWrap>
                    <div onClick={handleClick}>
                        <IoCamera size="25px" color="#8F8F8F"></IoCamera>
                    </div>
                    <input accept='image/*' type="file" ref={imgRef}
                    onChange={(e)=>{props.setImageUrl(e.target.files[0]);
                                props.encodeFileToBase64(e.target.files[0])}}
                    style={{display:"none"}}/>
                </BottomWrap>
            </BottomBox>
        </React.Fragment>
    )

}
const BottomBox = styled.div`
    // position: fixed;
    width: 100vw;
    border-top: 1px solid #DDE1E6;
    bottom: 50px;
    left: 0px;
`
const BottomWrap = styled.div`
    height: 30px;
    padding: 10px 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
export default AddPostFooter;