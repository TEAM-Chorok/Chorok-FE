import {Text, Grid, Container} from '../../Elements/index';
import React from 'react';
import styled from 'styled-components';
import { GeneralHeader } from '..';



const Questionnaire3 = (props) => {

    return(
      <React.Fragment>
        <GeneralHeader />
        <Container>
        <Grid margin="32px 0px 32px 0px" width="100%">
            <Text size="large" weight="600"  >어떤 종류의 <br />식물을 키우고 싶으신가요?</Text>
          </Grid>
            <SelectWrap>
              <DivWrap>
                <SelectDiv onClick={()=>props.setAttribute("pt01")} 
                  border={props.attribute === "pt01"? "2px solid #0AAF42" : "1px solid #F4F4F4"}
                  bg={props.attribute === "pt01"? "#DEFBE6" : "transparent"}>
                  <IconBackground><ImageIcon  src="img/labeling/leaves.svg"/></IconBackground>
                  <Text size="base">잎이 멋있는 식물이 좋아요</Text>
                </SelectDiv>
              </DivWrap>
              <DivWrap>
              <SelectDiv onClick={()=>props.setAttribute("pt04")}
                border={props.attribute === "pt04"? "2px solid #0AAF42" : "1px solid #F4F4F4"}
                bg={props.attribute === "pt04"? "#DEFBE6" : "transparent"}>
                <IconBackground><ImageIcon src="img/labeling/cherry.svg"/></IconBackground>
                <Text size="base">열매가 맺히는 걸 보고싶어요</Text>
              </SelectDiv>
              </DivWrap>
              <DivWrap>
              <SelectDiv  onClick={()=>props.setAttribute("pt02")}
                border={props.attribute === "pt02"? "2px solid #0AAF42" : "1px solid #F4F4F4"}
                bg={props.attribute === "pt02"? "#DEFBE6" : "transparent"}>
              <IconBackground><ImageIcon src="img/labeling/flower.svg"/></IconBackground>
                <Text size="base">예쁜 꽃이 피는 걸 보고싶어요</Text>
              </SelectDiv>
              </DivWrap>
              <DivWrap>
              <SelectDiv  onClick={()=>props.setAttribute("pt03")}
                border={props.attribute === "pt03"? "2px solid #0AAF42" : "1px solid #F4F4F4"}
                bg={props.attribute === "pt03"? "#DEFBE6" : "transparent"}>
              <IconBackground><ImageIcon src="img/labeling/cactus.svg"/></IconBackground>
                <Text size="base">어디서나 잘 자라면 좋겠어요</Text>
              </SelectDiv>
              </DivWrap>
            </SelectWrap>
            
            <Grid width="100%"  align="center" margin="42px 0px 0px 0px">
            <PrimaryBtn disabled={props.attribute === ""} onClick={()=>props.setActive(4)}>다음으로</PrimaryBtn>
          </Grid>

          </Container>
      </React.Fragment>
    )
}
const DivWrap = styled.div`
width: 100%;
height: 60px;
margin-bottom: 8px;
`
const SelectDiv = styled.div`
  position: relative;
  height: fit-content;
  padding: 16px 60px;

  border-radius: 16px;
  background-color: ${(props) => props.bg};
  border: ${(props) => props.border};
  &:hover {
    border: 2px solid #0AAF42;
    background-color: #DEFBE6;
  }
`
const SelectWrap = styled.div`
  width: 100%;
  height: 280px;
`

const PrimaryBtn = styled.button`
width: 90%;
height: 44px;
color: #fff;
text-align: center;
border-radius: 8px;
font-size: 16px;
border: none;
background-color: #0AAF42;
font-weight: 700;

&:disabled{
  background-color: #F4F4F4;
  color: #A8A8A8;
}`

const ImageIcon = styled.img`
  width: 18px;
  height: 28px;
  margin: auto;
`
const IconBackground = styled.div`
  width: 30px;
  height: 30px;
  position: absolute;
  top: 10px;
  left: 20px;
  border-radius: 50px;
  border: 1px solid #eee;
  display: flex;
  z-index: 100;
  background-color: #fff;
`
export default Questionnaire3;