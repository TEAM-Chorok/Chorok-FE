import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { Text, Button, Image, Grid } from "../../../Elements";
import Dimmer from "../modal/Dimmer";
import { ReactComponent as LeafIcon } from "../../../Assets/img/sidebuttonIcons/leaf.svg"
import { ReactComponent as HouseIcon } from "../../../Assets/img/sidebuttonIcons/house.svg"
import { ReactComponent as BubbleIcon } from "../../../Assets/img/sidebuttonIcons/bubble.svg"
import { ReactComponent as PlusIcon } from "../../../Assets/img/sidebuttonIcons/plus.svg"

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
    if (props.open) {
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
          {/* 부모 엘리먼트에게 이벤트 전달을 중단 */}
          <Modal onClick={e => e.stopPropagation()}> 
            <InnerWrap onClick={() => history.push('/plant')}>
              <LeafIcon style={{width:'24px', height:'24px'}}/>
              <PlusIcon className="plus"/>
              <Grid margin="0 8px">
                <Text size="small" >식물 추가하기</Text>
              </Grid>
            </InnerWrap>

            <InnerWrap>
              <Grid width="100%">
                <InnerBox1 onClick={() => history.push(`/planterior/write`)}>
                  <HouseIcon style={{width:'24px', height:'24px'}}/>
                  <Grid margin="0 8px">
                    <Text size="small">식물 공간 올리기</Text>
                  </Grid>
                </InnerBox1>
                <InnerBox2 onClick={() => history.push(`/addpost`)}>
                  <BubbleIcon style={{width:'24px', height:'24px'}}/>
                  <Grid margin="0 8px">
                    <Text size="small">초록톡 글쓰기</Text>
                  </Grid>
                </InnerBox2>
              </Grid>
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
right: 16px;
bottom: 136px; 
`
const InnerWrap = styled.div`
position: relative;
display: flex;
align-items: center;

margin: 12px 0;
padding: 12px 16px;

width: 136px;
height: fit-content;
border-radius: 16px;

background-color: white;
  .plus{
    position: absolute;
    bottom: 12px;
    left: 30px;
  }
`
const InnerBox1 = styled.div`
display: flex;
align-items: center;

padding-bottom: 10px;
`
const InnerBox2 = styled.div`
display: flex;
align-items: center;

padding-top: 10px;
`
export default SideButton;
