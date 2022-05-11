import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import { Button, Grid, Text } from '../../Elements';
import { HiOutlinePencil } from 'react-icons/hi';
import { FaRegTrashAlt } from 'react-icons/fa';
import { IoMdClose } from 'react-icons/io';
import { BiDotsVerticalRounded } from 'react-icons/bi';
import { actionCreators as postActions } from '../../Redux/Modules/post';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

//community 게시글 및 댓글 삭제 수정 bottom sheet

export default function CommBottomSheet( props ) {
  const { type, postId } = props;
  const dispatch = useDispatch();
  const history = useHistory();

  // 바텀시트 open/close 관련 state
  const [state, setState] = React.useState({bottom: false});

  // 바텀시트 open/close 관련 함수 
  // 인자 : 시트돌출위치(현재bottom고정), open/close 관련 boolean값, 보여줄 컴포넌트 넘버
  const toggleDrawer = (anchor, open) => (event) => {
    setState({ ...state, [anchor]: open });
  };

    const deleteOne = (postId) => {
      dispatch(postActions.deletePostDB(postId));
    }
    const editOne = (postId) => {
      history.push(`/community/editpost/${postId}`);
    }  

  return (
    <React.Fragment key={'bottom'}>
        {type === "post"? 
        <FilterBox>
            <BiDotsVerticalRounded style={{position:"absolute", right:"20px", top:"32px"}}
            onClick={toggleDrawer('bottom', true)}/>
        </FilterBox>
      :
      <FilterBox>
            <BiDotsVerticalRounded style={{right:"20px"}}
            onClick={toggleDrawer('bottom', true)}/>
        </FilterBox>
      }

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
        <Grid width="100%" height="167px">
          <Grid margin="32px 0px" width="100%">
            <Button type="deledit" padding="12px 20px" textAlign="left" _onClick={() => { deleteOne() }}>
                <HiOutlinePencil style={{width: "16px", height: "16px", color:"#393939", marginRight:"28px"}}/>
              <Text bold size="base" color="#393939">삭제하기</Text>
            </Button>
            <Button type="deledit" padding="12px 20px" textAlign="left"_onClick={() => { editOne() }}>
                <FaRegTrashAlt style={{width: "16px", height: "16px", color:"#393939", marginRight:"28px"}} />
              <Text bold size="base" color="#393939">수정하기</Text>
            </Button>
            <Button type="deledit"padding="12px 20px" textAlign="left" _onClick={() => { setState(false) }}>
                <IoMdClose style={{width: "16px", height: "16px", color:"#393939", marginRight:"28px"}}/>
              <Text bold size="base" color="#393939">닫기</Text>
            </Button>
          </Grid>
        </Grid>
        
      </SwipeableDrawer>

    </React.Fragment>
  );  
}
    const FilterBox = styled.div`
    width: 100%;
    `