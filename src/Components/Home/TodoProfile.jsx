import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { Button, Grid, Image, Text } from "../../Elements";

const TodoProfile = () => {

  const history = useHistory();

  const goToAddPlant = () => {
    history.push('/add');
  }

  return (
    <React.Fragment>
    
      <Grid is_flex>
        <ProfileBox>
          <Image type="circle" size="60px" margin="10px auto" imgUrl="https://ar.haenselblatt.com/img/images_1/how-to-grow-rosemary-indoors.jpg" />
          <Grid margin="auto" width="fit-content" height="fit-content">
            <Text bold>동동이</Text>
          </Grid>
        </ProfileBox>

        <ProfileBox>
          <Image type="circle" size="60px" margin="10px auto" imgUrl="https://pds.joongang.co.kr/news/component/htmlphoto_mmdata/202201/19/e6fdcf26-7397-4053-9f84-904cabf7f279.jpg" />
          <Grid margin="auto" width="fit-content" height="fit-content">
            <Text bold>초록이</Text>
          </Grid>
        </ProfileBox>

        <ProfileBox>
          <Grid margin="auto" width="fit-content" height="fit-content">
            <Button type="plus" _onClick={goToAddPlant} />
          </Grid>
        </ProfileBox>

      </Grid>
    </React.Fragment>

  );
}


const ProfileBox = styled.div`
    box-sizing: border-box;
    
    margin: 0 5px;
    width: 70px;
    height: 100px;

    ${'' /* border: 1px solid #000; */}
`


export default TodoProfile;