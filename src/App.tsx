import React from 'react';
import ReCAPTCHA from "react-google-recaptcha";

import StopWatch, {curTime} from "./StopWatch";

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

const onChange = () => {
    console.log(new Date(curTime * 10).toISOString().slice(14, 22));
}

export default App;