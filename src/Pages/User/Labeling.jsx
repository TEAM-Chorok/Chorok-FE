import {Text, Grid, Image, Container} from '../../Elements/index';
import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { GeneralHeader, Questionnaire, Questionnaire2, Questionnaire3, Questionnaire4 } from '../../Components';
import { useDispatch } from 'react-redux';
import { actionCreators as labelActions } from '../../Redux/Modules/Label';
import Recommendation from './Recommendation';
import { ReactComponent as LeafLogo} from '../../Assets/img/logo/leafLogo.svg';
import { ReactComponent as LeafLogoShadow } from '../../Assets/img/logo/leafLogoShadow.svg';

const Labeling = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [loading, setLoading] = React.useState(false);

  const [level, setLevel] = React.useState("");
  const [place, setPlace] = React.useState("");
  const [attribute, setAttribute] = React.useState("");
  const [attribute2, setAttribute2] = React.useState("");

  const submit = () => {
    
    setLoading(true); //로딩화면 보여주려고 함
    try {
      console.log(loading); 
      dispatch(labelActions.labelingDB(level, place, attribute, attribute2));
      setLoading(false);
      console.log(loading);
      setActive(5);
    }catch(err){
      console.log(err);
    }
      
  }
 
  const [active, setActive] = React.useState(0);

  const comp = {
    1: <Questionnaire setActive={setActive} level={level} setLevel={setLevel} />,
    2: <Questionnaire2 setActive={setActive} place={place} setPlace={setPlace}/>,
    3: <Questionnaire3 setActive={setActive} attribute={attribute} setAttribute={setAttribute}/>,
    4: <Questionnaire4 setLoading={setLoading} attribute2={attribute2} setAttribute2={setAttribute2} submit={submit} />,
    5: <Recommendation />
  };

  
  if (active === 0 ) {
    return (
    <React.Fragment>
      <Container type="np">
        <GeneralHeader />
      </Container>
      <Container>
        <Grid margin="22px 0px">
          <Text size="large" color="#262626" bold>반가워요!<br/>지금부터 나와 꼭 맞는 식물을<br />찾아볼까요?</Text>
        </Grid>
        
        <Grid margin="350px auto 100px auto" align="center" width="100%">
          <PrimaryBtn onClick={()=>setActive(1)}>다음으로</PrimaryBtn>
          <GobackBtn onClick={()=>history.goBack()}>종료하기</GobackBtn>
        </Grid>
        <Grid margin="0px auto" align="center" position="absolute" top="250px" left="38%">
          {/*추후 애니메이션 넣기*/}
          <LeafLogo className="labelingLogo" />
          <LeafLogoShadow style={{width:"30px", position: "absolute", top:"84px", left: "30px"}}/>
        </Grid>
      </Container>
    </React.Fragment>
  );
  }
  if(active !== 0){
    return (
      <React.Fragment>
        <Container type="np">
          {comp[active]}
        </Container>
      </React.Fragment>
    )
  }
} 

const Img = styled.img `
 width: 90px;
 display: block;
`

const PrimaryBtn = styled.button`
  width: 90%;
  height: 44px;
  color: white;
  background-color: #0AAF42;
  text-align: center;
  margin-bottom: 8px;
  border: none;
  font-size: 16px;
  font-weight: 700;
  font-family: 'SUIT';
  border-radius: 8px;
`
const GobackBtn = styled.button`
  width: 90%;
  height: 44px;
  color: #A8A8A8;
  background-color: #F7F8FA;
  text-align: center;
  border-radius: 8px;
  border: none;
  font-weight: 700;
  font-family: 'SUIT';
  font-size: 16px;
`
export default Labeling;