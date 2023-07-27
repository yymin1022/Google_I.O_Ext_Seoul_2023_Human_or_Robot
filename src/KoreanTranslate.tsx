import {ComponentProps, useEffect, useRef, useState} from "react";
import styled from "styled-components";

import CustomButton from "./CustomButton";

interface SentenceItem {
    org: String,
    ans: String
}

let sentenceData: Array<SentenceItem> = [
    {
        org: "캠릿브지 대학의 연결구과",
        ans: "캠브릿지 대학의 연구결과"
    },
    {
        org: "삷잫닒읿 붍칝젍핣곫 읆싞읿 맜없얿욟",
        ans: "사장님이 불친절하고 음식이 맛없어요"
    },
    {
        org: "걺샊읁 엮싧 넯읿벏볿닯 굷긅",
        ans: "검색은 역시 네이버보다 구글"
    },
    {
        org: "팑맯잛갋 사긔꾸늬예요",
        ans: "판매자가 사기꾼이에요"
    },
    {
        org: "얿 읿겗 왧 잝 잒돟핣짋",
        ans: "어 이게 왜 잘 작동하지"
    },
    {
        org: "굷긅 아의오 읶슯텑딟듧",
        ans: "구글 아이오 익스텐디드"
    },
    {
        org: "덻볿셙, 갧밡잛듩읉 윏핝 옇갊읣 밟닯",
        ans: "데보션, 개발자들을 위한 영감의 바다"
    }
];

const KoreanTranslate = (props: ComponentProps<any>) => {
    const [sentence, setSentence] = useState<SentenceItem>({org:"", ans:""});
    const [resultMessage, setResultMessage] = useState<String>("");

    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if(props.isStart) {
            let randMax = sentenceData.length;
            let randIdx = Math.trunc(Math.random() * randMax);
            setSentence(sentenceData[randIdx]);
        } else {
            setSentence({org:"", ans:""});
        }
    }, [props.isStart]);

    const btnDone = () => {
        if(props.isHuman) {
            let strInput = inputRef.current!.value;
            if(sentence!.ans === strInput.trim()) {
                props.finishGame();
            } else {
                setResultMessage("다시 입력해보세요!");
            }
        } else {
            setResultMessage("사람인지 확인이 필요합니다!!");
        }
    }

    return (
        <KoreanTranslateWrapper>
            <p>{resultMessage}</p>
            {
                sentence.org !== "" ?
                    <KoreanTranslateSentence>{sentence.org}</KoreanTranslateSentence>
                :
                    <KoreanTranslateSentence></KoreanTranslateSentence>
            }
            <CustomInput placeholder="여기에 입력해주세요" ref={inputRef} type="text" />
            <CustomButton onClick={btnDone}>완료!</CustomButton>
        </KoreanTranslateWrapper>
    )
}

const CustomInput = styled.input`
    height: 50px;
    width: 500px;

    padding: 0 10px 0 10px;

    background-color: #EEEEEE;
    font-size: 30px;
  
    border: none;
    border-radius: 15px;
    outline: none;
`;

const KoreanTranslateWrapper = styled.div`
    display: flex;
    flex-direction: column;
  
    align-items: center;
    justify-content: center;
`;

const KoreanTranslateSentence = styled.p`
    width: 100%;
    
    margin: 0 0 15px 0;
    
    font-size: 30px;
    text-align: center;
`;

export default KoreanTranslate;