import React, {useState} from 'react';
import ReCAPTCHA from "react-google-recaptcha";

const App = () => {
    return (
        <div>
            <StopWatch />
            <ReCAPTCHA
                sitekey={process.env.REACT_APP_GRECAPTCHA_KEY!}
                onChange={onChange} />
        </div>
    );
}

const onChange = (e: any) => {
    console.log(e.toString());
}

let isStart = false;
let timer: NodeJS.Timer;

const StopWatch = () => {
    const [curTimeStr, setCurTimeStr] = useState("00:00.000");

    let curTime = 0;

    const startStopwatch = () => {
        if(!isStart) {
            isStart = true;
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

            clearInterval(timer);
            setCurTimeStr("00:00.000");
        }
    }

    return (
        <>
            <p>{curTimeStr}</p>
            <button onClick={startStopwatch}>Start!</button>
            <button onClick={stopStopwatch}>Stop!</button>
        </>
    )
}

export default App;
