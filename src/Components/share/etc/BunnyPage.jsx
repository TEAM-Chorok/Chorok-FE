import React from "react";
import { Button, Container, Grid, Permit, Text } from "../../../Elements";
import { ReactComponent as Bunny } from "../../../Assets/img/etc/rabbit.svg"
import styled from "styled-components";
import emailjs from '@emailjs/browser';
import Alert2 from "../modal/Alert2";
import { useHistory } from "react-router-dom";

// open api test components
const BunnyPage = () => {
  const form = React.useRef();
  const history = useHistory();
  const userId = localStorage.getItem('nickname');
  
  const [open, setOpen] = React.useState(false);
  const [message, setMessage] = React.useState();

  const nameRef = React.useRef();
  const emailRef = React.useRef();

  const sendEmail = (e) => {
    if(nameRef.current.value === "") {
      setMessage("이름을 입력해주세요!")
      setOpen(true);
    } else if(emailRef.current.value === "") {
      setMessage("이메일 주소를 입력해주세요!")
      setOpen(true);
    }

    e.preventDefault();

    emailjs.sendForm('chorok', 'template_tfpybt5', form.current, 'ubROo8DlGiM8Exu6H')
      .then((result) => {
        setMessage("참여해주셔서 감사합니다!");
        setOpen(true);
        history.push('/home')
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <React.Fragment>
      <Permit>
        <Container>
          <Grid margin="15vh auto" width="100%">
            <Grid margin="auto">
              <Text size="h5">찾아버리셨군요...?</Text>
            </Grid>
            <Grid margin="24px auto" width="100%">
              <Grid margin="auto">
                <Bunny />
              </Grid>
              <TextBox>
                <Text>
                  아래의 항목을 작성해 메일을 보내주세요!<br />
                  추첨을 통해 선물을 드립니다!<br /><br />
                </Text>
              </TextBox>
              <Grid width="100%" padding="0 16px">
                <FormBox>
                  <form ref={form} onSubmit={sendEmail}>
                    <label>이름</label>
                    <input type="text" name="user_name" className="input" ref={nameRef}/>
                    <label>이메일 주소</label>
                    <input type="email" name="user_email" className="input" ref={emailRef}/>
                    <label>코드</label>
                    <input name="message" className="input" defaultValue="WITH_CHOROK_EVERYDAY" />
                    <input type="submit" value="메일 보내기" className="button" />
                  </form>
                  <SmallText>
                    <Text size="xxsmall" color="#6F6F6F">
                      개인정보는 이벤트 종료 및 선물 전달 직후 파기됩니다
                    </Text>
                  </SmallText>
                </FormBox>
              </Grid>
            </Grid>
            <Grid height="50px" />
          </Grid>
        </Container>
        <Alert2 open={open} setOpen={setOpen} btn1="확인">
          {message}
        </Alert2>
      </Permit>
    </React.Fragment>
  );
}

const TextBox = styled.div`
  box-sizing: border-box;
  margin: 20px auto;
  width: 100%;
  font-size: 16px;
  font-weight: 500;
  letter-spacing: 0.15px;
  word-break: keep-all;
  text-align: center;

`

const SmallText = styled.div`
  position: absolute;
  margin: -24px 0;
  right: 34px;
`

const FormBox = styled.div`
  width: 100%;
  .input{
    margin: 2px 0 12px 0;
    box-sizing: border-box;
    padding: 8px;
    width: 100%;
    height: 36px;
    border: 1px solid #ddd;
    border-radius: 4px;
    outline: none;
  }
  .button{
    box-sizing:border-box;
    margin: 20px 0;
    width: 100%;
    height: 48px;
    border: none;
    outline: none;
    border-radius: 8px;
    color: #fff;
    font-size: 16px;
    font-weight: 500;
    background-color: #0AAF42;
  }
`


export default BunnyPage;