import {Text, Grid, Container} from '../../Elements';
import React from 'react';
import styled from 'styled-components';
import GeneralHeader from '../share/etc/GeneralHeader';


const Questionnaire = (props) => {

    return (
        <React.Fragment>
            <GeneralHeader />
          <Container>
          <Grid margin="32px 0px 32px 0px" width="100%">
            <Text size="large" weight="600" >집사님 반가워요! <br />식물에 대해 어느 정도 알고 계신가요?</Text>
          </Grid>
          <Wrapper>
          <QuestionBox 
            border={props.level === "pl01"? "2px solid #0AAF42" : "1px solid #F4F4F4"}
            bg={props.level === "pl01"? "#DEFBE6" : "transparent"}>            
            <Block onClick={()=>props.setLevel("pl01")}>
              <IconBackground>
                <ImageIcon src="img/labeling/baby.svg"/>
              </IconBackground>              
              <Grid margin="0px 0px 0px 8px">
                <Text margin="0px" display="block" weight="700" >새싹집사</Text>
                <Text margin="0px" display="block" size="xxsmall" color="#24A148">식물을 한 번도 키워본 적이 없거나 키워도 다 실패해요</Text>
              </Grid>
            </Block>                
          </QuestionBox>
          <QuestionBox
            border={props.level === "pl02"? "2px solid #0AAF42" : "1px solid #F4F4F4"}
            bg={props.level === "pl02"? "#DEFBE6" : "transparent"}>
            <Block onClick={()=>props.setLevel("pl02")}>
              <IconBackground>
                <ImageIcon src="img/labeling/leaves.svg"/>
              </IconBackground>              
              <Grid margin="0px 0px 0px 8px">
                <Text margin="0px" display="block" weight="700" >초보집사</Text>
                <Text margin="0px" display="block" size="xxsmall" color="#24A148">식물에 대해 잘 모르지만 한두 번 잘 키워봤어요!</Text>
              </Grid>
            </Block>   
          </QuestionBox>
          <QuestionBox
            border={props.level === "pl03"? "2px solid #0AAF42" : "1px solid #F4F4F4"}
            bg={props.level === "pl03"? "#DEFBE6" : "transparent"}>
            <Block onClick={()=>props.setLevel("pl03")}>
              <IconBackground>
                <ImageIcon src="img/labeling/tree.svg"/>
              </IconBackground>              
              <Grid margin="0px 0px 0px 8px">
                <Text margin="0px" display="block" weight="700">숙련집사</Text>
                <Text margin="0px" display="block" size="xxsmall" color="#24A148">식물에 대해 잘 알고 잘 키울 수 있어요!</Text>
              </Grid>
            </Block>
          </QuestionBox>
          </Wrapper>
          <Grid width="100%" align="center" margin="68px 0px 0px 0px">
            <PrimaryBtn disabled={props.level === ""} onClick={()=>props.setActive(2)}>다음으로</PrimaryBtn>
          </Grid>
          </Container>
        </React.Fragment>
    )
}
const Wrapper = styled.div`
  width:100%;
  height: 280px;
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;

`
const Block = styled.div`
  display: grid;
  grid-template-columns: 1fr 9fr;
  align-items: center;
`
const IconBackground = styled.div`
  width: 30px;
  height: 30px;
  border-radius:30px;
  background-color: #fff;
`
const ImageIcon = styled.img`
  width: 18px;
  height: 28px;
  margin: auto;
  border: none;
  display: flex;
  z-index: 200;
  background-size: contain;
`
const QuestionBox = styled.div`
  width: 99%;
  height: 80px;
  position: relative;
  background-color: ${(props) => props.bg};
  border: ${(props) => props.border};
  display: flex; justify-content:center;
  text-align: left;
  border-radius: 10px;
  margin: 5px auto;
  &:hover {
    border: 2px solid #0AAF42;
    background-color: #DEFBE6;
  }
`
const PrimaryBtn = styled.button`
  width: 90%;
  height: 48px;
  color: #fff;
  text-align: center;
  border-radius: 8px;
  border: none;
  background-color: #0AAF42;
  font-size: 16px;
  font-weight: 700;
  font-family: 'SUIT';
  &:disabled{
    background-color: #F4F4F4;
    color: #A8A8A8;
  }
`
export default Questionnaire;