import React, {useRef} from 'react';
import styled from 'styled-components';
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import { Input, Grid, Image} from '../../../Elements/index';
import { useHistory } from "react-router-dom";
import { useEffect } from 'react';



const EditPlantBody = () => {
    const history = useHistory();
    const [profileImg, setProfileImg] = React.useState("가져오는이미지.jpeg");
    const [previewImg, setPreviewImg] = React.useState("sample.jpeg");
    const [nickname, setNickname] = React.useState("가져오는 nickname");
    const [place, setPlace] = React.useState("가져오는 place");
    const [btnAble, setBtnAble] = React.useState(true);

    //이미지 미리보기 부분 클릭시 input클릭되게 연동
    const profileImgRef = useRef("");
    const handleClick = () => {
        profileImgRef.current.click();
    }
    useEffect(() => {
        if(profileImg !== "" && previewImg !== "" && nickname !== "" && place !== "") {
            setBtnAble(false);
        }
    }, []);

    // Base64로 인코딩하여 미리보기 이미지 출력
    const reader = new FileReader();
    const encodeFileToBase64 = (fileBlob) => {
        reader.readAsDataURL(fileBlob);
        return new Promise((reseolve) => {
        reader.onload = () => {
            setPreviewImg(reader.result);
        }
        })
    }

    return (
        
        <React.Fragment>
            <Grid padding="40px 0px" margin="0px auto" 
                _onClick={handleClick}>
                    {profileImg && (
                <Image
                    type="square"  
                    imgUrl={previewImg}
                    alt="preview-img"
                    size="150px" borderRadius="10px"/>
              )}
                <input ref = {profileImgRef} 
                style={{display:"none"}} type="file"
                onChange={(e)=>{setProfileImg(e.target.value); 
                    encodeFileToBase64(e.target.files[0]);}} />
            </Grid>
            <Grid width="100%">
                <label htmlFor='nickname'>닉네임</label>
                <Input id="nickname" defaultValue="동동이" width="100%" height="53px"/>
                <div><label htmlFor='place'>공간</label></div>
                
                <Select id="place" defaultChecked="">
                    <option value="">--공간--</option>
                    <option value="거실">거실</option>
                    <option value="베란다">베란다</option>
                    <option value="방안">방안</option>
                    <option value="통로">통로</option>
                    <option value="창가">창가</option>
                    <option value="화장실">화장실</option>
                    <option value="야외">야외</option>
                </Select>
            </Grid>
            <Grid margin="120px auto">
                <Button disabled={btnAble}>저장하기</Button>
            </Grid>
        </React.Fragment>
    )
}
const Select = styled.select`
    width: 100%;
    height: 53px;
    border-radius: 10px;
    margin: 10px 0px;
    padding: 0px 10px;
`
const Button = styled.button`
    border-radius: 30px;
    padding: 0.7em 4em;
    border: none;
    width: fit-content;
    font-size: 16px;
    height: fit-content;
    color: #878D96;
    background-color: #DDE1E6;
`
export default EditPlantBody;
