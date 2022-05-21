import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { actionCreators as userActions } from "../Redux/Modules/User";
import { Container,Grid,Text } from "../Elements";
import { Button } from "@mui/material";
import { useHistory } from "react-router-dom";

const Permit = (props) => {
    const history = useHistory();
    const dispatch = useDispatch();
    const is_session = sessionStorage.getItem('token') ? true : false;
    useEffect(() => {
        dispatch(userActions.isLoginDB())
    },[]);
    const is_login = useSelector((state) => state.user.isLogin);

    if (!is_login || !is_session) {
        return (
            <React.Fragment>
                <Container>
                    <Grid width="100%" margin="250px auto" align="center">
                        <Text display="block" size="large" bold>로그인 후 이용하실 수 있어요! </Text>
                        <Button onClick={()=> history.push('/')}style={{color: "black"}}>로그인 하러 가기</Button>
                    </Grid>
                </Container>
            </React.Fragment>
            
        )
    }else {
        return (
            <React.Fragment>
                {props.children}
            </React.Fragment>
        )
    }
}

export default Permit;