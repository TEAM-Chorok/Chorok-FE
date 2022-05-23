import React from "react";
import styled from "styled-components";
import { Grid, Text } from "../../../Elements";
import { IoIosArrowForward } from "react-icons/io";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators as userActions } from "../../../Redux/Modules/User";

// 탐색 - planterior 상단의 레이블링 테스트 링크 컴포넌트  

const LabelingTestLink = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const username = useSelector((state) => state.user?.user?.nickname);

  React.useEffect(() => {
    dispatch(userActions.isLoginDB());
  },[])

  return (
    <React.Fragment>
      <Grid margin="10px 2px">
        <Text bold size="h6">{username}님을 위한 추천식물</Text>
      </Grid>
      <LinkBox onClick={() => {
        history.push("/labeling");
      }}>
        <Grid is_flex margin="0 5px" width="100%">
          <Grid margin="auto 8px">
            <Text>🌿</Text>
          </Grid>
          <Grid width="100%">
            <Grid>
              <Text bold size="xsmall" color="#24A148">어떤 식물을 키울지 고민하고 있나요?</Text>
            </Grid>
            <Grid>
              <Text size="xsmall">나와 맞는 식물 찾으러 가기</Text>
            </Grid>
          </Grid>
        </Grid>
        <IoIosArrowForward size="18px" color="#393939" />
      </LinkBox>
    </React.Fragment>
  )
}

const LinkBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  box-sizing: border-box;

  padding: 8px 8px 8px 0;

  width: 100%;
  height: 60px;

  border-radius: 10px;
  background: #DEFBE6;
`

export default LabelingTestLink;