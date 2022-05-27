//Google Login
// const REACT_APP_GOOGLE_CLIENT_ID  = "202290447546-jpokgocv80dod7d1650e5nqum5riltdk.apps.googleusercontent.com";
const REACT_APP_GOOGLE_CLIENT_ID = "570518782974-jdus84o00bp52n37raodfb01gv79usad.apps.googleusercontent.com";
const REACT_APP_GOOGLE_CLIENT_SECURITY_PASSWORD = "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";

export const GOOGLE_OAUTH_REDIRECT_URI = "http://localhost:3000/auth/google/callback"
// export const GOOGLE_OAUTH_REDIRECT_URI = "https://chorok.kr/auth/google/callback"

export const GOOGLE_AUTH_URL = "https://accounts.google.com/o/oauth2/auth?client_id=" + 
                                REACT_APP_GOOGLE_CLIENT_ID + 
                                "&redirect_uri=" + GOOGLE_OAUTH_REDIRECT_URI +
                                "&scope=https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile" + 
                                "&response_type=token" + 
                                "&include_granted_scopes=true"