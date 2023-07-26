import {ComponentProps, useEffect} from "react";

const KoreanTranslate = (props: ComponentProps<any>) => {
    useEffect(() => {
        if(props.isStart) {
            console.log("WA");
        }

    }, [props.isStart])
    return (
        <>
            <p>Korean Translate !!</p>
        </>
    )
}

export default KoreanTranslate;