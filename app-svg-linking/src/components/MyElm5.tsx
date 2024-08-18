import { useState, useEffect } from "react";
import { useAnimate } from "framer-motion";

const stableColor: string = "#A28B55";
const changedColor: string = "#fa0";

interface MyElm5Pros {
    isSwitchOn: boolean;
}
export function MyElm5({
    isSwitchOn
}: MyElm5Pros) {
    const [scope, animate] = useAnimate();
    const [textOnOff, setTextOnOff] = useState<string>("OFF");

    useEffect(() => {
        if (isSwitchOn) {
            // 奇数のときは、点灯
            animate("rect", {fill: changedColor}, {delay: 2.0});
            setTimeout(()=>{
                setTextOnOff("ON");
            }, 2.0*1000);
        } else {
            // 偶数のときは、消灯
            animate("rect", {fill: stableColor}, {duration: 0.5});
            setTextOnOff("OFF");
        }
    }, [isSwitchOn]);

    return (
        <>
            <g
                ref={scope}
            >
                <rect
                    x={0}
                    y={0}
                    width={150}
                    height={30}
                    rx={8}
                    ry={8}
                    fill={stableColor}
                />
                <text
                    x={28}
                    y={21}
                    fill={"#000"}
                >Elm5: {textOnOff}</text>
                <text
                    x={160}
                    y={21}
                    fill={"#000"}
                >遅延して連動</text>
            </g>
        </>
    )
}
