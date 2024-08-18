import { useEffect } from "react";
import { motion, useAnimate } from "framer-motion";

interface MyElm4Pros {
    isSwitchOn: boolean;
}
export function MyElm4({
    isSwitchOn
}: MyElm4Pros) {
    const [scope, animate] = useAnimate();

    useEffect(() => {
        if (isSwitchOn) {
            // 奇数の時、書く
            animate("path",
                { pathLength: 1 },
                { duration: 2.0 }
            );
        } else {
            // 偶数の時、消す
            animate("path",
                { pathLength: 0 }, 
                { duration: 0.5 }
            );
        }
    }, [isSwitchOn]);

    return (
        <>
            <g
                ref={scope}
            >
                <motion.path
                    d={
                        "M 20 0 " +
                        "C 20 30, 10 130, -10 110 " +
                        "C -20 100, 0 70, 20 90 " +
                        "C 40 110, -40 205, -10 235 " +
                        "C 0 245, 30 235, 50 235"
                    }
                    stroke="#fa6"
                    strokeWidth={2}
                    fill="none"
                    initial={{ pathLength: 0 }}
                    id="cablePath"
                />
                <text
                    x={-20}
                    y={50}
                    fill={"#000"}
                >
                    <textPath
                        href="#cablePath"
                        startOffset="0.6"
                        textLength="100"
                    >
                        伸びる線
                    </textPath>
                </text>
            </g>
        </>
    )
}
