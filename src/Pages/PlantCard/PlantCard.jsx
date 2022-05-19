import React from 'react';
import { Alert, PlantCardFeed, PlantCardProfile } from '../../Components';
import { Button, Container, Grid, Text } from '../../Elements';
import { useParams, useHistory } from 'react-router-dom'
import styled from 'styled-components';
// 식물카드 페이지

const PlantCard = () => {
  const history = useHistory();
  const plantNo = useParams().plantname;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <Grid width="100%" bg="#F7F8FA">


        <PlantCardProfile />
        <PlantCardFeed />
        <Button type="longfloat" _onClick={() => { setOpen(true); }}>
          <Text size="base" color="#fff">내 식물에 추가하기</Text>
        </Button>


        <Alert open={open} setOpen={setOpen} btn1="아니오" btn2="네" url={`/add/${plantNo}`}>
          <Text bold size="small">
            내 식물에 <br /> 추가하시겠습니까?
          </Text>
        </Alert>
      </Grid>
    </React.Fragment>
  );
}




export default PlantCard;