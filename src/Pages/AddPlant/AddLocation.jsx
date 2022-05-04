import React from "react";
import { useHistory } from "react-router-dom";

import { AddLocationList } from "../../Components";

import { Button, Container, Grid, Text } from "../../Elements";


const AddLocation = () => {
  const history = useHistory();

  const Next = () => {
    history.push("/add/livingroom")
  }

  return (
    <React.Fragment>
      <Container>
        <Grid margin="50px 0">
          <Text size="M">어디에서 키우고 있나요?</Text>
        </Grid>

        <AddLocationList />

        <Button _onClick={Next}>다음</Button>
      </Container>
    </React.Fragment>
  );
}



export default AddLocation;

