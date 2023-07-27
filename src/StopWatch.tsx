import React, {ComponentProps, useState} from "react";

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
        <>
            <p>{curTimeStr}</p>
            <button onClick={startStopwatch}>시작</button>
            <button onClick={stopStopwatch}>취소</button>
        </>
    )
}

export default StopWatch;