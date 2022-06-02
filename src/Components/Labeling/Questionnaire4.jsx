import {Text, Grid, Image, Container} from '../../Elements/index';
import React from 'react';
import styled from 'styled-components';
import { GeneralHeader } from '..';

const Questionnaire4 = (props) => {

    return(
      <React.Fragment>
        <GeneralHeader />
        <Container>
        <Grid margin="32px 0px 32px 0px" width="100%">
            <Text size="large" weight="600"  >어떤 특징을 가진 식물을<br />좋아하시나요?</Text>
          </Grid>
            <SelectWrap>
              <ImageBox onClick={()=>props.setAttribute2("pgs01")}>
              <ImageWrap className='child'
                border={props.attribute2 === "pgs01"? "3px solid #0AAF42" : "1px solid #F4F4F4"}>
                <Image margin="0px auto" type="square" borderRadius="16px" size="100px" imgUrl="img/plantType/풀잎형.png"></Image>
              </ImageWrap>
              <TextWrap>
                <Text size="small" className='text' weight={props.attribute2 ===  "pgs01" ? "700" : "500"} color={props.attribute2 ===  "pgs01" ? "#24A148" : "#262626"}>부드러운</Text>
              </TextWrap>
              </ImageBox>
              <ImageBox onClick={()=>props.setAttribute2("pgs03")}>
                <ImageWrap className='child'
                 border={props.attribute2 === "pgs03"? "3px solid #0AAF42" : "1px solid #F4F4F4"}>
                  <Image margin="0px auto" type="square" borderRadius="16px" size="100px"imgUrl="img/plantType/관목형.png"></Image>
                </ImageWrap>
                <TextWrap >
                  <Text size="small" weight={props.attribute2 ===  "pgs03" ? "700" : "500"}
                  className='text' color={props.attribute2 ===  "pgs03" ? "#24A148" : "#262626"}>아담한</Text>
                </TextWrap>
              </ImageBox>
              <ImageBox onClick={()=>props.setAttribute2("pgs04")}>
              <ImageWrap className='child'
                border={props.attribute2 === "pgs04"? "3px solid #0AAF42" : "1px solid #F4F4F4"}>
                <Image margin="0px auto 0px auto"  type="square" borderRadius="16px" size="100px" imgUrl="img/plantType/직립형.png"></Image>
                </ImageWrap>
                <TextWrap>
                <Text size="small" weight={props.attribute2 ===  "pgs04" ? "700" : "500"}
                className='text' color={props.attribute2 ===  "pgs04" ? "#24A148" : "#262626"}>쭉쭉 뻗은</Text>
                </TextWrap>
              </ImageBox>
            </SelectWrap>
            <SelectWrap2>
              <ImageBox onClick={()=>props.setAttribute2("pgs02")}>
              <ImageWrap className='child'
                border={props.attribute2 === "pgs02"? "3px solid #0AAF42" : "1px solid #F4F4F4"}>
                <Image margin="0px auto 0px auto"  type="square" borderRadius="16px" size="100px" imgUrl="img/plantType/덩굴형.png"></Image>
                </ImageWrap>
                <TextWrap>
                <Text size="small" weight={props.attribute2 ===  "pgs02" ? "700" : "500"}
                className='text' color={props.attribute2 ===  "pgs02" ? "#24A148" : "#262626"}>감겨오르는</Text>
                </TextWrap>
              </ImageBox> 
              <ImageBox onClick={()=>props.setAttribute2("pgs06")}>
              <ImageWrap className='child'
                border={props.attribute2 === "pgs06"? "3px solid #0AAF42" : "1px solid #F4F4F4"}>
                <Image margin="0px auto 0px auto"  type="square" borderRadius="16px" size="100px" imgUrl="img/plantType/둥글게펼쳐진.png"></Image>
              </ImageWrap>
              <TextWrap >
                <Text size="small" weight={props.attribute2 ===  "pgs06" ? "700" : "500"}
                className='text' color={props.attribute2 ===  "pgs06" ? "#24A148" : "#262626"}>둥글게 펼쳐진</Text>
                </TextWrap>
              </ImageBox>
            </SelectWrap2>
            <Grid width="100%" margin="42px 0px 0px 0px" align="center">
              <PrimaryBtn disabled={props.attribute2 === ""} onClick={()=>props.submit()}>다음으로</PrimaryBtn>
          </Grid>
          </Container>
      </React.Fragment>
    )
}

const ImageBox = styled.div`
  width: 104px;
  height: fit-content;
  text-align: center;
  &:hover .child{
    border: 3px solid #0AAF42;
    color: #0AAF42;
  }
  &:hover .text{
    color: #0AAF42;
  }
`
const SelectWrap = styled.div`
  width: 100%;
  height: 150px;
  display: flex;
  justify-content: space-around;
`
const SelectWrap2 = styled.div`
  // width: 100%;
  height: 150px;
  margin: 0px 56px;
  display: flex;
  justify-content: space-between;
`
const ImageWrap = styled.div`
  width: fit-content;
  height: fit-content;
  border-radius: 20px;

  border: ${(props) => props.border};
`
const TextWrap = styled.div`
  width: fit-content;
  height: fit-content;
  background-color: ${(props) => props.bg};
  border: ${(props) => props.border};
  border-radius: 16px;
  margin: 8px auto;
`
const PrimaryBtn = styled.button`
  width: 90%;
  height: 48px;
  font-size: 16px;
  color: white;
  background-color: #0AAF42;
  text-align: center;
  border: none;
  border-radius: 8px;
  font-weight: 700;
  font-family: 'SUIT';

  &:disabled{
    background-color: #F4F4F4;
    color: #A8A8A8;
  }
`
export default Questionnaire4;