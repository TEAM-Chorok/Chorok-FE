import axios from 'axios';
axios.defaults.withCredentials = true;


// 서버 주소
const api = axios.create({
  // baseURL: 'http://52.79.233.178',//민성님 Url
  // baseURL: 'http://121.141.140.148:8085', // 주호님
  baseURL: 'http://13.209.87.69:8080', // 은아님
  // baseURL: ' http://chorok.shop', // 은아님
  
}, { withCredentials: true } //CORS error 방지
);


// 유저정보 관련 API
export const userAPI = {

  //일반 로그인
  login: (username, password) => api.post('/auth/logIn', {
    username: username,
    password: password
  }
  ),

  //일반 회원가입
  signUp: (formData) => api.post('/auth/signUp',formData, {
    
    headers: {
      "Content-Type": "multipart/form-data",
    }
  }
  ),

  //카카오 로그인
  kakaoLogIn:(code) => api.get(`/auth/kakao/callback?code=${code}`),

  //google 로그인
  googleLogIn:(code) => api.get(`/auth/google/callback?code=${code}`),
  
  //isLogin
  isLogin: () => api.get(`/user/isLogIn`,{
    headers: {
      "Authorization": `${sessionStorage.getItem('token')}`,
    }
  }),

  //userEmail 중복확인
  userEmailCheck: (username) => api.post(`/auth/emailCheck`, {username}),
  
  //nickname 중복확인
  nicknameCheck: (nickname) => api.post(`/auth/nicknameCheck`, {nickname}),

  //전체 로그아웃
  logOut: () => api.get(`user/allLogOut`, {
    headers: {
      "Authorization": `${sessionStorage.getItem('token')}`,
    },
  }),

  //프로필 수정
  editProfile: (nickname, profileMsg) => api.patch(`/user/update/profile`, 
  {
    nickname: nickname, 
    profileMsg: profileMsg,
  }, {
    headers: {
      "Authorization": `${sessionStorage.getItem('token')}`,
    },
  }
  ),

  //비밀번호 찾기
  findPwd: (userName, userId) => api.post('/api/findPwd', {
    userName: userName,
    userId: userId,
  }),
  //비밀번호 변경
  changePwd: (tempPassword, password, passwordCheck) => api.put('/api/changePwd', {
    tempPassword: tempPassword,
    password: password,
    passwordCheck: passwordCheck,
  }),
}

//Labeling API
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
  getWeather: (userLocation) => api.get(`api/weather?lat=${userLocation.lat}&lon=${userLocation.lon}`, {
    headers: {
      "Authorization": `${sessionStorage.getItem('token')}`,
    }
  }),

  // 랜덤 문구 가져오기
  getSentence: () => api.get('/random', {
    headers: {
      "Authorization": `${sessionStorage.getItem('token')}`,
    }
  }),

  // 내 식물 가져오기
  getMyPlant: () => api.get('/myplant', {
    headers: {
      "Authorization": `${sessionStorage.getItem('token')}`,
    }
  }),

  // To-Do 리스트 가져오기
  getTodoList: () => api.get('/todo', {
    headers: {
      "Authorization": `${sessionStorage.getItem('token')}`,
    }
  }),

  // To-Do 완료하기
  todoCheck: (todoNo) => api.patch(`/todo/ok/${todoNo}`, {},{
    headers: {
      "Authorization": `${sessionStorage.getItem('token')}`,
    }
  }),

  // To-Do 취소하기
  todoUnCheck: (todoNo) => api.patch(`/todo/cancel/${todoNo}`, {},{
    headers: {
      "Authorization": `${sessionStorage.getItem('token')}`,
    }
  }),
  // 내 식물 
  getMyPlantPage: () => api.get('myplant/place', {
    headers: {
      "Authorization": `${sessionStorage.getItem('token')}`,
    }
  }),

}

