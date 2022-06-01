;
// const REACT_APP_KAKAO_REDIRECT_URI =  "http://localhost:3000/auth/kakao/callback"; // local
const REACT_APP_KAKAO_REDIRECT_URI =  "https://chorok.kr/auth/kakao/callback"; // deploy
export const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.REACT_APP_KAKAO_REST_API_KEY}&redirect_uri=${REACT_APP_KAKAO_REDIRECT_URI}&response_type=code`;
