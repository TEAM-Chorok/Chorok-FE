import * as React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';

import { FilterLevel, FilterSpace, FilterType, FilterStyle } from "../../Components/AddPlant/Filter";
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import { Button, Grid, Text } from '../../Elements';
import { FiRotateCw } from "react-icons/fi";

import { ReactComponent as CloseIcon } from '../../Assets/img/cancel_s.svg' 

import { actionCreators as searchActions } from '../../Redux/Modules/Search';


// 필터기능 관련 bottomsheet 컴포넌트
// 리팩토링 예정입니다 ㅠ.ㅠ~!!
export default function BottomSheet() {
  const is_login = localStorage.getItem('token') ? true : false;

  const dispatch = useDispatch();

  // 바텀시트 open/close 관련 state
  const [state, setState] = React.useState({
    bottom: false,
  });

  // filter 선택한 항목 데이터
  const [space, setSpace] = React.useState("");
  const [level, setLevel] = React.useState("");
  const [type, setType] = React.useState("");
  const [style, setStyle] = React.useState("");


  const filterData = {
    plantTypeCode: type,
    plantPlaceCode: space,
    plantLevelCode: level,
    plantGrowthShapeCode: style,
  };

  // filter 항목 선택시 변경할 텍스트 (서버 연결시 삭제 예정!)
  const [spaceText, setSpaceText] = React.useState(null);
  const [levelText, setLevelText] = React.useState(null);
  const [typeText, setTypeText] = React.useState(null);
  const [styleText, setStyleText] = React.useState(null);


  // 바텀시트에서 보여줄 컴포넌트 세팅
  const [compNum, setCompNum] = React.useState(0);

  // 필터 선택에 따라 바텀시트에 출력될 컴포넌트 목록
  const comp = {
    0: <FilterLevel setLevel={setLevel} setLevelText={setLevelText} code={level} />,
    1: <FilterSpace setSpace={setSpace} setSpaceText={setSpaceText} code={space} />,
    2: <FilterType setType={setType} setTypeText={setTypeText} code={type} />,
    3: <FilterStyle setStyle={setStyle} setStyleText={setStyleText} code={style} />,
  };

  // 바텀시트 open/close 관련 함수 
  // 인자 : 시트돌출위치(현재bottom고정), open/close 관련 boolean값, 보여줄 컴포넌트 넘버
  const toggleDrawer = (anchor, open, num) => (event) => {
    setState({ ...state, [anchor]: open });
    setCompNum(num)
  };


  // 필터 선택값 초기화
  const clear = () => {
    setSpace("");
    setLevel("");
    setType("");
    setStyle("");
    setSpaceText(null);
    setLevelText(null);
    setTypeText(null);
    setStyleText(null);
    dispatch(searchActions.getPlantDictDB());
  }

  // 필터 데이터 서버로 전송 -> 필터링된 목록 조회
  const filterSubmit = () => {
    if(is_login) {
      if( !level && !space && !type && !style ) {
        setState({...state, bottom:false})
        return;
      }
      // 필터링 값이 전부 null일 경우 그냥 전체 조회로 dispatch 해야함
      dispatch(searchActions.plantFilteringDB(filterData, 0));
      // console.log(filterData)
    }
    setState({...state, bottom:false})
  };



  return (
    <React.Fragment key={'bottom'}>
      <FilterBox>

        <Button type="filter" _onClick={clear}
          checked={levelText || spaceText || typeText || styleText ? false : true}>
          <Text size="small"
            bold={levelText || spaceText || typeText || styleText ? false : true}
            color={levelText || spaceText || typeText || styleText ? "" : "#0AAF42"}>전체</Text>
        </Button>

        <Button checked={levelText ? true : false} type="filter" _onClick={toggleDrawer('bottom', true, 0)}>
          <Text weight={levelText ? 600 : 400} size="small" color={levelText ? "#0AAF42" : ""}>
            {levelText ? levelText : "난이도"}
          </Text>
        </Button>

        <Button
          checked={spaceText ? true : false} type="filter" _onClick={toggleDrawer('bottom', true, 1)}>
          <Text weight={spaceText ? 600 : 400} size="small" color={spaceText ? "#0AAF42" : ""}>
            {spaceText ? spaceText : "공간"}
          </Text>
        </Button>

        <Button checked={typeText ? true : false} type="filter" _onClick={toggleDrawer('bottom', true, 2)}>
          <Text weight={typeText ? 600 : 400 } size="small" color={typeText ? "#0AAF42" : ""}>
            {typeText ? typeText : "종류"}
          </Text>
        </Button>

        <Button checked={styleText ? true : false} type="filter" _onClick={toggleDrawer('bottom', true, 3)}>
          <Text weight={styleText ? 600 : 400 } size="small" color={styleText ? "#0AAF42" : ""}>
            {styleText ? styleText : "특징"}
          </Text>
        </Button>

      </FilterBox>


      <SwipeableDrawer
        anchor={'bottom'}
        open={state['bottom']}
        onClose={() => {
          filterSubmit();
          setState({bottom:false});
        }}
        onOpen={toggleDrawer('bottom', true)}
        disableSwipeToOpen={false}
        PaperProps={{
          style: {
            position: 'absolute',
            borderRadius: '10px 10px 0 0',
            margin: 'auto',
            width: '100%',
            maxWidth: '390px',
          }
        }}
      >


        <Grid width="100%" height="300px">
          <Grid is_flex margin="24px 24px">

            <RelativeBox>
              <Button type="tran" _onClick={() => { setCompNum(0) }}>
                <Text bold size="small" color={compNum === 0 ? "#0AAF42" : "#C6C6C6"}>난이도</Text>
              </Button>
              <Dot color={level ? "#0AAF42" : "#fff"} />
            </RelativeBox>

            <RelativeBox>
              <Button type="tran" _onClick={() => { setCompNum(1) }}>
                <Text bold size="small" color={compNum === 1 ? "#0AAF42" : "#C6C6C6"}>공간</Text>
              </Button>
              <Dot color={space ? "#0AAF42" : "#fff"} />
            </RelativeBox>

            <RelativeBox>
              <Button type="tran" _onClick={() => { setCompNum(2) }}>
                <Text bold size="small" color={compNum === 2 ? "#0AAF42" : "#C6C6C6"}>종류</Text>
              </Button>
              <Dot color={type ? "#0AAF42" : "#fff"} />
            </RelativeBox>

            <RelativeBox>
              <Button type="tran" _onClick={() => { setCompNum(3) }}>
                <Text bold size="small" color={compNum === 3 ? "#0AAF42" : "#C6C6C6"}>특징</Text>
              </Button>
              <Dot color={style ? "#0AAF42" : "#fff"} />
            </RelativeBox>

            <ButtonBox>
              <CloseIcon 
                stroke="#A8A8A8"
                onClick={() => { 
                setState({...state, bottom:false});
                filterSubmit();}}/>
            </ButtonBox>

          </Grid>
          {comp[compNum]}
        </Grid>
        <Grid width="100%" padding="0 24px">
        <Grid is_flex margin="24px auto" width="100%" align="center">
          <Grid margin="0 16px 0 0" _onClick={clear}>
            <FiRotateCw size="20px" color="#8D8D8D" />
          </Grid>
          <Button type="basic" width="100%"
            _onClick={() => {
              filterSubmit();
            }}>
            <Text size="base" weight="700" color="#fff">적용하기</Text>
          </Button>
        </Grid>
        </Grid>
      </SwipeableDrawer>
    </React.Fragment>
  );



}

const FilterBox = styled.div`
    width: 100%;
    line-height: 35px;
  `

const ButtonBox = styled.div`
  position: absolute;
  top: 27px;
  right: 24px;
`
const Dot = styled.div`
  position: absolute;
  
  top: 0;
  right: 0;

  width: 5px;
  height: 5px;

  border-radius: 5px;

  background: ${(props)=>props.color};
`

const RelativeBox = styled.div`
  position: relative;
  margin-right: 8px;
  
  width: fit-content;
  height: fit-content;
`