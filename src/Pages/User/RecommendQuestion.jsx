import {Text, Grid} from '../../Elements/index';
import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { Button } from '@mui/material';
import { useState } from 'react';
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined';
import styled from 'styled-components';
import Container from '../../Elements/Container';

const RecommendQuestion = () => {
  const params = useParams();  //params.no = 문제번호 (1~4)
  const history = useHistory();

  if(parseInt(params.no) === 1){
    return (
      <React.Fragment>
        <Container>
          <Grid padding="30px 10px">
          <Header>
              <ArrowBackIosNewOutlinedIcon style={{position: "abolute", left: "10px", top:"58px" }} onClick={()=>history.goBack()}></ArrowBackIosNewOutlinedIcon>
          </Header>
            <QuestionWrap>
              <Text size="L">xx님의 집사레벨은 어떠한가요?😀</Text>
            
              <QuestionBox>
                <Text size="M" display="block">아기집사</Text>
                <Text display="block">식물을 한 번도 키워본 적이 없거나 키워도 다 실패해요</Text>
              </QuestionBox>
              <QuestionBox>
                <Text size="M" display="block">초보집사</Text>
                <Text display="block">식물에 대해 잘 모르지만 한두 번 키워봤어요!</Text>
              </QuestionBox>
              <QuestionBox>
                <Text size="M" display="block">숙련집사</Text>
                <Text display="block">어느 정도 식물에 대해 잘 알고 잘 키울 수 있어요!</Text>
              </QuestionBox>
              <Button onClick={()=>history.push('/recommend/2')}>다음</Button>
            </QuestionWrap>
          </Grid>
        </Container>
      </React.Fragment>
    )
  } if(parseInt(params.no) === 2){
    return(
      <React.Fragment>
        <Container>
        <Grid padding="30px 10px">
        <Header>
            <ArrowBackIosNewOutlinedIcon style={{position: "relative", left: "10px", top:"0px" }} onClick={()=>history.goBack()}></ArrowBackIosNewOutlinedIcon>
        </Header>
        <QuestionWrap>
            <Text size="L">어디에서 식물을 키우실 예정인가요?</Text>
          
            <QuestionBox>
              <Text size="M" display="block">사무실</Text>
              <Text display="block">어쩌구 저쩌구</Text>
            </QuestionBox>
            <QuestionBox>
              <Text size="M" display="block">집</Text>
              <Text display="block">어쩌구 저쩌구</Text>
            </QuestionBox>
            <QuestionBox>
              <Text size="M" display="block">야외/테라스</Text>
              <Text display="block">어쩌구 저쩌구</Text>
            </QuestionBox>
            <Button onClick={()=>history.push('/recommend/3')}>다음</Button>
          </QuestionWrap>
        </Grid>
        </Container>
      </React.Fragment>
    )
  } if(parseInt(params.no) === 3){
    return(
      <React.Fragment>
        <Container>
        <Grid padding="30px 10px">
          <Header>
              <ArrowBackIosNewOutlinedIcon style={{position: "relative", left: "10px", top:"0px" }} onClick={()=>history.goBack()}></ArrowBackIosNewOutlinedIcon>
          </Header>
          <QuestionWrap>
            <Text size="L">어떤 이유로 <br/>식물을 키우고 싶으신가요?</Text>
          
            <QuestionBox>
              <Text display="block">제 공간에 활기를 불어넣고 싶어요! </Text>
            </QuestionBox>
            <QuestionBox>
              <Text display="block">공기 정화와 전자파 차단 등의 효과를 보고싶어요! </Text>
            </QuestionBox>
            <QuestionBox>
              <Text display="block">내가 키운 식물로 직접 요리를 해보고 싶어요</Text>
            </QuestionBox>
            <Button onClick={()=>history.push('/recommend/4')}>다음</Button>
          </QuestionWrap>
        </Grid>
        </Container>
      </React.Fragment>
    )
  } if(parseInt(params.no) === 4){
    return(
      <React.Fragment>
        <Container>
        <Grid padding="30px 10px">
          <Header>
              <ArrowBackIosNewOutlinedIcon style={{position: "relative", left: "10px", top:"0px" }} onClick={()=>history.goBack()}></ArrowBackIosNewOutlinedIcon>
          </Header>
        <QuestionWrap>
            <Text size="L">식물이 자랄 환경을 알려주세요 😀</Text>
            <QuestionBox>
              <Text display="block">햇빛이 잘 들어요 </Text>
            </QuestionBox>
            <QuestionBox>
              <Text display="block">온도와 습도가 적당해요 </Text>
            </QuestionBox>
            <QuestionBox>
              <Text display="block">통풍이 잘 되어요</Text>
            </QuestionBox>
            <QuestionBox>
              <Text display="block">위의 조건에 모두 충족되지 않아요</Text>
            </QuestionBox>
            <Button>다음</Button>
          </QuestionWrap>
        </Grid>
        </Container>
      </React.Fragment>
    )
  }
} 
const QuestionWrap = styled.div`
  width: 100%;
  height: 100%;
  text-align: center;
`
const QuestionBox = styled.div`
  width: 80%;
  height: 80px;
  border: 1px solid darkgrey;
  border-radius: 10px;
  margin: 10px auto;
`
const Header = styled.div`
  width: 100%;
  height: 20%;
  margin: 10px auto;
`
export default RecommendQuestion;