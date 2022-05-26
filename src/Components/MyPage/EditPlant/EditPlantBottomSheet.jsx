import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import { Button, Grid, Text } from '../../../Elements'
import { ReactComponent as MoreIcon } from "../../../Assets/img/Icons/moreIcon.svg";
import { actionCreators as postActions } from '../../../Redux/Modules/post';
import { useHistory } from 'react-router-dom';
import { useEffect } from 'react';

//내 식물 수정 bottom sheet

export default function EditPlantBottomSheet( props ) {
    const { setPlaceValue, placeValue, setPlace, place } = props;
    const dispatch = useDispatch();
    const history = useHistory();
    

    // 바텀시트 open/close 관련 state
    const [state, setState] = React.useState({bottom: false});

    // 바텀시트 open/close 관련 함수 
    // 인자 : 시트돌출위치(현재bottom고정), open/close 관련 boolean값, 보여줄 컴포넌트 넘버
    const toggleDrawer = (anchor, open) => (event) => {
        setState({ ...state, [anchor]: open });
    };

    return (
        <React.Fragment key={'bottom'}>
            <label htmlFor='place'>공간</label>
                    <Grid _onClick={toggleDrawer('bottom', true)} 
                    id="place" width="100%" margin="10px 0px" padding="10px" borderRadius="6px" border="1px solid #C6C6C6">
                        {placeValue && <Text size="base">{placeValue}</Text> }
                    </Grid>

        <SwipeableDrawer
            anchor={'bottom'}
            open={state['bottom']}
            onClose={toggleDrawer('bottom', false)}
            onOpen={toggleDrawer('bottom', true)}
            PaperProps={{
            style: {
                borderRadius: '10px 10px 0 0'
            }
            }}
        >
            <Grid width="100%" height="346px">
            <Grid margin="32px 0px" width="100%">
                <Button type="drawerBtn" padding="12px 20px" textAlign="left" 
                    _onClick={() => {setPlace("pp04"); 
                                    setPlaceValue("거실"); 
                                    setState(false);
                                    console.log(placeValue)}}>
                <Text bold size="base" color="#393939">거실</Text>
                </Button>
                <Button type="drawerBtn" padding="12px 20px" textAlign="left"
                    _onClick={() => {props.setPlace("pp06"); 
                                    props.setPlaceValue("베란다,발코니"); 
                                    setState(false)
                                    console.log(placeValue)}}>
                <Text bold size="base" color="#393939">베란다,발코니</Text>
                </Button>
                <Button type="drawerBtn" padding="12px 20px" textAlign="left"
                    _onClick={() => {props.setPlace("pp02"); 
                                    props.setPlaceValue("방안");    
                                    setState(false)
                                    console.log(placeValue)}}>
                <Text bold size="base" color="#393939">방 안</Text>
                </Button>
                <Button type="drawerBtn" padding="12px 20px" textAlign="left"
                    _onClick={() => {props.setPlace("pp01"); 
                                    props.setPlaceValue("통로"); 
                                    setState(false)
                                    console.log(placeValue)}}>
                <Text bold size="base" color="#393939">통로</Text>
                </Button>
                <Button type="drawerBtn" padding="12px 20px" textAlign="left"
                    _onClick={() => {props.setPlace("pp05"); 
                                    props.setPlaceValue("창가"); 
                                    setState(false)
                                    console.log(placeValue)}}>
                <Text bold size="base" color="#393939">창가</Text>
                </Button>
                <Button type="drawerBtn" padding="12px 20px" textAlign="left"
                    _onClick={() => {props.setPlace("pp03"); 
                                    props.setPlaceValue("화장실"); 
                                    setState(false)
                                    console.log(placeValue)}}>
                <Text bold size="base" color="#393939">화장실</Text>
                </Button>
                <Button type="drawerBtn"padding="12px 20px" textAlign="left" 
                    _onClick={() => { setState(false) }}>
                <Text bold size="base" color="#FA4D56">취소</Text>
                </Button>
            </Grid>
            </Grid>
            
        </SwipeableDrawer>

        </React.Fragment>
    );  
}
    const FilterBox = styled.div`
    width: 100%;
    height:48px;
    align-items: center;
    `