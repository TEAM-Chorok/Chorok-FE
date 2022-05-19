import React, {useRef} from 'react';
import styled from 'styled-components';
import { Input, Grid, Image, Text } from '../../../Elements/index';
import { useHistory } from "react-router-dom";
import { useEffect } from 'react';
import { Button } from '@mui/material';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import EditPlantBottomSheet from './EditPlantBottomSheet';
import Modal from 'react-modal';
import { actionCreators as myActions} from '../../../Redux/Modules/MyPage';
import { useDispatch } from 'react-redux';

Modal.setAppElement('#root')

const EditPlantBody = (props) => {
    const history = useHistory();
    const dispatch = useDispatch();

    //이미지 미리보기 부분 클릭시 input클릭되게 연동
    const profileImgRef = useRef("");
    const handleClick = () => {
        profileImgRef.current.click();
    }
    
    //modal 열고 닫는 것을 useState로 관리
    const [openModal, setOpenModal] = React.useState(false);
    
    //내 식물 삭제하기
    const deletePlant = (props) => {
        // dispatch(myActions.)
    }

    return (
        
        <React.Fragment>
            <Grid padding="12px 0px" margin="0px auto" align="center">
                {props.preview? 
                    <Image
                        margin="10px auto"
                        type="circle"  
                        imgUrl={props.preview}
                        alt="preview-img"
                        size="120px"/> : 
                    (props.plantImgUrl !== "" ? 
                        <Image
                            margin="10px auto"
                            type="circle"  
                            imgUrl={props.plantImgUrl}
                            alt="preview-img"
                            size="120px"/> :
                        <Image
                            margin="10px auto"
                            type="circle"  
                            imgUrl="/img/basicPlantImg.png"
                            alt="preview-img"
                            size="120px"/>
                        // <Img src="/img/NoProfileImgUser.svg"/>

                    )
                }
                <input ref={profileImgRef} 
                style={{display:"none"}} type="file"
                onChange={(e)=>{ 
                    props.encodeFileToBase64(e.target.files[0]);
                    props.setPlantImgUrl(e.target.files[0]); }} />
                <Button style={{display:"block", color:"#0AAF42", margin: "0px auto", fontWeight:"700"}} 
                        onClick={handleClick}> 사진 바꾸기 </Button>
            </Grid>
            <Hr />
            <Grid width="100%" padding="16px" position="relative">
                <Text display="block" size="small" color="#0AAF42" >로즈마리</Text>
                <Text display="block" size="large">{props.previousPlantName}</Text>
                <img 
                    // onClick={()=>history.push(`/plant/${plantNo}`)}
                    onClick={()=>history.push(`/plant/1`)}
                    src="/img/arrowToRight.svg" 
                    style={{position:"absolute", right:"20px", bottom:"28px"}}/>
            </Grid>
            <Hr />
            <Grid width="100%" padding="16px">
                <label htmlFor='nickname'>별명</label>
                <Input 
                    _onChange={(e)=>props.setMyPlantName(e.target.value)}
                    id="nickname" defaultValue={props.previousPlantName} placeholder="별명" 
                    width="100%" height="48px" borderRadius="6px" border="1px solid #C6C6C6" padding="5px 0px 5px 10px" />

                <EditPlantBottomSheet setPlaceValue={props.setPlaceValue} placeValue={props.placeValue} plantId={props.myPlantId} place={props.place} setPlace={props.setPlace}/>
                <Grid position="relative" width="100%">
                    <Button 
                        onClick={()=>{setOpenModal(true)}}    
                        style={{ position:"absolute", right:"0px", color:"#0AAF42"}}>식물 삭제하기</Button>
                </Grid>
                <Modal 
                    isOpen={openModal}
                    style={modalStyle}
                    onRequestClose={()=>setOpenModal(false)}
                    ariaHideApp={false}>
                    <Grid display="block" position="inherit" padding="16px 16px 0px 0px" right="0px">
                        <img src="/img/cancel_s.svg" onClick={()=>setOpenModal(false)}/>
                    </Grid>
                    <Text margin="32px 24px 24px 24px" size="xsmall" display="block">정말 삭제하시겠습니까?<br />삭제된 식물은 복구할 수 없습니다.</Text>
                    <Grid margin="0px 0px 0px 24px">
                        <Button 
                            onClick={()=>setOpenModal(false)}
                            style={{fontSize:"14px", fontWeight:"700", borderRadius:"8px", border:"none", backgroundColor:"#F7F8FA", color:"#262626", marginRight:"8px", width:"116px", height:"36px"}}>취소하기</Button>
                        <Button 
                            onClick={()=>deletePlant()}
                            style={{fontSize:"14px", fontWeight:"700", borderRadius:"8px", border:"none", backgroundColor:"#F7F8FA", color:"#FA4D56", width:"116px", height:"36px"}}>삭제하기</Button>
                    </Grid>
                    
                </Modal>
            </Grid>
        </React.Fragment>
    )
}
const Select = styled.select`
    width: 100%;
    height: 53px;
    border-radius: 10px;
    margin: 10px 0px;
    padding: 0px 10px;
`
const Hr = styled.hr`
    margin: 0px;
    padding: 0px;
    border: 1px solid #E0E0E0;
`
const Img = styled.img`
    width: 120px;
    height: 120px;
    border-radius: 120px;
`
const modalStyle = {
    overlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.50)',
    },
    content: {
        position: 'absolute',
        top: "260px",
		left: "36px",
		right: "36px",
		bottom: "392px",
        width: "288px",
        height: "148px",
        padding: "none",
        overflow: 'auto',
        WebkitOverflowScrolling: 'touch',
        borderRadius: '16px',
        outline: 'none',
    }
}
export default EditPlantBody;
