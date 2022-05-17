  export const idCheck = (username) => {
    let emailRegEx = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;

    return emailRegEx.test(username);
  }
  //email& 비밀번호 정규식  
 
  export const pwdCheck = (password) => {
    let passwordRegEx = 
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,20}$/
    if(password.match(passwordRegEx)===null) {
      return false;
    }else{
      return true;
    }
  }
  
