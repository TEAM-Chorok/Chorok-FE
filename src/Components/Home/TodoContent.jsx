import React from "react";
import styled from "styled-components";
import { Grid, Image, Text } from "../../Elements";
import TodoContentBlock from "./TodoContentBlock";
import TodoProfile from "./TodoProfile";
import { actionCreators as mainActions } from "../../Redux/Modules/Main";
import { useDispatch, useSelector } from "react-redux";
import { ReactComponent as EventItem } from "../../Assets/img/eventimg/eventItem.svg"
import { useHistory } from "react-router-dom";
import { ReactComponent as Arrow } from "../../Assets/img/Icons/arrowToRight.svg"

// 투두페이지 할 일 목록 
const TodoContent = () => {
  const is_login = localStorage.getItem('token') ? true : false;
  const history = useHistory();
  const dispatch = useDispatch();
  const sentence = useSelector((state) => state.main.sentence);
  const todoList = useSelector((state) => state?.main?.todo);
  const [plantNo, setPlantNo] = React.useState(null);

  const scrollRef = React.useRef([]);
  const [currentTab, setCurrentTab] = React.useState();

  const scroll = (index) => {
    scrollRef.current[index].scrollIntoView();
    setCurrentTab(scrollRef.current[index]);
  }

  React.useEffect(() => {
    if (is_login) {
      dispatch(mainActions.getSentenceDB());
      dispatch(mainActions.getMyPlantDB());
      dispatch(mainActions.getTodoListDB());
    }
  }, [])


  return (
    <React.Fragment>
      <Grid width="100%" bg="#fff">
        <TitleBox>
          <Grid width="100%" margin="16px 0" >
            <SentenceBox>
              <p className="sentence">
                {sentence}
              </p>
            </SentenceBox>
          </Grid>
          <Grid width="100%" margin="-10px 0 16px 0">

            <TodoProfile
              plantNo={plantNo}
              setPlantNo={setPlantNo}
              scroll={scroll}
            />

          </Grid>
        </TitleBox>

        <Wrapper bg={todoList?.length ? "#F7F8FA" : "#fff"}>
          <Grid margin="-8px auto 16px auto" width="100%">
            <Grid width="100%">
              <EventBannerBox onClick={() => { history.push('/event'); }}>
                <EventItem className="item" />
              </EventBannerBox>
            </Grid>
          </Grid>
          {todoList?.length ?
            <>
              {todoList?.map((plant, idx) => {
                return (
                  <TodoBox 
                    key={plant.myPlantNo} 
                    id={plant?.myPlantNo}
                    ref={el => (scrollRef.current[idx] = el)}>
                    <Grid is_flex margin="8px 0" align="center">
                      <Image type="circle" filter="drop-shadow(0px 3px 3px rgba(0, 0, 0, 0.12))" size="32px" imgUrl={plant.myPlantImgUrl ? plant.myPlantImgUrl : '/img/nonImageIcons/nonImagePlantProfileSmall.svg'} />
                      <GridRowBox>
                        <Text size="small">{plant.myPlantName}</Text>
                        <Text size="xsmall" weight="400" color="#525252">{plant.plantName} · {plant.myPlantPlace}</Text>
                      </GridRowBox>
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
                              img={'/img/todoIcons/' + todo.workType + '.svg'}>
                              <Text size="base">{todo.workType}</Text><br />
                              {todo.days === 0 && todo.status === true ?
                                <Text size="xsmall">작업을 완료했어요!</Text> :
                                <div>
                                  {todo.days === 0 ? <Text size="xsmall">{plant.myPlantName}(이)의 첫 {todo.workType}!</Text> :
                                    <Text size="xsmall" weight="400">마지막 작업 이후 {todo.days}일 지났어요.</Text>}
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
            </> :
            <>
              <LinkBox onClick={() => { history.push('/labeling') }}>
                <Grid width="100%" padding="13px 16px">
                  <Text size="xsmall" color="#24A148">어떤 식물을 키울 지 고민된다면</Text><br />
                  <Text size="large">나와 맞는 식물 찾으러 가기</Text>
                  <Arrow className="arrow" />
                </Grid>
              </LinkBox>
              {is_login ?
                <LinkBox onClick={() => { history.push('/plant') }}>
                  <Grid width="100%" padding="13px 16px">
                    <Text size="xsmall" color="#24A148">식물을 키우고 있다면</Text><br />
                    <Text size="large">식물 추가하기</Text>
                    <Arrow className="arrow" />
                  </Grid>
                </LinkBox>
                : null}
            </>
          }
          <Grid height="100px" />
        </Wrapper>
      </Grid>
    </React.Fragment>
  );
}


const TitleBox = styled.div`
  padding: 0 0 0 16px;
  border-bottom: 1px solid #E0E0E0;
  background: #fff;
`

const Wrapper = styled.div`
  box-sizing: border-box;
  padding: 28px 16px;

  width: 100%;
  min-height: 70vh;

  background: ${(props) => props.bg};
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

const LinkBox = styled.div`
  position:relative;
  display: flex;
  align-items: center;

  margin: 8px auto;

  width: 100%;
  height: 76px;

  border-radius: 16px;
  
  background: #F7F8FA;
  .arrow {
    position: absolute;
    right: 16px;
    width: 10px;
    height: 10px;
    top: 32px;
  }
`

const GridRowBox = styled.div`
  display: grid;
  grid-template-row: 1fr 1fr;
  align-items: center;
  text-align:left;
  margin: 0 8px;
`

const EventBannerBox = styled.div`
  position: relative;
  
  width: 100%;
  height: 109px;
  display: flex;
  border-radius: 16px;

  background-image: url('/img/event/eventBackground.svg');
  background-size: cover;
  background-position: center;

  ${'' /* filter: drop-shadow(0px 4px 8px rgba(0, 0, 0, 0.16)); */}
  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.16);
  .item {
    position: absolute;
    bottom: 0;
    margin: auto;

  }
`

export default TodoContent;