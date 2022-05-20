import React from 'react';
import { Alert, GeneralHeader, PlantCardFeed, PlantCardProfile } from '../../Components';
import { Button, Container, Grid, Text } from '../../Elements';
import { useParams, useHistory } from 'react-router-dom'
import styled from 'styled-components';
import { ReactComponent as BookMarkIcon } from '../../Assets/img/likeBookmarkIcons/Bookmark.svg'
import Alert2 from '../../Components/Alert2';



// 식물카드 페이지

const PlantCard = () => {
  const history = useHistory();
  const plantNo = useParams().plantname;


  const [open, setOpen] = React.useState(false);
  const [checked, setChecked] = React.useState(false);

  const check = () => {
    if (checked === true) {
      setChecked(false);
    } else {
      setChecked(true);
    }

  }

  React.useEffect(() => {
    if(open) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "hidden";
    }
  }, [open])



  return (
    <React.Fragment>
      <Wrapper open={open}>
        <HeaderBox>
          <GeneralHeader />
          {checked ?
            <BookMarkIcon
              className='bookmark'
              fill="#6FDC8C"
              stroke="#0AAF42"
              onClick={check}
            />
            :
            <BookMarkIcon
              className='bookmark'
              fill="none"
              stroke="#393939"
              onClick={check}
            />
          }
        </HeaderBox>

        <Grid width="100%" bg="#F7F8FA">

          <PlantCardProfile />
          <PlantCardFeed />

          <Button type="longfloat" _onClick={() => { setOpen(true); }}>
            <Text size="base" color="#fff">내 식물에 추가하기</Text>
          </Button>


          <Alert2 open={open} setOpen={setOpen} btn1="아니오" btn2="네" url={`/add/${plantNo}`}>
            <Text bold size="small">
              내 식물에 <br /> 추가하시겠습니까?
            </Text>
          </Alert2>

        </Grid>
      </Wrapper>
    </React.Fragment>
  );
}


const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow: ${(props) => props.open? "hidden" : "auto" };
`

const HeaderBox = styled.div`
  position: sticky;
  top: 0;

  padding: 0 16px;

  height: 40px;

  background: #fff;

  .bookmark {
    position: absolute;
    top: 8px;
    right: 8px;
  }
`

export default PlantCard;