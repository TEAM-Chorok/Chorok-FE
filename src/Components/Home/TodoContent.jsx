import React from "react";
import styled from "styled-components";
import { Grid, Image, Text } from "../../Elements";
import TodoContentBlock from "./TodoContentBlock";
import TodoProfile from "./TodoProfile";
import { actionCreators as mainActions } from "../../Redux/Modules/Main";
import { useDispatch, useSelector } from "react-redux";

// 투두페이지 할 일 목록 
const TodoContent = () => {

  const dispatch = useDispatch();
  const sentence = useSelector((state) => state.main.sentence);
  const todoList = useSelector((state) => state?.main?.todo);

  const [plantNo, setPlantNo] = React.useState(null);

  React.useEffect(() => {
    dispatch(mainActions.getSentenceDB());
    dispatch(mainActions.getMyPlantDB());
    dispatch(mainActions.getTodoListDB());
  }, [])
  
  
  return (
    <React.Fragment>
      <Grid width="100%" bg="#fff">
        <TitleBox>
          <Grid width="100%" margin="20px 0" >
            <SentenceBox>
            
              <p className="sentence">
              윤지님, 날이 너무 좋네요 ☀️ 
오늘은 잎을 닦아볼까요?
              </p>
            </SentenceBox>
          </Grid>
          <Grid width="100%" margin="-15px 0 16px 0">
            <TodoProfile plantNo={plantNo} setPlantNo={setPlantNo} />
          </Grid>
        </TitleBox>

        <Wrapper>

          {todoList?.map((plant, idx) => {
            return (
              <TodoBox key={plant.myPlantNo}>
                <Grid is_flex margin="0 5px" align="center">
                  <Image type="circle" size="18px" imgUrl={plant.myPlantImgUrl} />
                  <Text bold size="large" margin="0 8px">{plant.myPlantName}</Text>
                  <Text size="small" color="#525252" margin="0">{plant.plantName} · {plant.myPlantPlace}</Text>
                </Grid>
                {!plant.todos.length ?
                  <ContentBox>
                    <Text bold size="small" margin="auto">{plant.myPlantName}(이)는 오늘 쉬고 싶어요😴</Text>
                  </ContentBox>
                  :
                  <Grid margin="5px 0" width="100%">
                    {plant?.todos?.map((todo, idx) => {
                      return (
                        <TodoContentBlock 
                          key={todo.todoNo}
                          num={todo.todoNo}
                          status={todo?.status}
                          img={'img/todoIcons/' + todo.workType + '.svg'}>
                          <Text size="base">{todo.workType}</Text><br />
                          {todo.days === 0 && todo.status === true ?
                            <Text size="xsmall">작업을 완료했어요!</Text> :
                            <div>
                              {todo.days === 0 ? <Text size="xsmall">{plant.myPlantName}(이)의 첫 {todo.workType}!</Text> :
                                <Text size="xsmall">마지막 작업 이후 {todo.days}일 지났어요.</Text>}
                            </div>
                          }
                        </TodoContentBlock>
                      )
                    })}
                  </Grid>
                }
              </TodoBox>
            )
          })}
          <Grid height="100px" />
        </Wrapper>
      </Grid>
    </React.Fragment>
  );
}
const TitleBox = styled.div`
  padding: 0 16px 0 16px;
  border-bottom: 1px solid #E0E0E0;
  background: #fff;
`

const Wrapper = styled.div`
  box-sizing: border-box;
  padding: 28px 16px;

  width: 100%;

  background: #F7F8FA;
`

const TodoBox = styled.div`
  box-sizing: border-box;
  margin-bottom: 28px;
`;

const SentenceBox = styled.div`
  margin: 4px;
  width: 210px;
  word-break: keep-all;
  .sentence{
    font-family: ;
    font-size: 18px;
    line-height: 28px;
    font-weight: 700;
  }
`

const ContentBox = styled.div`
  display: flex;
  align-items: center;
  box-sizing: border-box;
  
  margin: 5px 0;
  padding: 12px 16px;

  width: 100%;
  height: 50px;
  
  border-radius: 15px;

  background: #fff;
`;


export default TodoContent;