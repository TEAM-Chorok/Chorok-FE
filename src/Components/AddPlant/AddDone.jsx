import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { Button, Grid, Image, Text } from "../../Elements";


const AddDone = () => {

    const history = useHistory();

    return (
        <React.Fragment>
            <Grid margin="190px auto" width="100%" align="center">
                <Text size="base">
                    식물이 추가되었습니다👍<br />
                    추가된 내 식물을 확인해보세요!
                </Text>
                <Grid margin="180px auto">
                    <Grid margin="8px 0">
                        <Button type="basic" width="168px" _onClick={() => { history.push("/home"); }}>
                            <Text size="small" color="#fff">지금 확인할게요</Text>
                        </Button>
                    </Grid>
                    <Grid>
                        <Button type="basic" width="168px" color="#F7F8FA" _onClick={() => { history.push("/home") }}>
                            <Text size="small" color={({ theme }) => theme.colors.gray40}>괜찮아요</Text>
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
        </React.Fragment>
    )
}


export default AddDone;