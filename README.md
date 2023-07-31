## Google I/O Extended Seoul 2023 액티비티 [내 마음속에 캡챠]

빠른 시간 내에 ReCAPTCHA를 해제하고, 한국인만 읽을 수 있는 문장을 해석해 순위를 매기는 게임 액티비티입니다.

<center>
<img src="https://github.com/yymin1022/I.OExt_Seoul_2023_is_Human/assets/12806229/f3750242-7a14-4894-96dd-8d50566a64b1" width="70%" alt="Screenshot"></img>
</center>

### Tech Stacks
- React.JS
- Styled Components
- [Google ReCAPTCHA API](https://developers.google.com/recaptcha/intro)

### How to Run
1. 본 [Repository](https://github.com/yymin1022/Google_I.O_Ext_Seoul_2023_Human_or_Robot)를 Clone 합니다.
2. [Google ReCAPTCHA API]() 콘솔에서 웹앱을 등록하고, Key를 발급받습니다.
3. `.env` 파일을 생성하고, 발급받은 Key를 `REACT_APP_GRECAPTCHA_KEY` 환경변수로 지정해줍니다.
4. 프로젝트 경로로 이동해 `npm install`과 `npm start`를 수행하면 [로컬호스트 서버](http://localhost:3000)로 프로젝트가 구동됩니다.
