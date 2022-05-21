import React from "react";
import { useHistory, useLocation } from "react-router-dom";
import styled from "styled-components";
import { Text, Button, Container } from "../Elements";
import Dimmer from "./Dimmer";


// 호출한 부모 컴포넌트에서 모달 open/close에 관여하는 state를 관리해야합니다!
// const [open, setOpen] = React.useState(false);
//
//
// 전체 목록을 감싸는 div를 하나 만들어주고 속성을 다음과 같이 지정해주세요!
// 그래야 모달 오픈시 스크롤이 되지 않습니다 ~!  
// <Wrapper open={open}>
//
// const Wrapper = styled.div`
// width: 100%;
// height: 100%;
// overflow: ${(props) => props.open? "hidden" : "auto" };
// `

const SideButton = (props) => {
  const history = useHistory();

  //+버튼 모달창

  const openModal = () => {
    if(props.open) {
      props.setOpen(false);
    } else {
      props.setOpen(true);
    }
  }


  return (
    <React.Fragment>
      <Button type="plus" _onClick={() => openModal()} />
      {props.open ?
        <>
          <Dimmer setOpenModal={props.setOpen} onClick={() => openModal()} />
          <Modal onClick={e => e.stopPropagation()}>
            <InnerWrap onClick={() => history.push('/plant')}>
              <Text size="small" >🌱 식물 추가하기</Text>
            </InnerWrap>

            <InnerWrap>
              <InnerBox1 onClick={() => history.push(`/planterior/write`)}>
                <Text size="small">🏡 공간 자랑하기</Text>
              </InnerBox1>
              <InnerBox2 onClick={() => history.push(`/addpost`)}>
                <Text size="small">💬 초록톡 글쓰기</Text>
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
right: 32px;
bottom: 144px; 
`
const InnerWrap = styled.div`
margin: 12px 0;
padding: 12px 16px;

width: 136px;
height: fit-content;
border-radius: 16px;

background-color: white;
`
const InnerBox1 = styled.div`
padding-bottom: 10px;
`
const InnerBox2 = styled.div`
padding-top: 10px;
`
export default SideButton;
