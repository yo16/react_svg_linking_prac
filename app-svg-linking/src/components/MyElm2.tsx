import { useEffect } from "react";
//import { motion } from "framer-motion";
import { useAnimate } from "framer-motion";

const stableColor: string = "#A28B55";
const changedColor: string = "#ff0";

interface MyElm2Pros {
    isSwitchOn: boolean;
}
export function MyElm2({
    isSwitchOn
}: MyElm2Pros) {
    const [scope, animate] = useAnimate();

    useEffect(() => {
        if (isSwitchOn) {
            // 点灯
            animate("rect", {fill: changedColor}, {duration: 1});
        } else {
            // 消灯
            animate("rect", {fill: stableColor}, {duration: 1});
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
                >Elm2: {isSwitchOn? "ON": "OFF"}</text>
                <text
                    x={160}
                    y={21}
                    fill={"#000"}
                >スイッチと即時連動</text>
            </g>
        </>
    )
}