// 탐색페이지 관련 API
export const searchAPI = {
  // 식물도감 필터
  plantFiltering: (d) => api.get(
    `/search-post/dictionary/planterior?keyword=&plantLevelCode=${d.plantLevelCode}&plantPlaceCode=${d.plantPlaceCode}&plantTypeCode=${d.plantTypeCode}&plantGrowthShapeCode=${d.plantGrowthShapeCode}`
    , {
    headers: {
      "Authorization": `${sessionStorage.getItem('token')}`,
    }
  }),
  // 플랜테리어 전체 조회
  getPlanteriorList: () => api.get('/read-posts?postTypeCode=postType01', {
    headers: {
      "Authorization": `${sessionStorage.getItem('token')}`,
    }
  }),
  // 플랜테리어 필터 조회
  planteriorFiltering: (placeCode) => api.get(`/read-posts?postTypeCode=postType01&plantPlaceCode=${placeCode}`, {
    headers: {
      "Authorization": `${sessionStorage.getItem('token')}`,
    }
  }),
  // 플랜테리어 게시글 작성
  writePlanteriorPost: (postdata) => api.post(`/write-post`, postdata, {
    headers: {
      "Authorization": `${sessionStorage.getItem('token')}`,
    }
  }),
  // 플랜테리어 게시글 수정
  editPlanteriorPost: (postdata, postId) => api.put(`/update-post/${postId}`, postdata, {
    headers: {
      "Authorization": `${sessionStorage.getItem('token')}`,
    }
  }),
  // 플랜테리어 게시글 삭제
  deletePlanteriorPost: (postId) => api.delete(`/delete-post/${postId}`, {
    headers: {
      "Authorization": `${sessionStorage.getItem('token')}`,
    }
  }),
  // 플랜테리어 댓글 작성
  writePlanteriorComment: (commentdata) => api.post(`/write-comment`, commentdata, {
    headers: {
      "Authorization": `${sessionStorage.getItem('token')}`,
    }
  }),
  // 플랜테리어 댓글 수정
  editPlanteriorComment: (commentdata) => api.put(`/update-comment`, commentdata, {
    headers: {
      "Authorization": `${sessionStorage.getItem('token')}`,
    }
  }),
  // 플랜테리어 댓글 삭제
  deletePlanteriorComment: (commentId) => api.put(`/delete-comment/${commentId}`, {
    headers: {
      "Authorization": `${sessionStorage.getItem('token')}`,
    }
  }),
  // 플랜테리어 게시글 상세조회
  getPlanteriorDetail: (postId) => api.get(`/read-post/detail/${postId}`, {
    headers: {
      "Authorization": `${sessionStorage.getItem('token')}`,
    }
  }),
  // 추천 식물 조회
  getRecommend: () => api.get('/user/labeling/results', {
    headers: {
      "Authorization": `${sessionStorage.getItem('token')}`,
    }
  }),
  // 탐색탭 키워드 검색 
  keywordSearching: (value) => api.get(`/search-post/integrate/planterior?keyword=${value}`, {
    headers: {
      "Authorization": `${sessionStorage.getItem('token')}`,
    }
  }),
  // 탐색탭 키워드 검색 
  
  keywordSearchingPhoto: (value, pagenum) => api.get(`/search-post/photo/planterior?keyword=${value}&page=${pagenum?pagenum:0}`, {
    headers: {
      "Authorization": `${sessionStorage.getItem('token')}`,
    }
  }),
  // 탐색탭 키워드 검색 (플랜테리어 위치필터)
  // keywordSearchingPhotoPlace: (value) => api.get(`/search-post/photo/planterior?keyword=${value}`, {
  //   headers: {
  //     "Authorization": `${sessionStorage.getItem('token')}`,
  //   }
  // }),
  // 탐색탭 키워드 검색 (식물도감)
  keywordSearchingPlant: (value) => api.get(`/search-post/dictionary/planterior?keyword=${value}`, {
    headers: {
      "Authorization": `${sessionStorage.getItem('token')}`,
    }
  }),

  //커뮤니티 관련 API

  //검색어로 전체 검색하기  (로그인)
  postSearching: (postTypeCode, keyword) => api.get(`/read-posts/community?postTypeCode=${postTypeCode}&keyword=${keyword}`,  
    {
      headers: {
        Authorization: ` ${sessionStorage.getItem('token')}`,
      }
    }
  ),
  getPlantDict: () => api.get('/search-post/dictionary/planterior?keyword=', {
    headers: {
      "Authorization": `${sessionStorage.getItem('token')}`,
    }
  }),
  //검색어로 전체 검색하기 (비로그인)
  postSearching_nonLogin: (postTypeCode, keyword) => api.get(`/non-login/read-posts/community?postTypeCode=${postTypeCode}&keyword=${keyword}`, 
  ),
}

