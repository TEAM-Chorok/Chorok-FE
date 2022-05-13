import axios from 'axios';
axios.defaults.withCredentials = true;


// 서버 주소
const api = axios.create({
  // baseURL: 'http://121.141.140.148:8085'
  baseURL: 'http://52.79.233.178',//민성님 Url
}, { withCredentials: true } //CORS error 방지
);


// 유저정보 관련 API
export const userAPI = {
  login: (username, password) => api.post('/auth/logIn', {
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
  
  isLogin: () => api.get(`/user/isLogIn`,{
    headers: {
      "Authorization": `Bearer ${sessionStorage.getItem('token')}`,
    }
  }),

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
  },{
    headers: {
      "Authorization": ` ${sessionStorage.getItem('token')}`,
    }
  }
  )
}


// To-Do 관련(mainpage) API
export const mainAPI = {
  // 날씨 정보 가져오기
  getWeather: (userLocation) => api.get('api/weather', userLocation, {
    headers: {
      "Authorization": ` ${sessionStorage.getItem('token')}`,
    }
  }),

  // 랜덤 문구 가져오기
  getSentence: () => api.get('', {
    headers: {
      "Authorization": ` ${sessionStorage.getItem('token')}`,
    }
  }),

  // 내 식물 가져오기
  getMyPlant: () => api.get('/myplant', {
    headers: {
      "Authorization": ` ${sessionStorage.getItem('token')}`,
    }
  }),

  // To-Do 리스트 가져오기
  getTodoList: () => api.get('/todo', {
    headers: {
      "Authorization": ` ${sessionStorage.getItem('token')}`,
    }
  }),

  // To-Do 완료하기
  todoCheck: (todoNo) => api.get(`/todo/ok/${todoNo}`, {
    headers: {
      "Authorization": ` ${sessionStorage.getItem('token')}`,
    }
  }),

  // To-Do 취소하기
  todoUnCheck: (todoNo) => api.patch(`/todo/cancle/${todoNo}`, {
    headers: {
      "Authorization": ` ${sessionStorage.getItem('token')}`,
    }
  }),

  // 내 식물 

}

// 탐색페이지 관련 API
export const searchAPI = {
  // 식물도감 필터
  plantFiltering: (filterData) => api.post(`url`, filterData, {
    headers: {
      "Authorization": ` ${sessionStorage.getItem('token')}`,
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
      "content-type": "multipart/form-data",
      "Authorization": `Bearer ${sessionStorage.getItem('token')}`,
    }
  }),

  //검색어로 전체 검색하기  (로그인)
  postSearching: (postTypeCode, keyword) => api.post(`/read-posts/community?postTypeCode=${postTypeCode}&keyword=${keyword}`,  
    {
      headers: {
        "content-type": "multipart/form-data",
        Authorization: `Bearer ${sessionStorage.getItem('token')}`,
      }
    }
  ),
  //검색어로 전체 검색하기 (로그인)
  postSearching_nonLogin: (postTypeCode, keyword) => api.post(`/non-login/read-posts/community?postTypeCode=${postTypeCode}&keyword=${keyword}`,  
    {
      headers: {
        "content-type": "multipart/form-data",
        Authorization: `Bearer ${sessionStorage.getItem('token')}`,
      }
    }
  )

}

// 커뮤니티 페이지 관련 API
export const postAPI = { 
  //게시글 작성
  addPost: (formData) => api.post(`/write-post`, {
    formData,
    headers: {
      "content-type": "multipart/form-data",
      Authorization: `Bearer ${sessionStorage.getItem('token')}`,
    }
  }),

  //모든 게시물 불러오기 (로그인)
  getAllPost_login: () => api.get(`/read-posts/community?postTypeCode=`,{
    headers: {
      Authorization:  ` ${sessionStorage.getItem('token')}`,
    }
  }),

  //모든 게시물 불러오기 (비로그인) 
  getAllPost_nonLogin: () => api.get(`/non-login/read-posts/community?postTypeCode=`),

  //필터링한 게시물 불러오기 (로그인)
  getFilteredPost_login: (postTypeCode) => api.get(`/read-posts/community?postTypeCode=${postTypeCode}`, {
    headers: {
      Authorization: ` ${sessionStorage.getItem('token')}`,
    }
  }),
  
  //필터링한 게시물 불러오기 (비로그인)
  getFilteredPost_nonLogin:(postTypeCode) => api.get(`/non-login/read-posts/community?postTypeCode=${postTypeCode}`),

  //게시글 상세 조회
  getDetailPost: (postId) => api.get(`/read-post/detail/${postId}`),

  //게시글 수정
  editPost: (postId, formData) => api.put(`/update-post/${postId}`,{
    formData,
    headers: {
      "content-type": "multipart/form-data",
      Authorization: `Bearer ${sessionStorage.getItem('token')}`,
    }
  }),

  //게시글 삭제
  deletePost: (postId) => api.put(`/delete-post/${postId}`,{
    headers: {
      Authorization: `Bearer ${sessionStorage.getItem('token')}`,
    }
  }),

  //게시글 좋아요
  likePost: (postId) => api.post(`like-post/${postId}`, {
    headers: {
      Authorization: ` ${sessionStorage.getItem('token')}`,
    }
  }),

  //게시글 북마크
  bookmarkPost: (postId) => api.post(`bookmark-post/${postId}`, {
    headers: {
      Authorization: `Bearer ${sessionStorage.getItem('token')}`,
    }
  }),

}


export const myPageAPI = {
  //내 사진 리스트
  getMyPhotoList: () => api.get(``,{
    headers: {
      Authorization: `Bearer ${sessionStorage.getItem('token')}`,
    }
  }
  ),

  //스크랩 사진 리스트
  getScrapPhotoList: () => api.get(``,{
    headers: {
      Authorization: `Bearer ${sessionStorage.getItem('token')}`,
    }
  }
  ),
  
  //스크랩 플랜트 리스트
  getScrapPlantList: () => api.get(``,{
    headers: {
      Authorization: `Bearer ${sessionStorage.getItem('token')}`,
    }
  }
  ),
}