import * as React from 'react';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import { FilterLevel, FilterSpace, FilterType, FilterStyle } from "../../Components/AddPlant/Filter";
import { Button, Grid } from '../../Elements';
import styled from 'styled-components';



// 필터기능 관련 bottomsheet 컴포넌트


// 필터 선택에 따라 바텀시트에 출력될 컴포넌트 목록 넘버링
const comp = {
  0: <FilterLevel key={0}/>,
  1: <FilterSpace key={1}/>,
  2: <FilterType key={2}/>,
  3: <FilterStyle key={3}/>,
};

export default function BottomSheet() {
  
  // 바텀시트 open/close 관련 state
  const [state, setState] = React.useState({
    bottom: false,
  });
  
  // 컴포넌트 목록 관련 state
  const [compNum, setCompNum] = React.useState(0);

  // 바텀시트 open/close 관련 함수 
  // 인자 : 시트돌출위치(현재bottom고정), open/close 관련 boolean값, 보여줄 컴포넌트 넘버
  const toggleDrawer = (anchor, open, num) => (event) => {
    setState({ ...state, [anchor]: open });
    setCompNum(num)
  };


  return (
    <React.Fragment key={'bottom'}>

      <Button type="filter" _onClick={toggleDrawer('bottom', true, 0)}>난이도</Button>
      <Button type="filter" _onClick={toggleDrawer('bottom', true, 1)}>공간</Button>
      <Button type="filter" _onClick={toggleDrawer('bottom', true, 2)}>종류</Button>
      <Button type="filter" _onClick={toggleDrawer('bottom', true, 3)}>특징</Button>

      <SwipeableDrawer
        anchor={'bottom'}
        open={state['bottom']}
        onClose={toggleDrawer('bottom', false)}
        onOpen={toggleDrawer('bottom', true)}
        PaperProps={{
          style:{
            borderRadius:'10px 10px 0 0'
          }
        }}
      >
        <Grid width="100%" padding="30px 0" >

          {comp[compNum]}


        </Grid>
      </SwipeableDrawer>

    </React.Fragment>
  );

  
}
