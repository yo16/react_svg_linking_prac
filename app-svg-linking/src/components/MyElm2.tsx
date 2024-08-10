import { useEffect } from "react";
//import { motion } from "framer-motion";
import { useAnimate } from "framer-motion";

const stableColor: string = "#A28B55";
const changedColor: string = "#ff0";

interface MyElm2Pros {
    clickedCounter: number;
}
export function MyElm2({
    clickedCounter
}: MyElm2Pros) {
    const [scope, animate] = useAnimate();

    useEffect(() => {
        if (clickedCounter>0) { // 初期を除く
            if (clickedCounter % 2 === 0) {
                // 偶数のときは、消灯
                animate("rect", {fill: stableColor}, {duration: 1});
            } else {
                // 奇数のときは、点灯
                animate("rect", {fill: changedColor}, {duration: 1});
            }
        }
    }, [clickedCounter]);

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
                >counter:{clickedCounter}</text>
            </g>
        </>
    )
}
