import React from "react";
import { useHistory, useLocation } from "react-router-dom";
import styled from "styled-components";
import { Text, Button } from "../Elements";
import Dimmer from "./Dimmer";


const SideButton = (props) => {
    const history = useHistory();
    
    //+버튼 모달창
    const [open, setOpenModal] = React.useState(false);
    const openModal = () => {
        setOpenModal(true);
    }
    const closeModal = () => {
        setOpenModal(false);
    }
    return (
        <React.Fragment>
            <Button type="plus" _onClick={() => openModal()} />
                {open ?
                    <>
                        <Dimmer setOpenModal={setOpenModal} onClick={() => closeModal()} />
                        <Modal onClick={e => e.stopPropagation()}>
                            <InnerWrap onClick={() => history.push('/search')}>
                                <Text size="small" >식물 추가하기</Text>
                            </InnerWrap>

                            <InnerWrap>
                                <InnerBox1 onClick={() => history.push(`/planterior/write`)}>
                                    <Text size="small">공간 자랑하기</Text>
                                </InnerBox1>
                                <InnerBox2 onClick={() => history.push(`/addpost`)}>
                                    <Text size="small">초록톡 글쓰기</Text>
                                </InnerBox2>
                            </InnerWrap>
                        </Modal>
                    </>
                    :
                    null
                }
        </React.Fragment>
    )
}

const Modal = styled.div`
width: fit-content;
height: fit-content;
z-index: 200;
position: fixed;
right: 20px;
bottom: 140px; 
margin: auto;
`
const InnerWrap = styled.div`
width: 167px;
height: fit-content;
text-align: center;
background-color: white;
margin: 8px 0px;
padding: 12px;
border-radius: 16px;
`
const InnerBox1 = styled.div`
padding: 0px 0px 6px 0px;
`
const InnerBox2 = styled.div`
padding: 6px 0px 0px 0px;
`
export default SideButton;
                    