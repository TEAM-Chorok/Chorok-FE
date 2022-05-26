import React from "react";
import styled from "styled-components";
import { Grid, Text } from "../../../Elements";
import { IoIosArrowForward } from "react-icons/io";
import { useHistory } from "react-router-dom";

import { ReactComponent as Leaf } from "../../../Assets/img/carouselIcons/leaf.svg"
import { ReactComponent as Glass } from "../../../Assets/img/carouselIcons/glass.svg"
import { ReactComponent as Note } from "../../../Assets/img/carouselIcons/note.svg"

const ContentLabeling = () => {
  const history = useHistory();
  return (
    <React.Fragment>
      <Grid width="100%" padding="0 4px">
        <LinkBox bg="#DEFBE6" onClick={() => {
          history.push("/labeling");
        }}>
          <Grid is_flex margin="0 5px" width="100%">
            <Grid margin="auto 8px">
              <Leaf />
            </Grid>
            <Grid width="100%" margin="0 0 6px 0">
              <Grid>
                <Text bold size="xsmall" color="#24A148">어떤 식물을 키울지 고민하고 있나요?</Text>
              </Grid>
              <Grid margin="-2px 0">
                <Text size="xsmall">나와 맞는 식물 찾으러 가기</Text>
              </Grid>
            </Grid>
          </Grid>
          {/* <IoIosArrowForward size="18px" color="#393939" /> */}
        </LinkBox>
      </Grid>
    </React.Fragment>
  )
}

const ContentSurvey = () => {
  const history = useHistory();
  return (
    <React.Fragment>
      <Grid width="100%" padding="0 4px">
        <LinkBox bg="#FFFBDC" onClick={() => {
          window.open('https://forms.gle/pDgB4u3pbWud6FJy8', '_blank');
        }}>
          <Grid is_flex margin="0 5px" width="100%">
            <Grid margin="auto 8px">
              <Note />
            </Grid>
            <Grid width="100%" margin="0 0 6px 0">
              <Grid>
                <Text bold size="xsmall" color="#FF7A00">초록의 사용 후기를 들려주세요!</Text>
              </Grid>
              <Grid margin="-2px 0">
                <Text size="xsmall">설문조사 참여하고 커피 기프티콘 받기</Text>
              </Grid>
            </Grid>
          </Grid>
          {/* <IoIosArrowForward size="18px" color="#393939" /> */}
        </LinkBox>
      </Grid>
    </React.Fragment>
  )
}

const ContentBug = () => {
  const history = useHistory();
  return (
    <React.Fragment>
      <Grid width="100%" padding="0 4px">
        <LinkBox bg="#EEF6FD" onClick={() => {
          window.open('https://forms.gle/VPQYnv6rgfaSvjYg7', '_blank');
        }}>
          <Grid is_flex margin="0 5px" width="100%">
            <Grid margin="auto 8px">
              <Glass />
            </Grid>
            <Grid width="100%" margin="0 0 6px 0">
              <Grid>
                <Text bold size="xsmall" color="#0085FF">초록의 버그를 제보해주세요! </Text>
              </Grid>
              <Grid margin="-2px 0">
                <Text size="xsmall">설문조사 참여하고 커피 기프티콘 받기</Text>
              </Grid>
            </Grid>
          </Grid>
          {/* <IoIosArrowForward size="18px" color="#393939" /> */}
        </LinkBox>
      </Grid>
    </React.Fragment>
  )
}

const ContentShare = () => {
  const history = useHistory();
  return (
    <React.Fragment>
      <Grid width="100%" padding="0 4px">
        <LinkBox bg="#FDEEFC" onClick={() => {
          history.push("/labeling");
        }}>
          <Grid is_flex margin="0 5px" width="100%">
            <Grid margin="auto 8px">
              <Leaf />
            </Grid>
            <Grid width="100%" margin="0 0 6px 0">
              <Grid>
                <Text bold size="xsmall" color="#FF5E8E">나와 꼭 맞는 식물 찾고 공유해주세요! </Text>
              </Grid>
              <Grid margin="-2px 0">
                <Text size="xsmall">내 식물 공유하고 식물 받기</Text>
              </Grid>
            </Grid>
          </Grid>
          {/* <IoIosArrowForward size="18px" color="#393939" /> */}
        </LinkBox>
      </Grid>
    </React.Fragment>
  )
}





const LinkBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  box-sizing: border-box;


  width: 100%;
  height: 60px;

  border-radius: 10px;
  background: ${(props) => props.bg};
`

export { ContentLabeling, ContentSurvey, ContentBug, ContentShare };