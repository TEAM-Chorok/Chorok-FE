import React from "react";
import { Grid, Permit, Text } from "../../Elements";
import styled from 'styled-components';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

const MyPageHeader = (props) => {
    const history = useHistory();

    return (
        <React.Fragment>
            <Permit>
                <Grid width="100%" height="44px" padding="10px 0px" position="relative">
                        <SettingsOutlinedIcon style={{width: "20px", position:"absolute", right: "0px"}}
                                        onClick={()=>history.push('/setting')}/>
                </Grid>
            </Permit>
            <Grid width="100%" margin="0px 0px 10px 0px">
                <GridWrapCol width="100%" padding="10px 10px" >
                    <Grid is_flex align="center">
                        <Image src="sample.jpeg" />
                    </Grid>
                    <GridWrapRow>
                        {/* <Grid><Text size="M">{nickname}</Text></Grid> */}
                        <Grid><Text size="M">유저 닉네임</Text></Grid>
                        <Grid><Text fontSize="0.9em" >n 그루</Text></Grid>
                    </GridWrapRow>
                </GridWrapCol>
            </Grid>
        </React.Fragment>
    )
}
const GridWrapCol = styled.div`
    display: grid;
    grid-template-columns: 1fr 3fr;
    place-items: center;
`
const GridWrapRow = styled.div`
    display: grid;
    grid-template-rows: 1fr 1fr; 
    padding: 12px 0px;
    align-items: center;
    width: 236px;
`
const Image = styled.img`
    width: 68px;
    height: 68px;
    // margin: 0px 10px;
    border-radius:50px;
`
export default MyPageHeader;