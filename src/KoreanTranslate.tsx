import {ComponentProps, useEffect, useRef, useState} from "react";

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
    const [sentence, setSentence] = useState<SentenceItem | undefined>(undefined);
    const [resultMessage, setResultMessage] = useState<String>("");

    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if(props.isStart) {
            let randMax = sentenceData.length;
            let randIdx = Math.trunc(Math.random() * randMax);
            setSentence(sentenceData[randIdx]);
        }

    }, [props.isStart]);

    const btnDone = () => {
        let strInput = inputRef.current!.value;
        if(sentence!.ans === strInput) {
            props.finishGame();
        } else {
            setResultMessage("다시 입력해보세요!");
        }
    }

    return (
        <>
            <p>{resultMessage}</p>
            {
                sentence !== undefined ?
                    <p>{sentence.org}</p>
                :
                    <p>READY!!</p>
            }
            <input ref={inputRef} type="text" />
            <button onClick={btnDone}>완료!</button>
        </>
    )
}

export default KoreanTranslate;