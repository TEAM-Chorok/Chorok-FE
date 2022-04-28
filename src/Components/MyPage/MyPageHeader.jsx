import React from "react";
import { Grid, Text } from "../../Elements";
import styled from 'styled-components';
import DensityMediumOutlinedIcon from '@mui/icons-material/DensityMediumOutlined';
import { useHistory } from "react-router-dom";

const MyPageHeader = () => {
    const history = useHistory();
    return (
        <React.Fragment>
            <Grid width="100%" height="45px" padding="10px 10px" position="relative">
                <DensityMediumOutlinedIcon style={{width: "0.9em", position:"absolute", right: "15px"}}
                onClick={()=>history.push('/setting')}/>
            </Grid>
            <Grid width="100%">
                <GridWrapCol width="100%" padding="10px 10px" >
                    <Grid is_flex align="center">
                        <Image src="sample.jpeg" />
                    </Grid>
                    <GridWrapRow>
                        <Grid><Text size="M">유저 닉네임</Text></Grid>
                        <Grid><Text fontSize="0.9em" >n 그루</Text></Grid>
                    </GridWrapRow>
                </GridWrapCol>
                <Grid margin="10px 0px 10px 5px">
                        <Text>유저 소개</Text>
                </Grid>
            </Grid>
        </React.Fragment>
    )
}
const GridWrapCol = styled.div`
    display: grid;
    grid-template-columns: 1fr 2.5fr;
`
const GridWrapRow = styled.div`
    display: grid;
    grid-template-rows: 1fr 1fr; 
    padding: 15px 0px;
    align-items: center;
`
const Image = styled.img`
    width: 80px;
    height: 80px;
    // margin: 0px 10px;
    border-radius:50px;
`
export default MyPageHeader;