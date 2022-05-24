import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import { Button, Grid, Text } from '../../Elements';
import { ReactComponent as PencilIcon } from '../../Assets/img/postingIcon/pencil.svg'
import { ReactComponent as DeleteIcon } from '../../Assets/img/postingIcon/trash.svg'
import { ReactComponent as CancelIcon } from '../../Assets/img/postingIcon/cancel_m.svg'
import { ReactComponent as MoreIcon } from "../../Assets/img/Icons/moreIcon.svg";
import { actionCreators as postActions } from '../../Redux/Modules/post';
import { useHistory } from 'react-router-dom';

//community 게시글 및 댓글 삭제 수정 bottom sheet

export default function CommBottomSheet( props ) {

  const { type, commentedit } = props;

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

    const deleteComment = () => {
      dispatch(postActions.deleteCommentDB(props.postId, props.commentId));      
    }

    const editComment= () => {
      props.setEdit(true);
      return;
    }  

    if(type==="post"){
      return (
        <React.Fragment key={'bottom'}>
            
            <FilterBox>
                <MoreIcon style={{position:"absolute", right:"20px", top:"32px"}}
                onClick={toggleDrawer('bottom', true)}/>
            </FilterBox>

    
          <SwipeableDrawer
            anchor={'bottom'}
            open={state['bottom']}
            onClose={toggleDrawer('bottom', false)}
            onOpen={toggleDrawer('bottom', true)}
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
            <Grid width="100%">
              <Grid margin="32px 0px" width="100%">
                <Button type="drawerBtn" padding="12px 20px" textAlign="left" _onClick={() => { editOne(props.postId) }}>
                  <PencilIcon />
                  <Text margin="0 16px">수정하기</Text>
                </Button>
                <Button type="drawerBtn" padding="12px 20px" textAlign="left"_onClick={() => { deleteOne(props.postId) }}>
                    <DeleteIcon />
                  <Text margin="0 16px">삭제하기</Text>
                </Button>
                <Button type="drawerBtn"padding="12px 20px" textAlign="left" _onClick={() => { setState(false) }}>
                    <CancelIcon/>
                  <Text margin="0 16px">닫기</Text>
                </Button>
              </Grid>
            </Grid>
            
          </SwipeableDrawer>
    
        </React.Fragment>
      );  
    }
    if(type==="comment"){
      return (
        <React.Fragment key={'bottom'}>
            
            <FilterBox>
                  <MoreIcon style={{right:"20px"}}
                  onClick={toggleDrawer('bottom', true)}/>
              </FilterBox>        
    
          <SwipeableDrawer
            anchor={'bottom'}
            open={state['bottom']}
            onClose={toggleDrawer('bottom', false)}
            onOpen={toggleDrawer('bottom', true)}
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
            <Grid width="100%">
              <MenuBox onClick={() => {editComment()}}>
                <PencilIcon />
                <Text margin="0 16px">수정하기</Text>
              </MenuBox>
              <MenuBox onClick={() => {deleteComment()}}>
                <DeleteIcon />
                <Text margin="0 16px">삭제하기</Text>
              </MenuBox>
              <MenuBox onClick={() => { setState(false) }}>
                <CancelIcon />
                <Text margin="0 16px">취소</Text>
              </MenuBox>
            </Grid>
            
          </SwipeableDrawer>
    
        </React.Fragment>
      );  
    }
  return (
    <React.Fragment key={'bottom'}>
        
        <FilterBox>
              <MoreIcon style={{right:"20px"}}
              onClick={toggleDrawer('bottom', true)}/>
          </FilterBox>        

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
            <Button type="drawerBtn" padding="12px 20px" textAlign="left" _onClick={() => { deleteOne(props.postId) }}>
                <PencilIcon style={{width: "16px", height: "16px", color:"#393939", marginRight:"28px"}}/>
              <Text bold size="base" color="#393939">삭제하기</Text>
            </Button>
            <Button type="drawerBtn" padding="12px 20px" textAlign="left"_onClick={() => { editOne(props.postId) }}>
                <DeleteIcon style={{width: "16px", height: "16px", color:"#393939", marginRight:"28px"}} />
              <Text bold size="base" color="#393939">수정하기</Text>
            </Button>
            <Button type="drawerBtn"padding="12px 20px" textAlign="left" _onClick={() => { setState(false) }}>
                <CancelIcon style={{width: "16px", height: "16px", color:"#393939", marginRight:"28px"}}/>
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

    const MenuBox = styled.div`
      display: flex;
      align-items: center;
      padding: 16px;
      width: 100%;
      border-bottom: 1px solid #ddd;
    `