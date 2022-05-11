import axios from 'axios';
axios.defaults.withCredentials = true;


// 서버 주소
const api = axios.create({
  baseURL: 'http://52.79.233.178',//민성님 Url
}, { withCredentials: true } //CORS error 방지
);


// 유저정보 관련 API
export const userAPI = {
  login: (username, password) => api.post('/api/login', {
    username: username,
    password: password,
  }
  ),

  signUp: (username, password, nickname, profileImgUrl) => api.post('/auth/signUp', {
    username: username,
    password: password,
    nickname: nickname,
    profileImgUrl:  profileImgUrl, 
  }
  ),
  kakaoLogIn:(code) => api.get(`/auth/kakao/callback?code=${code}`),
  

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
  getWeather: (userLocation) => api.get('api/weather', userLocation, {
    headers: {
      "Authorization": `Bearer ${sessionStorage.getItem('token')}`,
    }
  }),

  // 랜덤 문구 가져오기
  getSentence: () => api.get('', {
    headers: {
      "Authorization": `Bearer ${sessionStorage.getItem('token')}`,
    }
  }),

  // 내 식물 가져오기
  getMyPlant: () => api.get('/myplant', {
    headers: {
      "Authorization": `Bearer ${sessionStorage.getItem('token')}`,
    }
  }),

  // To-Do 리스트 가져오기
  getTodoList: () => api.get('/todo', {
    headers: {
      "Authorization": `Bearer ${sessionStorage.getItem('token')}`,
    }
  }),

  // To-Do 완료하기
  todoCheck: (todoNo) => api.get(`/todo/ok/${todoNo}`, {
    headers: {
      "Authorization": `Bearer ${sessionStorage.getItem('token')}`,
    }
  }),

  // To-Do 취소하기
  todoUnCheck: (todoNo) => api.patch(`/todo/cancle/${todoNo}`, {
    headers: {
      "Authorization": `Bearer ${sessionStorage.getItem('token')}`,
    }
  }),

  // 내 식물 

}

// 탐색페이지 관련 API
export const searchAPI = {
  // 식물도감 필터
  plantFiltering: (filterData) => api.post(`url`, filterData, {
    headers: {
      "Authorization": `Bearer ${sessionStorage.getItem('token')}`,
    }
  }),
  // 플랜테리어 전체 조회
  getPlanteriorList: () => api.get('/read-posts?postTypeCode=postType01', {
    headers: {
      "Authorization": `Bearer ${sessionStorage.getItem('token')}`,
    }
  }),
  // 플랜테리어 필터 조회
  planteriorFiltering: (placeCode) => api.get(`/read-posts?postTypeCode=postType01&plantPlaceCode=${placeCode}`, {
    headers: {
      "Authorization": `Bearer ${sessionStorage.getItem('token')}`,
    }
  }),
  // 식물 상세정보 조회 (식물카드)
  getPlantDetail: (plantNo) => api.get(`/${plantNo}`, {
    headers: {
      "Authorization": `Bearer ${sessionStorage.getItem('token')}`,
    }
  }),
  
  addPlant: (plantData) => api.get('/myplant', plantData, {
    headers: {
      "Authorization": `Bearer ${sessionStorage.getItem('token')}`,
    }
  }),

}