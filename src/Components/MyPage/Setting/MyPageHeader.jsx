import React from "react";
import { Grid, Permit, Text, Image } from "../../../Elements";
import styled from 'styled-components';
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { actionCreators as mainActions } from "../../../Redux/Modules/Main";
import { ReactComponent as SettingIcon } from '../../../Assets/img/Icons/settingIcon.svg'
import { useEffect } from "react";
import { actionCreators as userActions } from "../../../Redux/Modules/User";

const MyPageHeader = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const user = useSelector(state => state.user?.user);
  const myPlantList = useSelector(state => state.main?.myplant);

  useEffect(() => {
      dispatch(userActions.isLoginDB());
  }, [])

    return (
        <React.Fragment>
            <Permit>
                <Grid width="100%" height="24px" position="relative">
                    <SettingIcon stroke="none" fill="#393939" style={{position:"absolute", right:0, }}
                            onClick={()=>history.push('/setting')}/>
                </Grid>
            </Permit>
            <Grid width="100%" margin="0px">
                <GridWrapCol width="100%" padding="10px 10px" >
                    <Grid is_flex align="center" padding="0 16px 0">
                        <Image type="circle" size="80px" imgUrl={user?.profileImgUrl === "null" || user?.profileImgUr===null ? "/img/NoProfileImgUser.svg": user?.profileImgUrl} />
                    </Grid>
                    <GridWrapRow>
                        <Grid><Text size="large" weight="700">{user?.nickname.length < 11 ? user?.nickname : user?.nickname.slice(0,10) + '...' }</Text></Grid>
                        <Grid margin="0 1px"><Text size="small" color="#6F6F6F">{user?.profileMsg.length < 15? user?.profileMsg : user?.profileMsg.slice(0,14) + '...'}</Text></Grid>
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
    padding: 12px 0;
    align-items: center;
    width: 100%;
    height: 48px;
`
// const Image = styled.img`
//     width: 80px;
//     height: 80px;
//     // margin: 0px 10px;
//     border-radius:50px;
// `
export default MyPageHeader;