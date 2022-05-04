import React from 'react';
import styled from 'styled-components';
import { Container, Text, Grid } from '../../Elements';
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import { useHistory } from 'react-router-dom';
import { DeactivationAgreement } from '../../Components';


const DeactivateAccount = () => {
    const history = useHistory();
    return (
        <React.Fragment>
            <Container>
                <Grid width="100%" margin="40px auto">
                    <Header>
                        <ArrowBackIosNewOutlinedIcon style={{position: "absolute", left: "0px", top:"10px" }} 
                        onClick={()=> history.goBack()}></ArrowBackIosNewOutlinedIcon>
                        <Text line="45px" bold >계정 비활성화</Text>
                    </Header>
                    <DeactivationAgreement />
                </Grid>
            </Container>
        </React.Fragment>
    )
}
const Header = styled.div`
  width: 100%;
  height: 50px;
  text-align: center;
  align-items: center;
  position: relative; 
`
export default DeactivateAccount;