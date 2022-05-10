import React from 'react';
import styled from 'styled-components';
import { Grid, Image, Text } from '../../Elements';


// 식물카드 상단의 기본 정보부분 
// 식물카드에 들어갈 내용이 어느정도 확정 된 뒤에 이어서 구현하겠습니다~!

const PlantCardProfile = () => {
  return (
    <React.Fragment>
      <Grid margin="20px 0" padding="10px">

        <Grid margin="auto">
          <Image type="circle" size="148px" />
        </Grid>
        <Grid margin="15px auto">
          <Text bold size="large">로즈마리</Text>
        </Grid>

        <Grid is_flex>
          <PlantType>덩굴형</PlantType>
          <PlantType>관엽식물</PlantType>
        </Grid>

        <GridBox>
          <Grid is_flex align="center">
            <Dot/>
            <Text bold size="xsmall">난이도</Text>
          </Grid>

          <Grid margin="1px 0">
            <Text size="xsmall">초보</Text>
          </Grid>
          
          <Grid is_flex align="center">
            <Dot/>
            <Text bold size="xsmall">맞춤온도</Text>
          </Grid>
          
          <Grid margin="1px 0">
            <Text size="xsmall">21~25℃</Text>
          </Grid>

          <Grid is_flex align="center">
            <Dot/>
            <Text bold size="xsmall">배치공간</Text>
          </Grid>

          <Grid margin="1px 0">
            <Text size="xsmall">거실, 방안, 통로, 화장실</Text>
          </Grid>
        </GridBox>

        <Grid margin="25px 0">
          <Text size="XS" color="#999">
            로즈마리는 바늘 같은 잎을 가진 여러해살이 식물로,
            민트와 같은 과에 속한다. 지중해 연안이 원산지인 허브이며 푸른 잎과 특유의 향을 가졌다.
            로즈마리라는 이름은 라틴어로 '바다(marinus)의 이슬(ros)'이라는 뜻의 '로즈마리누스(rosmarinus)'에서 왔다.
            꽃은 겨울과 봄에 피며 색깔은 흰색, 분홍색, 자주색, 푸른색 등이 있다.
          </Text>
        </Grid>

        <Grid>
        <Grid padding="5px 0">
            <Text bold>난이도</Text>
            <Text margin="0 40px" size="XS">초보</Text>
          </Grid>
          <Grid padding="5px 0">
            <Text bold>맞춤 온도</Text>
            <Text size="XS" margin="0 22px">16~20℃</Text>
          </Grid>
        </Grid>

      </Grid>
    </React.Fragment>
  );
}

const PlantType = styled.div`
  margin-right: 4px;
  padding: 4px 12px;
  
  width: fit-content;

  border: 1px solid #0AAF42;
  border-radius: 15px;

  font-weight: 500;
  font-size: 14px;
  color: #24A148;

  background: rgba(222, 251, 230, 0.5);
`

const Dot = styled.div`
  margin: 8px 8px 8px 0;
  width: 8px;
  height: 8px;
  border-radius: 8px;
  background: #6FDC8C;
`

const GridBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;

  margin: 16px 0;
`

export default PlantCardProfile;