import React from 'react';
import ReCAPTCHA from "react-google-recaptcha";

import './App.css';

const App = () => {
    return (
        <div>
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
