import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { Grid, Image, Text } from "../../../Elements";
import PlantProfile from "../../share/etc/PlantProfile";


const AllResult = (props) => {
  const history = useHistory();

  const result = useSelector((state) => state.search.result);

  const openPlantCard = (plantNo) => {
    history.push(`/plant/${plantNo}`);
  }

  return (
    <React.Fragment>

      <Grid width="100%" padding="28px 0">
        <TitleBox>
          <Grid width="100%" margin="auto">
            <Text bold size="large">사진</Text>
          </Grid>
          <Text bold size="large" color="#0AAF42">{result?.plantriaCount}</Text>
          <Grid width="100%" />
          <Grid width="100%" _onClick={() => { props.setCompNum(1) }}>
            <Text size="small" color="#525252">더보기</Text>
          </Grid>
        </TitleBox>


        {result?.plantriaSearchList?.length > 0 ?
          <ImageBox>
            {result?.plantriaSearchList?.map((result, idx) => {
              return (
                <div key={result?.postId}>
                  <Grid margin="2px auto"
                    _onClick={() => { history.push(`/planterior/post/${result.postId}`); }}>
                    <Image type="square" size="104px" borderRadius="4px" imgUrl={result.postImgUrl}/>
                  </Grid>
                </div>
              )
            })}
          </ImageBox>
          :
          <Grid margin="12px">
            <Text size="base">검색 결과가 없습니다.</Text>
          </Grid>
        }


      </Grid>

      <Grid width="100%" padding="24px 0">
        <TitleBox2>
          <Grid width="100%" margin="auto">
            <Text bold size="large">식물도감</Text>
          </Grid>
          <Text bold size="large" color="#0AAF42">{result?.plantDictionaryCount}</Text>
          <Grid width="100%" />
          <Grid width="100%" _onClick={() => { props.setCompNum(2) }}>
            <Text size="small" color="#525252" >더보기</Text>
          </Grid>
        </TitleBox2>

        {result?.plantDictionaryList?.length > 0 ?
          <Grid width="100%">
            {result?.plantDictionaryList?.map((result, idx) => {
              return (
                <div key={result?.plantNo}>
                <Grid width="100%" margin="2px auto">
                  <PlantProfile list plant={result?.plantName} 
                    imgUrl={result?.plantImgUrl} 
                    _onClick={() => {openPlantCard(result?.plantNo)}}/>
                </Grid>
                </div>
              )
            })}
          </Grid>
          :
          <Grid margin="12px">
            <Text size="base">검색 결과가 없습니다.</Text>
          </Grid>
        }


      </Grid>

    </React.Fragment>
  )
}

const ImageBox = styled.div`
  display: grid;
  width: 100%;
  margin: auto;
  padding: 12px 0;
  grid-template-columns: 1fr 1fr 1fr;
`
const TitleBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 5fr 1fr;
  width: 100%;
  margin: auto;
`

const TitleBox2 = styled.div`
  display: grid;
  grid-template-columns: 1.7fr 1fr 4.3fr 1fr;
  width: 100%;
  margin: auto;
`

export default AllResult;