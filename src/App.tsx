import React from 'react';
import ReCAPTCHA from "react-google-recaptcha";

import StopWatch from "./StopWatch";

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

export default App;