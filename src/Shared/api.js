import axios from 'axios';
axios.defaults.withCredentials = true;


// 서버 주소
const api = axios.create({
  // baseURL: 'http://15.165.160.67',//민성님 Url
  // baseURL: 'http://121.141.140.148:8085', // 주호님
  // baseURL: 'http://54.180.90.176:8080', // 은아님
  // baseURL: ' http://chorok.shop', // 은아님
  baseURL: 'https://chorok.shop', // https
  
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
  //이메일 인증
  emailValidation : (token, email) => api.get(`/auth/check-email-token?token=${token}&email=${email}`),

  //카카오 로그인
  kakaoLogIn:(code) => api.get(`/auth/kakao/callback?code=${code}`),

  //google 로그인
  googleLogIn:(code) => api.get(`/auth/google/callback?code=${code}`),
  
  //isLogin
  isLogin: () => api.get(`/user/isLogIn`,{
    headers: {
      "Authorization": `${localStorage.getItem('token')}`,
    }
  }),

  //userEmail 중복확인
  userEmailCheck: (username) => api.post(`/auth/emailCheck`, {username}),
  
  //nickname 중복확인
  nicknameCheck: (nickname) => api.post(`/auth/nicknameCheck`, {nickname}),

  //전체 로그아웃
  logOut: () => api.get(`user/allLogOut`, {
    headers: {
      "Authorization": `${localStorage.getItem('token')}`,
    },
  }),

  //프로필 수정
  editProfile: (formData) => api.post(`/user/update/profile`, formData, {
    headers: {
      "Authorization": `${localStorage.getItem('token')}`,
    },
  }
  ),

  //회원탈퇴
  deactivateUser: () => api.put(`/user/update/accountStatus`, {}, {
    headers: {
      "Authorization": `${localStorage.getItem('token')}`,
    }
  }),

  //비밀번호 찾기
  // findPwd: (userName, userId) => api.post('/api/findPwd', {
  //   userName: userName,
  //   userId: userId,
  // }),

  //비밀번호 변경
  changePwd: (password) => api.patch('/user/update/password', 
    {password: password}, 
    {
      headers: {
        "Authorization": `${localStorage.getItem('token')}`,
      }
    }),
}

//Labeling API
export const labelAPI = {
  labeling: (answer1, answer2, answer3, answer4) => api.put(`/user/labeling`, {
    answer1: answer1, 
    answer2: answer2, 
    answer3: answer3, 
    answer4: answer4
  },  {
    headers: {
      "Authorization": `${localStorage.getItem('token')}`,
    }
  }
  ),
  labeling_nonLogin: (answer1, answer2, answer3, answer4) => api.get(`/auth/labeling?answer1=${answer1}&answer2=${answer2}&answer3=${answer3}&answer4=${answer4}`,
  )
}


// To-Do 관련(mainpage) API
export const mainAPI = {
  // 날씨 정보 가져오기
  getWeather: (userLocation) => api.get(`/weather/situation?lat=${userLocation.lat}&lon=${userLocation.lon}`, {
    headers: {
      "Authorization": `${localStorage.getItem('token')}`,
    }
  }),

  // 랜덤 문구 가져오기
  getSentence: () => api.get('/random', {
    headers: {
      "Authorization": `${localStorage.getItem('token')}`,
    }
  }),

  // 내 식물 가져오기
  getMyPlant: () => api.get('/myplant', {
    headers: {
      "Authorization": `${localStorage.getItem('token')}`,
    }
  }),

  // To-Do 리스트 가져오기
  getTodoList: () => api.get('/todo', {
    headers: {
      "Authorization": `${localStorage.getItem('token')}`,
    }
  }),

  // To-Do 완료하기
  todoCheck: (todoNo) => api.patch(`/todo/ok/${todoNo}`, {},{
    headers: {
      "Authorization": `${localStorage.getItem('token')}`,
    }
  }),

  // To-Do 취소하기
  todoUnCheck: (todoNo) => api.patch(`/todo/cancel/${todoNo}`, {},{
    headers: {
      "Authorization": `${localStorage.getItem('token')}`,
    }
  }),
  // 내 식물 
  getMyPlantPage: () => api.get('myplant/place', {
    headers: {
      "Authorization": `${localStorage.getItem('token')}`,
    }
  }),

}

// 탐색페이지 관련 API
export const searchAPI = {
  // 식물도감 필터
  plantFiltering: (d, page) => api.get(
    `/search-post/dictionary/planterior?keyword=&plantLevelCode=${d.plantLevelCode}&plantPlaceCode=${d.plantPlaceCode}&plantTypeCode=${d.plantTypeCode}&plantGrowthShapeCode=${d.plantGrowthShapeCode}&page=${page}`
    , {
    headers: {
      "Authorization": `${localStorage.getItem('token')}`,
    }
  }),
  // 플랜테리어 전체 조회
  getPlanteriorList: (page) => api.get(`/read-posts?postTypeCode=postType01&page=${page}`, {
    headers: {
      "Authorization": `${localStorage.getItem('token')}`,
    }
  }),
  // 플랜테리어 필터 조회
  planteriorFiltering: (placeCode, page) => api.get(`/read-posts?postTypeCode=postType01&plantPlaceCode=${placeCode}&page=${page}`, {
    headers: {
      "Authorization": `${localStorage.getItem('token')}`,
    }
  }),
  // 플랜테리어 게시글 작성
  writePlanteriorPost: (postdata) => api.post(`/write-post`, postdata, {
    headers: {
      "content-type": "multipart/form-data",
      "Authorization": `${localStorage.getItem('token')}`,
    }
  }),
  // 플랜테리어 게시글 수정
  editPlanteriorPost: (postdata, postId) => api.post(`/update-post/${postId}`, postdata, {
    headers: {
      "content-type": "multipart/form-data",
      "Authorization": `${localStorage.getItem('token')}`,
    }
  }),
  // 플랜테리어 게시글 삭제
  deletePlanteriorPost: (postId) => api.delete(`/delete-post/${postId}`, {
    headers: {
      "Authorization": `${localStorage.getItem('token')}`,
    }
  }),
  // 플랜테리어 게시글 좋아요
  likePlanteriorPost: (postId) => api.get(`like-post/${postId}`, {
    headers: {
      "Authorization": `${localStorage.getItem('token')}`,
    }
  }),
  // 플랜테리어 게시글 북마크
  bookMarkPlanteriorPost: (postId) => api.get(`bookmark-post/${postId}`, {
    headers: {
      "Authorization": `${localStorage.getItem('token')}`,
    }
  }),
  // 플랜테리어 댓글 작성
  writePlanteriorComment: (commentdata) => api.post(`/write-comment`, commentdata, {
    headers: {
      "Authorization": `${localStorage.getItem('token')}`,
    }
  }),
  // 플랜테리어 댓글 수정
  editPlanteriorComment: (commentdata) => api.put(`/update-comment`, commentdata, {
    headers: {
      "Authorization": `${localStorage.getItem('token')}`,
    }
  }),
  // 플랜테리어 댓글 삭제
  deletePlanteriorComment: (commentId) => api.delete(`/delete-comment/${commentId}`, {
    headers: {
      "Authorization": `${localStorage.getItem('token')}`,
    }
  }),
  // 플랜테리어 게시글 상세조회
  getPlanteriorDetail: (postId) => api.get(`/read-post/detail/${postId}`, {
    headers: {
      "Authorization": `${localStorage.getItem('token')}`,
    }
  }),
  // 추천 식물 조회
  getRecommend: () => api.get('/user/labeling/results', {
    headers: {
      "Authorization": `${localStorage.getItem('token')}`,
    }
  }),
  // 식물 전체 조회 (식물도감)
  getPlantDict: (page) => api.get(`/search-post/dictionary/planterior?keyword=&page=${page}`, {
    headers: {
      "Authorization": `${localStorage.getItem('token')}`,
    }
  }),
  // 탐색탭 키워드 검색 (전체)
  keywordSearching: (value) => api.get(`/search-post/integrate/planterior?keyword=${value}`, {
    headers: {
      "Authorization": `${localStorage.getItem('token')}`,
    }
  }),
  // 탐색탭 키워드 검색 (사진)
  keywordSearchingPhoto: (value, page) => api.get(`/search-post/photo/planterior?keyword=${value}&page=${page}`, {
    headers: {
      "Authorization": `${localStorage.getItem('token')}`,
    }
  }),
  // 탐색탭 키워드 검색 (플랜테리어 위치필터)
  // keywordSearchingPhotoPlace: (value, page) => api.get(`/search-post/photo/planterior?keyword=${value}&page={page}`, {
  //   headers: {
  //     "Authorization": `${localStorage.getItem('token')}`,
  //   }
  // }),
  // 탐색탭 키워드 검색 (식물도감)
  keywordSearchingPlant: (value, page) => api.get(`/search-post/dictionary/planterior?keyword=${value}&page=${page}`, {
    headers: {
      "Authorization": `${localStorage.getItem('token')}`,
    }
  }),

  //커뮤니티 관련 API

  //검색어로 전체 검색하기  (로그인)
  postSearching: (postTypeCode, keyword) => api.get(`/read-posts/community?postTypeCode=${postTypeCode}&keyword=${keyword}`,  
    {
      headers: {
        Authorization: ` ${localStorage.getItem('token')}`,
      }
    }
  ),
  //검색어로 전체 검색하기 (비로그인)
  postSearching_nonLogin: (postTypeCode, keyword) => api.get(`/non-login/read-posts/community?postTypeCode=${postTypeCode}&keyword=${keyword}`, 
  ),
}

// 기타 식물 관련
export const plantAPI = {
    // 식물 상세정보 조회 (식물카드)
    getPlantDetail: (plantNo) => api.get(`/plant/${plantNo}`, {
      headers: {
        "Authorization": `${localStorage.getItem('token')}`,
      }
    }),
    // 식물 북마크
    plantMarking: (plantNo) => api.get(`/plantBookMark/${plantNo}`, {
      headers: {
        "Authorization": `${localStorage.getItem('token')}`,
      }
    }),
    // 식물 추가
    addPlant: (plantData) => api.post('/myplant', plantData, {
      headers: {
        "content-type": "multipart/form-data",
        "Authorization": `${localStorage.getItem('token')}`,
      }
    }),
    // 장소 리스트 (필터목록용)
    getPlantPlace: () => api.get('/filter/plant-place', {
      headers: {
        "Authorization": `${localStorage.getItem('token')}`,
      }
    }),
}

// 달력 관련
export const calendarAPI = {
  // 체크된 항목 조회
  getChecked: (year, month, plantNo) => api.get(`/calendar/${year}${month}/${plantNo}`, {
    headers: {
      "Authorization": `${localStorage.getItem('token')}`,
    }
  }),
  // 개화 체크
  postBlooming: (plantNo, data) => api.post(`/blooming/${plantNo}`, data, {
    headers: {
      "Authorization": `${localStorage.getItem('token')}`,
    }
  }),
  // 개화 체크 해제
    deleteBlooming: (plantNo, date) => api.delete(`/blooming/${plantNo}/${date}`, {
    headers: {
      "Authorization": `${localStorage.getItem('token')}`,
    }
  }),
  // 개화 외 목록 체크
  checkCalendar: (plantNo, date, workType) => api.patch(`/calendar/${date}/${plantNo}/${workType}`, {}, {
    headers: {
      "Authorization": `${localStorage.getItem('token')}`,
    }
  }),
  // 개화 외 목록 체크해제
  unCheckCalendar: (plantNo, date, workType) => api.patch(`/calendar/cancel/${date}/${plantNo}/${workType}`, {}, {
    headers: {
      "Authorization": `${localStorage.getItem('token')}`,
    }
  }),
}


// 커뮤니티 페이지 관련 API
export const postAPI = { 

  
  //게시글 작성
  addPost: (formData) => api.post(`/write-post`, 
    formData, 
  {
    headers: {
      "content-type": "multipart/form-data",
      Authorization: `${localStorage.getItem('token')}`,
    }
  }),

  //모든 게시물 불러오기 (로그인)
  getAllPost_login: (page) => api.get(`/read-posts/community?page=${page}`,{
    headers: {
      Authorization:  ` ${localStorage.getItem('token')}`,
    }
  }),

  //모든 게시물 불러오기 (비로그인) 
  getAllPost_nonLogin: (page) => api.get(`/non-login/read-posts/community?page=${page}`),

  //필터링한 게시물 불러오기 (로그인)
  getFilteredPost_login: (postTypeCode, page) => api.get(`/read-posts/community?postTypeCode=${postTypeCode}&page=${page}`, {
    headers: {
      Authorization: ` ${localStorage.getItem('token')}`,
    }
  }),
  
  //필터링한 게시물 불러오기 (비로그인)
  getFilteredPost_nonLogin:(postTypeCode, page) => api.get(`/non-login/read-posts/community?postTypeCode=${postTypeCode}&page=${page}`),

  //게시글 상세 조회
  getDetailPost: (postId) => api.get(`/read-post/detail/${postId}`, {
    headers: {
      Authorization: ` ${localStorage.getItem('token')}`,
    }
  }
  ),

  //게시글 수정
  editPost: (formData, postId) => api.post(`/update-post/${postId}`, formData, {
    
    headers: {
      "content-type": "multipart/form-data",
      Authorization: ` ${localStorage.getItem('token')}`,
    }
  }),

  //게시글 삭제
  deletePost: (postId) => api.delete(`/delete-post/${postId}`,{
    headers: {
      Authorization: ` ${localStorage.getItem('token')}`,
    }
  }),

  //게시글 좋아요
  likePost: (postId) => api.get(`like-post/${postId}`, {
    headers: {
      Authorization: ` ${localStorage.getItem('token')}`,
    }
  }),

  //게시글 북마크
  bookmarkPost: (postId) => api.get(`bookmark-post/${postId}`, {
    headers: {
      Authorization: ` ${localStorage.getItem('token')}`,
    }
  }),

  //커뮤니티 댓글 작성
  addComment: (commentdata) => api.post(`/write-comment`,commentdata,
   {
    headers: {
      Authorization: ` ${localStorage.getItem('token')}`,
    }
  }),

  //커뮤니티 댓글 수정
  editComment: (editdata) => api.put(`/update-comment`, 
  editdata,
  {
    headers: {
      "Authorization": ` ${localStorage.getItem('token')}`,
    }
  }),

  //커뮤니티 댓글 삭제
  deleteComment: (commentId) => api.delete(`/delete-comment/${commentId}`, {
    headers: {
      "Authorization": ` ${localStorage.getItem('token')}`,
    }
  }),
}


export const myPageAPI = {

  //내 사진, 스크랩한 사진 리스트 (최대6장까지)
  getMyPhotoScrapPhotoList: () => api.get(`/mypage/post/planterior`,{
    headers: {
      Authorization: ` ${localStorage.getItem('token')}`,
    }
  }
  ),



  //내가 작성한 글 전체 리스트
  getMyPostList: (page) => api.get(`/mypage/bookmark/community?page=${page}`,{
    headers: {
      Authorization: ` ${localStorage.getItem('token')}`,
    }
  }
  ),
  //스크랩한 글 전체 리스트
  getScrapPostList: (page) => api.get(`/mypage/bookmark/post/community?page=${page}`,{
    headers: {
      Authorization: ` ${localStorage.getItem('token')}`,
    }
  }) ,

  //내 사진 전체 리스트
  getMyPhotoList: (page) => api.get(`/mypage/post?postTypeCode=postType01&page=${page}`, {
    headers:{
      Authorization: ` ${localStorage.getItem('token')}`,
    }
  }),
  //스크랩 사진 전체 리스트
  getScrapPhotoList: (page) => api.get(`/mypage/bookmark/post?postTypeCode=postType01&page=${page}`,{
    headers: {
      Authorization: ` ${localStorage.getItem('token')}`,
    }
  }
  ),
  
  //내 식물 리스트
  getMyPlantList: () => api.get(`/mypage/myplant`, {
    headers: {
      Authorization: ` ${localStorage.getItem('token')}`,
    }
  }),

  //스크랩한 식물 리스트 ( 최대6개까지)
  getScrapSixPlantList: () => api.get(`/mypage/bookmark/myplant`, {
    headers: {
      Authorization: ` ${localStorage.getItem('token')}`,
    }
  }),

  //스크랩 식물 리스트
  getScrapPlantList: () => api.get(`/mypage/bookmark/plant`,{
    headers: {
      Authorization: ` ${localStorage.getItem('token')}`,
    }
  }
  ),

  //내 식물 detail 가져오기
  getMyDetailPlant : (myPlantNo) => api.get(`/myplant/plant/${myPlantNo}`,
  {
    headers: {
      Authorization: ` ${localStorage.getItem('token')}`,
    }
  }),

  //내 식물 삭제 
  deleteMyPlant: (myPlantNo) => api.delete(`/myplant/${myPlantNo}`,
  {
    headers: {
      Authorization: ` ${localStorage.getItem('token')}`,
    }
  }),

  //내 식물 수정
  editMyPlant: (myPlantNo, formData) => api.post(`/myplant/update/${myPlantNo}`, 
    formData, 
    {
      headers: {
        "content-type": "multipart/form-data",
        Authorization: ` ${localStorage.getItem('token')}`,      
      }
    }
  ),
}