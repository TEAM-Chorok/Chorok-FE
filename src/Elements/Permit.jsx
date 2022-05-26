import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { actionCreators as userActions } from "../Redux/Modules/User";
import { Container, Grid, Text, Button } from "../Elements";
import { useHistory } from "react-router-dom";
import { ReactComponent as Logo } from "../Assets/img/logo/logoText.svg"

const Permit = (props) => {
    const is_login = localStorage.getItem('token') ? true : false;
    const history = useHistory();
    const dispatch = useDispatch();

    // useEffect(() => {
    //     dispatch(userActions.isLoginDB())
    // },[]);
    // const is_login = useSelector((state) => state.user.isLogin);


    if (props.element && !is_login) {
        return null;
    }
    if (props.element) {
        <React.Fragment>
            {props.children}
        </React.Fragment>
    }
    // if (!is_login || !is_session) {
    if (!is_login) {
        return (
            <React.Fragment>
                <Container>
                    <Grid width="100%" margin="30vh auto" align="center">
                        <Grid margin="4px auto">
                            <Logo style={{width:"180px", marginRight:"4px"}}/>
                        </Grid>
                        <Text size="large" bold>로그인이 필요한 서비스입니다</Text>
                        <Grid margin="80px auto">
                            <Button
                                width="180px"
                                height="40px"
                                border="none"
                                borderRadius="40px"
                                backgroundColor="#0AAF42"
                                _onClick={() => history.push('/')}>
                                <Text bold size="small" color="#fff">로그인 하러 가기</Text>
                            </Button>
                        </Grid>
                    </Grid>
                </Container>
            </React.Fragment>

        )
    }
    return (
        <React.Fragment>
            {props.children}
        </React.Fragment>
    )

}

export default Permit;