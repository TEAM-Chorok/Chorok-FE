import React from 'react';
import { useHistory } from 'react-router-dom';
import Container from '../../Elements/Container';
import { Input, Text, Grid} from '../../Elements/index';
import { Button } from '@mui/material';
import styled from 'styled-components';
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import { useDispatch } from 'react-redux';
import { actionCreators as userActions } from '../../Redux/Modules/User';
import { GeneralHeader } from '../../Components';

const FindPwd = (props) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [userEmail, setUserEmail] = React.useState("");

  const findPWD = () => {
    console.log(userEmail);
    // dispatch(userActions.findPwdDB(userEmail));
  }
  return (
    <React.Fragment>
      <Container>
        <Grid padding="30px 0px" width="100%">
          <GeneralHeader title="비밀번호 찾기" size="h5" />
        <FindPwdWrap>
          <Text margin="0px 0px 32px 12px" fontSize="20px" display="block" bold>회원정보를 입력하시면 이메일로 <br />비밀번호 변경 링크를 보내드려요.</Text>
                <form>
                <Input _onChange={(e)=>setUserEmail(e.target.value)} placeholder="이메일(아이디)" name="search_pw_id" type="email" height="52px" width="100%" padding="0px 0px 0px 20px" border="1px solid #D5D8DB"></Input>
                </form>
        </FindPwdWrap>
            <div style={{width:"100%", textAlign:"center"}}>
              <Button 
              onClick={()=>findPWD()}
              style={{margin: "260px auto 0px auto", backgroundColor:"#C1C7CD", width: "150px", height: "40px", color:"white", borderRadius:"50px", boxShadow:"none"}}variant='contained' name="search_pw_submit" >비밀번호 찾기</Button>
            </div>
        </Grid>

      </Container>
    </React.Fragment>
  );
}

const FindPwdWrap = styled.div`
width: 100%;
height: 80%;
// text-align: center;
margin: 70px auto;
`

const Header = styled.div`
  width: 100%;
  height: 20%;
  text-align: center;
  margin: 10px auto;
`

export default FindPwd;