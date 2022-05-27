import * as React from 'react';
import styled from 'styled-components';
import { useHistory, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { actionCreators as searchActions } from '../../../Redux/Modules/Search';
import { actionCreators as postActions } from '../../../Redux/Modules/post';

import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import { Grid, Text } from '../../../Elements';
import { ReactComponent as MoreIcon } from '../../../Assets/img/Icons/moreIcon.svg'
import { ReactComponent as PencilIcon } from '../../../Assets/img/postingIcon/pencil.svg'
import { ReactComponent as DeleteIcon } from '../../../Assets/img/postingIcon/trash.svg'
import { ReactComponent as CancelIcon } from '../../../Assets/img/postingIcon/cancel_m.svg'


// props
// url : 수정할 경우 이동할 url 지정
// postId : 삭제할 postId
// 
// <MoreContentSheet url='이동할 url' postId={1}/>


export default function MoreContentSheet(props) {
  const { planterior, commentedit, commentId } = props;

  const history = useHistory();
  const dispatch = useDispatch();

  const postId = useParams().postId;

  // 바텀시트 open/close 관련 state
  const [state, setState] = React.useState({
    bottom: false,
  });

  // 바텀시트 open/close 관련 함수 
  // 인자 : 시트돌출위치(현재bottom고정), open/close 관련 boolean값,
  const toggleDrawer = (anchor, open) => (event) => {
    setState({ ...state, [anchor]: open });
  };

  const deletePost = () => {
    if (commentedit) {
      dispatch(postActions.deleteCommentDB(commentId, postId));
      return;
    }
    dispatch(postActions.deletePostDB(props.postId));
  }

  const edit = () => {
    if (commentedit) {
      props.setEdit(true);
      return;
    }
    history.push(`${props.url}`);
  }

  return (
    <React.Fragment key={'bottom'}>

      <IconBox onClick={toggleDrawer('bottom', true)}>
        <MoreIcon className="moreicon" />
      </IconBox>

      <SwipeableDrawer
        anchor={'bottom'}
        open={state['bottom']}
        onClose={toggleDrawer('bottom', false)}
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
        <Grid width="100%">
          <MenuBox onClick={() => {
            setState({ bottom: false })
            edit()
          }}>
            <PencilIcon />
            <Text margin="0 16px">수정하기</Text>
          </MenuBox>

          {planterior ?
            <MenuBox onClick={() => {
              setState({ bottom: false })
              props.setOpen(true);
            }}>
              <DeleteIcon />
              <Text margin="0 16px">삭제하기</Text>
            </MenuBox> :
            <MenuBox onClick={() => {
              setState({ bottom: false })
              props.setOpen(true);
            }}>
              <DeleteIcon />
              <Text margin="0 16px">삭제하기</Text>
            </MenuBox>}

          <MenuBox onClick={toggleDrawer('bottom', false)}>
            <CancelIcon />
            <Text margin="0 16px">취소</Text>
          </MenuBox>

        </Grid>

      </SwipeableDrawer>

    </React.Fragment>
  );


}


const IconBox = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 20px;
  height: 20px;
  text-align: center;
`

const MenuBox = styled.div`
  display: flex;
  align-items: center;
  padding: 16px;
  width: 100%;
  border-bottom: 1px solid #ddd;
`