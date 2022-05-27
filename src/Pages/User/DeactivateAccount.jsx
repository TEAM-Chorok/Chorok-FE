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
                <Grid width="100%">
                    <GeneralHeader title="회원탈퇴" size="base" />
                </Grid>
            <Container type="np">
            <Grid height="1px" width="100%" bg="#E0E0E0" />
                <DeactivationAgreement />
            </Container>    
        </React.Fragment>
    )
}
export default DeactivateAccount;