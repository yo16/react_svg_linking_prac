import { useState } from "react";

export function MyElm1() {
    // ボタンの背景色
    const [fillColor, setFillColor] = useState("#CBE2B5");

    function handleOnClick() {
        console.log("Elm1 clicked!");
    }
    function hnadleMouseEnter() {
        setFillColor("#BAC1A4");
    }
    function handleMouseLeave() {
        setFillColor("#CBE2B5");
    }
    function handleMouseDown() {
        setFillColor("#A9B093");
    }
    function handleMouseUp() {
        setFillColor("#BAC1A4");
    }

    return (
        <>
            <g
                onClick={handleOnClick}
                onMouseEnter={hnadleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onMouseDown={handleMouseDown}
                onMouseUp={handleMouseUp}
                cursor="pointer"
            >
                <rect
                    x={50}
                    y={50}
                    width={150}
                    height={30}
                    rx={8}
                    ry={8}
                    fill={fillColor}
                />
                <text
                    x={78}
                    y={71}
                    fill={"#363"}
                >Elm1 button</text>
            </g>
        </>
    );
};
