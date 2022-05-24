import React from "react";
import { Text, Grid, Container } from "../../Elements";

const LabelLoading = () => {
    return (
        <React.Fragment>
          <Container>
            <Grid width="100%" height="100vh"> 
              <div style={{textAlign:"center", width: "100%", paddingTop:"300px"}}>
                <Text bold color="#262626" size="large" display="block" margin="0px auto">열심히 취향 분석 중!<br />곧 맞춤 식물을 알려드릴게요!👍</Text>
              </div>
            </Grid>
          </Container>
        </React.Fragment>
      )
}

export default LabelLoading;