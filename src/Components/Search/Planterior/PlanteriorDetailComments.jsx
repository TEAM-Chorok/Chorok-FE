import React from "react";
import styled from "styled-components";
import { Grid, Image, Text } from "../../../Elements";


// planterior 사진 게시글 디테일 페이지 comment 컴포넌트

const PhotoDetailComments = () => {

    return (
        <React.Fragment>
            <Grid is_flex margin="20px 0 0 0">
                <Image type="circle" size="40px" imgUrl="https://pbs.twimg.com/media/ER7b4hOVAAAfBg-.jpg:large" />
                <Grid margin="0 10px">
                    <Text bold>닉네이이임</Text><br />
                    <Text size="XS" color="#888">1일 전</Text>
                </Grid>
            </Grid>
            <Grid margin="10px 0">
                <Text fontSize="14px">와 플랜테리어 너무 이뻐요~</Text>
            </Grid>

            <Grid is_flex margin="20px 0 0 0">
                <Image type="circle" size="40px" imgUrl="https://pbs.twimg.com/media/CmYek8KWYAAqOop.jpg" />
                <Grid margin="0 10px">
                    <Text bold>닉네임임</Text><br />
                    <Text size="XS" color="#888">1일 전</Text>
                </Grid>
            </Grid>
            <Grid margin="10px 0">
                <Text fontSize="14px">날씨 너무 좋아보이네요ㅜ제가 사는 곳은 계속 비와서 식물들 다 들여놨어요ㅜㅎㅎ</Text>
            </Grid>
        </React.Fragment>
    )
}


export default PhotoDetailComments;