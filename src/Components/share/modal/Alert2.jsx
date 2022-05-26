import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { Text, Button, Grid } from "../../../Elements";
import Dimmer from "./Dimmer";




// --- props ---
// btn 1 : 첫번째 버튼
// btn 2 : 두번째 버튼 (props 할당하지 않은 경우 btn1만 출력됨)
// url : btn2 클릭시 이동할 url
// func : 버튼 클릭시 실행할 함수
// error : btn1 클릭시(문제 발생시 이동할 url


const Alert2 = (props) => {

  const { type, children, btn1, btn2, url, func, error } = props;

  const history = useHistory();

  React.useEffect(() => {
    if (props.open) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "hidden";
    }
  }, [props.open])

  if(type==="editPlant"){
    return (
      <React.Fragment>
        {props.open ?
          <>
            <Dimmer setOpenModal={props.setOpen} onClick={() => { props.setOpen(false); }} />
            <Modal onClick={e => e.stopPropagation()}>
              <InnerWrap2>
                <Grid width="200px" margin="auto">
                  {children}
                </Grid>
              </InnerWrap2>
            </Modal>
          </>
          :
          null
        }
      </React.Fragment>
    )
  }
  return (
    <React.Fragment>
      {props.open ?
        <>
          <Dimmer setOpenModal={props.setOpen} onClick={() => { props.setOpen(false); }} />
          <Modal onClick={e => e.stopPropagation()}>
            <InnerWrap>
              <Grid align="center" width="200px" margin="auto">
                {children}
              </Grid>
              <Grid is_flex margin="24px auto 0 auto" align="center">
                <Grid margin="0 16px">
                  <Button type="tran" _onClick={() => {
                    if (func) {
                      func();
                    } else if (error) {
                      history.replace(error);
                    } else {
                      props.setOpen(false)
                    }
                  }}>
                    <Text size="small">
                      {btn1}
                    </Text>
                  </Button>
                </Grid>
                {btn2 ?
                  <Grid margin="0 16px">
                    <Button type="tran" _onClick={() => { history.replace(url); }}>
                      <Text size="small">
                        {btn2}
                      </Text>
                    </Button>
                  </Grid>
                  :
                  <></>
                }
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
position: sticky;
bottom: 40%;
margin: auto;
border-radius: 10px;
box-shadow: 1px 1px 20px rgba(0, 0, 0, 0.3);
`
const InnerWrap = styled.div`
width: 240px;
padding: 32px 0 28px 0;
text-align: center;
border-radius: 20px;
background-color: white;
`

const InnerWrap2 = styled.div`
width: 240px;
padding: 32px 0 16px 0;
text-align: center;
border-radius: 20px;
background-color: white;
`
export default Alert2;
