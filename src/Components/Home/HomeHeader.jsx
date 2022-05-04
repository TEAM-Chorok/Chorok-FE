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










 //GEOLOCATION
//  window.addEventListener('load', () => { 
//     if(window.navigator.geolocation) {  // geolocation을 지원하는지 확인
//        window.navigator.geolocation.getCurrentPosition(successCallback,errorCallback)
//     }
// })
// // const [latitude, setLatitude] = React.useState("");
// // const [longitude, setLongitude] = React.useState("");

// const successCallback = (event) => {
//     const latitude = (event.coords.latitude )  // 위도
//     const longitude = (event.coords.longitude ) // 경도
//     console.log(latitude);
//     console.log(longitude);
// }
// const  errorCallback = (event) => {
//     console.log(event);
// }
  

//카카오 맵 API
//REST API KEY
//  <script type="text/javascript" src="//dapi.kakao.com/v2/maps/sdk.js?appkey=8cbf1a7970de59a406a674545c453b11&libraries=services"></script> 
//JAVASCRIPT KEY
//     <script type="text/javascript" src="//dapi.kakao.com/v2/maps/sdk.js?appkey=88560ac09875e5fa30e6fb2c81fcf293&libraries=services"></script>


/*global kakao*/
// 카카오를 글로벌로 사용한다는 의미

// function getAddr(lat,lng){
//     // 주소-좌표 변환 객체를 생성합니다
//     let geocoder = new kakao.maps.services.Geocoder();

//     let coord = new kakao.maps.LatLng(lat, lng);
//     let callback = function(result, status) {
//         if (status === kakao.maps.services.Status.OK) {
//             const arr  ={ ...result};
//             const _arr = arr[0];
//             const _arr2 = _arr.address.region_2depth_name;
//             console.log(_arr2);
//         }
//     }
//     geocoder.coord2Address(coord.getLng(), coord.getLat(), callback);
// }
// useEffect(()=>{
//     getAddr(latitude, longitude);
// })