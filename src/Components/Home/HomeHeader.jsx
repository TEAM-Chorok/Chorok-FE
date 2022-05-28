import React from "react";
import moment from "moment";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { Grid, Text } from "../../Elements";
import { actionCreators as mainActions } from "../../Redux/Modules/Main";
import { ReactComponent as Logo } from "../../Assets/img/logo/logoTextwithIconSmall.svg"

// 투두페이지 헤더부분 (날씨)

const HomeHeader = () => {
  const dispatch = useDispatch();

  // 위치 관련 state
  const [status, setStatus] = React.useState(null);
  const [cityname, setCityName] = React.useState(null);

  // 날씨 관련
  const weatherData = useSelector((state) => state?.main?.weather);
  const weather = weatherData?.weather;
  const [color, setColor] = React.useState('linear-gradient(180deg, #E7F4F7 60%, rgba(242, 244, 248, 0) 88%)');
  const [location, setLocation] = React.useState(false);

  // 현재 날짜
  const day = moment().day()
  const week = ["일", "월", "화", "수", "목", "금", "토"]
  const date = moment().format(`YYYY년 MM월 DD일 (${week[day]})`);


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
        setLocation(true);
      }, () => {
        setStatus('위치를 조회할 수 없습니다.');
        setLocation(false);
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
    if(weather === '맑음') {
      setColor('linear-gradient(180deg, #E7F4F7 60%, rgba(242, 244, 248, 0) 88%)');
      return;
    } else if(weather === '흐림') {
      setColor('linear-gradient(180deg, #EEEEEE 60%, rgba(242, 244, 248, 0) 88%)');
      return;
    } else if(weather === '안개' || weather === '눈') {
      setColor('linear-gradient(180deg, #EBF0F2 60%, rgba(242, 244, 248, 0) 88%)');
      return;
    } else if(weather === '황사' || weather === '먼지') {
      setColor('linear-gradient(180deg, #F9F4ED 60%, rgba(242, 244, 248, 0) 88%)');
      return;
    } else if(weather === '천둥' || weather === '폭풍' || weather === '비' || weather === '스콜' ) {
      setColor('linear-gradient(180deg, #ced5e6 60%, rgba(242, 244, 248, 0) 88%)');
      return;
    }
  }, [weather])


  return (
    <React.Fragment>
      <Div>
        {location ?
          <GridBox bg={color}>
            <Grid width="100%" padding="24px 16px">
              {/* <Text size="XS" color="#999">{date}</Text> */}
              {/* <br /> */}
              <Text size="small" weight="400" margin="5px 0"> {cityname}, {weatherData?.weather} {weatherData?.temp}℃</Text>
              <br />
              <Text size="xsmall" weight="400" color="#525252"> 최저 {weatherData?.temp_min} 최고 {weatherData?.temp_max} 습도 {weatherData?.humidity}%</Text>
            </Grid>
            <Grid width="100%" padding="0 16px" align="right">
              <Img src={`/img/weather/${weatherData?.weather}.svg`} />
            </Grid>
          </GridBox>
          :
          <Grid is_flex width="100%" height="120px" bg="linear-gradient(180deg, #E7F7ED 68.85%, rgba(242, 244, 248, 0) 88.45%)">
            <LogoBox>
              <Logo className="logo"/>
            </LogoBox>
          </Grid>
        }
      </Div>
    </React.Fragment>
  );
}
const Div = styled.div`
  width: 100%;
`


const Img = styled.img`
  margin-top: 4px;
  height: 100px;
`

const GridBox = styled.div`
  width: 100%;
  height: 140px;
  background: ${(props) => props.bg};
  display: grid;
  grid-template-columns: 3fr 1fr;  
`
const LogoBox = styled.div`
  position: relative;
  padding: 16px;
  width: 100%;
  .logo {
    position: absolute;
    top: 35px;
    ${'' /* left: -50px; */}
    ${'' /* transform: scale(0.6); */}
  }
`

export default HomeHeader;


