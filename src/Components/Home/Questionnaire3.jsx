import {Text, Grid, Image} from '../../Elements/index';
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
              <SelectDiv >
                <Text size="base">잎이 멋있는 식물이 좋아요</Text>
              </SelectDiv>
              <SelectDiv >
                <Text size="base" >열매가 맺히는 걸 보고싶어요</Text>
              </SelectDiv>
              <SelectDiv>
                <Text size="base">예쁜 꽃이 피는 걸 보고싶어요</Text>
              </SelectDiv>
              <SelectDiv>
                <Text size="base">어디선나 잘 자라면 좋겠어요</Text>
              </SelectDiv>
            </SelectWrap>
            
            <Grid position="absolute" top="600px" right="100px"  align="center">
            <PrimaryBtn onClick={()=>props.setActive(4)}>다음으로</PrimaryBtn>
          </Grid>
      </React.Fragment>
    )
}

const SelectDiv = styled.div`
  height: fit-content;
  padding: 16px 30px;
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
`
export default Questionnaire3;