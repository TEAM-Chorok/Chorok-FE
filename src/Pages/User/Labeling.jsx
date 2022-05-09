import {Text, Grid, Image} from '../../Elements/index';
import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { Button } from '@mui/material';
import { useState } from 'react';
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined';
import styled from 'styled-components';
import {Container} from '../../Elements';
import { GeneralHeader } from '../../Components';

const Labeling = () => {
  const params = useParams();  //params.no = 문제번호 (1~4)
  const history = useHistory();

  const [loading, setLoading] = React.useState(false);
  const [level, setLevel] = React.useState("");
  const [place, setPlace] = React.useState("");
  const [attribute, setAttribute] = React.useState("");
  const [attribute2, setAttribute2] = React.useState("");

  const submit = () => {
    console.log(level, place, attribute, attribute2);
    //로딩 페이지 
    setLoading(true);
    setTimeout(() => {
      history.push('/recommendation');
    }, 3000);
  }

  //로딩 페이지 return
  if(loading === true) {
    return (
      <>
        <Container>
          <Grid padding="30px 0px" width="100%" height="800px"> 
            <div style={{textAlign:"center", width: "100%", margin: "300px 0px"}}>
              <Text bold color="#718096" fontSize="20px" display="block" margin="10px auto">곧 맞춤 식물을 </Text>
              <Text bold color="#718096" fontSize="20px" display="block" margin="10px auto">준비해드려요!😀</Text>
            </div>
          </Grid>
        </Container>
      </>
    )
  }

  if(parseInt(params.no) === 1){
    return (
      <React.Fragment>
        <Container>
          <Grid margin="auto">
          <GeneralHeader />
              {/* <ProgressBar></ProgressBar> */}
            <QuestionWrap>
              <Text color="#718096" fontSize="23px" bold >xx님의 집사레벨은 어떠한가요?😀</Text>
            
              <QuestionBox>
                <Grid padding="18px 25px">
                  <Text margin="0px" display="block" color="#718096">아기집사</Text>
                  <Text margin="0px" display="block" size="XS" color="#718096">식물을 한 번도 키워본 적이 없거나 키워도 다 실패해요</Text>
                </Grid>                
              </QuestionBox>
              <QuestionBox>
                <Grid padding="18px 25px">
                  <Text margin="0px" display="block" color="#718096">초보집사</Text>
                  <Text margin="0px" display="block" size="XS" color="#718096">식물에 대해 잘 모르지만 한두 번 키워봤어요!</Text>
                </Grid>   
              </QuestionBox>
              <QuestionBox>
                <Grid padding="18px 25px">
                  <Text margin="0px" display="block" color="#718096">숙련집사</Text>
                  <Text margin="0px" display="block" size="XS" color="#718096">어느 정도 식물에 대해 잘 알고 잘 키울 수 있어요!</Text>
                </Grid>
              </QuestionBox>
              <Button onClick={()=>history.push('/labeling/2')} 
              style={{backgroundColor:"#C1C7CD", width: "150px", height: "40px", color:"white", borderRadius:"50px", boxShadow:"none", position:"absolute", bottom:"50px", left:"0px", right:"0px", margin:"auto"}}variant='contained'>다음</Button>
            </QuestionWrap>
          </Grid>
        </Container>
      </React.Fragment>
    )
  } if(parseInt(params.no) === 2){
    return(
      <React.Fragment>
        <Container>
          <Grid margin="auto" width="92%">
          <Header>
              <ArrowBackIosNewOutlinedIcon style={{position: "absolute", left: "10px", top:"58px" }} onClick={()=>history.goBack()}></ArrowBackIosNewOutlinedIcon>
          </Header>
          <QuestionWrap>
              <Text color="#718096" fontSize="23px" bold>어디에서 식물을 키우실 예정인가요?</Text>
              <SelectionWrap>
                <ImageBox>
                  <Image margin="0px auto 8px auto" type="square" borderRadius="10px" size="102px" imgUrl="https://ar.haenselblatt.com/img/images_1/how-to-grow-rosemary-indoors.jpg"></Image>
                  <Text>거실</Text>
                </ImageBox>
                <ImageBox>
                  <Image margin="0px auto 8px auto" type="square" borderRadius="10px" size="102px" imgUrl="https://ar.haenselblatt.com/img/images_1/how-to-grow-rosemary-indoors.jpg"></Image>
                  <Text>창가</Text>
                </ImageBox>
                <ImageBox>
                  <Image margin="0px auto 8px auto" type="square" borderRadius="10px" size="102px" imgUrl="https://ar.haenselblatt.com/img/images_1/how-to-grow-rosemary-indoors.jpg"></Image>
                  <Text>베란다</Text>
                </ImageBox>
                <ImageBox>
                  <Image margin="0px auto 8px auto" type="square" borderRadius="10px" size="102px" imgUrl="https://ar.haenselblatt.com/img/images_1/how-to-grow-rosemary-indoors.jpg"></Image>
                  <Text>방안</Text>
                </ImageBox>
                <ImageBox>
                  <Image margin="0px auto 8px auto" type="square" borderRadius="10px" size="102px" imgUrl="https://ar.haenselblatt.com/img/images_1/how-to-grow-rosemary-indoors.jpg"></Image>
                  <Text>화장실</Text>
                </ImageBox>
                <ImageBox>
                  <Image margin="0px auto 8px auto" type="square" borderRadius="10px" size="102px" imgUrl="https://ar.haenselblatt.com/img/images_1/how-to-grow-rosemary-indoors.jpg"></Image>
                  <Text>통로</Text>
                </ImageBox>
              </SelectionWrap>
              <Button onClick={()=>history.push('/labeling/3')}
              style={{backgroundColor:"#C1C7CD", width: "150px", height: "40px", color:"white", borderRadius:"50px", boxShadow:"none", position:"absolute", bottom:"50px", left:"0px", right:"0px", margin:"auto"}}variant='contained'>다음</Button>
            </QuestionWrap>
          </Grid>
        </Container>
      </React.Fragment>
    )
  } if(parseInt(params.no) === 3){
    return(
      <React.Fragment>
        <Container>
        <Grid margin="auto" width="92%">
          <Header>
            <ArrowBackIosNewOutlinedIcon style={{position: "absolute", left: "10px", top:"58px" }} onClick={()=>history.goBack()}></ArrowBackIosNewOutlinedIcon>
          </Header>
          <QuestionWrap>
            <Text color="#718096" fontSize="23px" bold>선호하는 식물의 특징은<br /> 무엇인가요?</Text>
            <SelectWrap style={{marginTop:"20px"}}>
              <ImageBox>
                <Image margin="0px auto 0px auto" type="square" borderRadius="10px" size="53px" imgUrl="https://ar.haenselblatt.com/img/images_1/how-to-grow-rosemary-indoors.jpg"></Image>
                <Text display="block">아담한 키의 </Text>
              </ImageBox>
              <ImageBox>
                <Image margin="0px auto 0px auto" type="square" borderRadius="10px" size="53px" imgUrl="https://ar.haenselblatt.com/img/images_1/how-to-grow-rosemary-indoors.jpg"></Image>
                <Text display="block">쭉쭉 뻗은</Text>
              </ImageBox>
              <ImageBox>
                <Image margin="0px auto 0px auto"  type="square" borderRadius="10px" size="53px" imgUrl="https://ar.haenselblatt.com/img/images_1/how-to-grow-rosemary-indoors.jpg"></Image>
                <Text display="block">부드러운 잎파리</Text>
              </ImageBox>
            </SelectWrap>
            <SelectWrap>
              <ImageBox>
                <Image margin="0px auto 0px auto"  type="square" borderRadius="10px" size="53px" imgUrl="https://ar.haenselblatt.com/img/images_1/how-to-grow-rosemary-indoors.jpg"></Image>
                <Text display="block">바닥에 뻗거나 감겨 오르는</Text>
              </ImageBox>
              <ImageBox>
                <Image margin="0px auto 0px auto"  type="square" borderRadius="10px" size="53px" imgUrl="https://ar.haenselblatt.com/img/images_1/how-to-grow-rosemary-indoors.jpg"></Image>
                <Text display="block">장미꽃잎처럼 잎이 둥글게 펼쳐지는</Text>
              </ImageBox>
            </SelectWrap>
            <Button onClick={()=>history.push('/labeling/4')}
            style={{backgroundColor:"#C1C7CD", width: "150px", height: "40px", color:"white", borderRadius:"50px", boxShadow:"none", position:"absolute", bottom:"50px", left:"0px", right:"0px", margin:"auto"}}variant='contained'>다음</Button>
          </QuestionWrap>
        </Grid>
        </Container>
      </React.Fragment>
    )
  } if(parseInt(params.no) === 4){
    return(
      <React.Fragment>
        <Container>
        <Grid margin="auto" width="92%">
          <Header>
            <ArrowBackIosNewOutlinedIcon style={{position: "absolute", left: "10px", top:"58px" }} onClick={()=>history.goBack()}></ArrowBackIosNewOutlinedIcon>
          </Header>
        <QuestionWrap>
            <Text color="#718096" fontSize="23px" bold>어떤 식물을 선호하시나요? 😀</Text>
            <SelectWrap style={{marginTop:"20px", display:"grid", gridTemplateColumns:"1fr 1fr", placeItems:"center"}}>
              <ImageBox>
                <Image margin="0px auto 0px auto" type="square" borderRadius="10px" size="78px" imgUrl="https://ar.haenselblatt.com/img/images_1/how-to-grow-rosemary-indoors.jpg"></Image>
                <Text display="block">꽃이 예쁜 </Text>
              </ImageBox>
              <ImageBox>
                <Image margin="0px auto 0px auto" type="square" borderRadius="10px" size="78px"imgUrl="https://ar.haenselblatt.com/img/images_1/how-to-grow-rosemary-indoors.jpg"></Image>
                <Text display="block">열매가 달리는</Text>
              </ImageBox>
              <ImageBox>
                <Image margin="0px auto 0px auto"  type="square" borderRadius="10px" size="78px" imgUrl="https://ar.haenselblatt.com/img/images_1/how-to-grow-rosemary-indoors.jpg"></Image>
                <Text display="block">어디서나 잘 자라는</Text>
              </ImageBox>
              <ImageBox>
                <Image margin="0px auto 0px auto"  type="square" borderRadius="10px" size="78px" imgUrl="https://ar.haenselblatt.com/img/images_1/how-to-grow-rosemary-indoors.jpg"></Image>
                <Text display="block">잎이 멋있는</Text>
              </ImageBox>
            </SelectWrap>
            <Button 
            onClick={()=>submit()}
            style={{backgroundColor:"#C1C7CD", width: "150px", height: "40px", color:"white", borderRadius:"50px", boxShadow:"none", position:"absolute", bottom:"50px", left:"0px", right:"0px", margin:"auto"}}variant='contained'>다음</Button>
          </QuestionWrap>
        </Grid>
        </Container>
      </React.Fragment>
    )
  }
} 
const QuestionWrap = styled.div`
  width: 100%;
  margin: 10px auto 0px auto;
  // text-align: left;
`
const QuestionBox = styled.div`
  width: 100%;
  height: 80px;
  border: 1px solid darkgrey;
  text-align: left;
  border-radius: 10px;
  margin: 24px auto;
`
const Header = styled.div`
  width: 100%;
  height: 20%;
  margin: 10px auto;
`
const ImageBox = styled.div`
  width: fit-content;
  height: fit-content;
  text-align: center;
  margin-bottom: 30px;
`
const SelectionWrap = styled.div`
  width: 100%;
  height: fit-content;
  display: grid;
  margin: 38px auto;
  place-items: center;
  grid-template-columns: 1fr 1fr 1fr;
`
const SelectWrap = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  justify-content: space-around;
`
export default Labeling;