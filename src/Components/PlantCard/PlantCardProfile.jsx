import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { Grid, Image, Text } from '../../Elements';
import { useParams } from 'react-router-dom'
import { actionCreators as plantActions } from '../../Redux/Modules/Plant';

// 식물카드 상단의 기본 정보부분 
// 식물카드에 들어갈 내용이 어느정도 확정 된 뒤에 이어서 구현하겠습니다~!

const PlantCardProfile = () => {
  const dispatch = useDispatch();
  
  const param = useParams();
  const plantNo = param.plantname;
  
  const plant = useSelector((state) => state.plant?.plantData);
  
  console.log(param)
  console.log(plant)

  React.useEffect(() => {
    dispatch(plantActions.getPlantDetailDB(plantNo));
  }, [plantNo])

  // {
  //   "plantNo": 12956,
  //   "plantName": "후피향나무",
  //   "plantImgUrl": "https://www.nongsaro.go.kr/cms_contents/301/12956_MF_ATTACH_01.jpg",
  //   "plantLevel": "초보집사",
  //   "plantPlace": "베란다,발코니",
  //   "plantType": "관엽식물",
  //   "plantTemp": "16~20℃",
  //   "plantHumid": "40 ~ 70%",
  //   "plantInfo": "설명 블라블라.",
  //   "springWaterCycle": "토양 표면이 말랐을때 충분히 관수함",
  //   "summerWaterCycle": "토양 표면이 말랐을때 충분히 관수함",
  //   "fallWaterCycle": "토양 표면이 말랐을때 충분히 관수함",
  //   "winterWaterCycle": "화분 흙 대부분 말랐을때 충분히 관수함"
  // }

  return (
    <React.Fragment>
      <Grid margin="20px 0" padding="10px">

        <Grid margin="auto">
          <Image type="circle" size="148px" imgUrl={plant?.plantImgUrl}/>
        </Grid>
        <Grid margin="15px auto">
          <Text bold size="large">{plant?.plantName}</Text>
        </Grid>

        <Grid is_flex>
          <PlantType>{plant?.plantGrowthShape}</PlantType>
          <PlantType>{plant?.plantType}</PlantType>
        </Grid>

        <GridBox>
          <Grid is_flex align="center">
            <Dot/>
            <Text bold size="xsmall">난이도</Text>
          </Grid>

          <Grid margin="1px 0">
            <Text size="xsmall">{plant?.plantLevel}</Text>
          </Grid>
          
          <Grid is_flex align="center">
            <Dot/>
            <Text bold size="xsmall">맞춤온도</Text>
          </Grid>
          
          <Grid margin="1px 0">
            <Text size="xsmall">{plant?.plantTemp}</Text>
          </Grid>

          <Grid is_flex align="center">
            <Dot/>
            <Text bold size="xsmall">배치공간</Text>
          </Grid>

          <Grid margin="1px 0">
            <Text size="xsmall">{plant?.plantPlace}</Text>
          </Grid>
        </GridBox>

        <Grid margin="25px 0">
          <Text size="XS" color="#999">
            {plant?.plantInfo}
          </Text>
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