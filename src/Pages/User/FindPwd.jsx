import React from 'react';
import { useHistory } from 'react-router-dom';
import Container from '../../Elements/Container';
import { Input, Text, Grid} from '../../Elements/index';
import { Button } from '@mui/material';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { ReactComponent as Logo } from '../../Assets/img/logo/leafLogo.svg';
import { actionCreators as userActions } from '../../Redux/Modules/User';
import { GeneralHeader } from '../../Components';
import { idCheck } from '../../Shared/RegEx';
import { Alert2 } from '../../Components';

const FindPwd = (props) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const isLogin = useSelector(state => state.user?.isLogin);
  const isToken = localStorage.getItem('token');

  const [userEmail, setUserEmail] = React.useState("");
  const [disable, setDisable] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [message, setMessage] = React.useState("");
  React.useEffect(() => {
    if(isLogin && isToken) {
      history.replace('/home');
    }
  
    if(idCheck(userEmail)) {
        setDisable(false);
    }else {
      setDisable(true);
    }
  }, [userEmail, isLogin]);

  const findPwd = () => {
    dispatch(userActions.findPwdDB(userEmail));
  }
  return (
    <React.Fragment>
      <Container>
        <Grid width="100%">
          <Grid margin="160px auto 32px auto">
            <Logo />
          </Grid>
          <Grid margin="10px auto">
            <Text weight="700">비밀번호를 잃어버리셨나요?</Text>
          </Grid>
          <Grid margin="auto" align="center" width="100%">
            <Text size="small"> 아래의 메일로 비밀번호 변경 링크를 보내드립니다. <br />전송된 메일에서 링크를 클릭하면 <br />비밀번호를 변경하실 수 있습니다.</Text>
            <form>
                <Input _onChange={(e)=>setUserEmail(e.target.value)} placeholder="이메일(아이디)" name="search_pw_id" type="email" height="52px" width="100%" padding="0px 0px 0px 20px" border="1px solid #D5D8DB"></Input>
                </form>
            </Grid>
            <Grid margin="auto"
              _onClick={() => { 
                findPwd();
                setOpen(true); 
                setMessage("비밀번호 변경 링크를 발송하였습니다.");}
              }>
              <p style={{color: "#8D8D8D", fontSize: "13px", borderBottom: "1px solid #8D8D8D"}}> 비밀번호 재설정 메일 발송 </p>
          </Grid>
        </Grid>
      </Container>
      {open &&
              <AlertBox>
                <Alert2 open={open} setOpen={setOpen} btn1={"확인"}>
                  <Text bold wordbreak size="small">
                    {message}
                  </Text>
                </Alert2>
              </AlertBox>
      }
    </React.Fragment>
  );
}


const AlertBox = styled.div`
  position: absolute;
  top: 0;
  padding-top: 40vh;
  width: 100%;
`
export default FindPwd;