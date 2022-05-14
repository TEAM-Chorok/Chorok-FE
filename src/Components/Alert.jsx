import React from "react";
import styled from "styled-components";
import Modal from "react-modal";
import { Button, Container, Grid, Text } from "../Elements";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";



// modal alert창 컴포넌트입니다~! 
// 내용에 맞춰 높이가 늘어납니다! >.<
//
// 사용방법 
// 1. 상위 컴포넌트에서 
//    모달창이 열리고 닫히는 boolean값을 관리할 state를 정의합니다!
//    const [open, setOpen] = React.useState(false);
//
// 2. 모달창을 열 버튼을 만들어주고
// 3. 다음처럼 호출해주세요! 
//    return (
//       <React.Fragment>
//         <Container>
//           <Button type="longfloat" _onClick={() => {setOpen(true);}}>모달창 열기 버튼</Button>
//           <Alert open={open} setOpen={setOpen} btn1="아니오" btn2="네" url="/home">
//             <Text bold wordbreak size="small">
//              내 식물에<br/>추가하시겠습니까?
//             </Text>
//           </Alert> 
//
// 궁금하신 부분은 유나에게 문의해주세요~!! >.<


const Alert = (props) => {

  const history = useHistory();

  // 모달에 띄울 내용, 버튼1(모달 닫힘), 버튼2, 버튼2를 눌렀을 때 이동할 경로
  const { children, btn1, btn2, url } = props;

  // 모달 열릴 경우 스크롤 방지
  React.useEffect(() => {
    if (props.open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
  }, [props.open])

  if(props.onebutton) {
    return(
      <React.Fragment>
      <Modal
        isOpen={props.open}
        ariaHideApp={false}
        onRequestClose={() => props.setOpen(false)} 
        preventScroll={true}
        style={{
          overlay: {
            position: 'fixed',
            top: 0, left: 0, right: 0, bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0)'
          },
          content: {
            position: 'absolute',
            boxSizing: 'border-box',
            margin: 'auto',
            width: '260px', height: 'fit-content',
            background: '#fff',
            overflow: 'auto',
            WebkitOverflowScrolling: 'touch',
            border: 'none',
            borderRadius: '30px',
            boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.15), 0 6px 20px 0 rgba(0, 0, 0, 0.2)',
            outline: 'none',
          }
        }}>
          <ContentBox>
            {children}
          </ContentBox>
          <OneButtonBox>
            <Grid margin="auto" _onClick={() => { props.setOpen(false); }}>
              <Button type="tran">
                <Text size="small">{btn1}</Text>
              </Button>
            </Grid>
          </OneButtonBox>
      </Modal>
    </React.Fragment>
    )
  }

  return (
    <React.Fragment>
      <Container>

      <Modal
        isOpen={props.open}
        ariaHideApp={false}
        onRequestClose={() => props.setOpen(false)} 
        preventScroll={true}
        style={{
          overlay: {
            position: 'fixed',
            top: 0, left: 0, right: 0, bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0)'
          },
          content: {
            position: 'absolute',
            bottom: '50%',
            boxSizing: 'border-box',
            margin: 'auto',
            width: '260px', height: 'fit-content',
            background: '#fff',
            overflow: 'auto',
            WebkitOverflowScrolling: 'touch',
            border: 'none',
            borderRadius: '30px',
            boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.15), 0 6px 20px 0 rgba(0, 0, 0, 0.2)',
            outline: 'none',
          }
        }}>
          <ContentBox>
            {children}
          </ContentBox>
          <ButtonBox>
            <Grid margin="auto" _onClick={() => {props.setOpen(false);}}>
              <Button type="tran">
                <Text size="small">{btn1}</Text>
              </Button>
            </Grid>
            <Grid margin="auto" _onClick={() => {history.push(`${url}`)}}>
              <Button type="tran">
                <Text size="small">{btn2}</Text>
              </Button>
            </Grid>
          </ButtonBox>
      </Modal>
      </Container>
    </React.Fragment>
  )
}

Alert.defaultProps = {
  children: "Alert",
}


const ContentBox = styled.div`
  justify-content: center;
  margin: auto;

  padding: 30px 0 52px 0 ;

  text-align: center;
`
const ButtonBox = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 32px;

  margin: auto;

  width: 200px;

  display: grid;
  grid-template-columns: 1fr 1fr;
`

const OneButtonBox = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 32px;

  margin: auto;
  width: 200px;
`

export default Alert;