import {Text, Grid, Image} from '../../Elements/index';
import React from 'react';
import styled from 'styled-components';
import { GeneralHeader } from '..';

const Questionnaire4 = (props) => {

    return(
      <React.Fragment>
        <GeneralHeader />
        <Grid margin="80px 0px 24px 0px">
            <Text color="#262626" size="large" bold >어떤 특징을 가진 식물을<br />좋아하시나요?</Text>
          </Grid>
            <SelectWrap>
              <ImageBox onClick={()=>props.setAttribute2("pgs01")}>
              <ImageWrap className='child'
                border={props.attribute2 === "pgs01"? "3px solid #0AAF42" : "1px solid #F4F4F4"}>
                <Image margin="0px auto" type="square" borderRadius="16px" size="100px" imgUrl="img/plantType/관목형.png"></Image>
              </ImageWrap>
              <TextWrap className='text'
                border={props.attribute2 === "pgs01"? "1px solid #0AAF42" : "1px solid #F4F4F4"}
                bg={props.attribute2 === "pgs01"? "#DEFBE6" : "transparent"}>
                <Text display="block" color="#262626" size="xsmall" margin="0px">부드러운</Text>
              </TextWrap>
              </ImageBox>
              <ImageBox onClick={()=>props.setAttribute2("pgs05")}>
                <ImageWrap className='child'
                 border={props.attribute2 === "pgs05"? "3px solid #0AAF42" : "1px solid #F4F4F4"}>
                  <Image margin="0px auto" type="square" borderRadius="16px" size="100px"imgUrl="img/plantType/풀잎형.png"></Image>
                </ImageWrap>
                <TextWrap className='text'
                  border={props.attribute2 === "pgs05"? "1px solid #0AAF42" : "1px solid #F4F4F4"}
                  bg={props.attribute2 === "pgs05"? "#DEFBE6" : "transparent"}>
                  <Text display="block" color="#262626" size="xsmall" margin="0px">아담한</Text>
                </TextWrap>
              </ImageBox>
              <ImageBox onClick={()=>props.setAttribute2("pgs04")}>
              <ImageWrap className='child'
                border={props.attribute2 === "pgs04"? "3px solid #0AAF42" : "1px solid #F4F4F4"}>
                <Image margin="0px auto 0px auto"  type="square" borderRadius="16px" size="100px" imgUrl="img/plantType/직립형.png"></Image>
                </ImageWrap>
                <TextWrap className='text'
                  border={props.attribute2 === "pgs04"? "1px solid #0AAF42" : "1px solid #F4F4F4"}
                  bg={props.attribute2 === "pgs04"? "#DEFBE6" : "transparent"}>
                <Text display="block" color="#262626" size="xsmall" margin="0px">쭉쭉 뻗은</Text>
                </TextWrap>
              </ImageBox>
            </SelectWrap>
            <SelectWrap2>
              <ImageBox onClick={()=>props.setAttribute2("pgs02")}>
              <ImageWrap className='child'
                border={props.attribute2 === "pgs02"? "3px solid #0AAF42" : "1px solid #F4F4F4"}>
                <Image margin="0px auto 0px auto"  type="square" borderRadius="16px" size="100px" imgUrl="img/plantType/덩굴형.png"></Image>
                </ImageWrap>
                <TextWrap className='text'
                  border={props.attribute2 === "pgs02"? "1px solid #0AAF42" : "1px solid #F4F4F4"}
                  bg={props.attribute2 === "pgs02"? "#DEFBE6" : "transparent"}>
                <Text display="block" color="#262626" size="xsmall" margin="0px">감겨오르는</Text>
                </TextWrap>
              </ImageBox> 
              <ImageBox onClick={()=>props.setAttribute2("pgs06")}>
              <ImageWrap className='child'
                border={props.attribute2 === "pgs06"? "3px solid #0AAF42" : "1px solid #F4F4F4"}>
                <Image margin="0px auto 0px auto"  type="square" borderRadius="16px" size="100px" imgUrl="img/plantType/둥글게펼쳐진.png"></Image>
              </ImageWrap>
              <TextWrap className='text'
                border={props.attribute2 === "pgs06"? "1px solid #0AAF42" : "1px solid #F4F4F4"}
                bg={props.attribute2 === "pgs06"? "#DEFBE6" : "transparent"}>
                <Text display="block" color="#262626" size="xsmall" margin="0px">둥글게 펼쳐진</Text>
                </TextWrap>
              </ImageBox>
            </SelectWrap2>
            <Grid position="absolute" top="600px" right="100px"  align="center">
              <PrimaryBtn disabled={props.attribute2 === ""} onClick={()=>props.submit()}>다음으로</PrimaryBtn>
          </Grid>
      </React.Fragment>
    )
}

const ImageBox = styled.div`
  width: fit-content;
  height: fit-content;
  text-align: center;
  margin-bottom: 20px;
  &:hover .child{
    border: 3px solid #0AAF42;
    color: #0AAF42;
  }
  &:hover .text{
    border: 1px solid #0AAF42;
    background-color: #DEFBE6;
    color: #0AAF42;
  }
`
const SelectWrap = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  justify-content: space-around;
`
const SelectWrap2 = styled.div`
  // width: 100%;
  height: fit-content;
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
  padding: 6px 12px;
  background-color: ${(props) => props.bg};
  border: ${(props) => props.border};
  border-radius: 16px;
  margin: 8px auto;
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
export default Questionnaire4;