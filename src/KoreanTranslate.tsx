import {ComponentProps, useEffect, useRef, useState} from "react";
import styled from "styled-components";

import CustomButton from "./CustomButton";

interface SentenceItem {
    org: String,
    ans: String
}

let sentenceData: Array<SentenceItem> = [
    {
        org: "싸찜마쒜욥",
        ans: "사지마세요"
    },
    {
        org: "까찜마쒜욜",
        ans: "가지마세요"
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
            if(sentence!.ans === strInput) {
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
    height: 32px;
    width: 500px;

    padding: 0 10px 0 10px;

    background-color: #EEEEEE;
    font-size: 15px;
  
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