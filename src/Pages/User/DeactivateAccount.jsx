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
                <Grid width="100%" margin="40px auto">
                    <GeneralHeader title="계정 비활성화" size="h5" />
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