import React from "react";
import styled from "styled-components";
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { Text, Grid } from "../../../Elements";
import { useEffect } from "react";
import { ReactComponent as CheckedIcon } from "../../../Assets/img/Circle_Check_checked.svg";
import { ReactComponent as UncheckedIcon} from "../../../Assets/img/Circle_Check_valid.svg";
import { useDispatch } from "react-redux";
import { actionCreators as userActions } from "../../../Redux/Modules/User";

const DeactivationAgreement =() => {
    const dispatch = useDispatch();

    const [agree1, setAgree1] = React.useState(false);
    const [agree2, setAgree2] = React.useState(false);
    const [agree3, setAgree3] = React.useState(false);


    const checkAgree1 = (e) => {
        setAgree1(!agree1);
    }
    const checkAgree2 = (e) => {
        setAgree2(!agree2);
    }
    const checkAgree3 = (e) => {
        setAgree3(!agree3);
    }
    const deactivate = () => {
        dispatch(userActions.deactivateUserDB());
        
    }
    return(
        <React.Fragment>
            <Grid margin="32px 24px">
                <Text color="#525252">회원탈퇴를 위해 <br /> 아래 내용을 확인 후 체크해주세요 </Text>
            </Grid>
            <AgreementWrap onClick={(e)=>checkAgree1(e)}>
                <Grid><Text size="small" color="#525252">회원탈퇴를 하셔도 기존에 작성하신 글과 댓글은 삭제되지 않습니다.</Text></Grid>
                <Grid margin="0px 4px">
                {agree1 ? 
                    <CheckedIcon /> : 
                    <UncheckedIcon/>
                }
                </Grid>
            </AgreementWrap>
            <AgreementWrap onClick={(e)=>checkAgree2(e)}>                
                <Grid><Text size="small" color="#525252">회원탈퇴를 하시면 현재 로그인 된 아이디는 사용하실 수 없으며 모든 계정 정보는 파기됩니다.  </Text></Grid>
                <Grid margin="0px 4px">
                {agree2 ?
                    <CheckedIcon /> : 
                    <UncheckedIcon />
                }
                </Grid>
            </AgreementWrap>
            <AgreementWrap onClick={(e)=>checkAgree3(e)}>
                <Grid><Text size="small" color="#525252">회원탈퇴 이후 재가입 시에도 닉네임 및 등록된 식물 정보는 복구되지 않습니다.</Text></Grid>
                <Grid margin="0px 4px">
                {agree3 ?
                    <CheckedIcon /> : 
                    <UncheckedIcon />
                }
                </Grid>
            </AgreementWrap>
            <div style={{width:"100%", margin:"200px auto 0px auto", textAlign:"center"}}>
                {agree1===false||agree2===false||agree3===false? 
                <Button disabled={agree1==false||agree2==false||agree3==false}
                    style={{display:"block", margin:"95px auto auto auto", width:"320px", height:"48px", boxShadow:"none", backgroundColor:"#F4F4F4", color:"#A8A8A8", borderRadius:"6px", fontSize:"16px",fontWeight:"700"}} variant='contained'>회원탈퇴 하기</Button>:
                <Button style={{display:"block", margin:"95px auto auto auto", width:"320px", height:"48px", boxShadow:"none", backgroundColor:"#0AAF42", color:"#FFFFFF", borderRadius:"6px", fontSize:"16px", fontWeight:"700"}} variant='contained'
                    onClick={()=>{deactivate()}}>회원탈퇴 하기</Button>
                }
            
            </div>
            
        </React.Fragment>
    )
}
const AgreementWrap = styled.div`
    width: fit-content;
    height: fit-content;
    padding: 24px;
    display: grid;
    grid-template-columns: 9fr 1fr;
    align-items: center;
    background-color: #F7F8FA;
    border-bottom: 1px solid #E0E0E0 ;
`
const Button = styled.button`
// margin-top: 200px;
width: 150px; 
height: 40px;
border-radius: 20px;
background-color: #C1C7CD;
color: white;
border: none;

&:disabled{
    background-color: #F0F0F0;
}
`

export default DeactivationAgreement;