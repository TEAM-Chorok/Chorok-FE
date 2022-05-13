import React from "react";
import styled from "styled-components";
import { Grid, Image, Text } from "../Elements";
import { IoIosArrowForward } from "react-icons/io";




// 식물 프로필(원형) 컴포넌트입니다!
//
// --- props ---
// checked : 선택되었을 경우 
// list : 리스트형 프로필(식물도감)
// 
// size : L(96px) / null(56px)
// name : 메인으로 표시할 텍스트 ex_식물닉네임...
// plant : 서브로 표시할 텍스트 ex_식물명...
// imgUrl : 이미지 url
//  
// <PlantProfile checked size="L" name="동동이" plant="몬스테라" imgUrl="이미지 url"/>

const PlantProfile = (props) => {

  const { list, size, name, plant, imgUrl, _onClick } = props;

  const [checked, setChecked] = React.useState(false);

  const check = () => {
    if (checked === false) {
      setChecked(true);
    } 
  };

  if (size === "L") {
    return (
      <Grid width="100px" margin="8px auto" _onClick={_onClick}>
        <Grid margin="auto">
          <Image type="circle" size="96px" imgUrl={imgUrl} />
        </Grid>
        <Grid margin="6px auto" align="center">
          <Text bold size="basic">{name}</Text>
          <Grid margin="-2px 0">
            <Text size="small" color="#6F6F6F">{plant}</Text>
          </Grid>
        </Grid>
      </Grid>
    );
  }

  if (list) {
    return (
      <Grid width="100%" margin="16px 0" _onClick={_onClick}>
        <Grid is_flex align="center" width="100%" height="72px">
          <Image type="circle" size="72px" imgUrl={imgUrl}/>
          <Grid width="100%" margin="0 16px">
            <Text bold size="base">{plant}</Text>
          </Grid>
          <IoIosArrowForward size="20px" color="#393939" fontWeight="bold"/>
        </Grid>
      </Grid>
    )
  }

  return (
    <Grid _onClick={check}>
      <Grid margin="4px" _onClick={_onClick}>
        <Grid border={checked ? "3px solid #0AAF42" : "3px solid #fff"} borderRadius="100%">
          <Image type="circle" size="56px" imgUrl={imgUrl} />
        </Grid>
      </Grid>
      <Grid margin="-3px auto" align="center">
        <Text bold size="small" color={checked ? "#0AAF42" : ""}>{name}</Text>
        <Grid margin="-4px 0">
          <Text size="xxsmall" color="#6F6F6F">{plant}</Text>
        </Grid>
      </Grid>
    </Grid>
  );
}



export default PlantProfile;