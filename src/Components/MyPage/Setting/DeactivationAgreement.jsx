import React from "react";
import styled from "styled-components";
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { Text } from "../../../Elements";
import { useEffect } from "react";

const DeactivationAgreement =() => {
    const [hideAccount, setHideAccount] = React.useState(false);
    const [restore, setRestore] = React.useState(false);
    const [disconnect, setDisconnect] = React.useState(false);


    const checkHide = (e) => {
        if(hideAccount === false) {
            setHideAccount(true);
        }else{
            setHideAccount(false);
        }
    }
    const checkRestore = (e) => {
        if(restore === false) {
            setRestore(true);
        }else{
            setRestore(false);
        }
    }
    const checkDisconnect = (e) => {
        if(disconnect === false) {
            setDisconnect(true);
        }else{
            setDisconnect(false);
        }
    }
    const deactivate = () => {
        console.log("계정 비활성화 시도");
        
    }
    return(
        <React.Fragment>
            <AgreementWrap onClick={(e)=>checkHide(e)}>
                {hideAccount ? 
                <CheckCircleIcon style={{color:"#42BE65",width:"30px", height:"30px", paddingBottom:"20px"}}/> : 
                <CheckCircleOutlineOutlinedIcon style={{width:"30px", height:"30px", paddingBottom:"20px"}}/>}
                <div style={{borderBottom:"1px solid lightgrey", paddingBottom:"20px"}}><Text fontSize="12px">계정을 비활성화하면 공개 프로필이 표시되지 않습니다.</Text></div>
            </AgreementWrap>
            <AgreementWrap onClick={(e)=>checkRestore(e)}>
                {restore ?
                <CheckCircleIcon style={{color:"#42BE65",width:"30px", height:"30px", paddingBottom:"20px"}}/> :  
                <CheckCircleOutlineOutlinedIcon style={{width:"30px", height:"30px", paddingBottom:"20px"}}/>}
                <div style={{borderBottom:"1px solid lightgrey", paddingBottom:"20px"}}><Text fontSize="12px">비활성화는 30일 동안 유지됩니다. 30일 비활성화 기간 내에 계정에 로그인하면 계정은 복구됩니다. </Text></div>
            </AgreementWrap>
            <AgreementWrap onClick={(e)=>checkDisconnect(e)}>
                {disconnect ?
                    <CheckCircleIcon style={{color:"#42BE65",width:"30px", height:"30px", paddingBottom:"20px"}}/> :  
                    <CheckCircleOutlineOutlinedIcon style={{width:"30px", height:"30px", paddingBottom:"20px"}}/>}
                <div style={{borderBottom:"1px solid lightgrey", paddingBottom:"20px"}}><Text fontSize="12px">30일 비활성화 기간 내에 계정에 접속하지 않으면 계정이 삭제되고 아이디는 더 이상 계정과 연결되지 않습니다. 비활성화 이후 닉네임은 복구되지 않습니다.</Text></div>
            </AgreementWrap>
            <div style={{width:"100%", margin:"200px auto 0px auto", textAlign:"center"}}>
            <Button disabled={hideAccount==false||restore==false||disconnect==false}
            onClick={()=>{deactivate()}}>계정 비활성화</Button>
            </div>
            
        </React.Fragment>
    )
}
const AgreementWrap = styled.div`
    width: 100%;
    height: fit-content;
    margin: 20px auto;
    display: grid;
    grid-template-columns: 1fr 7fr;
    align-items: center;
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