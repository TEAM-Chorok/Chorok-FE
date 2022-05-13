import React from "react";
import { Button, Grid, Image, Input, Text } from "../../Elements";
import { useDispatch } from "react-redux";
import { useParams } from 'react-router-dom'
import { actionCreators as plantActions } from "../../Redux/Modules/Plant";

const WritePlantProfile = (props) => {
  const dispatch = useDispatch();

  // 내 식물 등록할 정보
  const plantNo = useParams().plantNo;
  const nameRef = React.useRef(null);
  const myPlantName = nameRef?.current?.value;
  const myPlantPlace = props.place;
  
  // 파일 관련
  const fileRef = React.useRef();
  const [file, setFile] = React.useState("");
  const [preview, setPreview] = React.useState("/img/add_large.png");
  
  // 업로드한 파일 가져오기
  const onChange = (e) => {
    if (e.target.files[0]) {
      setPreview(e.target.files[0]);
      setFile(e.target.files[0]);
    } else {
      // 업로드 취소
      setPreview("/img/add_large.png")
      return
    }
    // 미리보기
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setPreview(reader.result)
      }
    }
    reader.readAsDataURL(e.target.files[0])
  }
  
  const addPlant = () => {
    const plantName = nameRef?.current?.value;
    const formData = new FormData();
    formData.append('plantNo', plantNo);
    formData.append('myPlantPlaceCode', myPlantPlace);
    formData.append('myPlantImgUrl', file);
    formData.append('myPlantName', plantName);
    console.log(plantNo, myPlantPlace, file, myPlantName);
    
    dispatch(plantActions.addPlantDB(formData));
  }

  return (
    <React.Fragment>
      <Text bold size="base">
        식물의 이름과 정보를<br />알려주세요
      </Text>
      <Grid margin="auto">
        <Grid _onClick={() => { fileRef.current.click() }}>
          <Image type="circle" size="100px" imgUrl={preview} />
        </Grid>
        <input
          type="file"
          style={{ display: 'none' }}
          accept='image/jpg,impge/png,image/jpeg'
          ref={fileRef} onChange={onChange}
        />
      </Grid>
      <Grid width="100%">
        <Input type="basic" label="닉네임" width="100%" _ref={nameRef} />
      </Grid>
      <Button type="basic" width="184px" _onClick={() => {props.setCompNum(2); addPlant();}}>
        <Text size="base" color="#fff">다음</Text>
      </Button>

    </React.Fragment>
  )
}


export default WritePlantProfile;