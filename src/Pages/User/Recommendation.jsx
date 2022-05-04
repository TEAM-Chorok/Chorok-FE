import { Button } from "@mui/material";
import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { Grid, Image, Text } from "../../Elements";
import Dimmer from "../../Components/Dimmer";
import Home from "../Home";


const Recommendation = (props) => {
    const history = useHistory();

  return(
      <React.Fragment>
        <Home />
        <Dimmer onClick={()=>history.replace('/home')}/>
        <Modal>
            <InnerWrap>
                <Text fontSize="16px" bold>ㅇㅇ님을 위한 추천 식물</Text>
                <Image type="circle" size="148px" margin="30px auto 20px auto"/>
                <Text fontSize="16px" bold>몬스테라</Text>
            </InnerWrap>
            <BottomWrap>
                <Button onClick={()=>history.replace(`/plant/monstera`)} 
                style={{color: "black"}} variant="text">식물 자세히 보기</Button>
                <Button onClick={()=>history.replace('/home')} 
                style={{color: "black"}}  variant="text">더 둘러볼게요</Button>
            </BottomWrap>
        </Modal>
      </React.Fragment>
  )
}

const Modal = styled.div`
width: 270px;
height: 450px;
border-radius: 30px;
background-color: white;
z-index: 200;
position: absolute;
top: 0px;
right: 0px;
left: 0px;
bottom: 0px; 
margin: auto;
`
const InnerWrap = styled.div`
width: 165px;
height: fit-content;
margin: 70px 50px 50px 50px;
text-align: center;
`
const BottomWrap = styled.div`
width: 90%;
height: fit-content;
display: grid;
grid-template-columns: 1fr 1fr;
place-items: center;
margin: 0px auto;
`
export default Recommendation;
