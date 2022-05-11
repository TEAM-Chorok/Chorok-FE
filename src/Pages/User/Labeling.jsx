import {Text, Grid, Image, Container} from '../../Elements/index';
import React from 'react';
import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import styled from 'styled-components';
import { GeneralHeader, Questionnaire, Questionnaire2, Questionnaire3, Questionnaire4 } from '../../Components';
import { useDispatch } from 'react-redux';
import { actionCreators as labelActions } from '../../Redux/Modules/Label';

const Labeling = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [loading, setLoading] = React.useState(false);

  const [level, setLevel] = React.useState("");
  const [place, setPlace] = React.useState("");
  const [attribute, setAttribute] = React.useState("");
  const [attribute2, setAttribute2] = React.useState("");

  const submit = () => {
    dispatch(labelActions.labelingDB(level, place, attribute, attribute2));
    //로딩 페이지 
    setLoading(true);
  }
 
  const [active, setActive] = React.useState(0);

  const comp = {
    1: <Questionnaire setActive={setActive} level={level} setLevel={setLevel} />,
    2: <Questionnaire2 setActive={setActive} place={place} setPlace={setPlace}/>,
    3: <Questionnaire3 setActive={setActive} attribute={attribute} setAttribute={setAttribute}/>,
    4: <Questionnaire4 setLoading={setLoading} attribute2={attribute2} setAttribute2={setAttribute2} submit={submit} />,
  };

  
  //로딩 페이지 return
  if(loading === true) {
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

  if (active === 0 ) {return (
    <React.Fragment>
      <Container>
        <GeneralHeader />
        <Grid margin="80px 0px" height="160px">
          <Text size="large" color="#262626" bold>반가워요!<br/>지금부터 나와 꼭 맞는 식물을<br />찾아볼까요?</Text>
        </Grid>
        <Grid margin="262px auto 100px auto" align="center">
          <PrimaryBtn onClick={()=>setActive(1)}>시작할래요</PrimaryBtn>
          <GobackBtn onClick={()=>history.goBack}>다음에 할게요</GobackBtn>
        </Grid>
    </Container>
    </React.Fragment>
  );
  }
  if(active !== 0){
    return (
      <React.Fragment>
        <Container>
          {comp[active]}
        </Container>
      </React.Fragment>
    )
  }
} 

const Wrapper = styled.div`
  padding: 15px 0;
`
const PlantBox = styled.div`
  margin: 5px;
  width: 130px;
  height: 170px;
`
const PrimaryBtn = styled.button`
  width: 167px;
  height: 44px;
  color: white;
  background-color: #0AAF42;
  text-align: center;
  margin-bottom: 8px;
  border: none;
  border-radius: 16px;
`
const GobackBtn = styled.button`
  width: 167px;
  height: 44px;
  color: #A8A8A8;
  background-color: #F7F8FA;
  text-align: center;
  border-radius: 16px;
  border: none;
`
export default Labeling;