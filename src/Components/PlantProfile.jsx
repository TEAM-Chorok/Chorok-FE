import React from "react";
import { Grid, Image, Text } from "../Elements";
import { IoIosArrowForward } from "react-icons/io";
import styled from "styled-components";



// 식물 프로필 컴포넌트입니다!
//
// --- props ---
// checked : 선택되었을 경우 
// list : 리스트형 프로필(식물도감)
// square : 사각형 프로필(식물 추가 flow)
// 
// size : L(96px) / null(56px)
// name : 메인으로 표시할 텍스트 ex_식물닉네임...
// plant : 서브로 표시할 텍스트 ex_식물명...
// imgUrl : 이미지 url
//  
// <PlantProfile checked size="L" name="동동이" plant="몬스테라" imgUrl="이미지 url"/>

const PlantProfile = (props) => {

  const { list, size, name, plant, imgUrl, _onClick, _onBlur, checked, square } = props;


  if (size === "L") {
    return (
      <Grid width="100%" margin="8px auto" _onClick={_onClick} _onBlur={_onBlur}>
        <Grid margin="auto">
          <Image type="circle" size="96px" imgUrl={imgUrl} />
        </Grid>
        <Grid margin="6px auto" width="100%" align="center">
          <Grid margin="auto" align="center">
            <Text bold size="basic">{name}</Text>
          </Grid>
          <Grid margin="-2px auto">
            <Text size="small" color="#6F6F6F">{plant}</Text>
          </Grid>
        </Grid>
      </Grid>
    );
  }


  if (square) {
    return (
      <Grid margin="4px auto" _onClick={_onClick}>
        <Grid border={checked ? "3px solid #0AAF42" : "3px solid #fff"} borderRadius="19px">
          <Image type="square" size="100px" borderRadius="16px" imgUrl={imgUrl} />
        </Grid>
        <Grid 
          is_flex
          margin="4px auto"
          padding="4px 12px"
          bg={checked ? "#DEFBE6" : "#fff" }
          border={checked ? "1px solid #0AAF42" : "1px solid #F4F4F4"}
          borderRadius="20px">
          <Text size="small" 
            color={checked? "#0AAF42" : ""}
            bold={checked? true : false }>{name}</Text>
        </Grid>
      </Grid>
    )
  }

  if (list) {
    return (
      <Grid width="100%" margin="16px 0" _onClick={_onClick} _onBlur={_onBlur}>
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
    <Grid>
      <Grid margin="4px" _onClick={_onClick} _onBlur={_onBlur}>
        <Grid border={checked ? "3px solid #0AAF42" : "3px solid #fff"} borderRadius="100%">
          <Image type="circle" size="56px" imgUrl={imgUrl} />
        </Grid>
      </Grid>
      <Grid margin="-3px auto" align="center">
        <Text bold size="small" color={checked ? "#0AAF42" : ""}>{name}</Text>
        <Grid margin="-4px auto">
          <Text size="xxsmall" color="#6F6F6F">{plant}</Text>
        </Grid>
      </Grid>
    </Grid>
  );
}




export default PlantProfile;