;
// const REACT_APP_KAKAO_REDIRECT_URI =  "http://localhost:3000/auth/kakao/callback"; 
const REACT_APP_KAKAO_REDIRECT_URI =  "https://chorok.kr/auth/kakao/callback";
// const REACT_APP_KAKAO_REDIRECT_URI =  "http://chorok-test.s3-website.ap-northeast-2.amazonaws.com/auth/kakao/callback"; 

export const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.REACT_APP_KAKAO_REST_API_KEY}&redirect_uri=${REACT_APP_KAKAO_REDIRECT_URI}&response_type=code`;
