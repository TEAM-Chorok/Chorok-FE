import React from 'react';
import styled from 'styled-components';
import { Input, Text, Grid, Button } from '../../../Elements';
import { useHistory } from "react-router-dom";
import { ReactComponent as GoBackIcon } from "../../../Assets/img/Icons/goBackIcon.svg"

const EditPlantHeader = (props) => {
  const history = useHistory();
  const [disable, setDisable] = React.useState(true);

  React.useEffect(() => {
    if (props.plantImgUrl !== "" || props.myPlantName !== "" || props.place === props.previousPlantPlace) {
      setDisable(false);
    } else {
      setDisable(true);
    }
  }, [props.plantImgUrl, props.myPlantName, props.place])

  return (
    <React.Fragment>
      <Header>
        <GoBackIcon onClick={() => history.goBack()} className="backIcon" />
        <Text size="base">내 식물 수정</Text>
        <ButtonBox>
          {disable ?
            <Button type="tran" disabled={disable}>
              <Text size="base" color="#A8A8A8">
                완료
              </Text>
            </Button>
            :
            <Button type="tran" _onClick={() => { props.editMyPlant() }}>
              <Text size="base" weight="700" color="#0AAF42">
                완료
              </Text>
            </Button>
            }
        </ButtonBox>
      </Header>
    </React.Fragment>
  )
}
const Header = styled.div`      
    position: relative; 
    display: flex;
    width: 100%;
    height: 44px;
    text-align: center;
    align-items: center;
    justify-content: center;
    .backIcon {
      position: absolute;
      left: 16px;
    }
`
const ButtonBox = styled.div`
  position: absolute;
  right: 16px;
`

export default EditPlantHeader;
