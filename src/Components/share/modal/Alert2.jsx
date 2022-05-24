import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { Text, Button, Grid } from "../../../Elements";
import Dimmer from "./Dimmer";


const Alert2 = (props) => {

  const { children, btn1, btn2, url } = props;

  const history = useHistory();

  React.useEffect(() => {
    if (props.open) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "hidden";
    }
  }, [props.open])

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
                    if (url) {
                      history.push(url);
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
                    <Button type="tran" _onClick={() => { history.replace(`${url}`); }}>
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

export default Alert2;
