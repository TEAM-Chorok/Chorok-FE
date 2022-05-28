import React from "react";
import styled from "styled-components";

import Alert2 from "../../share/modal/Alert2";
import PlaceFilter from "../PlaceFilter";
import AddPostHeader from "../../Community/AddPostHeader";

import { actionCreators as searchActions } from "../../../Redux/Modules/Search";

import { Grid, Image, Input, Text } from "../../../Elements";
import { IoCamera } from "react-icons/io5";
import { TiDelete } from "react-icons/ti";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useParams } from "react-router-dom";



const PlanteriorWriteComp = () => {
  const dispatch = useDispatch();
  const location = useLocation().pathname.split('/')[2];
  const postId = useParams();

  // const postdata = useSelector((state) => state.post.post);
  const planteriordata = useSelector((state) => state.search?.planterior);

  // alert 모달 open/close
  const [open, setOpen] = React.useState(false);

  const [place, setPlace] = React.useState(null);
  const [message, setMessage] = React.useState(null);

  // props 관련 에러 방지
  const [page, setPage] = React.useState(null);

  const fileRef = React.useRef(null);
  const contentRef = React.useRef(null);
  const [file, setFile] = React.useState([]);
  const [preview, setPreview] = React.useState([]);

  const [text, setText] = React.useState();

  // alert 메세지 
  const alertMessage = {
    0: "자랑할 공간을 선택해주세요!",
    1: "내용이 비어있습니다!",
    2: "이미지를 업로드해주세요!",
    3: "이미지는 최대 3장까지 업로드 가능합니다.",
    4: "초록은 아직 1장의 이미지만 업로드 가능합니다😭",
    5: "문제가 발생하여 목록으로 돌아갑니다.",
  }

  // 업로드한 파일 가져오기 
  // 이후 업로드 여러장 가능할 경우 첫번째 조건문 해제
  const onChange = (e) => {
    if (file.length === 2 || e.target.files.length > 1) {
      // 파일 갯수 1개 초과
      setMessage(4);
      setOpen(true);
      return;
    } else if (file.length === 4 || e.target.files.length > 3) {
      // 파일 갯수 3개 초과
      setMessage(3);
      setOpen(true);
      return;
    } else if (e.target.files) {
      // 파일 업로드 됐을 경우 
      setFile([e.target.files]);
      // setFile([...file, ...e.target.files]);
    } else {
      // 업로드 취소
      setFile([])
      return;
    }

    // 미리보기 세팅
    const fileArr = e.target.files;
    let fileURLs = [];
    let filesLength = fileArr.length > 10 ? 10 : fileArr.length;
    let files;

    for (let i = 0; i < filesLength; i++) {
      files = fileArr[i];

      let reader = new FileReader();
      reader.onload = () => {
        fileURLs[i] = reader.result;
        setPreview([fileURLs]);
        // setPreview([...fileURLs]);
      };
      reader.readAsDataURL(files);
    }
  }
  
  // 게시글 등록
  const submit = () => {
    // 데이터 유효성 
    if (place === null) {
      // 장소 설정하지 않았을 경우
      setMessage(0);
      setOpen(true);
      return;
    } else if (!contentRef) {
      // 글 내용을 작성하지 않았을 경우
      setMessage(1);
      setOpen(true);
      return;
    } else if (!file) {
      // 파일이 없을 경우
      setMessage(2);
      setOpen(true);
      return;
    } else if (file.length > 1) {
      // 파일 갯수가 1개를 초과할 경우
      setMessage(4);
      setOpen(true);
      return;
    }
    // 폼데이터 세팅
    const formData = new FormData();
    formData.append('postTitle', null);
    formData.append('postContent', contentRef.current.value);
    formData.append('plantPlaceCode', place);
    formData.append('postTypeCode', 'postType01');
    // 글 수정 루트일 경우
    if (location === 'edit') {
      if (file.length > 0) {
        // 파일을 수정했을 경우
        formData.append('postImgUrl', file[0][0]);
        dispatch(searchActions.editPlanteriorPostDB(formData, postId.postId));
        return;
      } else {
        // 파일 수정하지 않았을 경우
        formData.append('originalUrl', preview[0]);
        dispatch(searchActions.editPlanteriorPostDB(formData, postId.postId));
        return;
      };
    }
    // 글 작성 루트일 경우
    formData.append('postImgUrl', file[0][0]);
    dispatch(searchActions.writePlanteriorPostDB(formData));
  }


  React.useEffect(() => {
    // if (!planteriordata?.postContent && location === 'edit') {
    //   // 글 내용을 찾지 못한 경우
    //   setMessage(5);
    //   setOpen(true);
    //   return
    // } else 
    if (location === 'edit') {
      // 글 수정 루트일 경우 
      contentRef.current.value = planteriordata?.postContent;
      setPreview([planteriordata?.postImgUrl]);
    }
  }, [])


  return (
    <React.Fragment>

      <Wrapper>
        <AddPostHeader edit title={location === 'edit' ? "글 수정하기" : "식물 공간 올리기"} 
          submit={submit} disable={!text}/>
        <Grid width="100%" height="1px" bg="#E0E0E0"/>
        <Grid width="100%" padding="8px 0 8px 16px">
          <PlaceFilter none setPlace={setPlace} setPage={setPage} />
        </Grid>
        <Grid width="100%" heigth="100%" padding="0 16px">
          <Input type="textarea" placeholder="사진에 대해 설명해 주세요." _ref={contentRef} 
            _onChange={(e) => { setText(e.target.value); }}/>
        </Grid>

        <FileWrapper>
          {file?.length > 0 || preview.length > 0 ?
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
            </FilePreview> :
            <div></div>}

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
              <Text size="base" color="#6F6F6F">/1</Text>
            </Grid>
          </UploadArea>

        </FileWrapper>
      </Wrapper>
        <Alert2 open={open} setOpen={setOpen} btn1={message === 5 ? "확인" : "계속 작성하기"} error={message === 5 ? '/search' : null}>
        <Text bold wordbreak size="small">
          {alertMessage[message]}
        </Text>
      </Alert2>
    </React.Fragment>
  )
}

const Wrapper = styled.div`
  position:relative;
  width: 100%;
  height: 100%;
  overflow: ${(props) => props.open? 'hidden' : 'auto'};
`

const FileWrapper = styled.div`
  position: fixed;
  bottom: 54px;

  width: 100%;
  height: fit-content;
`


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