import {Text, Grid} from '../../Elements/index';
import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { GeneralHeader } from '../../Components';

const Questionnaire = (props) => {

  const history = useHistory();


    return (
        <React.Fragment>
          <GeneralHeader />
          <Grid margin="80px 0px 32px 0px" width="100%">
            <Text size="large" bold >집사님 반가워요! <br />식물에 대해 어느 정도 알고 계신가요?</Text>
          </Grid>
          <QuestionBox>
            <Image style={{backgroundImage:"url(img/Ellipse595.png)"}}/>
            <ImageIcon src="img/baby.svg"/>
            <Grid padding="20px 0px 20px 60px" _onClick={()=>props.setLevel("pl01")}>              
              <Text margin="0px" display="block" >새싹집사</Text>
              <Text margin="0px" display="block" size="xxsmall" color="#24A148">식물을 한 번도 키워본 적이 없거나 키워도 다 실패해요</Text>
            </Grid>                
          </QuestionBox>
          <QuestionBox>
            <Image style={{backgroundImage:"url(img/Ellipse595.png)"}}/>
            <ImageIcon src="img/leaves.svg"/>
            <Grid padding="20px 0px 20px 60px" _onClick={()=>props.setLevel("pl02")}>
              <Text margin="0px" display="block">입문집사</Text>
              <Text margin="0px" display="block" size="xxsmall" color="#24A148">식물에 대해 잘 모르지만 한두 번 잘 키워봤어요!</Text>
            </Grid>   
          </QuestionBox>
          <QuestionBox>
            <Image style={{backgroundImage:"url(img/Ellipse595.png)"}}/>
            <ImageIcon src="img/tree.svg"/>
            <Grid padding="20px 0px 20px 60px" _onClick={()=>props.setLevel("pl03")}>
              <Text margin="0px" display="block">경력집사</Text>
              <Text margin="0px" display="block" size="xxsmall" color="#24A148">식물에 대해 잘 알고 잘 키울 수 있어요!</Text>
            </Grid>
          </QuestionBox>
          <Grid position="absolute" top="600px" right="100px" align="center">
            <PrimaryBtn disabled={props.level === ""} onClick={()=>props.setActive(2)}>다음으로</PrimaryBtn>
          </Grid>
        </React.Fragment>
    )
}
const QuestionBox = styled.div`
  width: 100%;
  height: 80px;
  position: relative;
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
  &:disabled{
    background-color: #F4F4F4;
    color: #A8A8A8;
  }
`
const Image = styled.div`
  width: 30px;
  height: 30px;
  position: absolute;
  top: 20px;
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
  top: 23px;
  left: 27px;
  border: none;
  display: flex;
  z-index: 200;
  background-size: contain;
`
export default Questionnaire;