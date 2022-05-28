import React from "react";
import { Container, Grid, Text, Button } from "../Elements";
import { ReactComponent as Icon } from "../Assets/img/errorIcons/404error.svg"
import { useHistory } from "react-router-dom";


const NotFound = () => {
  const history = useHistory();
  return (
    <React.Fragment>
      <Container>
        <Grid width="100%" margin="30vh auto" align="center">
          <Text size="h5">앗, 화면을<br/>불러오지 못했어요.</Text>
          <Grid margin="20px auto">
            {/* <Icon /> */}
            <img src="/img/nonImageIcons/404error.png"/>
          </Grid>
          <Grid margin="0 auto">
            <Button
              type="float"
              _onClick={() => { history.goBack(); } }>
              <Text weight="600" color="#fff">다시 해보기</Text>
            </Button>
            <Grid margin="16px auto">
              <Button type="tran" _onClick={() => { history.push('/home'); }}>
                <Text color="#6F6F6F">초록 홈으로</Text>
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
}




export default NotFound;