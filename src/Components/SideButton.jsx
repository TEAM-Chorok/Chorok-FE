import React from "react";
import { useHistory, useLocation } from "react-router-dom";
import styled from "styled-components";
import { Text, Button, Container } from "../Elements";
import Dimmer from "./Dimmer";


// 호출한 부모 컴포넌트에서 모달 open/close에 관여하는 state를 관리해야합니다!
// const [open, setOpen] = React.useState(false);

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
position: sticky;
left: 180px;
bottom: 92px; 
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
