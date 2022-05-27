import React from "react";
import styled from "styled-components";
import { Text } from "../../../Elements";


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
//
// 궁금하신 부분은 유나에게 문의해주세요~!! >.<
// + 3칸짜리 탭바는 props로 type="3" 넘겨준 뒤 tab3까지 입력해주세요~! 


const Tabbar = (props) => {

  const { tab1, tab2, tab3, type } = props;
  
  if(type==="3") {
    return (
      <React.Fragment>
      <Tab2>
        <ul>

          {props.compNum === 0 ?
            <li onClick={() => { props.setCompNum(0) }}>
              <TabMenu2>
                <Text bold size="base" color="#24A148">{tab1}</Text>
              </TabMenu2>
            </li> :
            <li onClick={() => { props.setCompNum(0) }}>
              <TabMenu2>
                <Text bold size="base">{tab1}</Text>
              </TabMenu2>
            </li>
          }

          {props.compNum === 1 ?
            <li onClick={() => { props.setCompNum(1) }}>
              <TabMenu2>
                <Text bold size="base" color="#24A148">{tab2}</Text>
              </TabMenu2>
            </li> :
            <li onClick={() => { props.setCompNum(1) }}>
              <TabMenu2>
                <Text bold size="base">{tab2}</Text>
              </TabMenu2>
            </li>}

          {props.compNum === 2 ?
            <li onClick={() => { props.setCompNum(2) }}>
              <TabMenu2>
                <Text bold size="base" color="#24A148">{tab3}</Text>
              </TabMenu2>
            </li> :
            <li onClick={() => { props.setCompNum(2) }}>
              <TabMenu2>
                <Text bold size="base">{tab3}</Text>
              </TabMenu2>
            </li>}

          <BackLine2>
            <Line2 num={props.compNum} />
          </BackLine2>
        
        </ul>
      </Tab2>

    </React.Fragment>
    )
  }

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
            </li>
          }

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
  tab3: "tab3",
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
  bottom: 0px;
  
  transition: 0.4s;
  width: 100%;

  height: 2px;
  background: #F4F4F4;
  border-radius: 2px;
  ${'' /* border-bottom: 2px solid #F4F4F4; */}
`

const Line = styled.div`
  position: absolute;
  bottom: 0;
  ${(props) => props.num === 0 ? "left: 0" : "left: 50%"};
  
  transition: 0.4s;
  width: 50%;
  
  height: 2px;
  background: #24A148;
  border-radius:2px;
  ${'' /* border-bottom: 2px solid #24A148; */}
`


const Tab2 = styled.div`
  ul {
    position: relative;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    margin: auto;
    padding: 0;
    list-style: none;
    }
`;

const TabMenu2 = styled.div`
  box-sizing: border-box;
  padding: 4px 0;
  margin: auto;

  width: 100%;

  text-align: center;
  
  border-bottom: ${(props) => props.line ? "2px solid #24A148" : "none"};

  list-style: none;
  cursor: pointer;
`

const BackLine2 = styled.div`
  position: absolute;
  bottom: 0px;
  
  transition: 0.4s;
  width: 100%;
  
  height: 2px;
  background: #F4F4F4;
  border-radius: 2px;
  ${'' /* border-bottom: 2px solid #F4F4F4; */}
`

const Line2 = styled.div`
  position: absolute;
  bottom: 0;
  
  ${(props) => props.num===0? "left: 0" : ""};
  ${(props) => props.num===1? "left: 34%" : ""};
  ${(props) => props.num===2? "left: 68%" : ""};
  
  transition: 0.4s;
  width: 33%;
  height: 2px;
  background: #24A148;
  border-radius:2px;
  ${'' /* border-bottom: 2px solid #24A148; */}
`

export default Tabbar;