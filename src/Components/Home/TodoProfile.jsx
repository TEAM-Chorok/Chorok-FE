import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { Grid } from "../../Elements";
import PlantProfile from "../share/etc/PlantProfile";
import XdragScroll from "../share/etc/XdragScroll";


// 투두페이지 상단 내 식물 원형 프로필 

const TodoProfile = (props) => {
  const is_login = localStorage.getItem('token') ? true : false;
  const history = useHistory();

  const myPlant = useSelector((state) => state?.main?.myplant);
  const [unCheck, setUnCheck] = React.useState(true);
  // 식물 추가 flow로 
  const openAddPlant = () => {
    history.push('/plant');
  };


  return (
    <React.Fragment>
      {/* <ProfileBox> */}
      <XdragScroll>

        <Grid is_flex>
          <PlantProfile 
            checked={unCheck} 
            name="전체" 
            imgUrl="/img/todoIcons/all.svg" 
            _onClick={() => {
              props.setPlantNo(null);
              setUnCheck(true);
            }}
            />

        {myPlant?.map((plant, idx) => {
          return ( 
            <a href={'#'+plant.myPlantNo} key={plant?.myPlantNo} >
            <PlantProfile
              checked={plant?.myPlantNo === props.plantNo? true : false}
              name={plant?.myPlantName.length<6? plant.myPlantName : plant.myPlantName.slice(0,4)+'...'} 
              plant={plant.plantName.length < 6? plant.plantName : plant.plantName.slice(0, 5)+'...'} 
              imgUrl={plant.myPlantImgUrl? plant.myPlantImgUrl : "/img/nonImageIcons/nonImagePlantProfile.svg" }
              _onClick={() => {
                props.setPlantNo(plant.myPlantNo);
                setUnCheck(false);
              }}
              />
            </a>
          );
        })}
        {is_login? 
          <PlantProfile imgUrl="/img/todoIcons/plus.svg" _onClick={openAddPlant}/>
        : null }
        </Grid>

      </XdragScroll>
      {/* </ProfileBox> */}

    </React.Fragment>
  );
}


const ProfileBox = styled.div`
    box-sizing: border-box;
    
    width: 100%;
    height: 108px;

    overflow-x: scroll;

    -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  
  z-index: 100;
&::-webkit-scrollbar {
  display: none; /* Chrome, Safari, Opera*/
}
`


export default TodoProfile;