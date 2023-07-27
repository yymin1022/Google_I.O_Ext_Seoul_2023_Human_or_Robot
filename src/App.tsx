import React, {useState} from 'react';
import ReCAPTCHA from "react-google-recaptcha";
import styled from "styled-components";

import StopWatch, {curTime} from "./StopWatch";
import KoreanTranslate from "./KoreanTranslate";

const App = () => {
    const [isStart, setIsStart] = useState(false);

    const onChange = () => {
        console.log(new Date(curTime * 10).toISOString().slice(14, 22));
    }

    const finishGame = () => {
        alert(new Date(curTime * 10).toISOString().slice(14, 22));
        window.location.reload();
    }

    return (
        <MainWrapper>
            <StopWatch setIsStart={setIsStart}/>
            <ReCAPTCHA
                sitekey={process.env.REACT_APP_GRECAPTCHA_KEY!}
                onChange={onChange} />
            <KoreanTranslate isStart={isStart} finishGame={finishGame} />
        </MainWrapper>
    );
}

const MainWrapper = styled.div`
  height: 100vw;
  
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default App;