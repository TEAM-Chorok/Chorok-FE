import React from "react";
import styled from "styled-components";

import Alert from "../../Alert";
import PlaceFilter from "../PlaceFilter";
import AddPostHeader from "../../Community/AddPostHeader";

import { Grid, Image, Input, Text } from "../../../Elements";
import { IoCamera } from "react-icons/io5";
import { TiDelete } from "react-icons/ti";


const PlanteriorWriteComp = () => {

  // alert 모달 open/close
  const [open, setOpen] = React.useState(false);

  const [place, setPlace] = React.useState(null);
  const [message, setMessage] = React.useState(null);

  const fileRef = React.useRef();
  const [file, setFile] = React.useState([]);
  const [preview, setPreview] = React.useState([]);
  
  // alert 메세지 
  const alertMessage = {
    0: "자랑할 공간을 선택해주세요!",
    1: "내용이 비어있습니다!",
    2: "이미지를 업로드해주세요!",
    3: "이미지는 최대 3장까지 업로드 가능합니다."
  }



  // 업로드한 파일 가져오기
  const onChange = (e) => {
    if (file.length === 3 || e.target.files.length > 3) {
      setMessage(3);
      setOpen(true);
      return;
    }
    if (e.target.files) {
      setFile([...file, ...e.target.files]);
    } else {
      // 업로드 취소
      setFile([])
      return;
    }
    // const length = file?.length;
    // // 미리보기
    // for (let i = 0; i < length+1; i++) {
    //   const reader = new FileReader();
    //   reader.onload = () => {
    //     if (reader.readyState === 2) {
    //       setPreview([...preview, reader.result]);
    //     }
    //   }
    //   reader.readAsDataURL(e.target.files[i]);
    // }
    const fileArr = e.target.files;

    let fileURLs = [];
    let filesLength = fileArr.length > 10 ? 10 : fileArr.length;
    let files;

    for (let i = 0; i < filesLength; i++) {
      files = fileArr[i];

      let reader = new FileReader();
      reader.onload = () => {
        fileURLs[i] = reader.result;
        setPreview([...fileURLs]);
      };
      reader.readAsDataURL(files);
    }

  }
  console.log(file)
  console.log(preview);
  // const addPlant = () => {
  //   const formData = new FormData();
  //   formData.append('plantNo', plantNo);
  //   formData.append('myPlantPlace', myPlantPlace);
  //   formData.append('myPlantImgUrl', file);
  //   formData.append('myPlantName', myPlantName);
  //   console.log(plantNo, myPlantPlace, file, myPlantName);

  //   dispatch(searchActions.addPlantDB(formData));
  // }

    // 올리기 버튼 클릭시 실행되는 함수
    const submit = () => {
      if (place === null) {
        setMessage(0);
        setOpen(true);
      }
    }

  return (
    <React.Fragment>
      <AddPostHeader title="공간 자랑하기" submit={submit} />
      <Grid width="100%" padding="0 16px">
        <PlaceFilter none setPlace={setPlace} />
      </Grid>
      <Grid width="100%" padding="0 16px">
        <Input type="textarea" placeholder="사진에 대해 설명해 주세요." />
      </Grid>


      {file?.length > 0 ?
        <FilePreview>
          {preview ?
            preview.map((img, idx) => {
              return (
                <ImageBox key={idx}>
                  <Image type="square" size="84px" borderRadius="4px" imgUrl={img} />
                  <IconBox>
                    <TiDelete
                      size="25px" style={{ flex: "none", marginLeft: "-6.5px" }} color="#5F6060"
                      onClick={() => { setFile([]); setPreview([]); }} />
                  </IconBox>
                </ImageBox>
              )
            }) :
            <div></div>
          }
        </FilePreview>
        :
        <div>
        </div>
      }

      <UploadArea>
        <Grid margin="auto">
          <IoCamera size="25px" color="#8F8F8F" onClick={() => { fileRef.current.click() }} />
          <input
            multiple
            type="file"
            style={{ display: 'none' }}
            accept='image/*'
            ref={fileRef} onChange={onChange}
          />
        </Grid>
        <Grid width="100%" />
        <Grid margin="auto">
          <Text bold size="base" color="#24A148">{file?.length ? file.length : "0"}</Text>
          <Text size="base" color="#6F6F6F">/3</Text>
        </Grid>
      </UploadArea>

      <Alert onebutton open={open} setOpen={setOpen} btn1="계속 작성하기">
        <Text bold wordbreak size="small">
          {alertMessage[message]}
        </Text>
      </Alert>
    </React.Fragment>
  )
}

const FilePreview = styled.div`
  display: flex;
  width: 100%;
  height: 116px;

  background: #F4F4F4;
`

const ImageBox = styled.div`
  position: relative;
  margin: 16px 8px 16px 16px;
`

const IconBox = styled.div`
  position: absolute;
  top: -5px;
  right: -4px;

  display: flex;
  align-items: center;

  width: 12px;
  height: 12px;

  border: 1px solid #000;
  border-radius: 12px;
  background: #fff;
`

const UploadArea = styled.div`
  display: grid;
  grid-template-columns: 3fr 10fr 3fr;
  align-items:center;

  width: 100%;
  height: 52px;

  border-top: 1px solid #E0E0E0;
`

export default PlanteriorWriteComp;