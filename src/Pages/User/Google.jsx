import React from "react";
import { useDispatch } from "react-redux";
import { Container, Grid, Text } from "../../Elements";
import { actionCreators as userActions} from "../../Redux/Modules/User";

const Google = (props) => {
    const dispatch = useDispatch();
    const params = window.location.hash.substring(1);

    React.useEffect(() => {
        getAccessToken(params)
    }, [params])

    const getAccessToken = async(params)=>{
           console.log(params);
        params = params.split("&")
        const param = new Array();
        for(var i = 0; i<params.length; i++){
            const key = params[i].split("=")[0]
            const value = params[i].split("=")[1]
            param[key]=value;
        }

        dispatch(userActions.googleLogInDB(param["access_token"]))
    }

    return (
    
        <Container>
            <Grid width="100%" height="100vh" align="center" padding="300px 0px 0px 0px">
                <Text align="center">잠시만 기다려 주세요!</Text>
            </Grid>
        </Container> 
    )

}

export default Google;