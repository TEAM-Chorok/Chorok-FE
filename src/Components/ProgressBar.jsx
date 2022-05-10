import React from "react";
import styled from "styled-components";


// 프로그래스바 컴포넌트입니다! (컴포넌트가 넘어갈때마다 진행도가 표시됨) 
// 현재 와이어프레임 디자인만 적용되어 있습니다~!
//
//    상위 컴포넌트에
// 1. 컴포넌트를 넘어갈때마다 올라가는 카운트 수와
// 2. 보여질 모든 컴포넌트의 갯수(최댓값)가 있어야합니다. 
//
// page/AddPlant/AddPlants.jsx를 참고해주세요!
// 호출시 다음과 같이 count(카운트 수), max(최댓값)을 넘겨주어야 동작합니다~!
// <ProgressBar count={compNum+1} max={Object.keys(comp).length}/>
//
// 궁금하신 부분은 유나에게 문의해주세요~!! >.<

const ProgressBar = (props) => {

  // 현재 컴포넌트 위치, 최댓값
  const { count, max } = props;

  return (
    <React.Fragment>
      <Background>
        <Progress width={ ( count / max ) * 100 + "%" }/>
      </Background>
    </React.Fragment>
  )
}

const Background = styled.div`
  width: 100%;
  height: 8px;

  Background: #fff;
  
  border: 1px solid #C1C7CD;
  border-radius: 8px;  
`

const Progress = styled.div`
  width: ${(props) => props.width};
  height: 100%;

  Background: #C1C7CD;
`


export default ProgressBar;