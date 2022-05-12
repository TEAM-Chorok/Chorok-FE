import React from "react";
import styled from "styled-components";
import { Grid, Image, Text } from "../../../Elements";


// planterior 사진 게시글 디테일 페이지 comment 컴포넌트

const PhotoDetailComments = (props) => {
    
    const { key, content, name, time, img } = props;



    return (
            <Grid width="100%" key={key}>
                <CommentWrapper>
                    <ProfileBox>
                        <Image type="circle" size="24px" imgUrl={img} />
                        <Grid margin="0 8px">
                            <Text bold size="small">{name}</Text>
                            <Text size="xsmall" color="#888"> · {time}</Text>
                        </Grid>
                    </ProfileBox>
                    <Grid margin="0 20px 0 32px" width="275px">
                        <Text size="small">{content}</Text>
                    </Grid>
                </CommentWrapper>
                <Grid height="1px" width="100%" bg="#E0E0E0" />
            </Grid>
    )
}

const CommentWrapper = styled.div`
    padding: 12px 0;
    width: 100%;
    min-height: 52px;
`

const ProfileBox = styled.div`
    display: flex;
    align-items: center;
`

export default PhotoDetailComments;