// 기타 식물 관련
export const plantAPI = {
    // 식물 상세정보 조회 (식물카드)
    getPlantDetail: (plantNo) => api.get(`/plant/${plantNo}`, {
      headers: {
        "Authorization": `${sessionStorage.getItem('token')}`,
      }
    }),
    // 식물 북마크
    plantMarking: (plantNo) => api.get(`/plantBookMark/${plantNo}`, {
      headers: {
        "Authorization": `${sessionStorage.getItem('token')}`,
      }
    }),
    // 식물 추가
    addPlant: (plantData) => api.post('/myplant', plantData, {
      headers: {
        "content-type": "multipart/form-data",
        "Authorization": `${sessionStorage.getItem('token')}`,
      }
    }),
    // 장소 리스트 (필터목록용)
    getPlantPlace: () => api.get('/filter/plant-place', {
      headers: {
        "Authorization": `${sessionStorage.getItem('token')}`,
      }
    }),
}

// 달력 관련
export const calendarAPI = {
  getChecked: (year, month, plantNo) => api.get(`/calendar/${year}${month}/${plantNo}`, {
    headers: {
      "Authorization": `${sessionStorage.getItem('token')}`,
    }
  }),
  postBlooming: (plantNo, data) => api.post(`/blooming/${plantNo}`, data, {
    headers: {
      "Authorization": `${sessionStorage.getItem('token')}`,
    }
  }),
  checkCalendar: (plantNo, date, workType) => api.patch(`/calendar/${date}/${plantNo}/${workType}`, {}, {
    headers: {
      "Authorization": `${sessionStorage.getItem('token')}`,
    }
  }),
}


