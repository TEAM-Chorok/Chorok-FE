import React from "react";
import styled from "styled-components";
import { Grid, Image, Text } from "../Elements";





// 식물 프로필(원형) 컴포넌트입니다!
//
// --- props ---
// checked : 선택되었을 경우 
// size : L(96px) / null(56px)
// name : 식물 닉네임
// plant : 식물 종류
// imgUrl : 이미지 url
//  
// <PlantProfile checked size="L" name="동동이" plant="몬스테라" imgUrl="이미지 url"/>

const PlantProfile = (props) => {

  const { checked, size, name, plant, imgUrl } = props;

  if(size==="L") {
    return (
        <Grid margin="8px">
          <Image type="circle" size="96px" imgUrl={imgUrl}/>
          <Grid margin="auto" align="center">
            <Text bold size="basic">{name}</Text>
            <Grid margin="-2px 0">
              <Text size="small" color="#6F6F6F">{plant}</Text>
            </Grid>
          </Grid>
        </Grid>
    );
  }

  return (
      <Grid margin="8px">
        <Image type="circle" size="56px" imgUrl={imgUrl}/>
        <Grid margin="auto" align="center">
          <Text bold size="small">{name}</Text>
          <Grid margin="-4px 0">
            <Text size="xxsmall" color="#6F6F6F">{plant}</Text>
          </Grid>
        </Grid>
      </Grid>
  );
}



export default PlantProfile;