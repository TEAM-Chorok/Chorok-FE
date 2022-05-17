import React from "react";
import styled from "styled-components";
import { Button, Grid, Image} from "../../Elements";
import { BiCircle, BiCheckCircle } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { actionCreators as mainActions } from "../../Redux/Modules/Main";



// 투두페이지 할 일 목록 

const TodoContentBlock = (props) => {
  const { children, img, num, status } = props;

  const dispatch = useDispatch();

  // 투두 컨텐츠 좌측 체크 표시용 체크/체크해제 관리
  const [ checked, setChecked ] = React.useState(status);
  const [ unChecked, setUnChecked ] = React.useState(false);
  
  const check = () => {
    if(checked === false) {
      setChecked(true);
      setUnChecked(false);
      dispatch(mainActions.todoCheckDB(num));
    } else {
      setChecked(false);
      setUnChecked(true);
      dispatch(mainActions.todoUnCheckDB(num));
    }
  }
  
  return (
    <React.Fragment>
      <ContentBox checked={checked}>
        <Grid>
          <RelativeBox>
            <Image type="circle" size="56px" imgUrl={img} />
            <AbsoluteBox>
              <Image checked={checked} unChecked={unChecked} type="checkedcircle" size="56px" imgUrl="img/todoIcons/complete.svg" />
            </AbsoluteBox>
          </RelativeBox>
        </Grid>
        <Grid margin="0 10px 0 20px" width="100%">
          {children}
        </Grid>
        <Grid>
          <Button type="tran" size="20px" _onClick={() => { check(); }}>
            {checked? 
              <BiCheckCircle size="20px" color="#0AAF42"/> :
              <BiCircle size="20px" color="#C6C6C6"/>}
          </Button>
        </Grid>
      </ContentBox>


    </React.Fragment>
  );
}

const ContentBox = styled.div`
  display: flex;
  align-items: center;
  box-sizing: border-box;
  
  margin: 5px 0;
  padding: 12px 16px;

  width: 100%;
  height: 84px;
  
  border-radius: 15px;

  background: #fff;
`;

const RelativeBox = styled.div`
  position: relative;

  align-items: center;
  justify-content: center;
  text-align:center;


  width: fit-content;
  height: fit-content;
`

const AbsoluteBox = styled.div`
  position: absolute;

  margin: auto;

  width: 100%;
  height: 100%;
  
  align-items: center;
  justify-content: center;
  text-align:center;


  top: 0;
  left: 0;
`



export default TodoContentBlock;