// 커뮤니티 페이지 관련 API
export const postAPI = { 
  //게시글 작성
  addPost: (formData) => api.post(`/write-post`, formData, {
    
    headers: {
      "content-type": "multipart/form-data",
      Authorization: `${sessionStorage.getItem('token')}`,
    }
  }),

  //모든 게시물 불러오기 (로그인)
  getAllPost_login: () => api.get(`/read-posts/community`,{
    headers: {
      Authorization:  ` ${sessionStorage.getItem('token')}`,
    }
  }),

  //모든 게시물 불러오기 (비로그인) 
  getAllPost_nonLogin: () => api.get(`/non-login/read-posts/community`),

  //필터링한 게시물 불러오기 (로그인)
  getFilteredPost_login: (postTypeCode) => api.get(`/read-posts/community?postTypeCode=${postTypeCode}`, {
    headers: {
      Authorization: ` ${sessionStorage.getItem('token')}`,
    }
  }),
  
  //필터링한 게시물 불러오기 (비로그인)
  getFilteredPost_nonLogin:(postTypeCode) => api.get(`/non-login/read-posts/community?postTypeCode=${postTypeCode}`),

  //게시글 상세 조회
  getDetailPost: (postId) => api.get(`/read-post/detail/${postId}`, {
    headers: {
      Authorization: ` ${sessionStorage.getItem('token')}`,
    }
  }
  ),

  //게시글 수정
  editPost: (postId, formData) => api.put(`/update-post/${postId}`, formData, {
    
    headers: {
      "content-type": "multipart/form-data",
      Authorization: ` ${sessionStorage.getItem('token')}`,
    }
  }),

  //게시글 삭제
  deletePost: (postId) => api.put(`/delete-post/${postId}`,{
    headers: {
      Authorization: ` ${sessionStorage.getItem('token')}`,
    }
  }),

  //게시글 좋아요
  likePost: (postId) => api.get(`like-post/${postId}`, {
    headers: {
      Authorization: ` ${sessionStorage.getItem('token')}`,
    }
  }),

  //게시글 북마크
  bookmarkPost: (postId) => api.get(`bookmark-post/${postId}`, {
    headers: {
      Authorization: ` ${sessionStorage.getItem('token')}`,
    }
  }),

  //커뮤니티 댓글 작성
  addComment: (commentdata) => api.post(`/write-comment`,commentdata,
   {
    headers: {
      Authorization: ` ${sessionStorage.getItem('token')}`,
    }
  }),

  //커뮤니티 댓글 수정
  editComment: (commentNo, commentdata) => api.put(`/update-comment`, {
    commentNo :commentNo,
    commentdata: commentdata,
    headers: {
      Authorization: ` ${sessionStorage.getItem('token')}`,
    }
  }),

  //커뮤니티 댓글 삭제
  deleteComment: (commentId) => api.get(`/delete-comment/${commentId}`, {
    headers: {
      Authorization: ` ${sessionStorage.getItem('token')}`,
    }
  }),
}


export const myPageAPI = {
  //내 사진, 스크랩한 사진 리스트 (최대6장까지)
  getMyPhotoScrapPhotoList: () => api.get(`/mypage/post/planterior`,{
    headers: {
      Authorization: ` ${sessionStorage.getItem('token')}`,
    }
  }
  ),

  //내가 작성한 글 전체 리스트
  getMyPostList: () => api.get(`/mypage/post`,{
    headers: {
      Authorization: ` ${sessionStorage.getItem('token')}`,
    }
  }
  ),

  //내 사진 전체 리스트
  getMyPhotoList: () => api.get(`/mypage/post?postTypeCode=postType01`, {
    headers:{
      Authorization: ` ${sessionStorage.getItem('token')}`,
    }
  }),
  //스크랩 사진 전체 리스트
  getScrapPhotoList: () => api.get(`/mypage/bookmark/post`,{
    headers: {
      Authorization: ` ${sessionStorage.getItem('token')}`,
    }
  }
  ),
  
  //내 식물 리스트
  getMyPlantList: () => api.get(`/mypage/myplant`, {
    headers: {
      Authorization: ` ${sessionStorage.getItem('token')}`,
    }
  }),

  //스크랩 식물 리스트
  getScrapPlantList: () => api.get(`/mypage/bookmark/plant`,{
    headers: {
      Authorization: ` ${sessionStorage.getItem('token')}`,
    }
  }
  ),

  //내 식물 detail 가져오기
  getMyDetailPlant : (myPlantNo) => api.get(`/myplant/plant/${myPlantNo}`,
  {
    headers: {
      Authorization: ` ${sessionStorage.getItem('token')}`,
    }
  }),

  //내 식물 삭제 
  deleteMyPlant: (myPlantNo) => api.delete(`/myplant/${myPlantNo}`,
  {
    headers: {
      Authorization: ` ${sessionStorage.getItem('token')}`,
    }
  }),

  //내 식물 수정
  editMyPlant: (myPlantNo, formData) => api.patch(`/myplant/update/${myPlantNo}`, formData, {
    headers: {
      "content-type": "multipart/form-data",
      Authorization: ` ${sessionStorage.getItem('token')}`,      
    }
  }),
}