import React, { useRef, seEffect } from 'react';
import styled from 'styled-components';
import { useHistory, useParams } from "react-router-dom";
import { EditPlantHeader, Alert2 } from '../../Components';
import { Container, Input, Grid, Image, Text, Button } from '../../Elements';
import { useSelector, useDispatch } from 'react-redux';
import EditPlantBottomSheet from '../../Components/MyPage/EditPlant/EditPlantBottomSheet';
import Modal from 'react-modal';
import { actionCreators as myActions } from '../../Redux/Modules/MyPage';
import { ReactComponent as Arrow } from '../../Assets/img/Icons/arrowToRight.svg'

Modal.setAppElement('#root')

//나의 식물 수정 -- 작업중 
const EditPlant = () => {

  const history = useHistory();
  const dispatch = useDispatch();
  const params = useParams();
  const myPlantId = params.id;

  //내 식물 정보 불러오기
  React.useEffect(() => {
    dispatch(myActions.getMyPlantDetailDB(params.id));
  }, [])

  const myPlant = useSelector(state => state.mypage?.plant);

  const previousPlantName = myPlant?.myPlantName;
  const [previousPlace, setPreviousPlantPlace] = React.useState(myPlant?.myPlantPlace);
  const [myPlantName, setMyPlantName] = React.useState(""); //내 식물 이름
  const [place, setPlace] = React.useState(""); // 장소 코드 
  const [placeValue, setPlaceValue] = React.useState(""); // 장소 이름
  const [plantImgUrl, setPlantImgUrl] = React.useState("");
  const [preview, setPreview] = React.useState(null);

  React.useEffect(() => {
    setMyPlantName(myPlant?.myPlantName);
    setPlaceValue(myPlant?.myPlantPlace);
    setPreviousPlantPlace(myPlant?.myPlantPlace);
    if (placeValue === "통로") { setPlace("pp01") }
    else if (placeValue === "방안") { setPlace("pp02") }
    else if (placeValue === "화장실") { setPlace("pp03") }
    else if (placeValue === "거실") { setPlace("pp04") }
    else if (placeValue === "창가") { setPlace("pp05") }
    else if (placeValue === "베란다,발코니") { setPlace("pp06") }
    setPreview(myPlant?.myPlantImgUrl);
  }, [myPlant?.myPlantName, myPlant?.myPlantPlace, myPlant?.myPlantImgUrl, previousPlace])

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
  const [deleteOpen, setDeleteOpen] = React.useState(false);

  //내 식물 수정하기
  const editMyPlant = () => {
    if (myPlantName === "" || myPlantName === " ") {
      window.alert('식물의 별명을 지어주세요 :)');
      return;
    }

    console.log(myPlantId, myPlantName, placeValue, place, plantImgUrl, preview);
    dispatch(myActions.editMyPlantDB(myPlantId, myPlantName, place, plantImgUrl, preview))
  }

  //내 식물 삭제하기
  const deleteMyPlant = () => {
    dispatch(myActions.deleteMyPlantDB(myPlantId));
  }


  if (!myPlant) {
    return (
      <div></div>
    )
  }
  return (
    <React.Fragment>
      <Container type="np">
        <EditPlantHeader plantImgUrl={plantImgUrl} previousPlantName={previousPlantName} myPlantName={myPlantName} previousPlace={previousPlace} place={place} editMyPlant={editMyPlant} />
        <Grid height="1px" width="100%" bg="#E0E0E0" />
        <Grid padding="12px 0px" margin="0px auto" align="center">
          {plantImgUrl ?
            <Image
              margin="10px auto" size="120px"
              type="circle"
              imgUrl={preview}
              alt="preview-img" /> :
            (myPlant?.myPlantImgUrl ?
              <Image
                margin="10px auto" size="120px"
                type="circle"
                imgUrl={myPlant?.myPlantImgUrl}
                alt="preview-img" /> :
              <Image
                margin="10px auto" size="120px"
                type="circle"
                imgUrl="/img/plantProfile.svg"
                alt="preview-img" />
            )
          }
          <input ref={profileImgRef}
            style={{ display: "none" }} type="file"
            onChange={(e) => {
              encodeFileToBase64(e.target.files[0]);
              setPlantImgUrl(e.target.files[0]);
            }} />
          <Button type="tran" _onClick={handleClick}>
            <Text size="small" weight="700" color="#0AAF42">사진 바꾸기</Text>
          </Button>
        </Grid>
        <Grid height="1px" width="100%" bg="#E0E0E0" />
        <Grid is_flex align="center" width="100%" padding="16px" position="relative"
          _onClick={() => history.push(`/plant/${myPlant.plantNo}`)}>
          <Grid width="100%">
            <Text display="block" size="small" color="#0AAF42" >식물정보</Text>
            <Text display="block" size="large">{myPlant?.plantName}</Text>
          </Grid>
          <Arrow style={{ position: 'absolute', right: '20px' }} />
        </Grid>
        <Grid height="1px" width="100%" bg="#E0E0E0" />
        <Grid width="100%" padding="16px">
          <Grid width="100%">
            <Input
              type="squarenp"
              _onChange={(e) => setMyPlantName(e.target.value)}
              defaultValue={myPlant?.myPlantName}
              maxlength="15"
              label="별명"
              id="nickname" placeholder="별명"
            />
          </Grid>
          {/* 식물 장소정하기 */}
          <Grid width="100%" margin="16px 0">
            <EditPlantBottomSheet
              place={place} setPlace={setPlace} placeValue={placeValue} setPlaceValue={setPlaceValue} />
            <Grid position="relative" width="100%">
              <AbsoluteBox>
                <Button type="tran" _onClick={() => { setDeleteOpen(true); }}>
                  <Text size="small" color="#0AAF42">식물 삭제하기</Text>
                </Button>
              </AbsoluteBox>
            </Grid>
          </Grid>
          {/* <Modal 
                        isOpen={openModal}
                        style={modalStyle}
                        onRequestClose={()=>setOpenModal(false)}
                        ariaHideApp={false}>
                        <Grid display="block" position="inherit" padding="16px 16px 0px 0px" right="0px">
                            <img src="/img/cancel_s.svg" onClick={()=>{setOpenModal(false);}}/>
                        </Grid>
                        <Text margin="32px 24px 24px 24px" size="xsmall" display="block">정말 삭제하시겠습니까?<br />삭제된 식물은 복구할 수 없습니다.</Text>
                        <Grid margin="0px 0px 0px 24px">
                            <Button 
                                onClick={()=>setOpenModal(false)}
                                style={{fontSize:"14px", fontWeight:"700", borderRadius:"8px", border:"none", backgroundColor:"#F7F8FA", color:"#262626", marginRight:"8px", width:"116px", height:"36px"}}>취소하기</Button>
                            <Button 
                                onClick={()=>{deleteMyPlant()}}
                                style={{fontSize:"14px", fontWeight:"700", borderRadius:"8px", border:"none", backgroundColor:"#F7F8FA", color:"#FA4D56", width:"116px", height:"36px"}}>삭제하기</Button>
                        </Grid>
                    </Modal> */}
        </Grid>
      </Container>
      {deleteOpen &&
        <AlertBox>
          <Alert2 type="editPlant" open={deleteOpen} setOpen={setDeleteOpen} func={deleteMyPlant}>
            <Text size="xsmall" align="left">
              정말 삭제하시겠습니까?<br />삭제된 식물은 복구할 수 없습니다.
            </Text>
            <Grid margin="10px auto 0px auto">
              <Button
                onClick={() => setOpenModal(false)}
                style={{ fontSize: "14px", fontWeight: "700", borderRadius: "8px", border: "none", backgroundColor: "#F7F8FA", color: "#262626", marginRight: "8px", width: "90px", height: "36px" }}>미루기</Button>
              <Button
                onClick={() => { deleteMyPlant() }}
                style={{ fontSize: "14px", fontWeight: "700", borderRadius: "8px", border: "none", backgroundColor: "#F7F8FA", color: "#FA4D56", width: "90px", height: "36px" }}>삭제하기</Button>
            </Grid>
          </Alert2>
        </AlertBox>
      }

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

const AbsoluteBox = styled.div`
  position: absolute;
  right: -4px;
`


const AlertBox = styled.div`
  position: absolute;
  top: 0;
  padding-top: 40vh;
  width: 100%;
`
export default EditPlant;
