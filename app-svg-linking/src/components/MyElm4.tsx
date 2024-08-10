import { useEffect } from "react";
import { motion, useAnimate } from "framer-motion";
//import { motion } from "framer-motion";

//const draw = {
//    hidden: { pathLength: 0, opacity: 0 },
//    visible: (i: number) => {
//      const delay: number = 1 + i * 0.5;
//      return {
//        pathLength: 1,
//        opacity: 1,
//        transition: {
//          pathLength: { delay, type: "spring", duration: 1.5, bounce: 0 },
//          opacity: { delay, duration: 0.01 }
//        }
//      };
//    }
//  };

interface MyElm4Pros {
    clickedCounter: number;
}
export function MyElm4({
    clickedCounter
}: MyElm4Pros) {
    const [scope, animate] = useAnimate();

    useEffect(() => {
        if (clickedCounter>0) {
            if (clickedCounter%2 == 0) {
                // 偶数の時、消す
                animate("path",
                    { pathLength: 0 }, 
                    { duration: 0.5 }
                )
            } else {
                // 奇数の時、書く
                animate("path",
                    { pathLength: 1 },
                    { duration: 2 }
                );
            }
        }
    }, [clickedCounter]);

    return (
        <>
            <g
                ref={scope}
            >
                <motion.path
                    d={
                        "M 20 0 " +
                        "C 20 40, -10 40, -10 20 " +
                        "C -10 0, 20 0, 20 50 " +
                        "C 20 170, -30 235, 50 235"
                    }
                    stroke="#fa6"
                    strokeWidth={2}
                    fill="none"
                    initial={{ pathLength: 0 }}
                />
            </g>
        </>
    )
}
