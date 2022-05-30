//Google Login

export const GOOGLE_OAUTH_REDIRECT_URI = "https://chorok.kr/auth/google/callback"

export const GOOGLE_AUTH_URL = "https://accounts.google.com/o/oauth2/auth?client_id=" + 
                                process.env.REACT_APP_GOOGLE_CLIENT_ID + 
                                "&redirect_uri=" + process.env.GOOGLE_OAUTH_REDIRECT_URI +
                                "&scope=https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile" + 
                                "&response_type=token" + 
                                "&include_granted_scopes=true"