import React from "react";
import styled from "styled-components";
import { Text } from "../Elements";


// 탭 전환 컴포넌트입니다!
//
// 사용방법
// 상위 컴포넌트에
// 1. 탭 전환에 따라 보여줄 컴포넌트 리스트와 컴포넌트 넘버 state를 만들고
// 2. <Tabbar/> 호출시 props를 코드와 같이 입력해주세요! 
//
// const [compNum, setCompNum] = React.useState(0);
// const comp = {
//   0: <사용할컴포넌트1 />,
//   1: <사용할컴포넌트2 />,
// };
//
//   return (
//     <React.Fragment>
//       <Container>         
//         <Tabbar tab1="탭이름1" tab2="탭이름2" setCompNum={setCompNum} compNum={compNum}/>
//           {comp[compNum]} 


const Tabbar = (props) => {

  const { tab1, tab2 } = props;
  
  return (
    <React.Fragment>
      <Tab>
        <ul>

          {props.compNum === 0 ?
            <li onClick={() => { props.setCompNum(0) }}>
              <TabMenu>
                <Text bold size="base" color="#24A148">{tab1}</Text>
              </TabMenu>
            </li> :
            <li onClick={() => { props.setCompNum(0) }}>
              <TabMenu>
                <Text bold size="base">{props.tab1}</Text>
              </TabMenu>
            </li>}

          {props.compNum === 1 ?
            <li onClick={() => { props.setCompNum(1) }}>
              <TabMenu>
                <Text bold size="base" color="#24A148">{tab2}</Text>
              </TabMenu>
            </li> :
            <li onClick={() => { props.setCompNum(1) }}>
              <TabMenu>
                <Text bold size="base">{props.tab2}</Text>
              </TabMenu>
            </li>}
          <BackLine>
            <Line num={props.compNum} />
          </BackLine>
        
        </ul>
      </Tab>

    </React.Fragment>
  );
}

Tabbar.defaultProps = {
  tab1: "tab1",
  tab2: "tab2",
}


const Tab = styled.div`
  ul {
    position: relative;
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin: auto;
    padding: 0;
    list-style: none;
    }
`;

const TabMenu = styled.div`
  box-sizing: border-box;
  padding: 4px 0;
  margin: auto;

  width: 100%;

  text-align: center;
  
  border-bottom: ${(props) => props.line ? "2px solid #24A148" : "none"};

  list-style: none;
  cursor: pointer;
`

const BackLine = styled.div`
  position: absolute;
  bottom: -4px;
  
  transition: 0.4s;
  width: 100%;
  
  border-bottom: 2px solid #F4F4F4;
`

const Line = styled.div`
  position: absolute;
  bottom: -2px;
  ${(props) => props.num === 0 ? "left: 0" : "left: 50%"};
  
  transition: 0.4s;
  width: 50%;
  
  border-bottom: 2px solid #24A148;
`

export default Tabbar;