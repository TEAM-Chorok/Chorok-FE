import {Text, Grid, Image} from '../../Elements/index';
import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useState } from 'react';
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined';
import styled from 'styled-components';
import {Container} from '../../Elements';
import { Button } from '@mui/material';
import { GeneralHeader } from '../../Components';

const Questionnaire = (props) => {
  const params = useParams();  //params.no = 문제번호 (1~4)
  const history = useHistory();


  const [level, setLevel] = React.useState("");
  const [place, setPlace] = React.useState("");
  const [attribute, setAttribute] = React.useState("");
  const [attribute2, setAttribute2] = React.useState("");

  
    return (
        <React.Fragment>
          <GeneralHeader />
          <Grid margin="80px 0px 32px 0px" width="100%">
            <Text size="large" bold >집사님 반가워요! <br />식물에 대해 어느 정도 알고 계신가요?</Text>
          </Grid>
          <QuestionBox>
            <Grid padding="20px 24px" value="pl01">
              <Text margin="0px" display="block" >아기집사</Text>
              <Text margin="0px" display="block" size="XS" color="#24A148">식물을 한 번도 키워본 적이 없거나 키워도 다 실패해요</Text>
            </Grid>                
          </QuestionBox>
          <QuestionBox>
            <Grid padding="20px 24px" value="pl02">
              <Text margin="0px" display="block">초보집사</Text>
              <Text margin="0px" display="block" size="XS" color="#24A148">식물에 대해 잘 모르지만 한두 번 잘 키워봤어요!</Text>
            </Grid>   
          </QuestionBox>
          <QuestionBox>
            <Grid padding="20px 24px" value="pl03">
              <Text margin="0px" display="block">숙련집사</Text>
              <Text margin="0px" display="block" size="XS" color="#24A148">식물에 대해 잘 알고 잘 키울 수 있어요!</Text>
            </Grid>
          </QuestionBox>
          <Grid position="absolute" top="600px" right="100px" align="center">
            <PrimaryBtn onClick={()=>props.setActive(2)}>다음으로</PrimaryBtn>
          </Grid>
        </React.Fragment>
    )
}
const QuestionBox = styled.div`
  width: 100%;
  height: 80px;
  border: 1px solid #F4F4F4;
  text-align: left;
  border-radius: 10px;
  margin: 10px auto;
  &:hover {
    border: 1px solid #0AAF42;
    background-color: #DEFBE6;
  }
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

export default Questionnaire;