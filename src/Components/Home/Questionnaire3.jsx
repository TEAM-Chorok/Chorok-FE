import {Text, Grid} from '../../Elements/index';
import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useState } from 'react';
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined';
import styled from 'styled-components';
import {Container} from '../../Elements';
import { Button } from '@mui/material';
import { GeneralHeader } from '..';



const Questionnaire3 = (props) => {
  const history = useHistory();

    return(
      <React.Fragment>
        <GeneralHeader />
        <Grid margin="80px 0px 24px 0px">
            <Text size="large" bold >어떤 종류의 <br />식물을 키우고 싶으신가요?</Text>
          </Grid>
            <SelectWrap>
              <SelectDiv onClick={()=>props.setAttribute("pt01")} >
                <Image style={{backgroundImage:"url(img/Ellipse595.png)"}}/>
                <ImageIcon  src="img/leaves.svg"/>
                <Text size="base">잎이 멋있는 식물이 좋아요</Text>
              </SelectDiv>
              <SelectDiv onClick={()=>props.setAttribute("pt04")}>
                <Image style={{backgroundImage:"url(img/Ellipse595.png)"}}/>
                <ImageIcon src="img/cherry.svg"/>
                <Text size="base">열매가 맺히는 걸 보고싶어요</Text>
              </SelectDiv>
              <SelectDiv  onClick={()=>props.setAttribute("pt02")}>
                <Image style={{backgroundImage:"url(img/Ellipse595.png)"}}/>
                <ImageIcon src="img/flower.svg"/>
                <Text size="base">예쁜 꽃이 피는 걸 보고싶어요</Text>
              </SelectDiv>
              <SelectDiv  onClick={()=>props.setAttribute("pt03")}>
                <Image style={{backgroundImage:"url(img/Ellipse595.png)"}}/>
                <ImageIcon src="img/cactus.svg"/>
                <Text size="base">어디선나 잘 자라면 좋겠어요</Text>
              </SelectDiv>
            </SelectWrap>
            
            <Grid position="absolute" top="600px" right="100px"  align="center">
            <PrimaryBtn disabled={props.attribute === ""} onClick={()=>props.setActive(4)}>다음으로</PrimaryBtn>
          </Grid>
      </React.Fragment>
    )
}

const SelectDiv = styled.div`
  position: relative;
  height: fit-content;
  padding: 16px 60px;
  margin-bottom: 8px;
  border-radius: 16px;
  border: 1px solid #F4F4F4;
  &:hover {
    border: 1px solid #0AAF42;
    background-color: #DEFBE6;
  }
`
const SelectWrap = styled.div`
  width: 100%;
  height: fit-content;
`

const PrimaryBtn = styled.button`
  width: 167px;
  height: 44px;
  color: white;
  background-color: #0AAF42;
  text-align: center;
  border: none;
  border-radius: 16px;
  &:disabled{
    background-color: #F4F4F4;
    color: #A8A8A8;
  }
`

const Image = styled.div`
  width: 30px;
  height: 30px;
  position: absolute;
  top: 10px;
  left: 20px;
  border-radius: 50px;
  border: 1px solid #eee;
  display: flex;
  z-index: 100;
`
const ImageIcon = styled.img`
  width: 18px;
  height: 28px;
  position: absolute;
  top: 12px;
  left: 27px;
  border: none;
  display: flex;
  z-index: 200;
`
export default Questionnaire3;