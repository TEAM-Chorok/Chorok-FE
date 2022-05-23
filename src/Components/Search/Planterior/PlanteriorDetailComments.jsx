import React from "react";
import styled from "styled-components";
import { Grid, Image, Text } from "../../../Elements";
import CommentWrite from "../../share/posting/CommentWrite";
import MoreContentSheet from "../../share/posting/MoreContentSheet";


// planterior 사진 게시글 디테일 페이지 comment 컴포넌트

const PhotoDetailComments = (props) => {

  const { content, name, time, img, commentId } = props;

  const user = localStorage.getItem('nickname');  
  const [ edit, setEdit ] = React.useState(false);


  return (
    <Grid width="100%">
      {edit ?
        <CommentWrite 
          content={content} 
          commentId={commentId} 
          setEdit={setEdit}
          setOpen={props.setOpen}          
          setMessage={props.setMessage} 
          placeholder="수정할 내용을 입력해주세요."/>
        :
        <Grid width="100%" padding="12px 16px">
          <CommentWrapper>
            <ProfileBox>
              <Image type="circle" size="24px" imgUrl={img} />
              <Grid margin="2px 8px">
                <Text bold size="small">{name}</Text>
                <Text size="xsmall" color="#888"> · {time}</Text>
              </Grid>
            </ProfileBox>

            {user === name ?
              <AbsoluteBox>
                <MoreContentSheet commentedit setEdit={setEdit} commentId={commentId} />
              </AbsoluteBox> :
              <></>}

            <Grid margin="0 20px 0 32px" width="275px">
              <Text size="small">{content}</Text>
            </Grid>
          </CommentWrapper>
        </Grid>
      }
      <Grid height="1px" width="100%" bg="#E0E0E0" />
    </Grid>
  )
}


const Wrapper = styled.div`
  width: 100%;
  background: #F7F8FA;
  overflow: ${(props) => props.open ? "hidden" : "auto"};
`

const CommentWrapper = styled.div`
    position: relative;
    width: 100%;
    min-height: 52px;
`

const ProfileBox = styled.div`
    display: flex;
    align-items: center;
`

const AbsoluteBox = styled.div`
  position: absolute;
  top: -4px;
  right: -16px;
`


export default PhotoDetailComments;