import React from 'react';
import { Alert2, GeneralHeader, PlantCardFeed, PlantCardProfile } from '../../Components';
import { Button, Grid, Text } from '../../Elements';
import { useParams, useHistory } from 'react-router-dom'
import styled from 'styled-components';
import { ReactComponent as BookMarkIcon } from '../../Assets/img/likeBookmarkIcons/Bookmark.svg'
import { useDispatch, useSelector } from 'react-redux';
import { actionCreators as plantActions } from '../../Redux/Modules/Plant';

// 식물카드 페이지

const PlantCard = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const plantNo = useParams().plantname;
  const plantName = useSelector((state) => state.plant?.plantData?.plantName);
  const bookmark = useSelector((state) => state.plant?.plantData?.plantBookMark);

  const [open, setOpen] = React.useState(false);
  const [checked, setChecked] = React.useState(false);

  const check = () => {
    if (checked === true) {
      setChecked(false);
      dispatch(plantActions.plantMarkingDB(plantNo));
    } else {
      setChecked(true);
      dispatch(plantActions.plantMarkingDB(plantNo));
    }
  }

  React.useEffect(() => {
    if (open) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "hidden";
    }
  }, [open])



  return (
    <React.Fragment>
      <Wrapper open={open}>

        <HeaderBox>
          {/* <GeneralHeader title="식물카드" size="base" /> */}
          <GeneralHeader title={plantName} size="base" />
          {bookmark ?
            <BookMarkIcon
              className='bookmark'
              fill="#0AAF42"
              stroke="#0AAF42"
              onClick={check}
            />
            :
            <BookMarkIcon
              className='bookmark'
              fill="none"
              stroke="#6F6F6F"
              onClick={check}
            />
          }
        </HeaderBox>

        <Grid width="100%" bg="#F7F8FA">

          <PlantCardProfile />
          <PlantCardFeed />

          <FloatBox>
            <Grid is_flex margin="auto" width="100%" padding="0 16px">
              <Grid width="40%" padding="0 4px 0 0">
                <Button type="square" color="#E0E0E0" _onClick={() => { history.push({
                  pathname: '/search',
                  state: {searchTabDisplay: 1},
                }); }}>
                  <Text size="base" color="#fff">닫기</Text>
                </Button>
              </Grid>
              <Grid width="100%" padding="0 0 0 4px">
                <Button type="square" _onClick={() => { setOpen(true); }}>
                  <Text size="base" color="#fff">내 식물에 추가하기</Text>
                </Button>
              </Grid>
            </Grid>
          </FloatBox>

          <Alert2 open={open} setOpen={setOpen} btn1="아니오" btn2="네" url={`/add/${plantNo}`}>
            <Text bold size="small">
              내 식물에 <br /> 추가하시겠습니까?
            </Text>
          </Alert2>

          <Grid height="120px" />
        </Grid>
      </Wrapper>
    </React.Fragment>
  );
}


const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow: ${(props) => props.open ? "hidden" : "auto"};
`

const HeaderBox = styled.div`
  position: sticky;
  top: 0;
  border-bottom: 1px solid #E0E0E0;

  .bookmark {
    position: absolute;
    top: 12px;
    right: 16px;
  }
`

const FloatBox = styled.div`
  width: 100%;
  position: fixed;
  bottom: 76px;
`

export default PlantCard;