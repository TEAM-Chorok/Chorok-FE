import * as React from 'react';
import { useDispatch } from 'react-redux';

import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import { Button, Grid, Text } from '../../Elements';
import { FilterLevel, FilterSpace, FilterType, FilterStyle } from "../../Components/AddPlant/Filter";
import { actionCreators as searchActions } from '../../Redux/Modules/Search';


// 필터기능 관련 bottomsheet 컴포넌트
// 리팩토링 예정입니다 ㅠ.ㅠ~!!

export default function BottomSheet() {

  const dispatch = useDispatch();

  // 바텀시트 open/close 관련 state
  const [state, setState] = React.useState({
    bottom: false,
  });
  

  // filter 선택한 항목 데이터
  const [space, setSpace] = React.useState(null);
  const [level, setLevel] = React.useState(null);
  const [type, setType] = React.useState(null);
  const [style, setStyle] = React.useState(null);
  
  const filterData = {
    plantTypeCode : type,
    plantPlaceCode : space,
    plantLevelCode  : level,  
    plantGrowthShapeCode : style, 
  };
  
  // filter 항목 선택시 변경할 텍스트 (서버 연결시 삭제 예정!)
  const [spaceText, setSpaceText] = React.useState(null);
  const [levelText, setLevelText] = React.useState(null);
  const [typeText, setTypeText] = React.useState(null);
  const [styleText, setStyleText] = React.useState(null);
  
  const filterTextData = {
    plantLevelText  : levelText,  
    plantPlaceText : spaceText,
    plantTypeText : typeText,
    plantGrowthShapeText : styleText, 
  };
  
  // 바텀시트에서 보여줄 컴포넌트 세팅
  const [compNum, setCompNum] = React.useState(0);

  // 필터 선택에 따라 바텀시트에 출력될 컴포넌트 목록
  const comp = {
    0: <FilterLevel setLevel={setLevel} setLevelText={setLevelText}/>,
    1: <FilterSpace setSpace={setSpace} setSpaceText={setSpaceText}/>,
    2: <FilterType setType={setType} setTypeText={setTypeText}/>,
    3: <FilterStyle setStyle={setStyle} setStyleText={setStyleText}/>,
  };

  // 바텀시트 open/close 관련 함수 
  // 인자 : 시트돌출위치(현재bottom고정), open/close 관련 boolean값, 보여줄 컴포넌트 넘버
  const toggleDrawer = (anchor, open, num) => (event) => {
    setState({ ...state, [anchor]: open });
    setCompNum(num)
  };

  // 필터 데이터 서버로 전송 -> 필터링된 목록 조회
  const filterSubmit = () => {
    dispatch(searchActions.plantFilteringDB(filterData));
    // console.log(filterData)
  };

  return (
    <React.Fragment key={'bottom'}>

      <Button checked type="filter" _onClick={toggleDrawer('bottom', true, 0)}>
        <Text bold size="small" color="#0AAF42">전체</Text>
      </Button>
      {levelText? 
        <Button checked type="filter" _onClick={toggleDrawer('bottom', true, 0)}>
          <Text bold size="small" color="#0AAF42">{levelText}</Text>
        </Button> : 
        <Button type="filter" _onClick={toggleDrawer('bottom', true, 0)}>
          <Text size="small">난이도</Text>
        </Button>}
      {spaceText?
        <Button checked type="filter" _onClick={toggleDrawer('bottom', true, 1)}>
          <Text bold size="small" color="#0AAF42">{spaceText}</Text>
        </Button> : 
        <Button type="filter" _onClick={toggleDrawer('bottom', true, 1)}>
          <Text size="small">공간</Text>
        </Button>} 
      {typeText?
        <Button checked type="filter" _onClick={toggleDrawer('bottom', true, 2)}>
        <Text bold size="small" color="#0AAF42">{typeText}</Text>
        </Button> :
        <Button type="filter" _onClick={toggleDrawer('bottom', true, 2)}>
          <Text size="small">종류</Text>
        </Button>
        }
      {styleText?
        <Button checked type="filter" _onClick={toggleDrawer('bottom', true, 3)}>
          <Text bold size="small" color="#0AAF42">{styleText}</Text>
        </Button> :
        <Button type="filter" _onClick={toggleDrawer('bottom', true, 3)}>
          <Text size="small">특징</Text>
        </Button>}
      

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
        <Grid width="100%">
          <Grid margin="32px 24px">
            <Button type="tran" _onClick={()=>{setCompNum(0)}}>
              {compNum===0?<Text bold size="base" color="#45D17D">난이도</Text>:<Text bold size="base">난이도</Text>}
            </Button>
            <Button type="tran" _onClick={()=>{setCompNum(1)}}>
              {compNum===1?<Text bold size="base" color="#45D17D">공간</Text>:<Text bold size="base">공간</Text>}
            </Button>
            <Button type="tran" _onClick={()=>{setCompNum(2)}}>
              {compNum===2?<Text bold size="base" color="#45D17D">종류</Text>:<Text bold size="base">종류</Text>}
            </Button>
            <Button type="tran" _onClick={()=>{setCompNum(3)}}>
              {compNum===3?<Text bold size="base" color="#45D17D">특징</Text>:<Text bold size="base">특징</Text>}
            </Button>

          </Grid>
          {comp[compNum]}
          </Grid>
          <Grid margin="32px auto">
            <Button type="basic" width="124px" height="36px" _onClick={filterSubmit}>
              <Text size="xsmall" color="#fff">적용하기</Text>
            </Button>
          </Grid>
      </SwipeableDrawer>

    </React.Fragment>
  );

  
}
