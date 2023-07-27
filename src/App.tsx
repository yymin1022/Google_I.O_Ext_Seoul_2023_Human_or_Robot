import React, {useState} from 'react';
import ReCAPTCHA from "react-google-recaptcha";
import styled from "styled-components";

import StopWatch, {curTime} from "./StopWatch";
import KoreanTranslate from "./KoreanTranslate";

const App = () => {
    const [isHuman, setIsHuman] = useState(false);
    const [isStart, setIsStart] = useState(false);

    const onChange = () => {
        setIsHuman(true);
        console.log(new Date(curTime * 10).toISOString().slice(14, 22));
    }

    const finishGame = () => {
        if(isHuman) {
            alert(new Date(curTime * 10).toISOString().slice(14, 22));
            window.location.reload();
        }
    }

    return (
        <MainWrapper>
            <StopWatch setIsStart={setIsStart}/>

            <RecaptchaContainer>
                <ReCAPTCHA
                    sitekey={process.env.REACT_APP_GRECAPTCHA_KEY!}
                    onChange={onChange} />
            </RecaptchaContainer>

            <KoreanTranslate isHuman={isHuman} isStart={isStart} finishGame={finishGame} />
        </MainWrapper>
    );
}

const MainWrapper = styled.div`
  height: 100vw;
  
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const RecaptchaContainer = styled.div`
    margin: 30px;
  
    display: flex;
    align-items: center;
    justify-content: center;
`;

export default App;