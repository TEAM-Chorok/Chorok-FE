import React from "react";
import { Button, Container, Grid, Image, Input, Text } from "../../Elements";
import { useDispatch } from "react-redux";
import { useParams } from 'react-router-dom'
import { actionCreators as plantActions } from "../../Redux/Modules/Plant";
import styled from "styled-components";
import Alert2 from "../share/modal/Alert2";
import GeneralHeader from "../share/etc/GeneralHeader";

const WritePlantProfile = (props) => {
  const dispatch = useDispatch();

  // 내 식물 등록할 정보
  const plantNo = useParams().plantNo;
  const nameRef = React.useRef(null);
  const myPlantPlace = props.place;

  // 파일 관련
  const fileRef = React.useRef();
  const [file, setFile] = React.useState(null);
  const [preview, setPreview] = React.useState("/img/add.svg");


  // 업로드한 파일 가져오기
  const onChange = (e) => {
    if (e.target.files[0]) {
      setPreview(e.target.files[0]);
      setFile(e.target.files[0]);
    } else {
      // 업로드 취소
      setPreview("/img/add.svg")
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

  const pattern = /\s/g;

  const addPlant = () => {
    if (nameRef.current.value.length === 0) {
      props.setMessage("식물 이름을 입력해주세요.");
      props.setOpen(true);
      return;
    } else if (nameRef.current.value.match(pattern)) {
      props.setMessage("식물 이름을 공백 없이 입력해주세요.");
      props.setOpen(true);
      return;
    } else if (nameRef.current.value.length > 7) {
      props.setMessage("식물 이름을 7글자 이내로 지어주세요.");
      props.setOpen(true);
      return;
    }

    const plantName = nameRef?.current?.value;
    const formData = new FormData();
    formData.append('plantNo', plantNo);
    formData.append('myPlantPlaceCode', myPlantPlace);
    formData.append('myPlantImgUrl', file);
    formData.append('myPlantName', plantName);
    props.setCompNum(2);
    dispatch(plantActions.addPlantDB(formData));
  }

  return (
    <React.Fragment>
      <GeneralHeader _onClick={() => { props.setCompNum(props.compNum - 1); }} />
      <Grid width="100%" padding="4px 16px">
        <Grid margin="28px 4px">
          <Grid>
            <Text bold size="large">식물의 별명과 사진을</Text>
          </Grid>
          <Grid margin="4px 0">
            <Text bold size="large">추가해주세요</Text>
          </Grid>
        </Grid>
        <Grid margin="44px auto">
          <Grid _onClick={() => { fileRef.current.click() }}>
            <Image type="circle" size="120px" imgUrl={preview} />
          </Grid>
          <input
            type="file"
            style={{ display: 'none' }}
            accept='image/jpg, image/jpeg, image/png'
            ref={fileRef} onChange={onChange}
          />
        </Grid>
      </Grid>

      <Grid width="100%" height="1px" bg="#E0E0E0" />

      <Container>

        <Grid width="100%" margin="12px auto" padding="0 5px">
          <Input type="squarenp" label={"별명"} width="100%" placeholder="식물의 별명을 지어주세요.(최대 7글자)" _ref={nameRef} />
        </Grid>

        <ButtonBox>
          <Button type="square" _onClick={() => { addPlant(); }}>
            <Text size="base" color="#fff">다음으로</Text>
          </Button>
        </ButtonBox>
      </Container>

    </React.Fragment>
  )
}

const ButtonBox = styled.div`
    box-sizing: border-box;
    width: 100%;
    padding: 0 4px;
    margin: 82px auto 0 auto;
`

export default WritePlantProfile;