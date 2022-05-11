import axios from 'axios';
axios.defaults.withCredentials = true;


// 서버 주소
const api = axios.create({
  baseURL: 'http://52.79.233.178',//민성님 Url
  // baseURL: 'http://00.00.000.000',
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

export const labelAPI = {
  labeling: (answer1, answer2, answer3, answer4) => api.put(`/user/labeling`, {
    answer1: answer1, 
    answer2: answer2, 
    answer3: answer3, 
    answer4: answer4
  })
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

// 탐색페이지 관련 API
export const searchAPI = {
  // 식물도감 필터
  plantFiltering: (filterData) => axios.post(`url`, filterData, {
    headers: {
      "Authorization": `Bearer ${sessionStorage.getItem('token')}`,
    }
  }),
  getPlanteriorList: (placeCode) => axios.get(`url`, {
    headers: {
      "Authorization": `Bearer ${sessionStorage.getItem('token')}`,
    }
  }),
  planteriorFiltering: (placeCode) => axios.get(`url`, {
    headers: {
      "Authorization": `Bearer ${sessionStorage.getItem('token')}`,
    }
  }),
  //검색어로 검색하기 
  postSearching: (keyword) => axios.post(`url`,  
    {
      keyword: keyword,
    }
  )

}

// 커뮤니티 페이지 관련 API
export const postAPI = { 
  //게시글 작성
  addPost: (formData) => axios.post(`/write-posts`, {
    formData,
    headers: {
      "Authorization": `Bearer ${sessionStorage.getItem('token')}`,
    }
  }),

  //모든 게시물 불러오기 (로그인)
  getAllPost_login: () => axios.get(`/read-posts/community`,{
    headers: {
      "Authorization": `Bearer ${sessionStorage.getItem('token')}`,
    }
  }),

  //모든 게시물 불러오기 (비로그인) 
  getAllPost_nonLogin: () => axios.get(`/non-login/read-posts/community`),

  //필터링한 게시물 불러오기 (로그인)
  getFilteredPost_login: (postTypeCode) => axios.get(`/read-posts/community/${postTypeCode}`, {
    headers: {
      "Authorization": `Bearer ${sessionStorage.getItem('token')}`,
    }
  }),
  
  //필터링한 게시물 불러오기 (비로그인)
  getFilteredPost_nonLogin:(postTypeCode) => axios.get(`/read-posts/community/${postTypeCode}`),

  //게시글 상세 조회
  getDetailPost: (postId) => axios.get(`/read-post/detail/${postId}`),

  //게시글 수정
  editPost: (postId, formData) => axios.put(`/update-post/${postId}`,{
    formData,
    headers: {
      "Authorization": `Bearer ${sessionStorage.getItem('token')}`,
    }
  }),

  //게시글 삭제
  deletePost: (postId) => axios.put(`/delete-post/${postId}`,{
    headers: {
      "Authorization": `Bearer ${sessionStorage.getItem('token')}`,
    }
  }),

  //게시글 좋아요
  likePost: (postId) => axios.post(`like-post/${postId}`, {
    headers: {
      "Authorization": `Bearer ${sessionStorage.getItem('token')}`,
    }
  }),

  //게시글 북마크
  bookmarkPost:  (postId) => axios.post(`bookmark-post/${postId}`, {
    headers: {
      "Authorization": `Bearer ${sessionStorage.getItem('token')}`,
    }
  }),

}
export const myPageAPI = {
  //내 사진 리스트
  getMyPhotoList: () => axios.get(``,
  ),

  //스크랩 사진 리스트
  getScrapPhotoList: () => axios.get(``,
  ),
}