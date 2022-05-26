import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { Text, Grid, Image } from '../../../Elements';
import { actionCreators as MyActions } from '../../../Redux/Modules/MyPage';
import { ReactComponent as FavoriteIcon} from "../../../Assets/img/likeBookmarkIcons/favorite.svg";
import { ReactComponent as FavoriteSelectedIcon} from '../../../Assets/img/likeBookmarkIcons/favorite_selected.svg';
import { ReactComponent as BookmarkIcon} from "../../../Assets/img/likeBookmarkIcons/Bookmark.svg";
import { ReactComponent as BookmarkSelectedIcon} from "../../../Assets/img/likeBookmarkIcons/Bookmark_selected.svg";
import { ReactComponent as CommentIcon } from "../../../Assets/img/likeBookmarkIcons/Comment.svg";
import MyPlant from '../MyPlants/MyPlant';

const ScrapPlantList = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const scrapPlants = useSelector(state => state.mypage?.scrapPlant?.content);
    console.log(scrapPlants);

    useEffect(() => {
        dispatch(MyActions.getScrapPlantListDB());
    },[]);

    return (
      <React.Fragment>
        <Grid padding="0px" width="100%">
  
          {scrapPlants?
            <Grid margin="0 0 40px 0" width="100%">
              {/* <Text bold size="large">거실 </Text> */}
              {/* <Text size="large" color="#0AAF42" bold>{scrapPlants?.pp04?.length}</Text> */}
              <GridBox>
                {scrapPlants.map((plant, idx) => {
                  return (
                    <MyPlant 
                      type="scrap"
                      key={idx}
                      plantNo={plant?.plantNo}
                      plant={plant?.plantName}
                      imgUrl={plant?.plantImgUrl? plant?.plantImgUrl : '/img/plantProfile.svg'} />
                  )
                })}
              </GridBox>
            </Grid>
            :
            <div></div>
          }
          </Grid>
      </React.Fragment>
    );
}
    
    
    const GridBox = styled.div`
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
    
      width: 100%;
    `
    

export default ScrapPlantList;
