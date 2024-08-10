import { useEffect } from "react";
//import { motion } from "framer-motion";
import { useAnimate } from "framer-motion";

const stableColor: string = "#A28B55";
const changedColor: string = "#fa0";

interface MyElm5Pros {
    clickedCounter: number;
}
export function MyElm5({
    clickedCounter
}: MyElm5Pros) {
    const [scope, animate] = useAnimate();

    useEffect(() => {
        if (clickedCounter>0) { // 初期を除く
            if (clickedCounter % 2 === 0) {
                // 偶数のときは、消灯
                animate("rect", {fill: stableColor}, {duration: 0.5});
            } else {
                // 奇数のときは、点灯
                animate("rect", {fill: changedColor}, {delay: 2});
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
                >Elm5: {clickedCounter}</text>
            </g>
        </>
    )
}
