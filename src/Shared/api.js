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


// 채팅 API
// export const chatAPI = {
//   // 방 목록 가져오기
//   getChatRoom: () => api.get('/api/chat/rooms', {
//     headers: {
//       "Authorization": `Bearer ${sessionStorage.getItem('token')}`
//     }
//   }),
//   // 방 추가하기
//   addChatRoom: (room) => api.post('/api/chat/rooms', room, {
//     headers: {
//       "Authorization": `Bearer ${sessionStorage.getItem('token')}`,
//     }
//   }),
//   // 방 접속하기
//   enterRoom: (roomId) => api.get(`/api/chat/rooms/${roomId}`, {
//     headers: {
//       "Authorization": `Bearer ${sessionStorage.getItem('token')}`
//     }
//   }),
//   // 유저 초대하기
//   inviteUser: (roomid, username) => api.post(`/api/chat/invite`, { username: username, roomId: roomid }, {
//     headers: {
//       "Authorization": `Bearer ${sessionStorage.getItem('token')}`
//     }
//   }),
//   // 이전 메세지 가져오기
//   getMessage: (roomId) => api.get(`/api/chat/rooms/${roomId}/messages`, {
//     headers: {
//       "Authorization": `Bearer ${sessionStorage.getItem('token')}`
//     }
//   }),
//   // 방 퇴장하기
//   leaveRoom: (roomId) => api.delete(`api/chat/rooms/${roomId}`, {
//     headers: {
//       "Authorization": `Bearer ${sessionStorage.getItem('token')}`
//     }
//   }),
// }