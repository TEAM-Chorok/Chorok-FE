import React from "react";
import moment from "moment";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { Grid, Text } from "../../Elements";
import { actionCreators as mainActions } from "../../Redux/Modules/Main";


// 투두페이지 헤더부분 (날씨)
// 진행할 작업
// 날씨에 따른 헤더 배경 컬러 변화 
// 서버 통신 데이터 뿌려주기

const HomeHeader = () => {
  const dispatch = useDispatch();

  // 위치 관련 state
  const [status, setStatus] = React.useState(null);
  const [cityname, setCityName] = React.useState(null);

  // 현재 날짜
  const day = moment().day()
  const week = ["일", "월", "화", "수", "목", "금", "토"]
  const date = moment().format("YYYY" + "년 " + "MM" + "월 " + "DD" + "일 " + "(" + `${week[day]}` + ")");

  const weatherData = useSelector((state) => state)

  console.log(weatherData)

  // 현재 위치 위도 및 경도 가져오기
  const getLocation = () => {
    if (!navigator.geolocation) {
      // navigator.geolocation 지원하지 않을 경우
      setStatus('위치를 조회할 수 없습니다.');
    } else {
      navigator.geolocation.getCurrentPosition((position) => {
        setStatus("위치를 조회중입니다.")
        const userLocation = {
          lat: position.coords.latitude,
          lon: position.coords.longitude,
        }
        setStatus(`현재 위치 ${userLocation.lat} - ${userLocation.lon}`);
        // 조회한 위치정보로 날씨 api 요청
        dispatch(mainActions.getWeatherDB(userLocation));
        // 조회한 위치정보 한글로 출력
        getAddr(userLocation.lat, userLocation.lon);
      }, () => {
        setStatus('위치를 조회할 수 없습니다.');
      });
    }
  }

  // 현재 위치 한글 출력
  const getAddr = (lat, lon) => {
    const geocoder = new window.kakao.maps.services.Geocoder();
    const coord = new window.kakao.maps.LatLng(lat, lon);
    const callback = (result, status) => {
      if (status === window.kakao.maps.services.Status.OK) {
        const arr = { ...result };
        const _arr = arr[0];
        const cityname = _arr.address.region_2depth_name;
        setCityName(cityname);
      }
    }
    geocoder.coord2Address(coord.getLng(lon), coord.getLat(lat), callback);
  }

  React.useEffect(() => {
    getLocation();
  }, [])

  return (
    <React.Fragment>
      {navigator.geolocation ?
        <Grid is_flex width="100%" height="120px" bg="linear-gradient(180deg, #E7F4F7 68.85%, rgba(242, 244, 248, 0) 88.45%)">
          <Grid width="100%" padding="16px">

            <Text size="XS" color="#999">{date}</Text>
            <br />
            <Text bold margin="5px 0"> {cityname}, 맑음 29℃</Text>
            <br />
            <Text size="XS" color="#999"> 최고 22℃ 최저 11℃</Text>
          </Grid>
          <Grid padding="16px">
            <Img src="img/weather/suncloud.png" />
          </Grid>
        </Grid>
        :
        <Grid is_flex width="100%" height="120px" bg="linear-gradient(180deg, #E7F4F7 68.85%, rgba(242, 244, 248, 0) 88.45%)">
          <Grid margin="20px auto" padding="16px">
            <Text bold size="xsmall">💬 {status}</Text>
          </Grid>
        </Grid>
      }
    </React.Fragment>
  );
}

const Img = styled.img`
  height: 100px;
`

const Logo = styled.img`
  width: 100px;
`

export default HomeHeader;


