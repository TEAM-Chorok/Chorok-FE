import React from 'react';
import styled from 'styled-components';
import { Button, Grid, Image, Text } from '../../Elements';



const PlantCardInfo = () => {
  return (
    <React.Fragment>
      <InfoBox>
        <Text size="xxsmall" color={({ theme }) => theme.colors.gray70}>
          에코플렌트 중에서 가장 관리가 쉽고 잘 자라는 식물로 병해충에 대한 강한 저항성을 갖고 있다. 실내관엽 식물중 일산화탄소 제거능이 우수하여 주방의 기능성 식물로 알려진 종으로 어두운 곳에서도 잘 적응한다. 약 40m 길이까지 자랄 수 있는 덩굴성으로 행잉으로 이용하며 기근을 갖는다. 여러무늬 종들이 있으며 공기 정화력도 가지고 있다. 칼슘옥살레이트 성분을 가지고 있어 애완동물에게는 독성이 있다. 수경재배가 가능하여 줄기를 잘라 물꽂이 삽목하여 재배한다. 반음지에서 잘 자라며 겨울철에는 충분히 빛을 받게 하면서 물은 적게준다.
        </Text>
      </InfoBox>
    </React.Fragment>
  );
}


const InfoBox = styled.div`
  margin: auto;
  padding: 20px 24px;

  border: 1px solid ${({ theme }) => theme.colors.gray20};
  border-radius: 16px;
  background: #fff;
`


export default PlantCardInfo;