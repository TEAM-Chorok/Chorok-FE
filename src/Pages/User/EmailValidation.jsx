import React from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import { ReactComponent as Logo} from '../../Assets/img/logo/leafLogo.svg';
import { Container, Grid, Text } from "../../Elements";

const EmailValidation = () => {
    const dispatch = useDispatch();
    const location = useLocation();

    return(
        <React.Fragment>
            <Container>
                <Grid margin="200px auto">
                    <Grid width="100%">
                        <Logo />
                    </Grid>
                    <Grid width="100%">
                        <Text display="block" size="base" weight="600" >회원가입을 환영합니다.</Text>
                        <Text>반려 식물 관리 앱, 초록을 즐겨보세요 :)</Text>
                    </Grid>
                </Grid>
            </Container>
        </React.Fragment>
    )
}

export default EmailValidation;