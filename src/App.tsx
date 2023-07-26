import React, {useState} from 'react';
import ReCAPTCHA from "react-google-recaptcha";

import StopWatch, {curTime} from "./StopWatch";
import KoreanTranslate from "./KoreanTranslate";

const App = () => {
    const [isStart, setIsStart] = useState(false);

    return (
        <div>
            <StopWatch setIsStart={setIsStart}/>
            <ReCAPTCHA
                sitekey={process.env.REACT_APP_GRECAPTCHA_KEY!}
                onChange={onChange} />
            <KoreanTranslate isStart={isStart} />
        </div>
    );
}

const onChange = () => {
    console.log(new Date(curTime * 10).toISOString().slice(14, 22));
}

export default App;