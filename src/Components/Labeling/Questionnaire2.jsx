import {Text, Grid, Image} from '../../Elements/index';
import React from 'react';
import styled from 'styled-components';
import { GeneralHeader } from '..';
 

const Questionnaire2 = (props) => {

    return(
      <React.Fragment>
          <GeneralHeader />
          <Grid margin="80px 0px 24px 0px" width="100%">
            <Text size="large" bold >어떤 공간에서 <br />식물을 키우고 싶으신가요?</Text>
          </Grid>
              <SelectionWrap>
                <ImageBox onClick={()=>props.setPlace("pp03")}> 
                  <ImageWrap className='child' 
                    border={props.place === "pp03"? "3px solid #0AAF42" : "1px solid #F4F4F4"}>
                    <Image type="square" borderRadius="10px" size="100px" imgUrl="img/plantType/bathroom.png"></Image>
                  </ImageWrap>
                  <TextWrap className='text'
                  border={props.place === "pp03"? "1px solid #0AAF42" : "1px solid #F4F4F4"}
                  bg={props.place === "pp03"? "#DEFBE6" : "transparent"}><Text>화장실</Text></TextWrap>
                </ImageBox>
                <ImageBox onClick={()=>props.setPlace("pp02")}>
                  <ImageWrap className='child'
                    border={props.place === "pp02"? "3px solid #0AAF42" : "1px solid #F4F4F4"}>
                    <Image type="square" borderRadius="10px" size="100px" imgUrl="img/plantType/bedroom.png"></Image>
                  </ImageWrap>
                  <TextWrap className='text'
                    border={props.place === "pp02"? "1px solid #0AAF42" : "1px solid #F4F4F4"}
                    bg={props.place === "pp02"? "#DEFBE6" : "transparent"}><Text>방안</Text></TextWrap>
                </ImageBox>
                <ImageBox onClick={()=>props.setPlace("pp01")}>
                  <ImageWrap className='child'
                    border={props.place === "pp01"? "3px solid #0AAF42" : "1px solid #F4F4F4"}>
                    <Image type="square" borderRadius="10px" size="100px" imgUrl="img/plantType/hallway.png"></Image>
                  </ImageWrap>
                  <TextWrap className='text'
                    border={props.place === "pp01"? "1px solid #0AAF42" : "1px solid #F4F4F4"}
                    bg={props.place === "pp01"? "#DEFBE6" : "transparent"}><Text>통로</Text></TextWrap>
                </ImageBox>
              </SelectionWrap>

              <SelectionWrap>
                <ImageBox onClick={()=>props.setPlace("pp06")}>
                  <ImageWrap className='child'
                    border={props.place === "pp06"? "3px solid #0AAF42" : "1px solid #F4F4F4"}>
                    <Image type="square" borderRadius="10px" size="100px" imgUrl="img/plantType/terrace.png"></Image>
                  </ImageWrap>
                  <TextWrap className='text'
                  border={props.place === "pp06"? "1px solid #0AAF42" : "1px solid #F4F4F4"}
                  bg={props.place === "pp06"? "#DEFBE6" : "transparent"}><Text>베란다</Text></TextWrap>
                </ImageBox>
                <ImageBox onClick={()=>props.setPlace("pp05")}>
                  <ImageWrap className='child'
                    border={props.place === "pp05"? "3px solid #0AAF42" : "1px solid #F4F4F4"}>
                    <Image type="square" borderRadius="10px" size="100px" imgUrl="img/plantType/windowside.png"></Image>
                  </ImageWrap>
                  <TextWrap className='text'
                    border={props.place === "pp05"? "1px solid #0AAF42" : "1px solid #F4F4F4"}
                    bg={props.place === "pp05"? "#DEFBE6" : "transparent"}><Text>창가</Text></TextWrap>
                </ImageBox>
                <ImageBox onClick={()=>props.setPlace("pp04")}>
                  <ImageWrap className='child'
                    border={props.place === "pp04"? "3px solid #0AAF42" : "1px solid #F4F4F4"}>
                    <Image type="square" borderRadius="10px" size="100px" imgUrl="img/plantType/livingroom.png"></Image>
                  </ImageWrap>
                  <TextWrap className='text'
                   border={props.place === "pp04"? "1px solid #0AAF42" : "1px solid #F4F4F4"}
                   bg={props.place === "pp04"? "#DEFBE6" : "transparent"}><Text>거실</Text></TextWrap>
                </ImageBox>
              </SelectionWrap>
              <Grid position="absolute" top="600px" right="100px" align="center">
            <PrimaryBtn disabled={props.place === ""} onClick={()=>props.setActive(3)}>다음으로</PrimaryBtn>
          </Grid>
      </React.Fragment>
    )
}
const SelectionWrap = styled.div`
  width: 100%;
  height: fit-content;
  display: grid;
  place-items: center;
  grid-template-columns: 1fr 1fr 1fr;

  margin-bottom: 30px;  
`
const ImageBox = styled.div`
  width: fit-content;
  height: fit-content;
  text-align: center;

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
const ImageWrap = styled.div`
  width: fit-content;
  height: fit-content;
  border-radius: 13px;

  border: ${(props) => props.border};
`
const TextWrap = styled.div`
  width: fit-content;
  height: fit-content;
  padding: 2px 10px;
  border-radius: 16px;
  margin: 5px auto;

  background-color: ${(props) => props.bg};
  border: ${(props) => props.border};
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

export default Questionnaire2;