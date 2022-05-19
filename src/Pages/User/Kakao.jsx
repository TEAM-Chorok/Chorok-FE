import React from "react";
import { useDispatch } from "react-redux";
import { Container, Grid, Text } from "../../Elements";
import { actionCreators as userActions} from "../../Redux/Modules/User";

const Kakao = (props) => {
    const dispatch = useDispatch();

    //현재 윈도우 창의 주소값 불러옴
    const href = window.location.href;
    //현재 url의 파라미터를 가져옴
    let params = new URL(document.URL).searchParams;
    //params에 저장된 파라미터 안에서 '인가코드'가져옴
    let code = params.get("code");

    console.log("code: ",code);
    
    React.useEffect( () => {
        dispatch(userActions.kakaoLogInDB(code));
    }, []);

    return (
    
        <Container>
            <Grid width="100%" height="100vh" align="center" padding="300px 0px 0px 0px">
                <Text align="center">잠시만 기다려 주세요!</Text>
            </Grid>
        </Container> 
    )

}

export default Kakao;