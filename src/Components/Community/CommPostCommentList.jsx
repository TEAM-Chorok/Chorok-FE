import { Button, Grid, Image, Input, Permit, Text } from "../../Elements";
import React from "react";
import styled from "styled-components";
import CommBottomSheet from "./CommBottomSheet";
import CommentWrite from "../share/posting/CommentWrite";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { useDispatch } from "react-redux";
import { actionCreators as postActions } from "../../Redux/Modules/post";
import { useEffect } from "react";

const CommPostCommentList = (props) => {
    const { content, name, time, img, commentId } = props;

    const dispatch = useDispatch();
    const user = localStorage.getItem('nickname');   
    const [ edit, setEdit ] = React.useState(false);
    const [comment, setComment] = React.useState("");

    const postId = useParams().postId;
    const contentRef = React.useRef();

    const editComment = () => {
        if (!contentRef.current.value.replace(/\s/g, '').length) {
            props.setMessage("댓글 내용을 입력해주세요!")
            props.setOpen(true);
            return;
          }
        const editdata = {
            commentId : commentId,
            commentContent : contentRef.current.value,
        }
        dispatch(postActions.editCommentDB(postId, editdata));
        contentRef.current.value = null;
        setEdit(false);
        return;
    }

    useEffect(() => {
        if(content){
            setComment(content);
        }
    }, [content]);


    return  (
            <Grid width="100%">
                {edit? 
                <React.Fragment>
                    <Wrapper>
                        <CommentBox>
                            <Input type="comment" placeholder="수정할 내용을 입력해주세요" defaultValue={content} 
                            _ref={contentRef} />
                            <ButtonBox>
                                <Button  type="tran" _onClick={() => { editComment(); }}>
                                    <Text size="small" color="#24A148">수정</Text>
                                </Button>
                            </ButtonBox>
                        </CommentBox>
                    </Wrapper>
                </React.Fragment>
                :
                <CommentWrap key={props.commentId}>
                    <Grid>
                        <Image type="circle" size="24px" imgUrl={img} />  
                    </Grid>
                    <CommentRowsBox>
                        <Grid>
                            <Text margin="0px 5px" size="small">{name}</Text>
                            <Text size="xsmall" color="#6F6F6F">・ {time}</Text>
                        </Grid>
                        <Grid margin="0px 5px"><Text size="small">{content}</Text></Grid>
                    </CommentRowsBox>
                    { user === name ? 
                    <Permit>
                        <Grid><CommBottomSheet postId={props.postId}
                        setEdit={setEdit} commentedit
                        type="comment"  writer={name} commentId={commentId}/></Grid>
                    </Permit> :
                    null}
                    
                </CommentWrap>
            }
            </Grid>
            )

}
const Wrapper = styled.div`
  width: 100%;
  background: #F7F8FA;
  overflow: hidden;
`
const CommentBox = styled.div`
  position: relative;
  box-sizing: border-box;

  padding: 18px 16px 16px 16px;
  width: 100%;

  background: #fff;

`
const ButtonBox = styled.div`
  position: absolute;
  top: 26px;
  right: 24px;
`

const CommentWrap = styled.div`
    height: fit-content;
    display: grid;
    grid-template-columns: 1fr 10fr 0.3fr;
    padding: 12px 16px;
    border-bottom: 1px solid #E0E0E0;
`
const CommentRowsBox = styled.div`
    width: 100%;
    height: fit-content;
    display: grid;
    align-items: center;
`
export default CommPostCommentList;