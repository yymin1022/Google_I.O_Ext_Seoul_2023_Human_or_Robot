import React, {ComponentProps, useState} from "react";
import styled from "styled-components";

export let curTime = 0;
let isStart = false;
let timer: NodeJS.Timer;

const StopWatch = (props: ComponentProps<any>) => {
    const [curTimeStr, setCurTimeStr] = useState("00:00.000");

    const startStopwatch = () => {
        if(!isStart) {
            isStart = true;
            props.setIsStart(true);
            timer = setInterval(() => {
                if(isStart) {
                    curTime++;
                    setCurTimeStr(new Date(curTime * 10).toISOString().slice(14, 22));
                }
            }, 10);
        }
    }

    const stopStopwatch = () => {
        if(isStart) {
            console.log(curTimeStr);

            curTime = 0;
            isStart = false;
            props.setIsStart(false);

            clearInterval(timer);
            setCurTimeStr("00:00.000");
        }
    }

    return (
        <StopWatchWrapper>
            <StopWatchTimeView>{curTimeStr}</StopWatchTimeView>

            <StopWatchButtonContainer>
                <button onClick={startStopwatch}>시작</button>
                <button onClick={stopStopwatch}>취소</button>
            </StopWatchButtonContainer>

        </StopWatchWrapper>
    )
}

const StopWatchWrapper = styled.div`
    display: flex;
    flex-direction: column;

    align-items: center;
    justify-content: center;
`;

const StopWatchButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
  
    margin: 30px;
    
    justify-content: center;
`;

const StopWatchTimeView = styled.p`
    width: 100%;
    
    margin: 60px 0 30px 0;
  
    font-size: 40px;
    text-align: center;
`;

export default StopWatch;