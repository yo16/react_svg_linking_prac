import { useEffect } from "react";
//import { motion } from "framer-motion";
import { useAnimate } from "framer-motion";

interface MyElm3Pros {
    clickedCounter: number;
}
export function MyElm3({
    clickedCounter
}: MyElm3Pros) {
    const [scope, animate] = useAnimate();

    useEffect(() => {
        if (clickedCounter>0) { // 初期を除く
            if (clickedCounter % 2 === 0) {
                // 偶数のときは、縮める
                animate("rect", {height: 30}, { type: "spring", stiffness: 1000, damping: 40});
            } else {
                // 奇数のときは、伸ばす
                animate("rect", {height: 100}, { type: "spring", stiffness: 500, damping: 10});
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
                    fill={"#86AB89"}
                />
                <text
                    x={28}
                    y={21}
                    fill={"#000"}
                >Elm3: {(clickedCounter%2===0)? "close": "open"}</text>
            </g>
        </>
    )
}
