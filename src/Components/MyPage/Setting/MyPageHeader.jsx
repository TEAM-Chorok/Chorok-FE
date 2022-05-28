import React from "react";
import { Grid, Permit, Text, Image, Button } from "../../../Elements";
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
                    <SettingIcon stroke="none" fill="#393939" style={{position:"absolute", right:0 }}
                            onClick={()=>history.push('/setting')}/>
                </Grid>
            </Permit>
            <Grid width="100%" margin="0px">
                <GridWrapCol width="100%" padding="10px 10px" >
                    <Grid is_flex align="center" padding="0px 16px 0px 0px">
                        <Image type="circle" size="80px" imgUrl={user?.profileImgUrl === "null" || user?.profileImgUrl === null || user?.profileImgUrl==="" ? "/img/NoProfileImgUser.svg": user?.profileImgUrl} />
                    </Grid>
                    <GridWrapRow>
                        <Grid><Text size="large" weight="700">{user?.nickname}</Text></Grid>
                        {user?.profileMsg === null || user?.profileMsg === ""? 
                            <Button 
                            _onClick={()=>history.push('/setting/profile')}
                            padding="0px 0px 0px 1px" margin="0px" type="tran"><Text color="#6F6F6F" size="small" >프로필 소개 추가하기 > </Text></Button> :
                            <Grid margin="0 1px"><Text size="small" color="#6F6F6F">{user?.profileMsg}</Text></Grid>
                        }
                        
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