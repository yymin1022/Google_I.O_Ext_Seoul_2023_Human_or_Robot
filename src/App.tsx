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

            {
                isStart ?
                    <RecaptchaContainer>
                        <ReCAPTCHA
                            sitekey={process.env.REACT_APP_GRECAPTCHA_KEY!}
                            onChange={onChange} />
                    </RecaptchaContainer>
                :
                    <InfoText>준비되면 상단의 시작 버튼을 눌러주세요!</InfoText>
            }

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

const InfoText = styled.p`
    margin: 30px 0 30px 0;
  
    font-size: 40px;
    text-align: center;
`;

const RecaptchaContainer = styled.div`
    margin: 30px;
  
    display: flex;
    align-items: center;
    justify-content: center;
`;

export default App;