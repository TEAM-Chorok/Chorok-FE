import React from "react";
import styled from "styled-components";
import { Button, Grid, Image, Text } from "../../Elements";


const SelectPlace = (props) => {

    return (
        <React.Fragment>
            <Text bold size="base">
                식물을 키울 공간을<br/>선택해주세요
            </Text>
            <GridWrapper>
                <Grid margin="10px auto" _onClick={() => {props.setPlace("pp04")}}>
                    <Image type="square" size="100px" borderRadius="8px" imgUrl="https://live.staticflickr.com/5443/9577425960_d454a18f96_c.jpg"/>
                    <Grid margin="8px auto">
                        <Text size="base">거실</Text>
                    </Grid>
                </Grid>
                <Grid margin="10px auto" _onClick={() => {props.setPlace("pp05")}}>
                    <Image type="square" size="100px" borderRadius="8px" imgUrl="https://i.pinimg.com/originals/97/39/51/9739513e3733828a4886b4f838aed517.jpg"/>
                    <Grid margin="8px auto">
                        <Text size="base">창가</Text>
                    </Grid>
                </Grid>
                <Grid margin="10px auto" _onClick={() => {props.setPlace("pp06")}}>
                    <Image type="square" size="100px" borderRadius="8px" imgUrl="https://cubicoon.com/wp-content/uploads/2022/02/upwk61823220-wikimedia-image.jpg"/>
                    <Grid margin="8px auto">
                        <Text size="base">베란다</Text>
                    </Grid>
                </Grid>
                <Grid margin="10px auto" _onClick={() => {props.setPlace("pp02")}}>
                    <Image type="square" size="100px" borderRadius="8px" imgUrl="https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/bs1371-image-kwvylouc.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=66dde176412cfb49bf87a79b58958505"/>
                    <Grid margin="8px auto">
                        <Text size="base">방 안</Text>
                    </Grid>
                </Grid>
                <Grid margin="10px auto" _onClick={() => {props.setPlace("pp03")}}>
                    <Image type="square" size="100px" borderRadius="8px" imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRXp1k780l_6KwO1ziLk4bKcD5HQEIankSsA&usqp=CAU"/>
                    <Grid margin="8px auto">
                        <Text size="base">화장실</Text>
                    </Grid>
                </Grid>
                <Grid margin="10px auto" _onClick={() => {props.setPlace("pp01")}}>
                    <Image type="square" size="100px" borderRadius="8px" imgUrl="https://live.staticflickr.com/5443/9577425960_d454a18f96_c.jpg"/>
                    <Grid margin="8px auto">
                        <Text size="base">통로</Text>
                    </Grid>
                </Grid>
            </GridWrapper>
            <Button type="basic" width="184px" _onClick={() => {props.setCompNum(1)}}>
                <Text size="base" color="#fff">다음</Text>
            </Button> 

        </React.Fragment>
    )
}

const GridWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    width: 100%;
`

export default SelectPlace;