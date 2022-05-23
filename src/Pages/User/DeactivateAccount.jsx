import React from 'react';
import styled from 'styled-components';
import { Container, Text, Grid } from '../../Elements';
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import { useHistory } from 'react-router-dom';
import { DeactivationAgreement, GeneralHeader } from '../../Components';


const DeactivateAccount = () => {
    const history = useHistory();
    return (
        <React.Fragment>
            <Container>
                <Grid width="100%">
                    <GeneralHeader title="회원탈퇴" size="base" />
                </Grid>
            </Container>
            <Container type="np">
                <hr style={{border: "1px solid #E0E0E0", margin:"0px"}} />
                <DeactivationAgreement />
            </Container>    
        </React.Fragment>
    )
}
export default DeactivateAccount;