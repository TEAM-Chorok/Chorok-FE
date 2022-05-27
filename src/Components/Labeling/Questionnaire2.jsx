import {Text, Grid, Image, Container} from '../../Elements/index';
import React from 'react';
import styled from 'styled-components';
import { GeneralHeader } from '..';
 

const Questionnaire2 = (props) => {

    return(
      <React.Fragment>
          <GeneralHeader />
        <Container>
          <Grid margin="32px 0px 32px 0px" width="100%">
            <Text size="large" weight="600" >어떤 공간에서 <br />식물을 키우고 싶으신가요?</Text>
          </Grid>
              <SelectionWrap>
                <ImageBox onClick={()=>props.setPlace("pp03")}> 
                  <ImageWrap className='child' 
                    border={props.place === "pp03"? "3px solid #0AAF42" : "1px solid #F4F4F4"}>
                    <Image type="square" borderRadius="10px" size="100px" imgUrl="img/plantType/bathroom.png"></Image>
                  </ImageWrap>
                  <TextWrap ><Text className='text' size="small"
                  weight={props.place ===  "pp03" ? "700" : "500"}
                  color={props.place ===  "pp03" ? "#24A148" : "#262626"}>화장실</Text></TextWrap>
                </ImageBox>

                <ImageBox onClick={()=>props.setPlace("pp02")}>
                  <ImageWrap className='child'
                    border={props.place === "pp02"? "3px solid #0AAF42" : "1px solid #F4F4F4"}>
                    <Image type="square" borderRadius="10px" size="100px" imgUrl="img/plantType/bedroom.png"></Image>
                  </ImageWrap>
                  <TextWrap>
                    <Text className='text' size="small"
                    weight={props.place ===  "pp02" ? "700" : "500"}
                    color={props.place ===  "pp02" ? "#24A148" : "#262626"}>방안</Text>
                  </TextWrap>
                </ImageBox>
                <ImageBox onClick={()=>props.setPlace("pp01")}>
                  <ImageWrap className='child'
                    border={props.place === "pp01"? "3px solid #0AAF42" : "1px solid #F4F4F4"}>
                    <Image type="square" borderRadius="10px" size="100px" imgUrl="img/plantType/hallway.png"></Image>
                  </ImageWrap>
                  <TextWrap>  
                    <Text className='text' size="small"
                    weight={props.place ===  "pp01" ? "700" : "500"}
                    color={props.place ===  "pp01" ? "#24A148" : "#262626"}>통로</Text></TextWrap>
                </ImageBox>
              </SelectionWrap>

              <SelectionWrap>
                <ImageBox onClick={()=>props.setPlace("pp06")}>
                  <ImageWrap className='child'
                    border={props.place === "pp06"? "3px solid #0AAF42" : "1px solid #F4F4F4"}>
                    <Image type="square" borderRadius="10px" size="100px" imgUrl="img/plantType/terrace.png"></Image>
                  </ImageWrap>
                  <TextWrap>
                    <Text  className='text' size="small"
                    weight={props.place ===  "pp06" ? "700" : "500"}
                    color={props.place ===  "pp06" ? "#24A148" : "#262626"}>베란다</Text>
                  </TextWrap>
                </ImageBox>
                <ImageBox onClick={()=>props.setPlace("pp05")}>
                  <ImageWrap className='child'
                    border={props.place === "pp05"? "3px solid #0AAF42" : "1px solid #F4F4F4"}>
                    <Image type="square" borderRadius="10px" size="100px" imgUrl="img/plantType/windowside.png"></Image>
                  </ImageWrap>
                  <TextWrap>
                    <Text className='text' size="small"
                    weight={props.place ===  "pp05" ? "700" : "500"}
                    color={props.place ===  "pp05" ? "#24A148" : "#262626"}>창가</Text>
                  </TextWrap>
                </ImageBox>
                <ImageBox onClick={()=>props.setPlace("pp04")}>
                  <ImageWrap className='child'
                    border={props.place === "pp04"? "3px solid #0AAF42" : "1px solid #F4F4F4"}>
                    <Image type="square" borderRadius="10px" size="100px" imgUrl="img/plantType/livingroom.png"></Image>
                  </ImageWrap>
                  <TextWrap>
                    <Text className='text' size="small"
                    weight={props.place ===  "pp04" ? "700" : "500"}
                    color={props.place ===  "pp04" ? "#24A148" : "#262626"}>거실</Text>
                  </TextWrap>
                </ImageBox>
              </SelectionWrap>
              <Grid width="100%" align="center" margin="42px 0px 0px 0px">
            <PrimaryBtn disabled={props.place === ""} onClick={()=>props.setActive(3)}>다음으로</PrimaryBtn>
          </Grid>
        </Container>
      </React.Fragment>
    )
}
const SelectionWrap = styled.div`
  width: 100%;
  height: 150px;
  display: grid;
  place-items: center;
  grid-template-columns: 1fr 1fr 1fr;

  margin-bottom: 10px;  
`
const ImageBox = styled.div`
  width: fit-content;
  height: fit-content;
  text-align: center;

  &:hover .child{
    border: 3px solid #0AAF42;
  }
  &:hover .text{
    color: #24A148;
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
  margin: 5px auto;

  background-color: ${(props) => props.bg};
  border: ${(props) => props.border};
`
const PrimaryBtn = styled.button`
width: 90%;
height: 44px;
color: #fff;
text-align: center;
border-radius: 8px;
border: none;
background-color: #0AAF42;
font-family: 'SUIT';
font-weight: 700;
font-size: 16px;
&:disabled{
  background-color: #F4F4F4;
  color: #A8A8A8;
}
`

export default Questionnaire2;