import axios from 'axios';
axios.defaults.withCredentials = true;


// 서버 주소
const api = axios.create({
  baseURL: 'http://000.000.00.00:8080',
},{ withCredentials: true } //CORS error 방지
);


// 유저정보 관련 API
export const userAPI = {
  login: (id, pwd) => api.post('/api/login', {
    userId: id,
    userPwd: pwd,
  }
  ),
  findPwd: (userName, userId) => api.post('/api/findPwd', {
    userName: userName,
    userId: userId,
  }),
  changePwd: (tempPassword, password, passwordCheck) => api.put('/api/changePwd', {
    tempPassword: tempPassword,
    password: password,
    passwordCheck: passwordCheck,
  }),
}


// To-Do 관련(mainpage) API
export const mainAPI = {
  // 날씨 정보 가져오기
  getWeather: (lat, lon) => axios.get(`https://cors-anywhere.herokuapp.com/https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=1f473f305a3578edf89e5f8178daeb45`)

  // 랜덤 문구 가져오기
  // getSentence:

  // 내 식물 가져오기
  // getMyPlant:

  // To-Do 리스트 가져오기
  // getTodoList:

  // To-Do 완료하기
  // todoChecked:
}