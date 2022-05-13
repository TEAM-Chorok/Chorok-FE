import React from "react";
import { useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import styled from "styled-components";
import { Grid, Image, Text, Container } from "../../Elements";


const Recommendation = (props) => {
    const history = useHistory();
    const params = useParams();
    const plantId = params.plantId;
    console.log(useSelector(state => state.label.recommend));
    console.log(plantId);
    const _plantId = useSelector(state => state.label.recommend?.plantId);
    console.log(_plantId);
    const plantName = useSelector(state => state.label.recommend?.plantName);
    const plantImgUrl = useSelector(state => state.label.recommend?.plantImgUrl);

  if(!plantName || !plantImgUrl) {
    return (
      <>
        <Container>
          <Grid width="100%" height="100vh"> 
            <div style={{textAlign:"center", width: "100%", paddingTop:"300px"}}>
              <Text bold color="#262626" size="large" display="block" margin="0px auto">열심히 취향 분석 중!<br />곧 맞춤 식물을 알려드릴게요!👍</Text>
            </div>
          </Grid>
        </Container>
      </>
    )
  }
    return(
      <React.Fragment>
              <Grid width="100%">
                  <InnerWrap>
                    <Text size="base">집사님을 위한 <span style={{color:"#0AAF42"}}>추천 식물</span> 도착!</Text>
                    <Image imgUrl={plantImgUrl} type="circle" size="148px" margin="20px auto 8px auto"/>
                    <Text size="base" bold>{plantName}</Text>
                  </InnerWrap>
                  <BottomWrap>
                        <PrimaryBtn 
                        onClick={()=>history.replace(`/plant/${_plantId}`)}>이 식물에 대해 더 알아보기</PrimaryBtn>
                        <ExitBtn onClick={()=>history.replace('/home')}>종료하기</ExitBtn>
                  </BottomWrap>
              </Grid>
        {/* <Modal>
            <InnerWrap>
                <Text fontSize="16px" bold>ㅇㅇ님을 위한 추천 식물</Text>
                <Image type="circle" size="148px" margin="30px auto 20px auto"/>
                <Text fontSize="16px" bold>몬스테라</Text>
            </InnerWrap>
            <BottomWrap>
                <Button onClick={()=>history.replace(`/plant/monstera`)} 
                style={{color: "black"}} variant="text">식물 자세히 보기</Button>
                <Button onClick={()=>history.replace('/home')} 
                style={{color: "black"}}  variant="text">더 둘러볼게요</Button>
            </BottomWrap>
        </Modal> */}
      </React.Fragment>
  )
}

const InnerWrap = styled.div`
width: 100%;
height: fit-content;
padding: 160px 0px 50px 0px;
text-align: center;
`
const BottomWrap = styled.div`
width: 100%;
height: fit-content;
`
const PrimaryBtn = styled.button`
  width: 100%;
  height: fit-content;
  padding: 10px 70px;
  color: white;
  font-size: 16px;
  font-weight: 700;
  background-color: #0AAF42;
  text-align: center;
  border: none;
  border-radius: 8px;
`
const ExitBtn = styled.button`
    margin-top: 8px;
  width: 100%;
  height: fit-content;
  padding: 10px 128px;
  color: #A8A8A8;
  font-size: 16px;
  font-weight: 700;
  background-color: #F7F8FA;
  text-align: center;
  border-radius: 8px;
  border: none;
`
const Modal = styled.div`
width: 270px;
height: 450px;
border-radius: 30px;
background-color: white;
z-index: 200;
position: absolute;
top: 0px;
right: 0px;
left: 0px;
bottom: 0px; 
margin: auto;
`
export default Recommendation;
