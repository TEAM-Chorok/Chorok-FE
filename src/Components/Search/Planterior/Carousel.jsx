import React from "react";
import styled from "styled-components";
import { Grid, Text } from "../../../Elements";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators as userActions } from "../../../Redux/Modules/User";
import { ContentBug, ContentLabeling, ContentShare, ContentSurvey } from "./CarouselContent";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Carousel = () => {
  const dispatch = useDispatch();
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    dispatch(userActions.isLoginDB());
  }, [])


  const settings = {
    // 무한 슬라이드
    infinite: true,
    // 화살표, 도트 제거
    arrows: false,
    speed: 1000,
    // 자동 슬라이드, 슬라이드 스피드
    autoplay: true,
    autoplaySpeed: 4000,
    // 한 번에 몇 개씩 넘기고 보여줄 것인지
    slidesToShow: 1,
    slidesToScroll: 1,
    // 마우스오버시 슬라이드 정지
    pauseOnHover: true,
  };


  return (
    <React.Fragment>
      <Track>
        <Slider {...settings}>
            <ContentLabeling />
            <ContentSurvey />
            <ContentBug />
            <ContentShare />
        </Slider>
      </Track>
    </React.Fragment>
  )
}

const Wrapper = styled.div`
  width: 100%;
`

const Track = styled.div`
  margin: 8px 0 12px 0;
  width: 100%;
`


export default Carousel;