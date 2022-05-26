import React, { useRef, seEffect } from 'react';
import styled from 'styled-components';
import { useHistory, useParams } from "react-router-dom";
import { EditPlantHeader, EditPlantBody } from '../../Components';
import { Container, Input, Grid, Image, Text } from '../../Elements';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from '@mui/material';
import EditPlantBottomSheet from '../../Components/MyPage/EditPlant/EditPlantBottomSheet';
import Modal from 'react-modal';
import { actionCreators as myActions } from '../../Redux/Modules/MyPage';

Modal.setAppElement('#root')

//나의 식물 수정 -- 작업중 
const EditPlant = () => {

    const history = useHistory();
    const dispatch = useDispatch();
    const params = useParams();
    const myPlantId = params.id;

    const myPlant = useSelector(state => state.mypage?.plant);

    const previousPlantName = myPlant?.myPlantName;
    const previousPlantPlace = myPlant?.myPlantPlace;

    const [myPlantName, setMyPlantName] = React.useState(""); //내 식물 이름
    const [place, setPlace] = React.useState(""); // 장소 코드 
    const [placeValue, setPlaceValue] = React.useState(""); // 장소 이름
    const [plantImgUrl, setPlantImgUrl] = React.useState("");
    const [preview, setPreview] = React.useState(""); 

    //내 식물 정보 불러오기
    React.useEffect(() => {
        dispatch(myActions.getMyPlantDetailDB(params.id));
        setMyPlantName(myPlant?.myPlantName);
        setPlaceValue(myPlant?.myPlantPlace);
        setPreview(myPlant?.myPlantImgUrl);
        if(myPlant?.myPlantPlace=="거실"){setPlace("pp04")}
            else if(myPlant?.myPlantPlace==="베란다,발코니"){setPlace("pp06")}
            else if(myPlant?.myPlantPlace==="방안"){setPlace("pp02")}
            else if(myPlant?.myPlantPlace==="통로"){setPlace("pp01")}
            else if(myPlant?.myPlantPlace==="창가"){setPlace("pp05")}
            else if(myPlant?.myPlantPlace==="화장실"){setPlace("pp03")}
    }, [myPlant?.myPlantName, myPlant?.myPlantPlace, myPlant?.myPlantImgUrl])

    // Base64로 인코딩하여 미리보기 이미지 출력
    const reader = new FileReader();
    const encodeFileToBase64 = (fileBlob) => {
        reader.readAsDataURL(fileBlob);
        return new Promise((reseolve) => {
            reader.onload = () => {
                setPreview(reader.result);
            }
        })
    }

    //이미지 미리보기 부분 클릭시 input클릭되게 연동
    const profileImgRef = useRef("");
    const handleClick = () => {
        profileImgRef.current.click();
    }

    //modal 열고 닫는 것을 useState로 관리
    const [openModal, setOpenModal] = React.useState(false);

    //내 식물 수정하기

    const editMyPlant = () => {
        if(myPlantName === "" || myPlantName === " " ){
            window.alert('식물의 별명을 지어주세요 :)');
            return;
        }
        dispatch(myActions.editMyPlantDB(myPlantId, myPlantName, place, plantImgUrl, preview))
    }

    //내 식물 삭제하기
    const deleteMyPlant = () => {
        dispatch(myActions.deleteMyPlantDB(myPlantId));
    }


    

    if(!myPlant){
        return (
            <div></div>
        )
    }
    return (
        <React.Fragment>
            <Container type="np">
                <EditPlantHeader plantImgUrl={plantImgUrl} previousPlantName={previousPlantName} myPlantName={myPlantName} previousPlantPlace={previousPlantPlace} place={place} editMyPlant={editMyPlant}/>
                <Hr />
                <Grid padding="12px 0px" margin="0px auto" align="center">
                {preview? 
                    <Image
                        margin="10px auto" size="120px"
                        type="circle"  
                        imgUrl={preview}
                        alt="preview-img"/> : 
                    <Image
                        margin="10px auto" size="120px"
                        type="circle"  
                        imgUrl="/img/plantProfile.svg"
                        alt="preview-img"/>
                }
                <input ref={profileImgRef} 
                style={{display:"none"}} type="file"
                onChange={(e)=>{ 
                    encodeFileToBase64(e.target.files[0]);
                    setPlantImgUrl(e.target.files[0]); }} />
                <Button style={{display:"block", color:"#0AAF42", margin: "0px auto", fontWeight:"700"}} 
                        onClick={handleClick}> 사진 바꾸기 </Button>
            </Grid>
            <Hr />
            <Grid width="100%" padding="16px" position="relative">
                <Text display="block" size="small" color="#0AAF42" >내 식물의 종류</Text>
                <Text display="block" size="large">{myPlant?.myPlantName}</Text>
                <img 
                    onClick={()=>history.push(`/plant/${myPlant.plantNo}`)}
                    src="/img/arrowToRight.svg" 
                    style={{position:"absolute", right:"20px", bottom:"28px"}}/>
            </Grid>
            <Hr />
            <Grid width="100%" padding="16px">
                <label htmlFor='nickname'>별명</label>
                    <Input 
                        _onChange={(e)=>setMyPlantName(e.target.value)}
                        defaultValue={myPlant?.myPlantName} 
                        id="nickname" placeholder="별명" 
                        width="100%" height="48px" borderRadius="6px" border="1px solid #C6C6C6" padding="5px 0px 5px 10px" />
                        
                    {/* 식물 장소정하기 */}
                    <EditPlantBottomSheet 
                        setPlaceValue={setPlaceValue} placeValue={myPlant?.myPlantPlace} 
                        plantId={myPlant?.myPlantId} place={place} setPlace={setPlace}/>
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
                                onClick={()=>deleteMyPlant()}
                                style={{fontSize:"14px", fontWeight:"700", borderRadius:"8px", border:"none", backgroundColor:"#F7F8FA", color:"#FA4D56", width:"116px", height:"36px"}}>삭제하기</Button>
                        </Grid>
                    </Modal>
                </Grid>
            </Container>
        </React.Fragment>
    )
}
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
        zIndex: 999,
    },
    content: {
        position: 'absolute',
        top: "40vh",
		left: "50vw",
		right: "50vw",
		bottom: "50vh",
        width: "288px",
        height: "148px",
        padding: "none",
        overflow: 'auto',
        WebkitOverflowScrolling: 'touch',
        borderRadius: '16px',
        outline: 'none',
    }
}
export default EditPlant;
