import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import { ReactComponent as Logo} from '../../Assets/img/logo/leafLogo.svg';
import { Container, Grid, Text } from "../../Elements";
import { actionCreators as UserActions } from "../../Redux/Modules/User";

const EmailValidation = () => {
    const history = useHistory();
    const dispatch = useDispatch();

    const url = new URL(window.location.href);
    const token = url.searchParams.get("token");
    const email = url.searchParams.get("email");

    React.useEffect(() => {
        dispatch(UserActions.emailValidationDB(token, email));
      }, [ dispatch, token, email ]);
    

    return(
        <React.Fragment>
            <Container>
                <Grid margin="200px auto">
                    <Grid margin="auto">
                        <Logo />
                    </Grid>
                    <Grid width="100%" margin="30px auto 60px auto">
                        <Grid margin="0px auto">
                            <Text  display="block" size="base" weight="700" >회원가입을 환영합니다.</Text>
                        </Grid>
                        <Text>반려 식물 관리 앱, <span style={{fontSize:"18px", color:"#0AAF42", fontWeight:"700"}}>초록</span>을 즐겨보세요</Text>
                    </Grid>
                    <Grid margin="auto">
                        <Button type="longfloat" onClick={()=>history.replace('/home')}>홈으로 가기</Button>
                    </Grid>
                </Grid>
            </Container>
        </React.Fragment>
    )
}
const Button = styled.button`

  width: 200px;
  height: 48px;

  border: none;
  border-radius: 65px;

  color: #fff;
  background: #0AAF42;
  box-shadow: 1px 2px 10px rgba(5, 167, 67, 0.36);

  z-index: 300;
  transition: 0.5s;
`
export default EmailValidation;