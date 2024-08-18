import { useEffect } from "react";
//import { motion } from "framer-motion";
import { useAnimate } from "framer-motion";

interface MyElm3Pros {
    isSwitchOn: boolean;
}
export function MyElm3({
    isSwitchOn
}: MyElm3Pros) {
    const [scope, animate] = useAnimate();

    useEffect(() => {
        if (isSwitchOn) {
            // 伸ばす
            animate("rect", {height: 100}, { type: "spring", stiffness: 700, damping: 10});
        } else {
            // 縮める
            animate("rect", {height: 30}, { type: "spring", stiffness: 1000, damping: 30});
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
                    fill={"#86AB89"}
                />
                <text
                    x={28}
                    y={21}
                    fill={"#000"}
                >Elm3: {isSwitchOn? "open": "close"}</text>
                <text
                    x={160}
                    y={21}
                    fill={"#000"}
                >バネで伸縮</text>
            </g>
        </>
    )
}
