import React from 'react';
import styled from 'styled-components';
import { Text, Grid, Container } from '../../../Elements';
import MyPlants from './MyPlants';
import MyPictures from './MyPictures';

const MyCategoryBar = (props) => {

  const comp = {
    0: <MyPictures />,
    1: <MyPlants />,
  };

  const [active, setActive] = React.useState(0);

  return (
    <React.Fragment>
      <Tab>
        <ul>

          {active === 0 ?
            <li onClick={() => { setActive(0) }}>
              <TabMenu>
                <Text bold size="base" weight="600" color="#24A148">식물공간</Text>
              </TabMenu>
            </li> :
            <li onClick={() => { setActive(0) }}>
              <TabMenu>
                <Text size="base" weight="600">식물공간</Text>
              </TabMenu>
            </li>}

          {active === 1 ?
            <li onClick={() => { setActive(1) }}>
              <TabMenu>
                <Text bold size="base" weight="600" color="#24A148">식물</Text>
              </TabMenu>
            </li> :
            <li onClick={() => { setActive(1) }}>
              <TabMenu>
                <Text size="base" weight="600" >식물</Text>
              </TabMenu>
            </li>}
          <BackLine>
            <Line num={active} />
          </BackLine>

        </ul>
      </Tab>
      <Grid margin="20px 0" width="100%">
        {comp[active]}
      </Grid>
      <Grid width="100%" height="60px"></Grid>
    </React.Fragment>
  )
}
const CategoryGrid = styled.div`
width: 100%;
padding: 0px 0px 10px 0px;
display: grid;
grid-template-columns: 1fr 1fr;
justify-content: center;
text-align: center;
border-bottom: 1px solid darkgrey;
`
const CategoryDiv = styled.div`
margin: 10px 0px;
`
const TextDiv = styled.div`
text-align: center;
`
const Tab = styled.div`
  ul {
    position: relative;
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin: auto;
    padding: 0;
    list-style: none;
    }
    padding: 0px 16px;
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

const Line = styled.div`
  position: absolute;
  bottom: -2px;
  ${(props) => props.num === 0 ? "left: 0" : "left: 50%"};
  
  transition: 0.4s;
  width: 50%;
  
  border-bottom: 2px solid #24A148;
`
const BackLine = styled.div`
  position: absolute;
  bottom: -2px;
  
  transition: 0.4s;
  width: 100%;
  
  border-bottom: 2px solid #F4F4F4;
`
export default MyCategoryBar;
