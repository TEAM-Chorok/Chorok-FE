import axios from "axios";
import React from "react";
import { useDispatch } from "react-redux";
import { Grid, Text } from "../../Elements";
import { actionCreators as mainActions } from "../../Redux/Modules/Main";


// 투두페이지 헤더부분 (날씨)

const TodoHeader = () => {
  const dispatch = useDispatch();

  // 위도, 경도, 진행상태
  const [lat, setLat] = React.useState(null);
  const [lon, setLon] = React.useState(null);
  const [status, setStatus] = React.useState(null);
  // console.log("TodoHeader :","위도",lat,"경도",lon,"상태",status);

  // 현재 위치 위도 및 경도 가져오기
  const getLocation = () => {
    if (!navigator.geolocation) {
      // navigator.geolocation 지원하지 않을 경우
      setStatus('위치를 확인할 수 없습니다.');
    } else {
      navigator.geolocation.getCurrentPosition((position) => {
        setStatus(null);
        // 위도
        setLat(position.coords.latitude);
        // 경도
        setLon(position.coords.longitude);
      }, () => {
        setStatus('Unable to retrieve your location');
      });
    }
  }

  React.useEffect(() => {
    getLocation();
  }, [])

  return (
    <React.Fragment>
      <Grid height="80px">
        <Text size="XS" color="#999">2022년 04월 25일 (월)</Text>
        <br />
        <Text bold margin="5px 0"> 강남구, 맑음 29℃</Text>
        <br />
        <Text size="XS" color="#999"> 최고 22℃ 최저 11℃</Text>
      </Grid>
    </React.Fragment>
  );
}

export default TodoHeader;